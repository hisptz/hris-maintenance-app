import { Component, OnInit, OnChanges, Output, ViewChild } from '@angular/core';
import * as _ from 'lodash';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Menu, MenuOption } from '../../models/menu.models';
import { MenuConfig } from '../../config/menu.config';
import { URLParams } from 'src/app/core/models/url-params.model';
import { QueryParams } from 'src/app/core/models/query-params.model';
import { MaintenanceService } from 'src/app/core/services/maintenance.service';
import { RouterNavigationEndState } from 'src/app/core/models/router-navigation-end.model';
import { APIEndpoints } from '../../lookups/api-endpoint.lookup';
import { APIResult } from 'src/app/core/models/api-result.model';
import { MatSnackBar } from '@angular/material';
import { ListViewComponent } from '../list-view/list-view.component';

/**
 *
 */
@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
/**
 *
 */
export class MainContentComponent implements OnInit, OnChanges {
  @ViewChild(ListViewComponent, { static: false })
  listViewComponent: ListViewComponent;
  routerNavigation: string;
  menuConfigItems: Array<Menu>;
  isModuleServicesOpened: boolean;
  isTableListOpened: boolean;
  isEntryformOpened: boolean;
  entityDetails: any;
  APIDataResult: APIResult;
  APIParams: string;
  durationInSeconds = 5;
  entityData: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    private maintenanceService: MaintenanceService
  ) {}

  ngOnInit() {
    this.entityData = {};
    this.getActivatedRouteInfo();
    this.isModuleServicesOpened = true;
    this.isTableListOpened = false;
    this.isEntryformOpened = false;
    const queryParams: QueryParams = this.getQueryParams();
    this.isModuleServicesOpened = _.has(queryParams, 'open')
      ? queryParams.open
      : false;
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        const routerNavigationState: RouterNavigationEndState = event;
        this.APIParams = this.getApiParameter(routerNavigationState);
        this.maintenanceService
          .getAll(this.APIParams)
          .subscribe((apiResult: APIResult) => {
            this.APIDataResult = apiResult;
          });
      }
    });
  }

  ngOnChanges() {}

  getApiParameter(routerNavigationState: RouterNavigationEndState) {
    const UrlPros = routerNavigationState.urlAfterRedirects.split('/');
    const APIParams = _.last(UrlPros);
    return _.includes(APIEndpoints, APIParams) ? APIParams : '';
  }

  getMenuConfiguration(urlParams: Array<URLParams>): void {
    const menuConfigs: Array<Menu> = MenuConfig;
    if (_.head(urlParams).path === 'hris-web-all') {
      this.menuConfigItems = menuConfigs;
    } else {
      this.menuConfigItems = _.filter(menuConfigs, (menuConfig: Menu) => {
        return menuConfig.route === _.head(urlParams).path;
      });
    }
  }

  /**
   * Get Activated Route Configurations
   */
  getActivatedRouteInfo(): void {
    this.activatedRoute.url.subscribe((activatedRoute: Array<URLParams>) => {
      this.getMenuConfiguration(activatedRoute);
    });
  }

  getQueryParams(): QueryParams | any {
    let qParams: QueryParams;
    this.activatedRoute.queryParams.subscribe((queryParams: QueryParams) => {
      qParams = queryParams;
    });
    return qParams ? qParams : {};
  }

  openServiceContentList(menuOption: MenuOption, menuConfigItem: Array<Menu>) {
    this.isTableListOpened = true;
    this.isModuleServicesOpened = false;
    this.isEntryformOpened = false;
  }

  onClickLeftMenuList(menu: MenuOption, menuConfigItems: Array<Menu>): void {
    if (menu) {
      this.isTableListOpened = true;
      this.isModuleServicesOpened = false;
      this.isEntryformOpened = false;
    }
  }

  onCreate(e) {
    if (e) {
      this.entityData = { ...this.entityData, ...e };
    }
  }

  onSave(e: { onCreate: boolean }) {
    if (e.onCreate) {
      this.maintenanceService
        .createOne(this.entityData, this.APIParams)
        .subscribe((response: any) => {
          this.isModuleServicesOpened = false;
          this.isEntryformOpened = false;
          this.isTableListOpened = true;

          this.maintenanceService
            .getAll(this.APIParams)
            .subscribe(apiResults => {
              this.APIDataResult = apiResults;
            });

          this.openSnackBar({
            message: `${this.APIParams} ${response.name} has been successfully created.`
          });
        });
    }
  }

  onClose() {
    this.entityDetails = { ...this.entityDetails, status: false };
  }

  onViewMoreDetails(state: any) {
    if (state) {
      const siteURL = `${window.location.origin}/api/${this.APIParams}/${state.data.id}`;
      this.entityDetails = { ...state, siteURL };
    }
  }

  openSnackBar(response: any) {
    // ToDo:Reviw this implementation and improve it
    // this.snackBar.openFromComponent(MainContentComponent, {
    //   duration: this.durationInSeconds * 1000,
    // });
    this.snackBar.open(response.message);
    setTimeout(() => {
      this.snackBar.dismiss();
    }, 3000);
  }
}

import { Component, OnInit, OnChanges } from '@angular/core';
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
  routerNavigation: string;
  menuConfigItems: Array<Menu>;
  isModuleServicesOpened: boolean;
  isTableListOpened: boolean;
  APIDataResult: APIResult;
  APIResponse: any;
  APIParams: string;
  durationInSeconds = 5;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    private maintenanceService: MaintenanceService
  ) {}

  ngOnInit() {
    this.getActivatedRouteInfo();
    this.isModuleServicesOpened = true;
    this.isTableListOpened = false;
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
  }

  onClickLeftMenuList(menu: MenuOption, menuConfigItems: Array<Menu>): void {
    console.log('Item From Left MENU clicked');
  }

  onDeletion(item: any): any {
    if (item) {
      this.maintenanceService.deleteOne(item).subscribe((response: any) => {
        if (response) {
          this.APIResponse = response;
          this.openSnackBar(response);
        }
      });
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

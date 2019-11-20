import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { ActivatedRoute } from '@angular/router';
import { Menu } from '../../models/menu.models';
import { MenuConfig } from '../../config/menu.config';
import { URLParams } from 'src/app/core/models/url-params.model';
import { QueryParams } from 'src/app/core/models/query-params.model';

/**
 *
 */
@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
/**
 *
 */
export class MainContentComponent implements OnInit {
  routerNavigation: string;
  menuConfigItems: Array<Menu>;
  isModuleServicesOpened: boolean;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.getActivatedRouteInfo();
    this.isModuleServicesOpened = true;
    const queryParams: QueryParams = this.getQueryParams();
    this.isModuleServicesOpened = _.has(queryParams, 'open')
      ? queryParams.open
      : false;
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

  openServiceContentList() {
    console.log('Menu Opened');
  }
}

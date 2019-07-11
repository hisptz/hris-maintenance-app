import { Component, OnInit, Input } from '@angular/core';
import { MenuOptions } from 'src/app/models/menu-configuration';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MaintenanceService } from 'src/app/pages/services/maintenance.service';

import * as _ from 'lodash';
import { URLParams } from 'src/app/models/url-params.model';
import { QueryParams } from 'src/app/models/query-params.model';
import { MenuSetting } from 'src/app/models/menu-setting.model';

@Component({
  selector: 'app-main-content-container',
  templateUrl: './main-content-container.component.html',
  styleUrls: ['./main-content-container.component.scss'],
})
export class MainContentContainerComponent implements OnInit {
  @Input() routerNavigation: string;
  serviceSettings: Array<MenuSetting>;
  homeSettings: Array<MenuSetting>;

  rippleEffectsColor: string;

  menuOptions: Array<MenuOptions>;
  errorMessage: ErrorMessage;
  isListOpened: boolean;
  isServiceOpened: boolean;
  rippleColor: string;

  constructor(
    private maintenanceService: MaintenanceService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.rippleEffectsColor = '#ccc';
    this.isListOpened = false;
    this.isServiceOpened = true;
    this.rippleColor = '#eee';
    this.routerNavigation = _.last(_.split(this.router.url, '/'));
    this.activatedRoute.url.subscribe((url: Array<URLParams>) => {
      this.getFields(url);
    });

    this.activatedRoute.queryParams.subscribe((queryParams: QueryParams) => {
      this.isServiceOpened = queryParams.open;
    });
  }

  openMenuItemsList = (options: Array<MenuOptions>, another) => {
    this.menuOptions = options;
    this.isListOpened = true;
    this.isServiceOpened = false;
    console.log('MENU ITEM::: ' + JSON.stringify(options));
  }

  getFields = (urlParams: Array<URLParams>) => {
    this.maintenanceService.getAllTheFields().subscribe(
      (fields: Array<MenuSetting>) => {
        if (urlParams[0].path === 'all') {
          fields ? (this.homeSettings = fields) : this.homeSettings = [];
        } else {
          const fieldsData = _.filter(fields, (field: MenuSetting) => {
            return field.route === urlParams[0].path;
          });
          fieldsData ? (this.serviceSettings = fieldsData) : this.serviceSettings = [];
        }
      },
      (error: ErrorMessage) => {
        this.errorMessage = error;
        console.error();
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { MenuOptions, ItemList } from 'src/app/models/menu-configuration';
import { Fields } from 'src/app/models/fields.model';
import { MaintenanceService } from 'src/app/pages/services/maintenance.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

import * as _ from 'lodash';

@Component({
  selector: 'app-main-content-area',
  templateUrl: './main-content-area.component.html',
  styleUrls: ['./main-content-area.component.scss'],
})
export class MainContentAreaComponent implements OnInit {
  menuOptionsData: Array<MenuOptions>;
  errorMessage: ErrorMessage;
  routerNavigation: string;
  fieldsSettings: Array<Fields>;
  constructor(
    private maintenanceService: MaintenanceService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.routerNavigation = _.last(_.split(this.router.url, '/'));
    this.activatedRoute.params.subscribe((routeParam: Params) => {
      this.getFieldsItemList(routeParam);
      this.getFields(routeParam);
    });
  }

  getFields = (param: Params) => {
    this.maintenanceService.getAllTheFields().subscribe(
      (fields: Array<Fields>) => {
        const fieldsData = _.filter(fields, (field: Fields) => {
          return field.route === param.name;
        });
        fieldsData ? (this.fieldsSettings = fieldsData) : [];
      },
      (error: ErrorMessage) => {
        this.errorMessage = error;
        console.error();
      }
    );
  }

  getFieldsItemList = (routerNav: Params) => {
    this.maintenanceService.getAllTheFields().subscribe(
      (fields: Array<Fields>) => {
        if (fields) {
          _.forEach(fields, (field: Fields) => {
            if (field) {
              const menuOption: Array<MenuOptions> = _.filter(
                field.menuOptions,
                (option: MenuOptions) => {
                  return (
                    _.has(option, 'items') && option.route === routerNav.name
                    // _.has(option, 'items') &&
                    // option.route === this.routerNavigation
                  );
                }
              );
              if (menuOption.length !== 0) {
                this.menuOptionsData = menuOption;
              }
            }
          });
        }
      },
      (error: ErrorMessage) => {
        this.errorMessage = error;
        console.error();
      }
    );
  }
}

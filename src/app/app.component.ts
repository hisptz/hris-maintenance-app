import { Component } from '@angular/core';
import { MenuConfiguration, MenuOptions } from './models/menu-configuration';
import { MaintenanceService } from './pages/services/maintenance.service';
import { Router } from '@angular/router';

import * as _ from 'lodash';
import { MenuSetting } from './models/menu-setting.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  menuSettings: Array<MenuSetting>;
  rippleEffectsColor: string;
  menuOptions: Array<MenuOptions>;
  errorMessage: ErrorMessage;
  isListOpened = false;
  isServiceOpened = false;
  routerNavigation: string;

  constructor(
    private maintenanceService: MaintenanceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.routerNavigation = _.last(_.split(this.router.url, '/'));
    this.getFields();
  }

  getFields = () => {
    this.maintenanceService.getAllTheFields().subscribe(
      (fields: Array<MenuSetting>) => {
        this.menuSettings = fields;
      },
      (error: ErrorMessage) => {
        this.errorMessage = error;
        console.error();
      }
    );
  }
}

import { Component } from '@angular/core';
import { MenuConfiguration } from './shared/models/menu-configuration';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hris-maintenance-app';

  menuSettings: Array<MenuConfiguration>;

  ngOnInit() {
    this.menuSettings = [
      {
        name: 'All',
        route: 'all',
        menuOptions: [],
      },
      {
        name: 'Fields',
        route: 'fields',
        menuOptions: [
          {
            name: 'Fields',
            route: 'fieldItems',
          },
          {
            name: 'Fields Group',
            route: 'fieldGroups',
          },
          {
            name: 'Fields Options',
            route: 'fieldOptions',
          },
          {
            name: 'Fields Group Set',
            route: 'fieldGroupset',
          },
          {
            name: 'Fields Options Group Set',
            route: 'fieldOptionsGroupset',
          },
        ],
      },
      {
        name: 'Reports',
        route: 'reports',
        menuOptions: [],
      },
      {
        name: 'Forms',
        route: 'forms',
        menuOptions: [],
      },
      {
        name: 'Organization Unit',
        route: 'organizationUnits',
        menuOptions: [],
      },
      {
        name: 'Others',
        route: 'others',
        menuOptions: [],
      },
    ];
  }
}

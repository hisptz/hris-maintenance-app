import { Component } from '@angular/core';
import { MenuConfiguration } from './shared/models/menu-configuration';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hris-maintenance-app';
  rippleEffectsColor: string;

  menuSettings: Array<MenuConfiguration>;

  ngOnInit() {
    this.rippleEffectsColor = '#ccc';
    this.menuSettings = [
      {
        name: 'All',
        route: 'all',
        instruction:
          'Create, update, view and delete data sets and custom forms. A data set is a collection of data elements for which data is entered.',
        menuOptions: [],
      },
      {
        name: 'Fields',
        route: 'fields',
        instruction:
          'Create, update, view and delete data sets and custom forms. A data set is a collection of data elements for which data is entered.',
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
        instruction:
          'Create, update, view and delete data sets and custom forms. A data set is a collection of data elements for which data is entered.',
        menuOptions: [],
      },
      {
        name: 'Forms',
        route: 'forms',
        instruction:
          'Create, update, view and delete data sets and custom forms. A data set is a collection of data elements for which data is entered.',
        menuOptions: [],
      },
      {
        name: 'Organization Unit',
        route: 'organizationUnits',
        instruction:
          'Create, update, view and delete data sets and custom forms. A data set is a collection of data elements for which data is entered.',
        menuOptions: [],
      },
      {
        name: 'Others',
        route: 'others',
        instruction:
          'Create, update, view and delete data sets and custom forms. A data set is a collection of data elements for which data is entered.',
        menuOptions: [],
      },
    ];
  }
}

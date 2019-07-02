import { Component, OnInit } from '@angular/core';
import { MenuConfiguration } from '../../models/menu-configuration';

@Component({
  selector: 'app-menu-aside',
  templateUrl: './menu-aside.component.html',
  styleUrls: ['./menu-aside.component.scss'],
})
export class MenuAsideComponent implements OnInit {
  rippleEffectsColor: string;

  menuSettings: Array<MenuConfiguration>;

  constructor() {}

  ngOnInit() {
    this.rippleEffectsColor = '#ccc';
    this.menuSettings = [
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

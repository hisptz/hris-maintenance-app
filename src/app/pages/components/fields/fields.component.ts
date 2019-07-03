import { Component, OnInit } from '@angular/core';
import { MenuConfiguration } from 'src/app/shared/models/menu-configuration';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss'],
})
export class FieldsComponent implements OnInit {
  menuSettings: Array<MenuConfiguration>;
  rippleEffectsColor: string;

  constructor() {}

  ngOnInit() {
    this.rippleEffectsColor = '#ccc';
    this.menuSettings = [
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


    // this.menuSettings = [
    //   {
    //     name: 'All',
    //     route: 'all',
    //     instruction:
    //       'Create, update, view and delete data sets and custom forms. A data set is a collection of data elements for which data is entered.',
    //     menuOptions: [],
    //   },
    //   {
    //     name: 'Fields',
    //     route: 'fields',
    //     instruction:
    //       'Create, update, view and delete data sets and custom forms. A data set is a collection of data elements for which data is entered.',
    //     menuOptions: [
    //       {
    //         name: 'Fields',
    //         route: 'fieldItems',
    //         items: [
    //           {
    //             name: 'Field Placeholder',
    //             position: 'Field Position',
    //             access: 'Public View/Edit',
    //             lastUpdated: 'July 3, 2019',
    //           }
    //         ]
    //       },
    //       {
    //         name: 'Fields Group',
    //         route: 'fieldGroups',
    //         items: [
    //           {
    //             name: 'Field Group Placeholder',
    //             position: 'Field Position',
    //             access: 'Public View/Edit',
    //             lastUpdated: 'July 3, 2019',
    //           }
    //         ]
    //       },
    //       {
    //         name: 'Fields Options',
    //         route: 'fieldOptions',
    //         items: [
    //           {
    //             name: 'Field Options Placeholder',
    //             position: 'Field Position',
    //             access: 'Public View/Edit',
    //             lastUpdated: 'July 3, 2019',
    //           }
    //         ]
    //       },
    //       {
    //         name: 'Fields Group Set',
    //         route: 'fieldGroupset',
    //         items: [
    //           {
    //             name: 'Field Group Set Placeholder',
    //             position: 'Field Position',
    //             access: 'Public View/Edit',
    //             lastUpdated: 'July 3, 2019',
    //           }
    //         ]
    //       },
    //       {
    //         name: 'Fields Options Group Set',
    //         route: 'fieldOptionsGroupset',
    //         items: [
    //           {
    //             name: 'Field Options Group Set Placeholder',
    //             position: 'Field Position',
    //             access: 'Public View/Edit',
    //             lastUpdated: 'July 3, 2019',
    //           }
    //         ]
    //       },
    //     ],
    //   },
    //   {
    //     name: 'Reports',
    //     route: 'reports',
    //     instruction:
    //       'Create, update, view and delete data sets and custom forms. A data set is a collection of data elements for which data is entered.',
    //     menuOptions: [],
    //   },
    //   {
    //     name: 'Forms',
    //     route: 'forms',
    //     instruction:
    //       'Create, update, view and delete data sets and custom forms. A data set is a collection of data elements for which data is entered.',
    //     menuOptions: [],
    //   },
    //   {
    //     name: 'Organization Unit',
    //     route: 'organizationUnits',
    //     instruction:
    //       'Create, update, view and delete data sets and custom forms. A data set is a collection of data elements for which data is entered.',
    //     menuOptions: [],
    //   },
    //   {
    //     name: 'Others',
    //     route: 'others',
    //     instruction:
    //       'Create, update, view and delete data sets and custom forms. A data set is a collection of data elements for which data is entered.',
    //     menuOptions: [],
    //   },
    // ];
  }
}

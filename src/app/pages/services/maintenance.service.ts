import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MaintenanceService {
  baseURL = 'http://localhost:3000';
  dataURL = 'services';
  dbschema = {
    services: [
      {
        name: 'All',
        route: 'hris-web-all',
        instruction:
          'Create, update, view and delete data sets and custom forms. A data set is a collection of data elements for which data is entered.',
        menuOptions: [],
      },
      {
        name: 'Fields',
        route: 'hris-web-fields',
        instruction:
          'Create, update, view and delete data sets and custom forms. A data set is a collection of data elements for which data is entered.',
        menuOptions: [
          {
            name: 'Fields',
            route: 'fieldsItems',
            items: [
              {
                position: '1',
                name: 'Field Name Placeholder',
                access: 'Public View/Edit',
                lastUpdated: 'July 3, 2019',
              },
              {
                position: '2',
                name: 'Field Name Placeholder',
                access: 'Public View/Edit',
                lastUpdated: 'July 3, 2019',
              },
              {
                position: '1',
                name: 'Field Name Placeholder',
                access: 'Public View/Edit',
                lastUpdated: 'July 3, 2019',
              },
              {
                position: '2',
                name: 'Field Name Placeholder',
                access: 'Public View/Edit',
                lastUpdated: 'July 3, 2019',
              },
              {
                position: '1',
                name: 'Field Name Placeholder',
                access: 'Public View/Edit',
                lastUpdated: 'July 3, 2019',
              },
              {
                position: '2',
                name: 'Field Name Placeholder',
                access: 'Public View/Edit',
                lastUpdated: 'July 3, 2019',
              },
              {
                position: '1',
                name: 'Field Name Placeholder',
                access: 'Public View/Edit',
                lastUpdated: 'July 3, 2019',
              },
              {
                position: '2',
                name: 'Field Name Placeholder',
                access: 'Public View/Edit',
                lastUpdated: 'July 3, 2019',
              },
              {
                position: '1',
                name: 'Field Name Placeholder',
                access: 'Public View/Edit',
                lastUpdated: 'July 3, 2019',
              },
              {
                position: '2',
                name: 'Field Name Placeholder',
                access: 'Public View/Edit',
                lastUpdated: 'July 3, 2019',
              },
              {
                position: '1',
                name: 'Field Name Placeholder',
                access: 'Public View/Edit',
                lastUpdated: 'July 3, 2019',
              },
              {
                position: '2',
                name: 'Field Name Placeholder',
                access: 'Public View/Edit',
                lastUpdated: 'July 3, 2019',
              },
            ],
          },
          {
            name: 'Fields Group',
            route: 'fieldsGroups',
            items: [
              {
                position: '1',
                name: 'Field Group Name Placeholder',
                access: 'Public View/Edit',
                lastUpdated: 'July 3, 2019',
              },
              {
                position: '2',
                name: 'Field Group Name Placeholder',
                access: 'Public View/Edit',
                lastUpdated: 'July 3, 2019',
              },
            ],
          },
          {
            name: 'Fields Options',
            route: 'fieldsOptions',
            items: [
              {
                position: '1',
                name: 'Field Group Option Name Placeholder',
                access: 'Public View/Edit',
                lastUpdated: 'July 3, 2019',
              },
              {
                position: '2',
                name: 'Field Group Option Name Placeholder',
                access: 'Public View/Edit',
                lastUpdated: 'July 3, 2019',
              },
            ],
          },
          {
            name: 'Fields Group Set',
            route: 'fieldsGroupset',
            items: [
              {
                position: '1',
                name: 'Field Group Set Name Placeholder',
                access: 'Public View/Edit',
                lastUpdated: 'July 3, 2019',
              },
              {
                position: '2',
                name: 'Field Group Set Name Placeholder',
                access: 'Public View/Edit',
                lastUpdated: 'July 3, 2019',
              },
            ],
          },
          {
            name: 'Fields Options Group Set',
            route: 'fieldsOptionsGroupset',
            items: [
              {
                position: '1',
                name: 'Fields Options Group Set Name Placeholder',
                access: 'Public View/Edit',
                lastUpdated: 'July 3, 2019',
              },
              {
                position: '2',
                name: 'Fields Options Group Set Name Name Placeholder',
                access: 'Public View/Edit',
                lastUpdated: 'July 3, 2019',
              },
            ],
          },
        ],
      },
      {
        name: 'Reports',
        route: 'hris-web-reports',
        instruction:
          'Create, update, view and delete data sets and custom forms. A data set is a collection of data elements for which data is entered.',
        menuOptions: [
          {
            name: 'Standard Reports',
            route: 'standardReports',
            items: [
              {
                position: '1',
                name: 'Standard Report Name Placeholder',
                access: 'Public View/Edit',
                lastUpdated: 'July 3, 2019',
              },
              {
                position: '2',
                name: 'Standard Report Name Placeholder',
                access: 'Public View/Edit',
                lastUpdated: 'July 3, 2019',
              },
            ],
          },
          {
            name: 'SQL View Reports',
            route: 'sqlViewReports',
            items: [
              {
                position: '1',
                name: 'SQL View Report Name Placeholder',
                access: 'Public View/Edit',
                lastUpdated: 'July 3, 2019',
              },
              {
                position: '2',
                name: 'SQL View Report Name Placeholder',
                access: 'Public View/Edit',
                lastUpdated: 'July 3, 2019',
              },
            ],
          },
        ],
      },
      {
        name: 'Forms',
        route: 'hris-web-forms',
        instruction:
          'Create, update, view and delete data sets and custom forms. A data set is a collection of data elements for which data is entered.',
        menuOptions: [
          {
            name: 'Forms',
            route: 'formsMenu',
            items: [
              {
                position: '1',
                name: 'Forms Name Placeholder',
                access: 'Public View/Edit',
                lastUpdated: 'July 3, 2019',
              },
              {
                position: '2',
                name: 'Forms Name Placeholder',
                access: 'Public View/Edit',
                lastUpdated: 'July 3, 2019',
              },
            ],
          },
        ],
      },
      {
        name: 'Organization Unit',
        route: 'hris-web-organizationUnits',
        instruction:
          'Create, update, view and delete data sets and custom forms. A data set is a collection of data elements for which data is entered.',
        menuOptions: [
          {
            name: 'Organization Units',
            route: 'orgunits',
            items: [
              {
                position: '1',
                name: 'Organization Units Name Placeholder',
                access: 'Public View/Edit',
                lastUpdated: 'July 3, 2019',
              },
              {
                position: '2',
                name: 'Organization Units Name Placeholder',
                access: 'Public View/Edit',
                lastUpdated: 'July 3, 2019',
              },
            ],
          },
          {
            name: 'Organization Unit Groups',
            route: 'orgunitsGroup',
            items: [
              {
                position: '1',
                name: 'Organization Unit Groups Name Placeholder',
                access: 'Public View/Edit',
                lastUpdated: 'July 3, 2019',
              },
              {
                position: '2',
                name: 'Organization Unit Groups Name Placeholder',
                access: 'Public View/Edit',
                lastUpdated: 'July 3, 2019',
              },
            ],
          },
          {
            name: 'Organization Unit Groupsets',
            route: 'orgunitsGroupset',
            items: [
              {
                position: '1',
                name: 'Organization Unit Groupsets Name Placeholder',
                access: 'Public View/Edit',
                lastUpdated: 'July 3, 2019',
              },
              {
                position: '2',
                name: 'Organization Unit Groupsets Name Placeholder',
                access: 'Public View/Edit',
                lastUpdated: 'July 3, 2019',
              },
            ],
          },
          {
            name: 'Hierarchy Operations',
            route: 'hierarchyOperations',
            items: [
              {
                position: '1',
                name: 'Hierarchy Operations Name Placeholder',
                access: 'Public View/Edit',
                lastUpdated: 'July 3, 2019',
              },
              {
                position: '2',
                name: 'Hierarchy Operations Name Placeholder',
                access: 'Public View/Edit',
                lastUpdated: 'July 3, 2019',
              },
            ],
          },
          {
            name: 'Organization Units Levels',
            route: 'orgunitsLevel',
            items: [
              {
                position: '1',
                name: 'Organization Units Levels Name Placeholder',
                access: 'Public View/Edit',
                lastUpdated: 'July 3, 2019',
              },
              {
                position: '2',
                name: 'Organization Units Levels Name Placeholder',
                access: 'Public View/Edit',
                lastUpdated: 'July 3, 2019',
              },
            ],
          },
        ],
      },
      {
        name: 'Others',
        route: 'hris-web-others',
        instruction:
          'Create, update, view and delete data sets and custom forms. A data set is a collection of data elements for which data is entered.',
        menuOptions: [
          {
            name: 'Others',
            route: 'othersMenu',
            items: [
              {
                position: '1',
                name: 'Others Name Placeholder',
                access: 'Public View/Edit',
                lastUpdated: 'July 3, 2019',
              },
              {
                position: '2',
                name: 'Others Name Placeholder',
                access: 'Public View/Edit',
                lastUpdated: 'July 3, 2019',
              },
            ],
          },
        ],
      },
    ],
  };
  constructor(private httpClient: HttpClient) {}

  getAllTheFields(): Observable<{}> {
    // return this.httpClient.get(this.baseURL + '/' + this.dataURL);
    // tslint:disable-next-line: no-string-literal
    return of(this.dbschema['services']);
  }
}

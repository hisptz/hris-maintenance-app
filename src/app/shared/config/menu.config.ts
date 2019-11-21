import { Menu } from '../models/menu.models';

export const MenuConfig: Array<Menu> = [
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
                route: 'fields',
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
                route: 'fieldGroupsets',
            },
            {
                name: 'Fields Options Group Set',
                route: 'fieldOptionGroupsets',
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
            },
            {
                name: 'SQL View Reports',
                route: 'sqlViewReports',
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
            },
            {
                name: 'Organization Unit Groups',
                route: 'orgunitsGroup',
            },
            {
                name: 'Organization Unit Groupsets',
                route: 'orgunitsGroupset',
            },
            {
                name: 'Hierarchy Operations',
                route: 'hierarchyOperations',
            },
            {
                name: 'Organization Units Levels',
                route: 'orgunitsLevel',
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
            },
        ],
    },
];

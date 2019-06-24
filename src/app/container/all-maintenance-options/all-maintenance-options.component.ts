import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-maintenance-options',
  templateUrl: './all-maintenance-options.component.html',
  styleUrls: ['./all-maintenance-options.component.scss'],
})
export class AllMaintenanceOptionsComponent implements OnInit {
  constructor() {}

  serviceList: Array<{
    name: string;
    services: Array<{ title: string; description: string }>;
  }>;

  ngOnInit() {
    this.serviceList = [
      {
        name: 'Fields',
        services: [
          {
            title: 'Fields',
            description:
              'Add, modify, view and delete validation rules. Anomalies can be discovered by running validation rules against the data.',
          },
          {
            title: 'Fields Group',
            description:
              'Add, modify, view and delete validation rules. Anomalies can be discovered by running validation rules against the data.',
          },
          {
            title: 'Fields Options',
            description:
              'Add, modify, view and delete validation rules. Anomalies can be discovered by running validation rules against the data.',
          },
          {
            title: 'Fields Option Group',
            description:
              'Add, modify, view and delete validation rules. Anomalies can be discovered by running validation rules against the data.',
          },
          {
            title: 'Field Options Group Set',
            description:
              'Add, modify, view and delete validation rules. Anomalies can be discovered by running validation rules against the data.',
          },
        ],
      },
      {
        name: 'Filters',
        services: [
          {
            title: 'Relational Filters',
            description:
              'Add, modify, view and delete validation rules. Anomalies can be discovered by running validation rules against the data.',
          },
          {
            title: 'Relational Arthmetic',
            description:
              'Add, modify, view and delete validation rules. Anomalies can be discovered by running validation rules against the data.',
          },
          {
            title: 'Friendly Reports',
            description:
              'Add, modify, view and delete validation rules. Anomalies can be discovered by running validation rules against the data.',
          },
        ],
      },
      {
        name: 'Forms',
        services: [
          {
            title: 'Forms',
            description:
              'Add, modify, view and delete validation rules. Anomalies can be discovered by running validation rules against the data.',
          },
        ],
      },
      {
        name: 'Organization Unit',
        services: [
          {
            title: 'Organization Units',
            description:
              'Add, modify, view and delete validation rules. Anomalies can be discovered by running validation rules against the data.',
          },
          {
            title: 'Organization Unit Groups',
            description:
              'Add, modify, view and delete validation rules. Anomalies can be discovered by running validation rules against the data.',
          },
          {
            title: 'Organization Unit Groupsets',
            description:
              'Add, modify, view and delete validation rules. Anomalies can be discovered by running validation rules against the data.',
          },
          {
            title: 'Hierarchy Operations',
            description:
              'Add, modify, view and delete validation rules. Anomalies can be discovered by running validation rules against the data.',
          },
          {
            title: 'Organization Units Levels',
            description:
              'Add, modify, view and delete validation rules. Anomalies can be discovered by running validation rules against the data.',
          },
        ],
      },
      {
        name: 'Others',
        services: [
          {
            title: 'Others',
            description:
              'Add, modify, view and delete validation rules. Anomalies can be discovered by running validation rules against the data.',
          },
        ],
      },
    ];
  }
}

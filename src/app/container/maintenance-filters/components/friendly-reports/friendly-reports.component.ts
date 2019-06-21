import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friendly-reports',
  templateUrl: './friendly-reports.component.html',
  styleUrls: ['./friendly-reports.component.scss']
})
export class FriendlyReportsComponent implements OnInit {

  rippleEffectsColor: string;
  serviceList: Array<{ title: string, description: string }>;

  constructor() { }

  ngOnInit() {
    this.rippleEffectsColor = '#ccc';
    this.serviceList = [
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
      }
    ];
  }

}

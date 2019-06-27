import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maintenance-reports',
  templateUrl: './maintenance-reports.component.html',
  styleUrls: ['./maintenance-reports.component.scss']
})
export class MaintenanceReportsComponent implements OnInit {

  rippleEffectsColor: string;
  serviceList: Array<{ title: string, description: string }>;

  constructor() { }

  ngOnInit() {
    this.rippleEffectsColor = '#ccc';
    this.serviceList = [
      {
        title: 'Standard Reports',
        description:
          'Add, modify, view and delete validation rules. Anomalies can be discovered by running validation rules against the data.',
      },
      {
        title: 'SQL View Reports',
        description:
          'Add, modify, view and delete validation rules. Anomalies can be discovered by running validation rules against the data.',
      }
    ];
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maintenance-others',
  templateUrl: './maintenance-others.component.html',
  styleUrls: ['./maintenance-others.component.scss']
})
export class MaintenanceOthersComponent implements OnInit {

  rippleEffectsColor: string;
  serviceList: Array<{ title: string, description: string }>;

  constructor() {}

  ngOnInit() {
    this.rippleEffectsColor = '#ccc';
    this.serviceList = [
      {
        title: 'Others',
        description:
          'Add, modify, view and delete validation rules. Anomalies can be discovered by running validation rules against the data.',
      }
    ];
  }

}

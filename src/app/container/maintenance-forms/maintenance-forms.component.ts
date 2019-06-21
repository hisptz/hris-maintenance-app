import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maintenance-forms',
  templateUrl: './maintenance-forms.component.html',
  styleUrls: ['./maintenance-forms.component.scss']
})
export class MaintenanceFormsComponent implements OnInit {

  rippleEffectsColor: string;
  serviceList: Array<{ title: string, description: string }>;

  constructor() {}

  ngOnInit() {
    this.rippleEffectsColor = '#ccc';
    this.serviceList = [
      {
        title: 'Forms',
        description:
          'Add, modify, view and delete validation rules. Anomalies can be discovered by running validation rules against the data.',
      }
    ];
  }

}

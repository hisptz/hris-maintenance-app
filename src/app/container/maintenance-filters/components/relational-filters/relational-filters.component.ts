import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relational-filters',
  templateUrl: './relational-filters.component.html',
  styleUrls: ['./relational-filters.component.scss'],
})
export class RelationalFiltersComponent implements OnInit {
  rippleEffectsColor: string;
  serviceList: Array<{ title: string; description: string }>;

  constructor() {}

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
      },
    ];
  }
}

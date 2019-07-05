import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Fields } from 'src/app/models/fields.model';
import { MaintenanceService } from '../../services/maintenance.service';
import { Router } from '@angular/router';

import * as _ from 'lodash';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
})
export class ReportsComponent implements OnInit {
  reportsSettings$: Observable<{}>;
  reportsSettings: Array<Fields>;
  errorMessage: ErrorMessage;
  rippleEffectsColor: string;
  routerNavigation: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.rippleEffectsColor = '#ccc';
    this.routerNavigation = _.last(_.split(this.router.url, '/'));
  }
}

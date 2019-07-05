import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Fields } from 'src/app/models/fields.model';
import { Router } from '@angular/router';

import * as _ from 'lodash';

@Component({
  selector: 'app-orgunits',
  templateUrl: './orgunits.component.html',
  styleUrls: ['./orgunits.component.scss'],
})
export class OrgunitsComponent implements OnInit {
  orgunitsSettings$: Observable<{}>;
  orgunitsSettings: Array<Fields>;
  errorMessage: ErrorMessage;
  rippleEffectsColor: string;
  routerNavigation: string;

  constructor(private router: Router) {}

  ngOnInit() {
    this.rippleEffectsColor = '#ccc';
    this.routerNavigation = _.last(_.split(this.router.url, '/'));
  }
}

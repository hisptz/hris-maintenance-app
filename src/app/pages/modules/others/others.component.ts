import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import * as _ from 'lodash';
import { MenuSetting } from 'src/app/models/menu-setting.model';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.scss'],
})
export class OthersComponent implements OnInit {
  othersSettings$: Observable<{}>;
  othersSettings: Array<MenuSetting>;
  errorMessage: ErrorMessage;
  rippleEffectsColor: string;
  routerNavigation: string;

  constructor(private router: Router) {}

  ngOnInit() {
    this.rippleEffectsColor = '#ccc';
    this.routerNavigation = _.last(_.split(this.router.url, '/'));
  }
}

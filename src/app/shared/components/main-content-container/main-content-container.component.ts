import { Component, OnInit, Input } from '@angular/core';
import { Fields } from 'src/app/models/fields.model';
import { MenuOptions } from 'src/app/models/menu-configuration';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MaintenanceService } from 'src/app/pages/services/maintenance.service';

import * as _ from 'lodash';

@Component({
  selector: 'app-main-content-container',
  templateUrl: './main-content-container.component.html',
  styleUrls: ['./main-content-container.component.scss'],
})
export class MainContentContainerComponent implements OnInit {
  @Input() routerNavigation: string;
  fieldsSettings: Array<Fields>;
  rippleEffectsColor: string;

  menuOptions: Array<MenuOptions>;
  errorMessage: ErrorMessage;
  isListOpened = false;
  isServiceOpened = false;
  rippleColor: string;

  constructor(
    private maintenanceService: MaintenanceService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.rippleEffectsColor = '#ccc';
    this.isListOpened = false;
    this.isServiceOpened = true;
    this.rippleColor = '#eee';
    this.routerNavigation = _.last(_.split(this.router.url, '/'));
    this.getFields();
  }

  openMenuItemsList = (options: Array<MenuOptions>, another) => {
    this.menuOptions = options;
    this.isListOpened = true;
    this.isServiceOpened = false;
  }

  getFields = () => {
    this.maintenanceService.getAllTheFields().subscribe(
      (fields: Array<Fields>) => {
        const fieldsData = _.filter(fields, (field: Fields) => {
          if (field.route) {
            return field.route === this.routerNavigation;
          }
        });
        fieldsData ? (this.fieldsSettings = fieldsData) : [];
      },
      (error: ErrorMessage) => {
        this.errorMessage = error;
        console.error();
      }
    );
  }
}

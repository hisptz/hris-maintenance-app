import { Component, OnInit, Input } from '@angular/core';
import { MenuOptions } from '../../../models/menu-configuration';
import { Fields } from 'src/app/models/fields.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { MaintenanceService } from 'src/app/pages/services/maintenance.service';

@Component({
  selector: 'app-menu-aside',
  templateUrl: './menu-aside.component.html',
  styleUrls: ['./menu-aside.component.scss'],
})
export class MenuAsideComponent implements OnInit {
  @Input() routerNavigation: string;
  fieldsSettings: Array<Fields>;
  rippleEffectsColor: string;

  menuOptions: Array<MenuOptions>;
  errorMessage: ErrorMessage;
  isListOpened = false;
  isServiceOpened = false;

  constructor(
    private maintenanceService: MaintenanceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.rippleEffectsColor = '#ccc';
    this.isListOpened = false;
    this.isServiceOpened = true;
    this.getFields();
  }

  openMenuItemsList = (options: Array<MenuOptions>) => {
    this.menuOptions = options;
    this.isListOpened = true;
    this.isServiceOpened = false;
  }

  getFields = () => {
    const fields$ = this.maintenanceService.getAllTheFields();
    this.maintenanceService.getAllTheFields().subscribe(
      (fields: Array<Fields>) => {
        const fieldsData = _.filter(fields, (field: Fields) => {
          return field.route === this.routerNavigation;
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

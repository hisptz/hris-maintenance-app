import { Component, OnInit } from '@angular/core';
import { MaintenanceService } from 'src/app/core/services/maintenance.service';
import { APIResult } from 'src/app/core/models/api-result.model';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

@Component({
  selector: 'app-field-form',
  templateUrl: './field-form.component.html',
  styleUrls: ['./field-form.component.scss']
})
export class FieldFormComponent implements OnInit {
  fieldGroups: any;
  fieldOptions: any;
  action: string;
  selectedFieldOptions: any[] = [];
  selectedFieldGroups: any[] = [];
  tempFieldOption: any[] = [];
  tempFieldGroup: any[] = [];

  constructor(private maintenanceService: MaintenanceService) {}

  ngOnInit() {
    // Loading Field Groups
    const fieldGroups = 'fieldGroups';
    const $fieldGroups: Observable<any> = this.maintenanceService.getAll(
      fieldGroups
    );
    $fieldGroups.subscribe((result: any) => {
      this.fieldGroups = result.fieldGroups;
    });

    // Loading Field Options
    const fieldOptions = 'fieldOptions';
    const $fieldOptions: Observable<any> = this.maintenanceService.getAll(
      fieldOptions
    );
    $fieldOptions.subscribe((result: any) => {
      this.fieldOptions = result.fieldOptions;
    });
  }

  setClasses() {
    if (this.tempFieldOption) {
      const classes = {
        'is-enabled': this.tempFieldOption.length > 0,
        'is-disabled': this.tempFieldOption.length === 0
      };
      return classes ? classes : classes;
    }
  }

  setRemoveAllClasses() {
    if (this.selectedFieldOptions) {
      const classes = {
        'remove-all-btn': this.selectedFieldOptions.length === 0,
        'is-disable': this.selectedFieldOptions.length > 0
      };
      return classes ? classes : classes;
    }
  }

  onSelect(selection: any, e, action: any) {
    this.action = action;
    this.tempFieldOption.push(selection);
    if (selection && this.tempFieldOption.length === 0) {
      if (!_.includes(this.tempFieldOption, selection)) {
        this.tempFieldOption.push(selection);
      }
    } else {
      this.tempFieldOption = [];
      this.tempFieldOption.push(selection);
    }
  }

  onDeselect(selection: any, e, action: any) {
    this.action = action;
    this.tempFieldOption.push(selection);
    if (selection && this.tempFieldOption.length === 0) {
      if (!_.includes(this.tempFieldOption, selection)) {
        this.tempFieldOption.push(selection);
      }
    } else {
      this.tempFieldOption = [];
      this.tempFieldOption.push(selection);
    }
  }

  getSelectedFieldOption() {
    this.selectedFieldOptions = _.uniqBy(
      [...this.selectedFieldOptions, ...this.tempFieldOption],
      'uid'
    );
    this.fieldOptions = [
      ..._.filter(this.fieldOptions, (option: any) => {
        return !_.includes(this.selectedFieldOptions, option);
      })
    ];
    this.tempFieldOption = [];
  }

  getDeSelectedFieldOption() {
    this.fieldOptions = _.uniqBy(
      [...this.fieldOptions, ...this.tempFieldOption],
      'uid'
    );
    this.selectedFieldOptions = [
      ..._.filter(this.selectedFieldOptions, (option: any) => {
        return !_.includes(this.fieldOptions, option);
      })
    ];
    this.tempFieldOption = [];
  }
}

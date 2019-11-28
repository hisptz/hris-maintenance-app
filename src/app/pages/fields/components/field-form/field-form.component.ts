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
  searchString: string;
  selectedFieldOptions: any[] = [];
  selectedFieldGroups: any[] = [];
  tempFieldOption: any[] = [];
  tempFieldGroup: any[] = [];

  constructor(private maintenanceService: MaintenanceService) {}

  ngOnInit() {
    // Loading Field Groups
    const $fieldGroups: Observable<any> = this.maintenanceService.getAll(
      'fieldGroups'
    );
    $fieldGroups.subscribe((result: any) => {
      this.fieldGroups = _.sortBy(result.fieldGroups, (option: any) => {
        return option.name;
      });
    });

    // Loading Field Options
    const $fieldOptions: Observable<any> = this.maintenanceService.getAll(
      'fieldOptions'
    );
    $fieldOptions.subscribe((result: any) => {
      this.fieldOptions = _.sortBy(result.fieldOptions, (option: any) => {
        return option.name;
      });
    });
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
    this.selectedFieldOptions = _.sortBy(
      _.uniqBy([...this.selectedFieldOptions, ...this.tempFieldOption], 'uid'),
      (option: any) => {
        return option.name;
      }
    );
    this.fieldOptions = _.sortBy(
      [
        ..._.filter(this.fieldOptions, (option: any) => {
          return !_.includes(this.selectedFieldOptions, option);
        })
      ],
      (option: any) => {
        return option.name;
      }
    );
    this.tempFieldOption = [];
  }

  getDeSelectedFieldOption() {
    this.fieldOptions = _.sortBy(
      _.uniqBy([...this.fieldOptions, ...this.tempFieldOption], 'uid'),
      (option: any) => {
        return option.name;
      }
    );
    this.selectedFieldOptions = _.sortBy(
      [
        ..._.filter(this.selectedFieldOptions, (option: any) => {
          return !_.includes(this.fieldOptions, option);
        })
      ],
      (option: any) => {
        return option.name;
      }
    );
    this.tempFieldOption = [];
  }
}

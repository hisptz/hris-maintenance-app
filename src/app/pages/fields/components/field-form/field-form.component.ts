import { Component, OnInit, Input, Output } from '@angular/core';
import { MaintenanceService } from 'src/app/core/services/maintenance.service';
import { Observable } from 'rxjs';
import * as _ from 'lodash';
import { MenuOption } from 'src/app/shared/models/menu.models';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-field-form',
  templateUrl: './field-form.component.html',
  styleUrls: ['./field-form.component.scss']
})
export class FieldFormComponent implements OnInit {
  @Input() menuOption: MenuOption;
  fieldGroups: any;
  fieldOptions: any;
  action: string;
  searchString: string;
  selectedFieldOptions: any[] = [];
  selectedFieldGroups: any[] = [];
  tempFieldOption: any[] = [];
  tempFieldGroup: any[] = [];
  fieldRegistrationForm: FormGroup;
  fieldFormData: any;

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

    this.fieldRegistrationForm = new FormGroup({
      name: new FormControl(''),
      shortName: new FormControl(''),
      caption: new FormControl(''),
      description: new FormControl('')
    });
    this.fieldFormData = _.clone(this.fieldRegistrationForm.value);
  }

  onSelectItemList(result: any, criteria: any) {
    this.getFieldFormValues(result, criteria);
    if (result) {
      if (criteria === 'fieldGroups') {
        this.selectedFieldGroups = result;
      } else if (criteria === 'fieldOptions') {
        this.selectedFieldOptions = result;
      }
    }
  }

  getFieldFormValues(result?: any, criteria?: any) {
    if (criteria === 'fieldGroups') {
      this.fieldFormData = {
        ...this.fieldFormData,
        fieldGroups: this.getIdProp(result)
      };
    } else if (criteria === 'fieldOptions') {
      this.fieldFormData = {
        ...this.fieldFormData,
        fieldOptions: this.getIdProp(result)
      };
    }
  }

  getIdProp(results: any[]) {
    return results
      ? [
          ..._.map(results, (result: any) => {
            return {
              uid: result.uid
            };
          })
        ]
      : [];
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() fieldFormEventEmitter = new EventEmitter();
  @Output() saveEventEmitter = new EventEmitter();
  fieldGroups: any;
  fieldOptions: any;
  action: string;
  searchString: string;
  selectedFieldOptions: any[] = [];
  selectedFieldGroups: any[] = [];
  tempFieldOption: any[] = [];
  tempFieldGroup: any[] = [];
  fieldRegistrationForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    shortName: new FormControl(''),
    caption: new FormControl(''),
    description: new FormControl('')
  });
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

    // this.fieldRegistrationForm = new FormGroup({
    //   name: new FormControl(''),
    //   shortName: new FormControl(''),
    //   caption: new FormControl(''),
    //   description: new FormControl('')
    // });
    this.fieldFormData = this.fieldRegistrationForm.value;

    this.onChange();
  }
  onChange(): void {
    this.fieldRegistrationForm.valueChanges.subscribe(formData => {
      this.onUpdateFormProps(this.fieldFormData, formData);
    });
  }

  onSave(): void {
    this.saveEventEmitter.emit({ onCreate: true });
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
    this.onUpdateFormProps(
      this.fieldFormData,
      this.fieldRegistrationForm.value
    );
    this.fieldFormEventEmitter.emit(this.fieldFormData);
  }

  onUpdateFormProps(formData: any, updates: any) {
    Object.keys(formData).map((pos: any) => {
      if (!_.isArray(formData[pos])) {
        formData[pos] = updates[pos];
      }
    });
  }

  getIdProp(results: any[]) {
    return results
      ? [
          ..._.map(results, (result: any) => {
            return _.mapKeys(result, (value: string, key: string) => {
              return key;
            });
          })
        ]
      : [];
  }
}

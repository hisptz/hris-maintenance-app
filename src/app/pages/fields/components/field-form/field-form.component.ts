import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MaintenanceService } from 'src/app/core/services/maintenance.service';
import { Observable, of, fromEvent, Subject } from 'rxjs';
import * as _ from 'lodash';
import { MenuOption } from 'src/app/shared/models/menu.models';
import { FormGroup, FormControl } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  delay,
  switchMap,
  mergeMap,
  flatMap
} from 'rxjs/operators';
import { FieldService } from '../../services/field.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-field-form',
  templateUrl: './field-form.component.html',
  styleUrls: ['./field-form.component.scss']
})
export class FieldFormComponent implements OnInit {
  @Input() menuOption: MenuOption;
  @Input() formEditValues: any;
  @Input() APIParams: string;
  @Output() fieldFormEventEmitter = new EventEmitter();
  @Output() saveEventEmitter = new EventEmitter();
  fieldGroups: any;
  fieldOptions: any;
  selectedFieldGroups: any;
  selectedFieldOptions: any;
  action: string;
  searchString: string;
  tempFieldOption: any[] = [];
  tempFieldGroup: any[] = [];
  fieldRegistrationForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    shortName: new FormControl(''),
    caption: new FormControl(''),
    description: new FormControl('')
  });
  fieldFormData: any;
  checkNameAlreadyExist = new Subject<KeyboardEvent>();

  constructor(
    private maintenanceService: MaintenanceService,
    private fieldService: FieldService,
    // private spinner: NgxSpinnerService
  ) {
    this.getNameValue();
  }

  ngOnInit() {
    // this.spinner.show();
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
    this.fieldFormData = this.fieldRegistrationForm.value;
    if (this.formEditValues) {
      this.selectedFieldGroups = this.formEditValues.fieldGroups;
      this.selectedFieldOptions = this.formEditValues.fieldOptions;
      this.fieldRegistrationForm.patchValue(this.formEditValues);
    }
    this.onChange();
  }
  onChange(): void {
    this.fieldRegistrationForm.valueChanges.subscribe(formData => {
      this.onUpdateFormProps(this.fieldFormData, formData);
      this.fieldFormEventEmitter.emit(this.fieldFormData);
    });
  }

  onSave(): void {
    this.saveEventEmitter.emit({ onCreate: true });
  }

  getNameValue(): void {
    this.checkNameAlreadyExist
      .pipe(
        map((event: any) => event.target.value),
        debounceTime(500),
        distinctUntilChanged(),
        mergeMap(value => of(value).pipe(delay(300)))
      )
      .subscribe(name => {
        name
          ? this.fieldService
              .getFieldNameIfExist(name)
              .subscribe((status: any) => {
                const nameControl = this.fieldRegistrationForm.get('name');
                console.log('Name Length::: ', status[this.APIParams].length);
                if (status[this.APIParams].length > 0) {
                  nameControl.setErrors({
                    notUnique: true
                  });
                  console.log('NAME EXIST::: ', nameControl);
                }
              })
          : console.log(`No name to look up to database`);
      });
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

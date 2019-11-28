import { Component, OnInit, Input } from '@angular/core';
import { MaintenanceService } from 'src/app/core/services/maintenance.service';
import { Observable } from 'rxjs';
import * as _ from 'lodash';
import { Menu, MenuOption } from 'src/app/shared/models/menu.models';

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

  constructor(private maintenanceService: MaintenanceService) { }

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

  onSelectItemList(result: any) {
    if (result) {
      console.log('RESULT::: ' + JSON.stringify(result));
    }
  }
}

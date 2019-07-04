import { Component, OnInit } from '@angular/core';
import { MenuConfiguration } from 'src/app/models/menu-configuration';
import { Fields } from 'src/app/models/fields.model';

import { FieldsService } from '../../services/fields.service';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss'],
})
export class FieldsComponent implements OnInit {
  fieldsSettings: Array<Fields>;
  errorMessage: ErrorMessage;
  rippleEffectsColor: string;

  constructor(private fieldsService: FieldsService) { }

  ngOnInit() {
    this.fieldsService.getAllTheFields().subscribe(
      (fields: Array<Fields>) => {
        this.fieldsSettings = fields;
      },
      (error: ErrorMessage) => {
        this.errorMessage = error;
        console.error();
      }
    );
    this.rippleEffectsColor = '#ccc';
  }
}

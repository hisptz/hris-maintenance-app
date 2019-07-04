// Angular Dependencies
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Models Dependencies
import { Fields } from 'src/app/models/fields.model';

// Services Dependency
import { FieldsService } from '../../services/fields.service';

import * as _ from 'lodash';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss'],
})
export class FieldsComponent implements OnInit {
  fieldsSettings$: Observable<{}>;
  fieldsSettings: Array<Fields>;
  errorMessage: ErrorMessage;
  rippleEffectsColor: string;

  constructor(
    private fieldsService: FieldsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.rippleEffectsColor = '#ccc';
    this.getFields();
  }

  getFields = () => {
    this.fieldsService.getAllTheFields().subscribe(
      (fields: Array<Fields>) => {
        const fieldsData = _.filter(fields, (field: Fields) => {
          return field.route === _.last(_.split(this.router.url, '/'));
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

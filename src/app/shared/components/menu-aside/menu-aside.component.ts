import { Component, OnInit, Input } from '@angular/core';
import { MenuOptions } from '../../../models/menu-configuration';
import { Fields } from 'src/app/models/fields.model';
import { FieldsService } from 'src/app/pages/services/fields.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-menu-aside',
  templateUrl: './menu-aside.component.html',
  styleUrls: ['./menu-aside.component.scss'],
})
export class MenuAsideComponent implements OnInit {
  fieldsSettings: Array<Fields>;
  rippleEffectsColor: string;

  menuOptions: Array<MenuOptions>;
  errorMessage: ErrorMessage;
  isListOpened = false;
  isServiceOpened = false;

  constructor(
    private fieldsService: FieldsService,
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
    const fields$ = this.fieldsService.getAllTheFields();
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

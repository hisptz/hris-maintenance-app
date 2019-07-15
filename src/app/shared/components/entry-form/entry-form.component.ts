import { Component, OnInit, Input } from '@angular/core';
import { MenuOptions } from 'src/app/models/menu-configuration';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.scss'],
})
export class EntryFormComponent implements OnInit {
  @Input() formSetting: Array<MenuOptions>;
  @Input() formOptions: MenuOptions;

  constructor() {}

  ngOnInit() {}
}

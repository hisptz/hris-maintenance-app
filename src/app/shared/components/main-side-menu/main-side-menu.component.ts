import { Component, OnInit, Input } from '@angular/core';
import { Fields } from 'src/app/models/fields.model';
import { MenuOptions } from 'src/app/models/menu-configuration';

@Component({
  selector: 'app-main-side-menu',
  templateUrl: './main-side-menu.component.html',
  styleUrls: ['./main-side-menu.component.scss']
})
export class MainSideMenuComponent implements OnInit {

  @Input() fieldsSettings: Array<Fields>;
  @Input() menuOptions: Array<MenuOptions>;

  rippleEffectsColor: string;


  constructor() { }

  ngOnInit() {
    this.rippleEffectsColor = '#ccc';
    console.log('CAINAM OPTIONS ONINIT::: ' + JSON.stringify(this.menuOptions))
  }

  openMenuItemsList = (options: Array<MenuOptions>, another) => {
    this.menuOptions = options;
    console.log('CAINAM OPTIONS::: ' + JSON.stringify(options))
  }

}

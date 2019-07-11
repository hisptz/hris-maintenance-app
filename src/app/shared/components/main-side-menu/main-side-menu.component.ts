import { Component, OnInit, Input } from '@angular/core';
import { MenuOptions } from 'src/app/models/menu-configuration';
import { MenuSetting } from 'src/app/models/menu-setting.model';

@Component({
  selector: 'app-main-side-menu',
  templateUrl: './main-side-menu.component.html',
  styleUrls: ['./main-side-menu.component.scss']
})
export class MainSideMenuComponent implements OnInit {

  @Input() serviceSettings: Array<MenuSetting>;
  @Input() menuOptions: Array<MenuOptions>;

  rippleEffectsColor: string;

  constructor() { }

  ngOnInit() {
    this.rippleEffectsColor = '#ccc';
  }

  openMenuItemsList = (options: Array<MenuOptions>) => {
    this.menuOptions = options;
  }
}

import { Component, OnInit, Input } from '@angular/core';
import {
  MenuConfiguration,
  MenuOptions,
} from '../../models/menu-configuration';

@Component({
  selector: 'app-menu-aside',
  templateUrl: './menu-aside.component.html',
  styleUrls: ['./menu-aside.component.scss'],
})
export class MenuAsideComponent implements OnInit {
  @Input() menuSettings;
  rippleEffectsColor: string;

  menuOptions: Array<MenuOptions>;
  isListOpened = false;
  isServiceOpened = false;

  constructor() {}

  ngOnInit() {
    this.rippleEffectsColor = '#ccc';
    this.isListOpened = false;
    this.isServiceOpened = true;
  }

  openMenuItemsList = (options: Array<MenuOptions>) => {
    this.menuOptions = options;
    this.isListOpened = true;
    this.isServiceOpened = false;
  }
}

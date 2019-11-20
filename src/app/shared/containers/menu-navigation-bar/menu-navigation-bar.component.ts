import { Component, OnInit } from '@angular/core';
import { Menu } from '../../models/menu.models';
import { MenuConfig } from '../../config/menu.config';

@Component({
  selector: 'app-menu-navigation-bar',
  templateUrl: './menu-navigation-bar.component.html',
  styleUrls: ['./menu-navigation-bar.component.scss'],
})
export class MenuNavigationBarComponent implements OnInit {
  menuItems: Array<Menu> = MenuConfig;
  menuConfiguration: Menu;

  constructor() {}

  ngOnInit() {}

  onMenuOpen = (menuConfig: Menu) => {
    this.menuConfiguration = menuConfig;
  };
}

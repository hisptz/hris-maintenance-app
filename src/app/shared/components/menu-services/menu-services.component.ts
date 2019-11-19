import { Component, OnInit } from '@angular/core';
import { Menu } from '../../models/menu.models';
import { MenuConfig } from '../../config/menu.config';

@Component({
  selector: 'app-menu-services',
  templateUrl: './menu-services.component.html',
  styleUrls: ['./menu-services.component.scss'],
})
export class MenuServicesComponent implements OnInit {
  menuItems: Array<Menu> = MenuConfig;

  constructor() {}

  ngOnInit() {}
}

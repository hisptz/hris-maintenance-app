import { Component, OnInit } from '@angular/core';
import { MenuOptions } from '../../models/menu-configuration';

@Component({
  selector: 'app-menu-containers',
  templateUrl: './menu-containers.component.html',
  styleUrls: ['./menu-containers.component.scss']
})
export class MenuContainersComponent implements OnInit {

  menuOptions: Array<MenuOptions>;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { MenuOptions, ItemList } from '../../../models/menu-configuration';

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

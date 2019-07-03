import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuConfiguration } from '../../models/menu-configuration';

@Component({
  selector: 'app-menu-services',
  templateUrl: './menu-services.component.html',
  styleUrls: ['./menu-services.component.scss'],
})
export class MenuServicesComponent implements OnInit {
  @Input() menuConfigurations: Array<MenuConfiguration>;
  menuConfig: MenuConfiguration;
  rippleEffectsColor: string;

  constructor() {}

  ngOnInit() {
    this.rippleEffectsColor = '#ccc';
  }

  openMenuOptions = (menuConfiguration: MenuConfiguration) => {
    this.menuConfig = menuConfiguration;
  }
}

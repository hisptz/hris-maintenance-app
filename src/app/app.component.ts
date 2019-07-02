import { Component } from '@angular/core';
import { MenuConfiguration } from './shared/models/menu-configuration';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hris-maintenance-app';

  menuSettings: Array<MenuConfiguration>;

  ngOnInit() {
    this.menuSettings = [
      {
        name: 'All',
        route: 'all'
      },
      {
        name: 'Fields',
        route: 'fields'
      },
      {
        name: 'Reports',
        route: 'reports'
      },
      {
        name: 'Forms',
        route: 'forms'
      },
      {
        name: 'Organization Unit',
        route: 'organizationUnits'
      },
      {
        name: 'Others',
        route: 'others'
      }
    ]
  }
}

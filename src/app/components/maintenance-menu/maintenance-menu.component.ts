import { Component, OnInit } from '@angular/core';
import { MaintenanceFieldsComponent } from 'src/app/container/maintenance-fields/maintenance-fields.component';
import { MaintenanceOthersComponent } from 'src/app/container/maintenance-others/maintenance-others.component';
import { MaintenanceOrgunitsComponent } from 'src/app/container/maintenance-orgunits/maintenance-orgunits.component';
import { AllMaintenanceOptionsComponent } from 'src/app/container/all-maintenance-options/all-maintenance-options.component';

@Component({
  selector: 'app-maintenance-menu',
  templateUrl: './maintenance-menu.component.html',
  styleUrls: ['./maintenance-menu.component.scss'],
})
export class MaintenanceMenuComponent implements OnInit {
  rippleEffectsColor: string;

  constructor() {}

  ngOnInit() {
    this.rippleEffectsColor = '#ccc';
  }
}

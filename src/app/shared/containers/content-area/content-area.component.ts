import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Menu, MenuOption } from '../../models/menu.models';
import { APIResult } from 'src/app/core/models/api-result.model';

@Component({
  selector: 'app-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.scss'],
})
export class ContentAreaComponent implements OnInit {
  @Input() isModuleServicesOpened: boolean;
  @Input() menuConfigItems: Array<Menu>;
  @Input() isTableListOpened: boolean;
  @Input() APIDataResult: APIResult;
  @Input() APIParams: string;
  @Output() deleteEventEmitter = new EventEmitter();

  isTableListOpenedCA: boolean;
  isModuleServicesOpenedCA: boolean;
  pageSize: number;
  constructor() {}

  ngOnInit() {
    this.isTableListOpenedCA = this.isTableListOpened;
    this.isModuleServicesOpenedCA = this.isModuleServicesOpened;
    this.pageSize = 10;
  }

  openServiceContentList(menuOption: MenuOption, menuConfigItem: Array<Menu>) {
    this.isTableListOpenedCA = true;
    this.isModuleServicesOpenedCA = false;
  }

  onDelete(item: any) {
    if (item) {
      this.deleteEventEmitter.emit(item);
    }
  }
}

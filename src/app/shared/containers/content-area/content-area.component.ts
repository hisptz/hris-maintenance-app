import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Menu, MenuOption } from '../../models/menu.models';
import { APIResult } from 'src/app/core/models/api-result.model';
import { NavigationEnd, Router } from '@angular/router';
import { RouterNavigationEndState } from 'src/app/core/models/router-navigation-end.model';

@Component({
  selector: 'app-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.scss']
})
export class ContentAreaComponent implements OnInit {
  @Input() menuConfigItems: Array<Menu>;
  @Input() isTableListOpened: boolean;
  @Input() isModuleServicesOpened: boolean;
  @Input() isEntryformOpened: boolean;
  @Input() APIDataResult: APIResult;
  @Input() serviceMenuOption: MenuOption;
  @Input() APIParams: string;
  @Output() deleteEventEmitter = new EventEmitter();
  @Output() viewMoreDetailsEventEmitter = new EventEmitter();

  isTableListOpenedCA: boolean;
  isModuleServicesOpenedCA: boolean;
  isEntryformOpenedCA: boolean;
  menuOption: MenuOption;
  pageSize: number;
  constructor(private router: Router) {}

  ngOnInit() {
      this.isTableListOpenedCA = this.isTableListOpened;
      this.isModuleServicesOpenedCA = this.isModuleServicesOpened;
      this.isEntryformOpenedCA = this.isEntryformOpened;
      this.onOpenMenuItemContent();
      this.pageSize = 10;
  }

  openServiceContentList(menuOption: MenuOption, menuConfigItem: Array<Menu>) {
    if (menuOption) {
      this.menuOption = menuOption;
      this.isTableListOpenedCA = true;
      this.isModuleServicesOpenedCA = false;
      this.isEntryformOpenedCA = false;
    }
  }

  onOpenMenuItemContent() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.isTableListOpenedCA = true;
        this.isModuleServicesOpenedCA = false;
        this.isEntryformOpenedCA = false;
      }
    });
  }

  openDataEntryForm() {
    if (this.APIParams) {
      this.isEntryformOpenedCA = true;
      this.isModuleServicesOpenedCA = false;
      this.isTableListOpenedCA = false;
    }
  }

  onDelete(item: any) {
    if (item) {
      this.deleteEventEmitter.emit(item);
    }
  }

  onViewMoreDetails(state: any) {
    state
      ? this.viewMoreDetailsEventEmitter.emit(state)
      : this.viewMoreDetailsEventEmitter.emit({ ...state, status: false });
  }
}

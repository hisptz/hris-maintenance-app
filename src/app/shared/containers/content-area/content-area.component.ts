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
  @Input() APIDataResult: APIResult;
  @Input() APIParams: string;
  @Output() deleteEventEmitter = new EventEmitter();
  @Output() viewMoreDetailsEventEmitter = new EventEmitter();

  isTableListOpenedCA: boolean;
  isModuleServicesOpenedCA: boolean;
  pageSize: number;
  constructor(private router: Router) {}

  ngOnInit() {
    this.isTableListOpenedCA = this.isTableListOpened;
    this.isModuleServicesOpenedCA = this.isModuleServicesOpened;
    this.pageSize = 10;
    this.onOpenMenuItemContent();
  }

  openServiceContentList(menuOption: MenuOption, menuConfigItem: Array<Menu>) {
    this.isTableListOpenedCA = true;
    this.isModuleServicesOpenedCA = false;
  }

  onOpenMenuItemContent() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.isTableListOpenedCA = true;
        this.isModuleServicesOpenedCA = false;
      }
    });
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

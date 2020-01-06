import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {
  @Input() entityList: any;
  @Output() selectedEntityEventEmitter = new EventEmitter();
  action: string;
  searchString: string;
  selectedEntityList: any[] = [];
  tempEntityList: any[] = [];

  constructor() {}

  ngOnInit() {}

  onSelect(selection: any, e, action: any) {
    this.action = action;
    this.tempEntityList.push(selection);
    if (selection && this.tempEntityList.length === 0) {
      if (!_.includes(this.tempEntityList, selection)) {
        this.tempEntityList.push(selection);
      }
    } else {
      this.tempEntityList = [];
      this.tempEntityList.push(selection);
    }
  }

  onDeselect(selection: any, e, action: any) {
    this.action = action;
    this.tempEntityList.push(selection);
    if (selection && this.tempEntityList.length === 0) {
      if (!_.includes(this.tempEntityList, selection)) {
        this.tempEntityList.push(selection);
      }
    } else {
      this.tempEntityList = [];
      this.tempEntityList.push(selection);
    }
  }

  getSelectedFieldOption() {
    this.selectedEntityList = _.sortBy(
      _.uniqBy([...this.selectedEntityList, ...this.tempEntityList], 'id'),
      (option: any) => {
        return option.name;
      }
    );
    this.entityList = _.sortBy(
      [
        ..._.filter(this.entityList, (option: any) => {
          return !_.includes(this.selectedEntityList, option);
        })
      ],
      (option: any) => {
        return option.name;
      }
    );
    this.selectedEntityList
        ? this.selectedEntityEventEmitter.emit(this.selectedEntityList)
        : this.selectedEntityEventEmitter.emit(this.selectedEntityList);
    this.tempEntityList = [];
  }

  getDeSelectedFieldOption() {
    this.entityList = _.sortBy(
      _.uniqBy([...this.entityList, ...this.tempEntityList], 'id'),
      (option: any) => {
        return option.name;
      }
    );
    this.selectedEntityList = _.sortBy(
      [
        ..._.filter(this.selectedEntityList, (option: any) => {
          return !_.includes(this.entityList, option);
        })
      ],
      (option: any) => {
        return option.name;
      }
    );
    this.selectedEntityList
        ? this.selectedEntityEventEmitter.emit(this.selectedEntityList)
        : this.selectedEntityEventEmitter.emit(this.selectedEntityList);
    this.tempEntityList = [];
  }

  selectAll(status: any) {
    if (status === 'selectAll') {
      this.action = 'select';
      this.tempEntityList = _.sortBy(
        _.uniqBy([...this.tempEntityList, ...this.entityList], 'id'),
        (item: any) => {
          return item.name;
        }
      );
    } else if (status === 'deselectAll') {
      this.action = 'deselect';
      this.tempEntityList = _.sortBy(
        _.uniqBy([...this.tempEntityList, ...this.selectedEntityList], 'id'),
        (item: any) => {
          return item.name;
        }
      );
    }
  }
}

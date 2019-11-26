import {
  Component,
  OnInit,
  ViewChild,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { APIResult } from 'src/app/core/models/api-result.model';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { MenuOption } from '../../models/menu.models';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  @Input() APIDataResult?: APIResult;
  @Input() APIParams?: string;
  @Input() menuOption: MenuOption;
  @Output() deleteEventEmitter = new EventEmitter();
  @Output() viewMoreDetailsEventEmitter = new EventEmitter();
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  dataSource: MatTableDataSource<any>;
  serviceMenuOption: MenuOption;
  displayedColumns: string[] = [
    'name',
    'caption',
    'description',
    'created',
    'lastUpdated',
    'menu'
  ];
  pageSize: number;
  dataSize: number;
  rippleColor = '#cccccc';

  constructor() {}

  ngOnInit() {
    if (this.APIDataResult) {
      this.dataSource = new MatTableDataSource<any>(
        this.APIDataResult[this.APIParams]
      );
      this.dataSize = this.APIDataResult[this.APIParams].length;
      this.dataSource.paginator = this.paginator;
      this.pageSize = 10;
    }
    this.serviceMenuOption = this.menuOption;
  }

  applyFilter(filterValue: string) {
    if (this.APIDataResult) {
      this.dataSource.filter = filterValue.trim().toLowerCase();

      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
  }

  // ToDo: Make Sure You Implement On Delete
  onDelete(item: any, apiParams: string) {
    this.deleteEventEmitter.emit({ ...item, apiEndpoint: apiParams });
    this.dataSource.data.splice(item, 1);
    this.dataSource.paginator = this.paginator;
  }

  onViewMoreDetails(item: any) {
    this.viewMoreDetailsEventEmitter.emit({ data: item, status: true });
  }
}

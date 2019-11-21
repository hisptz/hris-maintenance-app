import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { APIResult } from 'src/app/core/models/api-result.model';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  @Input() apiDataResult?: APIResult;
  @Input() APIParams?: string;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  dataSource: MatTableDataSource<any>;
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
    if (this.apiDataResult) {
      this.dataSource = new MatTableDataSource<any>(
        this.apiDataResult[this.APIParams]
      );
      this.dataSize = this.apiDataResult[this.APIParams].length;
      this.dataSource.paginator = this.paginator;
      this.pageSize = 10;
    }
  }

  applyFilter(filterValue: string) {
    if (this.apiDataResult) {
      this.dataSource.filter = filterValue.trim().toLowerCase();

      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
  }
}

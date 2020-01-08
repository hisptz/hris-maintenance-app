import {
  Component,
  OnInit,
  AfterViewInit,
  DoCheck,
  OnChanges,
  ViewChild,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { APIResult } from 'src/app/core/models/api-result.model';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { MenuOption } from '../../models/menu.models';
import { MaintenanceService } from 'src/app/core/services/maintenance.service';
import * as _ from 'lodash';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit, OnChanges {
  @Input() APIDataResult?: APIResult;
  @Input() APIParams?: string;
  @Input() menuOption: MenuOption;
  @Output() viewMoreDetailsEventEmitter = new EventEmitter();
  @Output() editFormContentEventEmitter = new EventEmitter();
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

  constructor(
    private maintenanceService: MaintenanceService,
    private snackBar: MatSnackBar
  ) {}

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

  ngOnChanges(changes) {
    this.dataSource = new MatTableDataSource<any>(
      this.APIDataResult[this.APIParams]
    );
  }

  editForm(value) {
    if (value) {
      this.editFormContentEventEmitter.emit(value);
    }
  }

  // ngDoCheck() {
  //   this.dataSource = new MatTableDataSource<any>(
  //     this.APIDataResult[this.APIParams]
  //   );
  // }

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
    const deleteItem = { ...item, apiEndpoint: apiParams };
    const deleteResponse$ = this.maintenanceService.deleteOne(deleteItem);
    deleteResponse$.subscribe((response: any) => {
      if (_.has(response, 'status') && response.status === 200) {
        this.dataSource.data.splice(item, 1);
        this.dataSource.paginator = this.paginator;
      } else {
        if (_.has(response, 'error')) {
          if (_.has(response.error, 'message')) {
            this.openSnackBar(response.error);
          } else {
            this.openSnackBar(response.error);
          }
        } else {
          this.openSnackBar(response);
          this.dataSource.data.splice(item, 1);
          this.dataSource.paginator = this.paginator;
        }
      }
    });
  }

  onViewMoreDetails(item: any) {
    this.viewMoreDetailsEventEmitter.emit({ data: item, status: true });
  }

  onDeletion(item: any): any {
    if (item) {
      const deleteResponse$ = this.maintenanceService.deleteOne(item);
      deleteResponse$.subscribe((response: any) => {
        if (response) {
          this.openSnackBar(response.error);
        }
      });
    }
  }

  openSnackBar(response: any) {
    // ToDo:Reviw this implementation and improve it
    // this.snackBar.openFromComponent(MainContentComponent, {
    //   duration: this.durationInSeconds * 1000,
    // });
    if (_.has(response, 'message')) {
      this.snackBar.open(response.message);
    } else if (_.has(response, 'error')) {
      this.snackBar.open(response.error);
    }
    setTimeout(() => {
      this.snackBar.dismiss();
    }, 3000);
  }
}

import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MenuOptions, ItemList } from '../../../models/menu-configuration';
import { MaintenanceService } from 'src/app/pages/services/maintenance.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Fields } from 'src/app/models/fields.model';

import * as _ from 'lodash';
import { MainContentAreaComponent } from '../main-content-area/main-content-area.component';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
})
export class ListViewComponent implements OnInit {
  @Input() menuOptions: Array<MenuOptions>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MainContentAreaComponent) mainContentAreaComponentChild: Array<
    MenuOptions
  >;
  rippleColor: string;
  isLoaded: boolean;
  isLoading: boolean;

  displayedColumns: string[] = [
    'position',
    'name',
    'access',
    'lastUpdated',
    'menu'
  ];

  menuItemList: Array<ItemList>;
  dataSource: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.rippleColor = '#eee';
    this.isLoaded = false;
    this.isLoading = true;
    const queryParams = this.activatedRoute.snapshot.queryParams;
    const routeParams = this.activatedRoute.snapshot.params;

    this.activatedRoute.params.subscribe(params => {
      this.isLoaded = false;
      this.isLoading = true;

      setTimeout(() => {
        this.isLoaded = true;
        this.isLoading = false;
      }, 4000);

      this.dataSource = new MatTableDataSource<ItemList>(
        this.menuOptions[0].items
      );
      this.dataSource.paginator = this.paginator;
    });
  }

  ngAfterViewInit() {
    this.activatedRoute.params.subscribe(params => {
      this.dataSource = new MatTableDataSource<ItemList>(
        this.menuOptions[0].items
      );
      this.dataSource.paginator = this.paginator;
    });
  }
}

import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MenuOptions, ItemList } from '../../../models/menu-configuration';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {

  @Input() menuOptions: Array<ItemList>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['position', 'name', 'access', 'lastUpdated'];

  dataSample: Array<ItemList> = [
    {
      position: '1',
      name: 'Field Placeholder',
      access: 'Public View/Edit',
      lastUpdated: 'July 3, 2019'
    },
    {
      position: '2',
      name: 'Field Placeholder',
      access: 'Public View/Edit',
      lastUpdated: 'July 3, 2019'
    },
    {
      position: '3',
      name: 'Field Placeholder',
      access: 'Public View/Edit',
      lastUpdated: 'July 3, 2019'
    },
    {
      position: '4',
      name: 'Field Placeholder',
      access: 'Public View/Edit',
      lastUpdated: 'July 3, 2019'
    },
    {
      position: '5',
      name: 'Field Placeholder',
      access: 'Public View/Edit',
      lastUpdated: 'July 3, 2019'
    }
  ];

  // dataSource = new MatTableDataSource<ItemList>(this.menuOptions);
  dataSource = new MatTableDataSource<ItemList>(this.dataSample);

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}

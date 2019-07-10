import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-loader',
  templateUrl: './progress-loader.component.html',
  styleUrls: ['./progress-loader.component.scss']
})
export class ProgressLoaderComponent implements OnInit {

  color = '#2C611D';
  mode = 'indeterminate';
  value = 50;

  constructor() { }

  ngOnInit() {
  }

}

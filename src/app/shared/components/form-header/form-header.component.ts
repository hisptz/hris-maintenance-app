import { Component, OnInit, Input } from '@angular/core';
import { MenuOption } from '../../models/menu.models';

@Component({
  selector: 'app-form-header',
  templateUrl: './form-header.component.html',
  styleUrls: ['./form-header.component.scss']
})
export class FormHeaderComponent implements OnInit {

  @Input() menuOption: MenuOption;

  constructor() { }

  ngOnInit() {
  }

}

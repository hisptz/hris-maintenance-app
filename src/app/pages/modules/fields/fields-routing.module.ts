import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FieldsComponent } from './fields.component';
import { MainContentAreaComponent } from 'src/app/shared/components/main-content-area/main-content-area.component';

const routes: Routes = [
  {
    path: 'hris-web-fields',
    component: FieldsComponent,
    children: [
      {
        path: ':name',
        component: MainContentAreaComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FieldsRoutingModule {}

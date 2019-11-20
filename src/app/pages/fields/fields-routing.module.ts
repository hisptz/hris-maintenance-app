import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FieldComponent } from './components/field/field.component';
import { MainContentComponent } from 'src/app/shared/containers/main-content/main-content.component';

const routes: Routes = [
  {
    path: 'hris-web-fields',
    component: FieldComponent,
    children: [
      {
        path: ':name',
        component: MainContentComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FieldsRoutingModule { }

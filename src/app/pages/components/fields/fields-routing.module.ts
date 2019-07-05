import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FieldsComponent } from './fields.component';
import { MenuContainersComponent } from 'src/app/shared/components/menu-containers/menu-containers.component';

const routes: Routes = [
  {
    path: 'fields',
    component: FieldsComponent,
    children: [
      {
        path: ':name',
        component: MenuContainersComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FieldsRoutingModule {}

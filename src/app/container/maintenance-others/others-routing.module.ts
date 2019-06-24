import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OthersComponent } from './components/others/others.component';

const routes: Routes = [
  {
    path: 'others',
    component: OthersComponent,
    children: [
      {
        path: ':name',
        component: OthersComponent,
      }
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OthersRoutingModule { }

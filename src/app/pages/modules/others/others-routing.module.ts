import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OthersComponent } from './others.component';
import { MainContentAreaComponent } from 'src/app/shared/components/main-content-area/main-content-area.component';

const routes: Routes = [
  {
    path: 'hris-web-others',
    component: OthersComponent,
    children: [
      {
        path: ':name',
        component: MainContentAreaComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class OthersRoutingModule {}

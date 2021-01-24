import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';
import {Tab1DetailComponent} from "../tab1/tab1-detail/tab1-detail.component";

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {
    path: 'detail/:id',
    component: Tab1DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}

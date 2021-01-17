import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import {Tab1ListComponent} from "./tab1-list/tab1-list.component";
import {Tab1DetailComponent} from "./tab1-detail/tab1-detail.component";

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'result',
    component: Tab1ListComponent
  },
  {
    path: 'result/detail/:id',
    component: Tab1DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}

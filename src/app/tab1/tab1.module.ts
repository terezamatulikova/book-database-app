import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import {Tab1ListComponent} from "./tab1-list/tab1-list.component";
import {Tab1DetailComponent} from "./tab1-detail/tab1-detail.component";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        Tab1PageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [Tab1Page, Tab1ListComponent, Tab1DetailComponent]
})
export class Tab1PageModule {}

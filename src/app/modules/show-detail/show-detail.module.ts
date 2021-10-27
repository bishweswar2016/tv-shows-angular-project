import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowDetailRoutingModule } from './show-detail-routing.module';
import { ShowDetailComponent } from './components/show-detail/show-detail.component';


@NgModule({
  declarations: [ShowDetailComponent],
  imports: [
    CommonModule,
    ShowDetailRoutingModule
  ]
})
export class ShowDetailModule { }

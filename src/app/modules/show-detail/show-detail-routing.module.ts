import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowDetailComponent } from './components/show-detail/show-detail.component';
const routes: Routes = [
    {
        path: '',
        component: ShowDetailComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowDetailRoutingModule { }

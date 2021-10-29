import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    {
        path:'',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path:'show/:id',
        loadChildren: () => import('./modules/show-detail/show-detail.module').then(m => m.ShowDetailModule)
    },
    { 
        path: '**', 
        redirectTo: '/'
    }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

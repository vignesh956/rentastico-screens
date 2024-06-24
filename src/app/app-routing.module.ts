import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RentasticoClientAppHomeComponent } from './rentastico-client-app-home/rentastico-client-app-home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomeModule)
  },
  {
    path:'rentastico',
    component:RentasticoClientAppHomeComponent
  },
  {
    path:'profiledashboard',
    loadChildren: () => import('./profile-dashboard/profile-dashboard.module').then(m => m.ProfileDashboardModule)
  },
  {
    path:'fullview',
    loadChildren: () => import('./fullview/fullview.module').then(m => m.FullviewModule)
  } 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

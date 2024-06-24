import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { RentasticoClientAppHomeComponent } from '../rentastico-client-app-home/rentastico-client-app-home.component';
import { FullviewpageComponent } from './fullviewpage/fullviewpage.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'search-property',
    pathMatch: 'full'
  },
  {
    path:'search-property',
    component:HomepageComponent
  },
  {
    path:'fullview',
    component:FullviewpageComponent
  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

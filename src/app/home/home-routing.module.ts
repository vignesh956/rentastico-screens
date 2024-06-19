import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { RentasticoClientAppHomeComponent } from '../rentastico-client-app-home/rentastico-client-app-home.component';

const routes: Routes = [
  {
    path: '',
    component: RentasticoClientAppHomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}

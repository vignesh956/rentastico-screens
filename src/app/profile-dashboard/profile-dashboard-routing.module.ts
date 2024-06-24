import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { OverviewComponent } from './overview/overview.component';
import { ReviewComponent } from './review/review.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path:'profile',component:ProfileComponent
  },
  {
    path:'myprofile', component:MyprofileComponent
  },
  {
    path:'overview', component:OverviewComponent
  },
  {
    path:'review', component:ReviewComponent
  },
  {
    path:'settings', component:SettingsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileDashboardRoutingModule { }

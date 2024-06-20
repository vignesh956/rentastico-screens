import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileDashboardRoutingModule } from './profile-dashboard-routing.module';
import { HelpComponent } from './help/help.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { OverviewComponent } from './overview/overview.component';
import { ReviewComponent } from './review/review.component';
import { SettingsComponent } from './settings/settings.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [HelpComponent,MyprofileComponent,OverviewComponent,ReviewComponent,SettingsComponent,ProfileComponent],
  imports: [
    CommonModule,
    ProfileDashboardRoutingModule,
    FormsModule,
    IonicModule
  ],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProfileDashboardModule { }

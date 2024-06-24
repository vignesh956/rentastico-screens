import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FullviewRoutingModule } from './fullview-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonComponent } from './common/common.component';
import { OverviewComponent } from './overview/overview.component';
import { AvailabilityComponent } from './availability/availability.component';
import { AmenitiesComponent } from './amenities/amenities.component';
import { HostComponent } from './host/host.component';
import { LocationComponent } from './location/location.component';
import { ReviewsComponent } from './reviews/reviews.component';


@NgModule({
  declarations: [CommonComponent,
    OverviewComponent,
    AvailabilityComponent,
    AmenitiesComponent,
    HostComponent,
    LocationComponent,
    ReviewsComponent
  ],
  imports: [FormsModule,
    CommonModule,
    FullviewRoutingModule,
    IonicModule
  ]
})
export class FullviewModule { }

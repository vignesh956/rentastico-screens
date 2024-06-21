import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { RentasticoClientAppHomeComponent } from './rentastico-client-app-home/rentastico-client-app-home.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProfileDashboardModule } from './profile-dashboard/profile-dashboard.module';

@NgModule({
  declarations: [AppComponent,RentasticoClientAppHomeComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule , AuthModule,FormsModule,CommonModule,ProfileDashboardModule
    
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

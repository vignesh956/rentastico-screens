import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    LoginComponent ,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    IonicModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthModule { }

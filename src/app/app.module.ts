import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './user/signup/signup.component';
import { SigninComponent } from './user/signin/signin.component';
import { ProfileComponent } from './user/profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotComponent } from './user/forgot/forgot.component';
import { TrafficComponent } from './admin/traffic/traffic.component';
import { SalesComponent } from './admin/sales/sales.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    ProfileComponent,
    DashboardComponent,
    ForgotComponent,
    TrafficComponent,
    SalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute, ParamMap } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SalesComponent } from './admin/sales/sales.component';
import { TrafficComponent } from './admin/traffic/traffic.component';
import { SignupComponent } from './user/signup/signup.component';
import { SigninComponent } from './user/signin/signin.component';
import { ForgotComponent } from './user/forgot/forgot.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: {bodyClass: 'home-body' }},
  { path: 'sales', component: SalesComponent },
  { path: 'traffic', component: TrafficComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'forgot', component: ForgotComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateAccountComponent } from './Components/create-account/create-account.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  }, {
    path: 'create-account',
    component: CreateAccountComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

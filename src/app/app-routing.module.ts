import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { BloggerComponent } from './Components/blogger/blogger.component';
import { CreateAccountComponent } from './Components/create-account/create-account.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  }, {
    path: 'create-account',
    component: CreateAccountComponent,
  },
  {
    path: 'home',
    component: BloggerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

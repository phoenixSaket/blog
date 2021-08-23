import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { CreateAccountComponent } from './Components/create-account/create-account.component';
import { InputComponent } from './shared/input/input.component';
import { WaveComponent } from './shared/wave/wave.component';
import { HttpClientModule } from '@angular/common/http';
import { BloggerComponent } from './Components/blogger/blogger.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateAccountComponent,
    InputComponent,
    WaveComponent,
    BloggerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

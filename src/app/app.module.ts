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
import { NavbarComponent } from './Components/navbar/navbar.component';
import { BlogComponent } from './Components/blog/blog.component';
import { WriteBlogComponent } from './Components/write-blog/write-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateAccountComponent,
    InputComponent,
    WaveComponent,
    BloggerComponent,
    NavbarComponent,
    BlogComponent,
    WriteBlogComponent
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

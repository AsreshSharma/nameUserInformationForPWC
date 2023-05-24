import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserinformationComponent } from './pages/userinformation/userinformation.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './services/api.service';
import {DatePipe} from '@angular/common';
import { DateFormatPipePipe } from './pipes/date-format-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserinformationComponent,
    AboutusComponent,
    ContactComponent,
    DateFormatPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

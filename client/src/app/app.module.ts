import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { HomeComponent } from './components/home.component';
import { HowComponent } from './components/how.component';
import { SummaryComponent } from './components/summary.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, HomeComponent, HowComponent, SummaryComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

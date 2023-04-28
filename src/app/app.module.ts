import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddbudgetComponent } from './addbudget/addbudget.component';
import { DisplaybudgetComponent } from './displaybudget/displaybudget.component';

@NgModule({
  declarations: [
    AppComponent,
    AddbudgetComponent,
    DisplaybudgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

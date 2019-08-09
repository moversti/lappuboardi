import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LappuComponent } from './lappu/lappu.component';
import { BoardiComponent } from './boardi/boardi.component';
import { BoardiFormComponent } from './boardi-form/boardi-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LappuComponent,
    BoardiComponent,
    BoardiFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

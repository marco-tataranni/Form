import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormDemoComponent } from './form-demo/form-demo.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {   //Importare le funzionalità nella nostra applicazione
 FormsModule,
 ReactiveFormsModule
} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    FormDemoComponent
  ],

   imports: [
    BrowserModule, NgbModule, FormsModule, ReactiveFormsModule

  ],

  providers: [],
  bootstrap: [AppComponent]





})
export class AppModule { }

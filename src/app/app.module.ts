import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {LangformModule} from './langform/langform.module';
import {ProceedModule} from './proceed/proceed.module';

import { ProceedRoutingModule } from './proceed/proceed-routing.module';
import { LangformRoutingModule } from './langform/langform-routing.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule, MatInputModule, MatCheckboxModule, MatTooltipModule, MatButtonModule} from '@angular/material';
// Support variable binding between typescript and html 
import {FormsModule} from '@angular/forms';

import {RoundProgressModule} from 'angular-svg-round-progressbar';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    BrowserAnimationsModule,

    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatButtonModule,

    FormsModule,

    RoundProgressModule,

    ProceedModule,
    LangformModule,

    // root routing should always be last
    ProceedRoutingModule,
    LangformRoutingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

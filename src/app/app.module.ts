import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { HeaderComponent } from './header/header.component';
import { ErrorComponent } from './home/error/error.component';
import { ListComponent } from './assign/list/list.component';
import { HttpClientModule } from '@angular/common/http'
import {  ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
   
    HeaderComponent,
    ErrorComponent,
    ListComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    TableModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[TableModule]
})
export class AppModule { }

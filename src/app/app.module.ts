import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {DatosMesComponent } from './datos-mes/datos-mes.component'
import {DatosEjercicioComponent } from './datos-ejercicio/datos-ejercicio.component'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,DatosMesComponent,DatosEjercicioComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {DatosMesComponent } from './datos-mes/datos-mes.component'
import {DatosEjercicioComponent } from './datos-ejercicio/datos-ejercicio.component'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,DatosMesComponent,DatosEjercicioComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule,HttpClientModule ,NgbModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'es' } ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {DatosEjercicioComponent} from './datos-ejercicio/datos-ejercicio.component';


const routes: Routes = [      
  {path: ':year', component: DatosEjercicioComponent },
  {path: ':year/:month', component: DatosEjercicioComponent } 
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) 
  ],
  exports: [ RouterModule ],
  declarations: []
})

export class AppRoutingModule {
  
 }

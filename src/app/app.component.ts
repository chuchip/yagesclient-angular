import { Component,AfterViewInit,Renderer,ViewChild,ElementRef } from '@angular/core';
import {Router} from '@angular/router';
import { isNumber } from 'util';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent  {
  @ViewChild("ejerc") nameField: ElementRef;

  title="Consulta Historico Ventas";
  ejercicio=2018;
  ejercicioActual:number;
  focus='uno';
  
  ngAfterViewInit() {    
    
   }
   ngOnInit() 
   {
    console.log("en ngoninit de appComponent");
   }
   ponFoco()
   {
     setTimeout(()=> {this.nameField.nativeElement.focus()});
   }
  buscar(): void {
//    console.log("Ejercicio: "+this.ejercicio);
    var num:number=this.ejercicio;
//    console.log("Ejercicio: "+num);
    if (!isNumber(num))
 {
//   console.log("Ejercicio no es valido");
   this.ponFoco();
   return;
 }
    this.ejercicioActual=this.ejercicio;
    this.router.navigate([''+this.ejercicioActual])
  }
  constructor( private router: Router, private renderer: Renderer) { 
   
  }
 
}

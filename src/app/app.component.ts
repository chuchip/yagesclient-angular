import { Component,AfterViewInit,Renderer,ViewChild,ElementRef } from '@angular/core';
import {Router} from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent  {
  @ViewChild("ejerc") nameField: ElementRef;

  msgError="";
  title="Consulta Historico Ventas";
  ejercicio=2018;
  ejercicioActual:number;
  rr=0;
  constructor( private router: Router, private renderer: Renderer) { 
   
  }

  ngAfterViewInit() {    
    this.ponFoco();
   }
   ngOnInit() 
   {
//    console.log("en ngoninit de appComponent");
   }
   ponFoco()
   {
     setTimeout(()=> {this.nameField.nativeElement.focus()});
   }
  buscar(): void {
    this.rr++;
    let num:number=+this.ejercicio;
    if (!num)
    {
      this.msgError="Ejercicio no ES valido";
      this.ponFoco();
      return;
    }
    this.msgError="";
    this.ejercicioActual=this.ejercicio;
        
    this.router.navigate(['',(this.ejercicioActual]);
    
  }
  reset()
  {       
    this.router.navigate(['']); 
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title="Consulta Historico Ventas";
  ejercicio=2018;
  ejercicioActual:number;

  buscar(): void {
    this.ejercicioActual=this.ejercicio;
  }
}

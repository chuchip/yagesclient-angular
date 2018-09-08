import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VentasMes } from '../VentasMes';
import { VENTASMES } from '../mock-ventasMes';

@Component({
  selector: 'app-datos-ejercicio',
  templateUrl: './datos-ejercicio.component.html',
  styleUrls: ['./datos-ejercicio.component.css']
})

export class DatosEjercicioComponent implements OnInit {
  @Input() ejercicio: number;
  year:number=0;
  month:number=0;

  constructor( private route: ActivatedRoute) { 
   
  }

  ngOnInit() {   
    this.year = +this.route.snapshot.paramMap.get('year');
    this.month = +this.route.snapshot.paramMap.get('month');
  }

}

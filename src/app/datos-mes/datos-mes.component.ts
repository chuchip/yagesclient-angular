import { Component, OnInit,Input } from '@angular/core';
import { DatosserverService } from '../services/datosserver.service'
import {VentasSemana } from '../dao/ventasSemana';

@Component({
  selector: 'app-datos-mes',
  templateUrl: './datos-mes.component.html',
  styleUrls: ['./datos-mes.component.css']
})
export class DatosMesComponent implements OnInit {
  @Input() mes: number ;
  @Input() year: number ;

  @Input() ventasSemana: VentasSemana[];
//  constructor(private _datosserver: DatosserverService) { }

  ngOnInit() {   
      if (this.mes==0)
        return;
  //    console.log("En ngOnInit de datos. ejercicio:"+this.year);
//      this._datosserver.getVentasMes(this.year,this.mes).subscribe(datos => this.ventasSemana = datos);       
  }

}

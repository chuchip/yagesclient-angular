import { Component, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment} from '@angular/router';
import { VentasMes } from '../dao/ventasMes';
import { DatosserverService } from '../services/datosserver.service'
import {VentasSemana } from '../dao/ventasSemana';
import { Observable } from 'rxjs';
import  {HttpErrorResponse} from '@angular/common/http';
@Component({
  selector: 'app-datos-ejercicio',
  templateUrl: './datos-ejercicio.component.html',
  styleUrls: ['./datos-ejercicio.component.css']
})

export class DatosEjercicioComponent  {  
  year:number=0;
  month:number=0;
  ventasMes: VentasMes[];
  ventasSemana: VentasSemana[];
  sinDatos:boolean;
  subscrito:any;
  mensajeErr;

  @ViewChildren('mes') vc;
  
  constructor( private route: ActivatedRoute,
    private router: Router, private _datosserver: DatosserverService) { 
      console.log("En constructor de datosEjercicio");
      this.ventasMes=null;
      this.sinDatos=true;
  }

  ngOnInit() {           
    
    console.log("En ngOnInit de datos. ejercicio:"+this.year);
  
    this.subscrito=this.route.paramMap.subscribe(param => {
      this.cambiaYear(param.get('year'),param.get("month"));
    });
  }
  /**
   * Cambia Año
   * @param year 
   * @param month 
   */
  cambiaYear(year,month)
  {
    this.ventasMes=null;
    this.sinDatos=true; 
    this.year = +year;
    if (!this.year)
    {
      this.router.navigate(['']);
      return;
    }
    this.month=+month;
    if (this.month==0)
      this.month=1;
    this._datosserver.getVentasEjercicio(this.year).subscribe(datos => {
    this.ventasMes = datos.ventasMes;
      this.actualizaMes(this.month)
    },
      error => {        
        this.mensajeErr ="";
        if (error instanceof ErrorEvent) 
          {
            this.mensajeErr = error.error.message;
          }
          else if  (error.status == 404) {
            this.mensajeErr = "No encontrados datos para este ejercicio";
          }else
          {
            this.mensajeErr = "Error status: "+error.status;
          }
        }
      );
  }
 
  actualizaMes(mes)
  {
    this.month=mes
    this._datosserver.getVentasMes(this.year,this.month).subscribe(datos => this.ventasSemana = datos);       
  }
  resetError()
  {
    this.sinDatos=false;
  }
  ngOnDestroy(){
    console.log("Unbsubscrito de Router");
    this.subscrito.unsubscribe();
  }
}

import { Component, OnInit,ViewChildren } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import {AppComponent} from '../app.component'
import { VentasMes } from '../dao/ventasMes';
// import { VENTASMES } from '../mock-ventasMes';
import { DatosserverService } from '../services/datosserver.service'
import { VentasAno } from '../dao/ventasAno';

@Component({
  selector: 'app-datos-ejercicio',
  templateUrl: './datos-ejercicio.component.html',
  styleUrls: ['./datos-ejercicio.component.css']
})

export class DatosEjercicioComponent implements OnInit {
  
  year:number=0;
  month:number=0;
  ventasAno: VentasAno ;
  ventasMes: VentasMes[];
  
  @ViewChildren('mes') vc;
  
   ngAfterViewInit() {  
     // console.log("Despues inicializar vista ejercicio") ;        
     //   this.vc.first.nativeElement.focus();
    }
  constructor( private route: ActivatedRoute,
    private router: Router, private _datosserver: DatosserverService) { 
  }

  ngOnInit() {   
    
  
    this.year = +this.route.snapshot.paramMap.get('year');
    if (!this.year)
    {
      this.router.navigate(['']);
      return;
    }
    this.month = +this.route.snapshot.paramMap.get('month');
    console.log("En ngOnInit de datos. ejercicio:"+this.year);
    this._datosserver.getVentasEjercicio(this.year).subscribe(datos => this.ventasMes = datos.ventasMes);    
   
    //this.ventasAno= this.getVentasAno();
   
  }

  reset()
  {
    console.log("VentasAno: "+this.ventasAno[0] );
    this.router.navigate(['']); 
   }

}

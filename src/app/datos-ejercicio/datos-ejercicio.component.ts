import { Component, OnInit,ViewChildren } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import {AppComponent} from '../app.component'
import { VentasMes } from '../VentasMes';
import { VENTASMES } from '../mock-ventasMes';


@Component({
  selector: 'app-datos-ejercicio',
  templateUrl: './datos-ejercicio.component.html',
  styleUrls: ['./datos-ejercicio.component.css']
})

export class DatosEjercicioComponent implements OnInit {
  
  year:number=0;
  month:number=0;
  ventasAno:Array<VentasMes>;
  
  @ViewChildren('mes') vc;
  
   ngAfterViewInit() {  
     // console.log("Despues inicializar vista ejercicio") ;        
     //   this.vc.first.nativeElement.focus();
    }
  constructor( private route: ActivatedRoute,
    private router: Router) { 
   
  }

  ngOnInit() {   
    

    this.year = +this.route.snapshot.paramMap.get('year');
    if (!this.year)
    {
      this.router.navigate(['']);
      return;
    }
    this.month = +this.route.snapshot.paramMap.get('month');
    this.ventasAno= this.getVentasAno();
  }

  getVentasAno()
  {
    return VENTASMES;
  }
  reset()
  {
    console.log('reset');
    this.router.navigate(['']); 
   }

}

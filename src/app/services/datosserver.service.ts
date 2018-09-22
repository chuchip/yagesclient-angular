import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {VentasAno } from '../dao/ventasAno';
import {VentasSemana } from '../dao/ventasSemana';
@Injectable({
  providedIn: 'root'
})
export class DatosserverService {
    url:string;

  constructor(private _http:HttpClient) { 
    this.url="http://localhost:8080/yagesserver/rest/";
  }
  getVentasEjercicio(year): Observable<VentasAno>
  {
    return this._http.get<VentasAno>(this.url+year);          
  }
  getVentasMes(year,month): Observable<VentasSemana[]>
  {
    return this._http.get<VentasSemana[]>(this.url+year+"/"+month);          
  }

}

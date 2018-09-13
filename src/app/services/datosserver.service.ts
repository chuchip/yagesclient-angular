import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {VentasAno } from '../dao/ventasAno';

@Injectable({
  providedIn: 'root'
})
export class DatosserverService {
    url:string;

  constructor(private _http:HttpClient) { 
    this.url="http://localhost:8080/yagesserver/rest/2018";
  }
  getVentasEjercicio(year): Observable<VentasAno>
  {
    //console.log ("Recogidas ventas del ejercicio");
    return this._http.get<VentasAno>(this.url);    
      
  }
}

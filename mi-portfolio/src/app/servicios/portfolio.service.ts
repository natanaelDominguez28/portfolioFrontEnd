import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http:HttpClient) { }

  /*obtenerDatos():Observable<any> {
    {
    return this.http.get('json');
    }*/
}

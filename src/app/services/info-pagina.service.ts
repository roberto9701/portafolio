import { Injectable } from '@angular/core';
// este servicion sirve para conexiones con servidore externos
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: InfoPagina  = {};
  equipo: any = [];
  cargada = false;

  constructor( private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    // leer json
    this.http.get('assets/data/data-pagina.json')
    .subscribe((resp: InfoPagina) =>
      {
      this.cargada = true;
      this.info = resp;
      // console.log (resp);
    } );

  }

  private cargarEquipo() {
    // leer json
    this.http.get('https://angular-html-25b7d.firebaseio.com/equipo.json')
    .subscribe((resp: any []) => {
      this.cargada = true;
      this.equipo = resp;
      // console.log(resp);
    });
  }

}

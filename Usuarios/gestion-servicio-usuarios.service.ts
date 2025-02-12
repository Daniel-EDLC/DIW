import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuarios } from '../../interfaces/Usuarios';

@Injectable({
  providedIn: 'root'
})
export class GestionServicioUsuariosService {
  private URL = "/";
  constructor(private http: HttpClient) { }

  getUsuarios():Observable<Usuarios[]>{
    return this.http.get<Usuarios[]>(this.URL + "usuarios.json");
  }

  getUsuariosHabilitados():Observable<Usuarios[]>{
    return this.http.get<Usuarios[]>(this.URL + "usuarios.json");
  }

  getUsuariosDeshabilitados():Observable<Usuarios[]>{
    return this.http.get<Usuarios[]>(this.URL + "usuarios.json");
  }

  getUsuariosBloqueados():Observable<Usuarios[]>{
    return this.http.get<Usuarios[]>(this.URL + "usuarios.json");
  }
}

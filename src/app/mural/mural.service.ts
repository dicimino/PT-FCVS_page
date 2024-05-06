import { Fotos } from "./fotos/fotos.model";
import { FCVS_API } from "../app.api";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
//import 'rxjs/add/operator/map'
import {of} from 'rxjs'
import {catchError} from 'rxjs/operators'
import { Comentarios } from "../fotos-detalhes/comentarios/comentarios.model";
import { cadUsuario } from "../cad-usuario/cad-usuario.model";

@Injectable()
export class MuralService {
  
    constructor(private http: HttpClient) {}

    //mural(): Fotos[] {
    mural(): Observable<Fotos[]> {
        //return this.imagens;
        //return this.http.get<Fotos[]>(`${FCVS_API}/fotos`);
        return this.http.get<Fotos[]>(`${FCVS_API}/fotos`).pipe(
          catchError(httpErrorResponse => {
             //realiza algum tratamento...
             return of([])            
          })
        )        
        }

    fotoPorId(id: string): Observable<Fotos> {
      return this.http.get<Fotos>(`${FCVS_API}/fotos/${id}`)
    }


    comentariosFoto(id: string): Observable<Comentarios> {
      //return this.http.get(`${FCVS_API}/comentarios/${id}`)
      //return this.http.get<Comentarios[]>(`${FCVS_API}/comentarios/${id}`)
      
      //return this.http.get(`${FCVS_API}/mural/${id}/comentarios`)

      //return this.http.get(`${FCVS_API}/mural/${id}/comentarios`)
      return this.http.get<Comentarios>(`${FCVS_API}/comentarios/${id}`) /*.pipe(
        catchError(httpErrorResponse => {
           //realiza algum tratamento...
           return of([])            
        })
      )*/
    }
    
        
    }

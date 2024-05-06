import { FCVS_API } from "../app.api";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
//import 'rxjs/add/operator/map'
import {of} from 'rxjs'
import {catchError} from 'rxjs/operators'
import { Comentarios } from "../fotos-detalhes/comentarios/comentarios.model";
import { cadUsuario } from "../cad-usuario/cad-usuario.model";
import { Component, OnInit, Input } from '@angular/core';
import { Usuarios } from './con-usuario.model';

@Injectable()
export class UsuarioService {
  
    constructor(private http: HttpClient) {}

    ListaUsuarios(): Observable<Usuarios[]> {
 
        return this.http.get<Usuarios[]>(`${FCVS_API}/usuarios`).pipe(
          catchError(httpErrorResponse => {
             //realiza algum tratamento...
             return of([])            
          })
        )        
        }
    
        
    }

    
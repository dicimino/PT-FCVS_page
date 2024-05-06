import { Component } from '@angular/core';
import { cadUsuario } from './cad-usuario.model';
import { MuralService } from '../mural/mural.service';
import { FCVS_API } from "../app.api";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpRequest  } from "@angular/common/http";
import { Observable } from "rxjs";
import {of} from 'rxjs'
import {catchError} from 'rxjs/operators'
import { Comentarios } from "../fotos-detalhes/comentarios/comentarios.model";
import { response } from 'express';
import { map } from 'rxjs/operators';
//import { map } from 'rxjs/operators/map';
import { Router } from '@angular/router';

@Component({
  selector: 'FCVS-cad-usuario',
  templateUrl: './cad-usuario.component.html',
  styleUrl: './cad-usuario.component.css'
})
export class CadUsuarioComponent {

  constructor(private http: HttpClient, private router: Router) {}


  AcaoDoBotao(usuario: cadUsuario) {
    
  //console.log(usuario)

  type Header = { [header: string]: string }
  const headers: Header = { 'Content-Type': 'application/json' }
  this.http.post(`${FCVS_API}/usuarios`, 
                                JSON.stringify(usuario), 
                                { headers }).subscribe(usuario => '')

  this.router.navigate(['/con-usuario'])                                
  }


}



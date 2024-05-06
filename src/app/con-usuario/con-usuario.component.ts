import { Component, OnInit, Input } from '@angular/core';
import { Usuarios } from './con-usuario.model';
import { HttpClient } from '@angular/common/http';
import { FCVS_API } from "../app.api";
import { Observable } from 'rxjs';
import { UsuarioService } from './con-usuario.service';


@Component({
  selector: 'FCVS-con-usuario',
  templateUrl: './con-usuario.component.html',
  styleUrl: './con-usuario.component.css'
})
export class ConUsuarioComponent implements OnInit {

  usuarios!: Usuarios[] 

  constructor(private usuarioService: UsuarioService) {  }
  
  ngOnInit() {
    this.usuarioService.ListaUsuarios().subscribe(usuarios => this.usuarios = usuarios)
    //this.fotos = this.muralService.mural()
    //this.http.get<Usuarios[]>(`${FCVS_API}/usuarios`)
    //this.usuarios = listaUsuarios().subscribe(usuarios => this.usuarios = usuarios)
    //console.log(this.muralService.mural().subscribe(fotos => this.fotos = fotos))
  }
}


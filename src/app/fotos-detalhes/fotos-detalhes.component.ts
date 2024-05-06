import { Component, OnInit } from '@angular/core';
import { MuralService } from '../mural/mural.service';
import { ActivatedRoute } from '@angular/router';
import { Fotos, Comentarios } from '../mural/fotos/fotos.model';
import { Observable } from 'rxjs';

/*
import { Fotos } from '../mural/fotos/fotos.model';
import { MuralService } from '../mural/mural.service';
*/
@Component({
  selector: 'FCVS-fotos-detalhes',
  templateUrl: './fotos-detalhes.component.html',
  styleUrl: './fotos-detalhes.component.css'
})
export class FotosDetalhesComponent implements OnInit {
  fotos!: Fotos;
  //comentarios!: Comentarios[]
  comentarios!: Comentarios
  //comentarios!: Observable<any>;

  constructor (private muralService: MuralService, private route: ActivatedRoute) {}
  
  //fotos!: Fotos[]
  
  ngOnInit() {
    this.muralService.fotoPorId(this.route.snapshot.params['id']).subscribe(fotos => this.fotos = fotos)
    this.muralService.comentariosFoto(this.route.snapshot.params['id']).subscribe(comentarios => this.comentarios = comentarios)
    //this.muralService.comentariosFoto(this.route.snapshot.params['id']).subscribe(comentarios => this.comentarios = comentarios)
    //this.comentarios = this.muralService.comentariosFoto(this.route.snapshot.params['id'])
   
    //this.muralService.comentariosFoto(this.route.snapshot.params['id']).subscribe(comentarios => this.comentarios = comentarios)
    //this.muralService.comentariosFoto(this.route.snapshot.params['id']).subscribe(comentarios => this.comentarios = comentarios)
    //this.comentarios = this.muralService.comentariosFoto(this.route.parent?.snapshot.params['id'])
    /*
    this.fotos = this.muralService.mural()
    this.muralService.mural().subscribe(fotos => this.fotos = fotos)
    */
  }

  funcaoMostraObjeto(item: Comentarios) {
    console.log(item)
  }

}

import { Component, OnInit } from '@angular/core';
import { MuralService } from '../../mural/mural.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Comentarios } from './comentarios.model';
import { Input } from '@angular/core';

@Component({
  selector: 'FCVS-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrl: './comentarios.component.css'
})
export class ComentariosComponent implements OnInit {

  @Input() comentarios!: Comentarios
  //comentarios!: Observable<any>
  //comentarios!: Observable<Comentarios>

  //constructor (private muralService: MuralService, private route: ActivatedRoute) {}
  constructor() {}

  ngOnInit() {
    //this.comentarios = this.muralService.comentariosFoto(this.route.snapshot.params['id'])
    //alert(this.route.snapshot.params['id'])
    //this.muralService.comentariosFoto(this.route.snapshot.params['id']).subscribe(comentarios => this.comentarios = comentarios)
    
  }
}

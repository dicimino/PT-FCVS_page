import { Component, OnInit, Input } from '@angular/core';
import { Fotos } from './fotos/fotos.model';
import { MuralService } from './mural.service';

@Component({
  selector: 'FCVS-mural',
  templateUrl: './mural.component.html',
  styleUrl: './mural.component.css'
})
export class MuralComponent implements OnInit {

  fotos!: Fotos[] 
  
  constructor(private muralService: MuralService) {  }
  
  ngOnInit() {
    //this.fotos = this.muralService.mural()
    this.muralService.mural().subscribe(fotos => this.fotos = fotos)
    //console.log(this.muralService.mural().subscribe(fotos => this.fotos = fotos))
  }

  
}

  



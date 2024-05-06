import { Component, Input, OnInit } from '@angular/core';
import { Fotos } from './fotos.model';

@Component({
  selector: 'FCVS-fotos',
  templateUrl: './fotos.component.html',
  styleUrl: './fotos.component.css'
})
export class FotosComponent implements OnInit {

@Input() fotos!: Fotos

constructor() {}

ngOnInit() {

}

}

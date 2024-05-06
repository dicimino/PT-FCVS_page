import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncComentariosComponent } from './inc-comentarios.component';

describe('IncComentariosComponent', () => {
  let component: IncComentariosComponent;
  let fixture: ComponentFixture<IncComentariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IncComentariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

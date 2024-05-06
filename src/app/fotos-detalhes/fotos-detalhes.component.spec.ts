import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotosDetalhesComponent } from './fotos-detalhes.component';

describe('FotosDetalhesComponent', () => {
  let component: FotosDetalhesComponent;
  let fixture: ComponentFixture<FotosDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FotosDetalhesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FotosDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

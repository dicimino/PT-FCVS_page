import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConUsuarioComponent } from './con-usuario.component';

describe('ConUsuarioComponent', () => {
  let component: ConUsuarioComponent;
  let fixture: ComponentFixture<ConUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConUsuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

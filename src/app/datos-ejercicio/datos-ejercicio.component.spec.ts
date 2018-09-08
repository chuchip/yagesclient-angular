import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosEjercicioComponent } from './datos-ejercicio.component';

describe('DatosEjercicioComponent', () => {
  let component: DatosEjercicioComponent;
  let fixture: ComponentFixture<DatosEjercicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosEjercicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosEjercicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

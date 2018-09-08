import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosMesComponent } from './datos-mes.component';

describe('DatosMesComponent', () => {
  let component: DatosMesComponent;
  let fixture: ComponentFixture<DatosMesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosMesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionClendrierComponent } from './gestion-clendrier.component';

describe('GestionClendrierComponent', () => {
  let component: GestionClendrierComponent;
  let fixture: ComponentFixture<GestionClendrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionClendrierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionClendrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

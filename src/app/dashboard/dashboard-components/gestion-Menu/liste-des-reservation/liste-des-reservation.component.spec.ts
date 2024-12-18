import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDesReservationComponent } from './liste-des-reservation.component';

describe('ListeDesReservationComponent', () => {
  let component: ListeDesReservationComponent;
  let fixture: ComponentFixture<ListeDesReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDesReservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeDesReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendrierEmploiComponent } from './calendrier-emploi.component';

describe('CalendrierEmploiComponent', () => {
  let component: CalendrierEmploiComponent;
  let fixture: ComponentFixture<CalendrierEmploiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendrierEmploiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendrierEmploiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

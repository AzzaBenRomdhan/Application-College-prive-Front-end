import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEleveComponent } from './details-eleve.component';

describe('DetailsEleveComponent', () => {
  let component: DetailsEleveComponent;
  let fixture: ComponentFixture<DetailsEleveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsEleveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

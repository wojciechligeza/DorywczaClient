import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJobOffersComponent } from './add-job-offers.component';

describe('AddJobOffersComponent', () => {
  let component: AddJobOffersComponent;
  let fixture: ComponentFixture<AddJobOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddJobOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJobOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

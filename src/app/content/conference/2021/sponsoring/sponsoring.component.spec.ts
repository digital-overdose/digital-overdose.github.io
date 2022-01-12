import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conference2021SponsoringComponent } from './sponsoring.component';

describe('SponsoringComponent', () => {
  let component: Conference2021SponsoringComponent;
  let fixture: ComponentFixture<Conference2021SponsoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Conference2021SponsoringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Conference2021SponsoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

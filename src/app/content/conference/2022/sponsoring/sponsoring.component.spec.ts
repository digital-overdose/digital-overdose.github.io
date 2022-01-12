import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conference2022SponsoringComponent } from './sponsoring.component';

describe('SponsoringComponent', () => {
  let component: Conference2022SponsoringComponent;
  let fixture: ComponentFixture<Conference2022SponsoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Conference2022SponsoringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Conference2022SponsoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

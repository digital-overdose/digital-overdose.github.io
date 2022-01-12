import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conference2021AboutComponent } from './conference.component';

describe('ConferenceComponent', () => {
  let component: Conference2021AboutComponent;
  let fixture: ComponentFixture<Conference2021AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Conference2021AboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Conference2021AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

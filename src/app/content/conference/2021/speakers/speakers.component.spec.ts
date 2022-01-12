import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conference2021SpeakersComponent } from './speakers.component';

describe('SpeakersComponent', () => {
  let component: Conference2021SpeakersComponent;
  let fixture: ComponentFixture<Conference2021SpeakersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Conference2021SpeakersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Conference2021SpeakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

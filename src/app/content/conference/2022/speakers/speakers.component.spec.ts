import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conference2022SpeakersComponent } from './speakers.component';

describe('SpeakersComponent', () => {
  let component: Conference2022SpeakersComponent;
  let fixture: ComponentFixture<Conference2022SpeakersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Conference2022SpeakersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Conference2022SpeakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

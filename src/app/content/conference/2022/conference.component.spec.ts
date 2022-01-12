import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conference2022AboutComponent } from './conference.component';

describe('ConferenceComponent', () => {
  let component: Conference2022AboutComponent;
  let fixture: ComponentFixture<Conference2022AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Conference2022AboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Conference2022AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conference2022ScheduleCardComponent } from './schedule-card.component';

describe('ScheduleCardComponent', () => {
  let component: Conference2022ScheduleCardComponent;
  let fixture: ComponentFixture<Conference2022ScheduleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Conference2022ScheduleCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Conference2022ScheduleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

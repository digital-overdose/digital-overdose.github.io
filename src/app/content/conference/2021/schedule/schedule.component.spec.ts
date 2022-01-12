import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conference2021ScheduleComponent } from './schedule.component';

describe('ScheduleComponent', () => {
  let component: Conference2021ScheduleComponent;
  let fixture: ComponentFixture<Conference2021ScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Conference2021ScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Conference2021ScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

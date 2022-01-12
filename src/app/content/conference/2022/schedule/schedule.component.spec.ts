import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conference2022ScheduleComponent } from './schedule.component';

describe('ScheduleComponent', () => {
  let component: Conference2022ScheduleComponent;
  let fixture: ComponentFixture<Conference2022ScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Conference2022ScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Conference2022ScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

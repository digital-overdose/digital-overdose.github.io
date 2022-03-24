import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleFragmentComponent } from './schedule-fragment.component';

describe('ScheduleFragmentComponent', () => {
  let component: ScheduleFragmentComponent;
  let fixture: ComponentFixture<ScheduleFragmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleFragmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleFragmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

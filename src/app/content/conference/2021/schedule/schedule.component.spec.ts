import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dovercon2021ScheduleComponent } from './schedule.component';

describe('ScheduleComponent', () => {
  let component: Dovercon2021ScheduleComponent;
  let fixture: ComponentFixture<Dovercon2021ScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dovercon2021ScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dovercon2021ScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

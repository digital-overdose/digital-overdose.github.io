import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleBlurbComponent } from './schedule-blurb.component';

describe('ScheduleBlurbComponent', () => {
  let component: ScheduleBlurbComponent;
  let fixture: ComponentFixture<ScheduleBlurbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleBlurbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleBlurbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conference2021TeamComponent } from './team.component';

describe('Dovercon2021TeamComponent', () => {
  let component: Conference2021TeamComponent;
  let fixture: ComponentFixture<Conference2021TeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Conference2021TeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Conference2021TeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

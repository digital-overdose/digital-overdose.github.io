import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conference2022TeamComponent } from './team.component';

describe('Dovercon2021TeamComponent', () => {
  let component: Conference2022TeamComponent;
  let fixture: ComponentFixture<Conference2022TeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Conference2022TeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Conference2022TeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

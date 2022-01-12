import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conference2021CodeOfConductComponent } from './code-of-conduct.component';

describe('Dovercon2021CodeOfConductComponent', () => {
  let component: Conference2021CodeOfConductComponent;
  let fixture: ComponentFixture<Conference2021CodeOfConductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Conference2021CodeOfConductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Conference2021CodeOfConductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

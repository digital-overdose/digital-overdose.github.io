import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conference2022CodeOfConductComponent } from './code-of-conduct.component';

describe('Dovercon2021CodeOfConductComponent', () => {
  let component: Conference2022CodeOfConductComponent;
  let fixture: ComponentFixture<Conference2022CodeOfConductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Conference2022CodeOfConductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Conference2022CodeOfConductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

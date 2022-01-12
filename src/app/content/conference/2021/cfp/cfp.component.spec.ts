import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conference2021CfpComponent } from './cfp.component';

describe('CfpComponent', () => {
  let component: Conference2021CfpComponent;
  let fixture: ComponentFixture<Conference2021CfpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Conference2021CfpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Conference2021CfpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

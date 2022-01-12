import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conference2022CfpComponent } from './cfp.component';

describe('CfpComponent', () => {
  let component: Conference2022CfpComponent;
  let fixture: ComponentFixture<Conference2022CfpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Conference2022CfpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Conference2022CfpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

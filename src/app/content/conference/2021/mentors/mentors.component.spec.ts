import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conference2021MentorsComponent } from './mentors.component';

describe('MentorsComponent', () => {
  let component: Conference2021MentorsComponent;
  let fixture: ComponentFixture<Conference2021MentorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Conference2021MentorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Conference2021MentorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conference2022MentorsComponent } from './mentors.component';

describe('MentorsComponent', () => {
  let component: Conference2022MentorsComponent;
  let fixture: ComponentFixture<Conference2022MentorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Conference2022MentorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Conference2022MentorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

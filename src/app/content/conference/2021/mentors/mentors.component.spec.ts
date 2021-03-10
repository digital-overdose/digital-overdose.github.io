import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dovercon2021MentorsComponent } from './mentors.component';

describe('MentorsComponent', () => {
  let component: Dovercon2021MentorsComponent;
  let fixture: ComponentFixture<Dovercon2021MentorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dovercon2021MentorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dovercon2021MentorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

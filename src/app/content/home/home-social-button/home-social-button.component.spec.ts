import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSocialButtonComponent } from './home-social-button.component';

describe('HomeSocialButtonComponent', () => {
  let component: HomeSocialButtonComponent;
  let fixture: ComponentFixture<HomeSocialButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSocialButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSocialButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

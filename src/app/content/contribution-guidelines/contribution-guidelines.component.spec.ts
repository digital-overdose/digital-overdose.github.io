import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributionGuidelinesComponent } from './contribution-guidelines.component';

describe('ContributionGuidelinesComponent', () => {
  let component: ContributionGuidelinesComponent;
  let fixture: ComponentFixture<ContributionGuidelinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContributionGuidelinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributionGuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceHeaderLogoComponent } from './logo.component';

describe('LogoComponent', () => {
  let component: ConferenceHeaderLogoComponent;
  let fixture: ComponentFixture<ConferenceHeaderLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConferenceHeaderLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceHeaderLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

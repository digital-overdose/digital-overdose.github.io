import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTFLogoComponent } from './logo.component';

describe('LogoComponent', () => {
  let component: CTFLogoComponent;
  let fixture: ComponentFixture<CTFLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CTFLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CTFLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

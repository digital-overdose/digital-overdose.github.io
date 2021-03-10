import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dovercon2021SponsoringComponent } from './sponsoring.component';

describe('SponsoringComponent', () => {
  let component: Dovercon2021SponsoringComponent;
  let fixture: ComponentFixture<Dovercon2021SponsoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dovercon2021SponsoringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dovercon2021SponsoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

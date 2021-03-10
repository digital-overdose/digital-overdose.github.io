import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dovercon2021SpeakersComponent } from './speakers.component';

describe('SpeakersComponent', () => {
  let component: Dovercon2021SpeakersComponent;
  let fixture: ComponentFixture<Dovercon2021SpeakersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dovercon2021SpeakersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dovercon2021SpeakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

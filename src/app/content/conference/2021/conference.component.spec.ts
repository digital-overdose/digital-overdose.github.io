import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dovercon2021AboutComponent } from './conference.component';

describe('ConferenceComponent', () => {
  let component: Dovercon2021AboutComponent;
  let fixture: ComponentFixture<Dovercon2021AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dovercon2021AboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dovercon2021AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

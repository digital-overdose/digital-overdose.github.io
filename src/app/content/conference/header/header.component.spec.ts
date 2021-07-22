import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceNavHeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: ConferenceNavHeaderComponent;
  let fixture: ComponentFixture<ConferenceNavHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConferenceNavHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceNavHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

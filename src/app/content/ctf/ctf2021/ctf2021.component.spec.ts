import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ctf2021Component } from './ctf2021.component';

describe('Ctf2021Component', () => {
  let component: Ctf2021Component;
  let fixture: ComponentFixture<Ctf2021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ctf2021Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ctf2021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

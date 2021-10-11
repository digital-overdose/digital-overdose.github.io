import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ctf2021SpringComponent } from './ctf2021-spring.component';

describe('Ctf2021SpringComponent', () => {
  let component: Ctf2021SpringComponent;
  let fixture: ComponentFixture<Ctf2021SpringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ctf2021SpringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ctf2021SpringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

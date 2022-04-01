import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ctf2022SpringComponent } from './ctf2022-spring.component';

describe('Ctf2022SpringComponent', () => {
  let component: Ctf2022SpringComponent;
  let fixture: ComponentFixture<Ctf2022SpringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ctf2022SpringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ctf2022SpringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

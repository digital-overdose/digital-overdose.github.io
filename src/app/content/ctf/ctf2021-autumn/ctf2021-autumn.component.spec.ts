import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ctf2021AutumnComponent } from './ctf2021-autumn.component';

describe('Ctf2021AutumnComponent', () => {
  let component: Ctf2021AutumnComponent;
  let fixture: ComponentFixture<Ctf2021AutumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ctf2021AutumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ctf2021AutumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

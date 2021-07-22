import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dovercon2021CodeOfConductComponent } from './code-of-conduct.component';

describe('Dovercon2021CodeOfConductComponent', () => {
  let component: Dovercon2021CodeOfConductComponent;
  let fixture: ComponentFixture<Dovercon2021CodeOfConductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dovercon2021CodeOfConductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dovercon2021CodeOfConductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dovercon2021TeamComponent } from './team.component';

describe('Dovercon2021TeamComponent', () => {
  let component: Dovercon2021TeamComponent;
  let fixture: ComponentFixture<Dovercon2021TeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dovercon2021TeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dovercon2021TeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

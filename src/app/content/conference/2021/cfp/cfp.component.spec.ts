import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dovercon2021CfpComponent } from './cfp.component';

describe('CfpComponent', () => {
  let component: Dovercon2021CfpComponent;
  let fixture: ComponentFixture<Dovercon2021CfpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dovercon2021CfpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dovercon2021CfpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

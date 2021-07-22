import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FebHelloWorldComponent } from './feb-hello-world.component';

describe('FebHelloWorldComponent', () => {
  let component: FebHelloWorldComponent;
  let fixture: ComponentFixture<FebHelloWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FebHelloWorldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FebHelloWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

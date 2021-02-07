import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostInventoryDisplayComponent } from './post-inventory-display.component';

describe('PostInventoryDisplay', () => {
  let component: PostInventoryDisplayComponent;
  let fixture: ComponentFixture<PostInventoryDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostInventoryDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostInventoryDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

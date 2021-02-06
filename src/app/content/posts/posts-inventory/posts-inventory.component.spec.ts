import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsInventoryComponent } from './posts-inventory.component';

describe('PostsInventoryComponent', () => {
  let component: PostsInventoryComponent;
  let fixture: ComponentFixture<PostsInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsInventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

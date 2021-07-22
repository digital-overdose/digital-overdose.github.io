import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsNoFilterComponent } from './posts-no-filter.component';

describe('PostsInventoryComponent', () => {
  let component: PostsNoFilterComponent;
  let fixture: ComponentFixture<PostsNoFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsNoFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsNoFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

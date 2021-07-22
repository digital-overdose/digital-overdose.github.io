import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsFilteredByTagComponent } from './posts-filtered-by-tag.component';

describe('PostsFilteredComponent', () => {
  let component: PostsFilteredByTagComponent;
  let fixture: ComponentFixture<PostsFilteredByTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsFilteredByTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsFilteredByTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

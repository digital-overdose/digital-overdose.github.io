import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsFilteredByAuthorComponent } from './posts-filtered-by-author.component';

describe('PostsFilteredByAuthorComponent', () => {
  let component: PostsFilteredByAuthorComponent;
  let fixture: ComponentFixture<PostsFilteredByAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsFilteredByAuthorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsFilteredByAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

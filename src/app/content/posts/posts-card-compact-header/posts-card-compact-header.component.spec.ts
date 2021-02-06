import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsCardCompactHeaderComponent } from './posts-card-compact-header.component';

describe('PostsCardCompactHeaderComponent', () => {
  let component: PostsCardCompactHeaderComponent;
  let fixture: ComponentFixture<PostsCardCompactHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsCardCompactHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsCardCompactHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

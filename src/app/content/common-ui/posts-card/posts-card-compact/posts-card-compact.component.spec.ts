import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsCardCompactComponent } from './posts-card-compact.component';

describe('PostsCardCompactComponent', () => {
  let component: PostsCardCompactComponent;
  let fixture: ComponentFixture<PostsCardCompactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsCardCompactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsCardCompactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

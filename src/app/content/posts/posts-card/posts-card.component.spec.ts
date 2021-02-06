import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsCardComponent } from './posts-card.component';

describe('PostsCardComponent', () => {
  let component: PostsCardComponent;
  let fixture: ComponentFixture<PostsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

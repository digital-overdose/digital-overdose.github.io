import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsCardNormalComponent } from './posts-card-normal.component';

describe('PostsCardComponent', () => {
  let component: PostsCardNormalComponent;
  let fixture: ComponentFixture<PostsCardNormalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsCardNormalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsCardNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

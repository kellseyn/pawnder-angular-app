import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSwipeComponent } from './user-swipe.component';

describe('UserSwipeComponent', () => {
  let component: UserSwipeComponent;
  let fixture: ComponentFixture<UserSwipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSwipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSwipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

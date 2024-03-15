import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedWorkoutComponent } from './shared-workout.component';

describe('SharedWorkoutComponent', () => {
  let component: SharedWorkoutComponent;
  let fixture: ComponentFixture<SharedWorkoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedWorkoutComponent]
    });
    fixture = TestBed.createComponent(SharedWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

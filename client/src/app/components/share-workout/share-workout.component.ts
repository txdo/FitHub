import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { WorkoutService } from 'src/app/services/workout.service';

@Component({
  selector: 'app-share-workout',
  templateUrl: './share-workout.component.html',
  styleUrls: ['./share-workout.component.scss'],
})
export class ShareWorkoutComponent {
  name = new FormControl('');
  exercise = new FormControl('');
  reps = new FormControl('');
  addingExercise: boolean = false;
  addingReps: boolean = false;
  repsIndex: number = 0;
  workout: any = [];

  constructor(private workoutServise: WorkoutService) {}

  toggleAddingExercise(): void {
    this.addingExercise = !this.addingExercise;
  }

  addExercise(): void {
    this.workout.push({ exercise: this.exercise.value, reps: [] });
    this.exercise.setValue('');
    this.toggleAddingExercise();
  }

  toggleAddingReps(idx: number): void {
    this.addingReps = !this.addingReps;
    this.repsIndex = idx;
  }

  addReps(): void {
    this.workout[this.repsIndex].reps.push(this.reps.value);
    this.reps.setValue('');
    this.toggleAddingReps(0);
  }

  saveSharedWorkout(): void {
    this.workoutServise.saveSharedWorkout(this.name.value, this.workout);
  }
}

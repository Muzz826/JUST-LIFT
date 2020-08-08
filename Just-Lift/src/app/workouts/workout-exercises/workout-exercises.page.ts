import { Workout } from './../workout.model';
import { WorkoutsService } from './../workouts.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-workout-exercises',
  templateUrl: './workout-exercises.page.html',
  styleUrls: ['./workout-exercises.page.scss'],
})
export class WorkoutExercisesPage {
  selectedWorkout: Workout;

  constructor(
    activateRoute: ActivatedRoute,
    recipesService: WorkoutsService,
    ) {
    this.selectedWorkout = recipesService.getWorkout(activateRoute.snapshot.params.workoutId);
  }

}

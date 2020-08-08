import { Workout } from './../workout.model';
import { WorkoutsService } from './../workouts.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-workout-exercises',
  templateUrl: './workout-exercises.page.html',
  styleUrls: ['./workout-exercises.page.scss'],
})
export class WorkoutExercisesPage implements OnInit {
  selectedWorkout: Workout;

  constructor(
    activateRoute: ActivatedRoute,
    recipesService: WorkoutsService,
    private router: Router,
    ) {
    this.selectedWorkout = recipesService.getWorkout(activateRoute.snapshot.params.workoutId);
  }

}

ngOnInit() {
  onDeleteWorkout() {
  this.WorkoutsService.deleteWorkout(this.selectedWorkout.id);
  this.router.navigate(['/workouts']);
}
}

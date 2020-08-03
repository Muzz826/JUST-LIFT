import { Workout } from './../workout.model';
import { WorkoutsService } from './../workouts.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-workout-exercises',
  templateUrl: './workout-exercises.page.html',
  styleUrls: ['./workout-exercises.page.scss'],
})
export class WorkoutExercisesPage implements OnInit {
  selectedWorkout: Workout;

  constructor(
    private activatedRoute: ActivatedRoute,
    // tslint:disable-next-line: no-shadowed-variable
    private WorkoutsService: WorkoutsService, ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paraMap => {
      if (!paraMap.has('workoutId')) {
        // redirect
        return;
      }
      const workoutId = paraMap.get('workoutId');
      this.selectedWorkout = this.WorkoutsService.getWorkout(workoutId);

    });
  }

}

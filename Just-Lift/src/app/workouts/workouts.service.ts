import { Injectable } from '@angular/core';
import { Workout } from './workout.model';

@Injectable({
  providedIn: 'root'
})
export class WorkoutsService {
 private workouts: Workout[] = [
    {
      date: '08/03/2020',
      id: 'wo1',
      exercises: 'bicep curls',
      reps: '5',
      sets: '5',
    }
  ];

  constructor() { }

  getAllWorkouts() {
    return [...this.workouts];
  }

  getWorkout(workoutId: string) {
    return {...this.workouts.find(workout => {
      return workout.id === workoutId;
    })};
  }

}

import { Injectable } from '@angular/core';
import { Workout } from './workout.model';

@Injectable({
  providedIn: 'root'
})
export class WorkoutsService {
 private workouts: Workout[] = [
    {
      title: 'Workout: 08/03/2020',
      id: 'wo1',
      exercises: ['bicep curls', 'bench press', ],
      reps: 'Reps: 5',
      sets: 'Sets: 5',
    },

    {
      title: 'Workout: 08/04/2020',
      id: 'wo2',
      exercises: ['bicep curls ', 'bench press ', ],
      reps: 'Reps: 5',
      sets: 'Sets: 5',
    }
  ];

  constructor() { }
// Get all Workouts
  getAllWorkouts() {
    return [...this.workouts];
  }
// Get single workout
  getWorkout(workoutId: string) {
    return {...this.workouts.find(workout => {
      return workout.id === workoutId;
    })};
  }
// delete a workout
  delWorkout(workoutId: string) {
    this.workouts = this.workouts.filter(workout => {
      return workout.id !== workoutId;
    });
  }
}


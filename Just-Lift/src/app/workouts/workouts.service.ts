import { Injectable } from '@angular/core';
import { Workout } from './workout.model';
import { preserveWhitespacesDefault } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class WorkoutsService {
 private workouts: Workout[] = [
    {
      date: '08/03/2020',
      id: 'wo1',
      exercises: ['bicep curls', 'bench press', ],
      reps: '5',
      sets: '5',
    },

    {
      date: '08/04/2020',
      id: 'wo2',
      exercises: ['bicep curls ', 'bench press ', ],
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

  deleteWorkout(workoutId: string) {
    this.workouts = this.workouts.filter(workout => {
      return workout.id !== workoutId;
    })
  }

}

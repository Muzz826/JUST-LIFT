import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkoutServiceService {

  exercises = [];

  constructor() { }

getExercises() {
  return this.exercises;
}

removeExercise(exercise, index) {
  this.exercises.splice(index, 1);
  }

addExercise(exercise) {
  this.exercises.push(exercise);
  }

editExercise(exercise, index) {
  this.exercises[index] = exercise;
  }
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkoutExercisesPage } from './workout-exercises.page';

const routes: Routes = [
  {
    path: '',
    component: WorkoutExercisesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkoutExercisesPageRoutingModule {}

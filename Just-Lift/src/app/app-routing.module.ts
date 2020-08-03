import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'workouts',
    children: [
      {
        path: '',
        loadChildren: () => import('./workouts/workouts.module').then( m => m.WorkoutsPageModule),
      },
      {
        path: ':workoutId',
        loadChildren: () => import('./workouts/workout-exercises/workout-exercises.module').then( m => m.WorkoutExercisesPageModule),
      }
    ]
  },
  {
    path: '',
    redirectTo: 'workouts',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

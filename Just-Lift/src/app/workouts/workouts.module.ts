import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkoutsPageRoutingModule } from './workouts-routing.module';

import { WorkoutsPage } from './workouts.page';
import { Routes, RouterModule, } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: WorkoutsPage,
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkoutsPageRoutingModule,
    RouterModule.forChild(routes),
  ],
  declarations: [WorkoutsPage, ]
})
export class WorkoutsPageModule {}

import { WorkoutsService } from './workouts.service';
import { Component, OnInit } from '@angular/core';
import { Workout } from './workout.model';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.page.html',
  styleUrls: ['./workouts.page.scss'],
})
export class WorkoutsPage implements OnInit {
  workouts: Workout [];

  constructor(private WorkoutsService: WorkoutsService) { }

  ngOnInit() {
    this.WorkoutsService.getAllWorkouts();
  }

}

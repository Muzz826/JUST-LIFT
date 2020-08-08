import { WorkoutsService } from './workouts.service';
import { Component, OnInit } from '@angular/core';
import { Workout } from './workout.model';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.page.html',
  styleUrls: ['./workouts.page.scss'],
})
export class WorkoutsPage implements OnInit {
  workouts: Workout[];

  // tslint:disable-next-line: no-shadowed-variable
  constructor(private WorkoutsService: WorkoutsService) {}

  ngOnInit() {
    this.workouts = this.WorkoutsService.getAllWorkouts();
  }

}

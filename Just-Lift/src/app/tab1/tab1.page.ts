import { Component } from '@angular/core';
import { ToastController, AlertController, NavController } from '@ionic/angular';
import { WorkoutService } from '../workout.service';
import { InputDialogService } from '../input-dialog.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
// variable for changing title of app
  title = 'JUST-LIFT!';

  exercises = [];
  errorMessage: string;


  constructor(
    public toastCtrl: ToastController,
    public alertController: AlertController,
    public dataService: WorkoutService,
    public inputDialogService: InputDialogService,
    public navCtrl: NavController) {
    dataService.dataChanged$.subscribe((dataChanged: boolean) => {
      this.loadExercises();
    });
}

// load exercises on start of the app
ngOnInit() {
  console.log('Loading...');
  this.loadExercises();
}

loadExercises() {
  this.dataService.getExercises()
  .subscribe(
    exercises => this.exercises = exercises,
    error => this.errorMessage = (error as any));
}

async removeExercise(exercise){
  this.dataService.removeExercise(exercise);
}
// edit any poart of inputted exercise
  async editExercise(exercise, index) {
    console.log('Editing ', exercise, index);
    const toast = await this.toastCtrl.create({
      message: 'Editing ' + exercise.name,
      duration: 3000,
      position: 'top'
    });

    toast.present();

    this.inputDialogService.showPrompt(exercise, index);

  }
// displays prompt to be able to add exercises
  addExercise() {
    console.log('Adding Exercise!');
    this.inputDialogService.showPrompt();
  }

}

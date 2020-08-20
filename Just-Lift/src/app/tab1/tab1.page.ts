import { environment, } from './../../environments/environment';
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
  // title variable
  title = 'JUST-LIFT!';

  exercises = [];
  errorMessage: string;


  constructor(
    public toastCtrl: ToastController,
    public alertController: AlertController,
    public dataService: WorkoutService,
    public inputDialogService: InputDialogService,
    public navCtrl: NavController) {
      // Console logs false if using dev env and true if using prod
      console.log(environment.production);
      // Console logs 'this is dev' if dev & 'this is prod' if prod
      console.log(environment.message);
      dataService.dataChanged$.subscribe((dataChanged: boolean) => {
      this.loadExercises();
    });
}


ngOnInit() {
  console.log('Loading...');
  // if in production web browser dev console will show true
  this.loadExercises();
}

loadExercises() {
  this.dataService.getExercises()
  .subscribe(
    exercises => this.exercises = exercises,
    error => this.errorMessage = <any>error);
}

async removeExercise(exercise){
  this.dataService.removeExercise(exercise);
}

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

  addExercise() {
    console.log('Adding Exercise!');
    this.inputDialogService.showPrompt();
  }

}
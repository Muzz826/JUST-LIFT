import { Component } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';
import { WorkoutService } from '../workout.service';
import { InputDialogService } from '../input-dialog.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  title = 'JUST-LIFT!';



constructor(
  private toastCtrl: ToastController,
  private alertController: AlertController,
  public dataService: WorkoutService,
  public inputDialogService: InputDialogService) {

}

ngOnInit() {
}

loadExercises() {
  return this.dataService.getExercises();
}

async removeExercise(exercise, index) {
  console.log('Removing ', exercise, index);
  const toast = await this.toastCtrl.create({
    message: 'Removing ' + exercise.name,
    duration: 3000,
    position: 'top'
  });

  toast.present();

  this.dataService.removeExercise(index, exercise)

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
    console.log('Adding Exercises');
    this.inputDialogService.showPrompt();
  }




}

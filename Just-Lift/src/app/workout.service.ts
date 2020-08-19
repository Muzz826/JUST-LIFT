import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  exercises: any = [];

  dataChanged$: Observable<boolean>;

  private dataChangeSubject: Subject<boolean>;
// local baseURL
  baseURL = 'http://localhost:3000';

  constructor(public http: HttpClient) {
    console.log('WorkoutService works...');

    this.dataChangeSubject = new Subject<boolean>();
    this.dataChanged$ = this.dataChangeSubject.asObservable();
  }

 // Loading all exercises
  getExercises(): Observable<object[]> {
    return this.http.get(this.baseURL + '/api/exercises').pipe(
      map(this.extractData),
      catchError(this.handleError)
      );
  }

  private extractData(res: Response) {
    const body = res;
    return (body || {}) as object[];
  }
// logic used for error handling...
  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  // Used for when removing exercises
  removeExercise(exercise){
    console.log('Remove Exercise - id = ', exercise);
    this.http.delete(this.baseURL + '/api/exercises/' + exercise._id).subscribe(res => {
      this.exercises = res;
      this.dataChangeSubject.next(true);
    });
  }

  // Used for adding exercises
  addExercise(exercise) {
    console.log('Adding exercise = ', exercise);
    this.http.post(this.baseURL + '/api/exercises/', exercise).subscribe(res => {
      this.exercises = res;
      this.dataChangeSubject.next(true);
    });
  }

  // Used for editing exercises
  editExercise(exercise, index){
    console.log('Editing Exercise = ', exercise);
    this.http.put(this.baseURL + '/api/exercises/' + exercise._id, exercise).subscribe(res => {
      this.exercises[index] = res;
      this.dataChangeSubject.next(true);
    });
  }

}

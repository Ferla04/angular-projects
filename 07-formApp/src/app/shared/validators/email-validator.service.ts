import { Injectable } from '@angular/core';
import {  delay, Observable } from 'rxjs';
import { type AbstractControl, AsyncValidator, type ValidationErrors } from '@angular/forms';

@Injectable({providedIn: 'root'})
export class EmailValidator implements AsyncValidator {

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value?.trim().toLowerCase();

    const httpCallObservable = new Observable<ValidationErrors | null>((subscriber) => {
      if (email === 'fer@gmail.com') {
        subscriber.next({ emailTaken: true });
        subscriber.complete();
      }

      subscriber.next(null);
      subscriber.complete();
    })

    return httpCallObservable.pipe(delay(3000));
  }

  // validate(control: AbstractControl): Observable<ValidationErrors | null> {
  //   const email = control.value?.trim().toLowerCase();
  //   console.log(email);


  //   return of({ emailTaken: true }).pipe(delay(3000))
  // }
}

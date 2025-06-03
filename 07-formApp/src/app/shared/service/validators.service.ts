import { Injectable } from '@angular/core';
import { type FormGroup, type FormControl, type ValidationErrors, type AbstractControl } from '@angular/forms';

@Injectable({providedIn: 'root'})
export class ValidatorsService {
  public firstNameAndLastnamePattern: string = '([\u00F1a-zA-Z]+) ([\u00F1a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  public cantBeStrider = (control: FormControl): ValidationErrors | null => {
    const value = control.value?.trim().toLowerCase();

    if (value === 'strider') {
      return {
        noStrider: true,
      };
    }

    return null;
  }

  public isValidField(form: FormGroup, field: string) {
    return form.controls[field].errors && form.controls[field].touched;
  }

  isFieldOneEqualFieldTwo(field1: string, field2: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const field1Value = formGroup.get(field1)?.value;
      const field2Value = formGroup.get(field2);

      if (field1Value !== field2Value?.value) {
        field2Value?.setErrors({ notEqual: true });
        return { notEqual: true };
      }

      field2Value?.setErrors(null);
      return null;
    }
  }

}

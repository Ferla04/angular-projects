import { Component } from '@angular/core';
import { type FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './dynamic-page.component.html',
})
export class DynamicPageComponent {
  public myForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array([
      ['Metal Gear', [Validators.required]],
      ['Call of Duty', [Validators.required]],
    ]),
  });

  public newFavorite = this.fb.control('', Validators.required);

  constructor(private fb: FormBuilder) {}

  get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray;
  }


  onAddFavorite() {
    if (this.newFavorite.invalid) return;

    const newFavoriteControl = this.fb.control(this.newFavorite.value, Validators.required);
    this.favoriteGames.push(newFavoriteControl);
    this.newFavorite.reset();
  }

  onDeleteFavorite(index: number) {
    this.favoriteGames.removeAt(index);
  }

  onSubmit() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    this.myForm.reset();
    this.favoriteGames.clear();
  }

  isValidField(field: keyof typeof this.myForm.controls) {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }

  isValidFieldInArray(formArray: FormArray, index: number) {
    return formArray.controls[index].errors && formArray.controls[index].touched;
  }

  getFieldError(field: keyof typeof this.myForm.controls): string | null {
    if (!this.myForm.controls[field]) return null;
    const errors = this.myForm.controls[field].errors || {};

    for (const element of Object.keys(errors)) {
      switch (element) {
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `Minimo ${errors['minlength'].requiredLength} caracteres`;
        case 'min':
          return `El valor minimo es ${errors['min'].min}`;
      }
    }

    return null;
  }
}

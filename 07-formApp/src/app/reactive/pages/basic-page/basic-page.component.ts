import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
// import { FormControl, FormGroup } from '@angular/forms';

// const rtx = {
//   name: 'RTX 4080',
//   price: 1200,
//   inStorage: 5,
// }

@Component({
  templateUrl: './basic-page.component.html',
})
export class BasicPageComponent{
  // public myForm = new FormGroup({
  //   name: new FormControl(''),
  //   price: new FormControl(0),
  //   inStorage: new FormControl(0),
  // })

  public myForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    inStorage: [0, [Validators.required, Validators.min(0)]],
  })

  constructor(private fb: FormBuilder) {}

  // ngOnInit(): void {
  //   this.myForm.reset(rtx)
  // }

  isValidField(field: keyof typeof this.myForm.controls) {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
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

  onSave() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    this.myForm.reset({ price: 0, inStorage: 0 });
  }
}

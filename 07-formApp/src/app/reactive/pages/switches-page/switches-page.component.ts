import { Component, OnInit } from '@angular/core';
import { FormBuilder, type FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
})
export class SwitchesPageComponent implements OnInit {
  public myForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    wantNotifications: [true, Validators.required],
    termsAndConditions: [false, Validators.requiredTrue],
  })

  public person = {
    gender: 'F',
    wantNotifications: false,
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm.reset(this.person);
  }

  isValidField(field: keyof typeof this.myForm.controls) {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }

  onSave() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    const { termsAndConditions, ...newPerson } = this.myForm.value;
    this.person = newPerson;

    console.log(this.myForm.value);
    this.myForm.reset
  }
}

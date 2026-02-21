import {Component} from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';


@Component({
    selector: 'app-root',
    template: `
    <form [formGroup]="profileForm" (ngSubmit)="handleSubmit()">
      <label>
        Name
        <input type="text" formControlName="name" />
      </label>
      <label>
        Email
        <input type="email" formControlName="email" />
      </label>
      <button type="submit">Submit</button>
    </form>
    <h2>Profile Form</h2>
    <p>Name: {{ profileForm.value.name }}</p>
    <p>Email: {{ profileForm.value.email }}</p>
  `,
    imports: [ReactiveFormsModule],
})
export class App {
    profileForm = new FormGroup({
        name: new FormControl(''),
        email: new FormControl(''),
    });
    handleSubmit() {
        alert(
            this.profileForm.value.name + ' | ' + this.profileForm.value.email
        );
    }
}
import { NgClass } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  private fb = inject(FormBuilder);
  loginForm!: FormGroup;
  @Input() typeLogin = '';
  @Input() isRegistered = false;
  passwordFieldType = 'password';
  pass: string = '123456';
  correo: string = 'inicioprueba@gmail.com';
  telf: string = '+573219631656';

  router = inject(Router);

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form Submitted', this.loginForm.value);
    }
    const { username, password } = this.loginForm.value;
   // const cleanUsername=username.split(" ")
   // console.log(cleanUsername);
    if (this.typeLogin === 'Número de teléfono') {
      if (username === '3219631656' && password === '12345678')
        this.router.navigate(['/home']);
    } else if (username === 'inicioprueba@gmail.com' && password === '12345678') {
      this.router.navigate(['/home']);
    } else {
      alert('invalid');
    }
  }
  togglePasswordVisibility() {
    if (this.passwordFieldType === 'password') {
      this.passwordFieldType = 'text';
    } else {
      this.passwordFieldType = 'password';
    }
  }
}

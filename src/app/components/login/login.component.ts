import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormComponent } from './form/form.component';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgClass, FormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  btnC = true;
  typeAuth = 'Correo electrónico';
  isRegistered = false;

  ngOnInit(): void {
    this.email();
  }

  email() {
    this.btnC = true;
    this.typeAuth = 'Correo electrónico';
    console.log('typeAuth cambiado a :',this.typeAuth);
  }

  telf() {
    this.btnC = false;
    this.typeAuth = 'Número de teléfono';
    console.log('typeAuth cambiado a :',this.typeAuth);
  }
  goLogin(){
    this.isRegistered = !this.isRegistered;
  }
}

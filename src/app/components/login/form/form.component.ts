import { NgClass } from '@angular/common';
import { Component, inject, Input, SimpleChanges } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {ActivatedRoute , Router } from '@angular/router';
import { HttpClient, HttpClientModule, HttpResponse } from '@angular/common/http';
import { firstValueFrom} from 'rxjs';
import { LoginData } from './login.model';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from "../../../shared/notifications/notification.component";


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, HttpClientModule, NotificationComponent, CommonModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);
  private route = inject(ActivatedRoute);
  loginForm!: FormGroup;
  @Input() typeLogin = '';
  @Input() isRegistered = false;
  passwordFieldType = 'password';
  message: string = '';
  messageType: 'success' | 'error' = 'success';
  router = inject(Router);
  codeReferrer: string | null = null;

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params =>{
      this.codeReferrer = params.get('code');
    })
    const formControls = {
      username: ['', [Validators.required, this.userNameValidator(this.typeLogin) , Validators.pattern(/^\d+$/)]],
      password: ['', [Validators.required, this.passwordValidator]],
      newPassword: this.isRegistered ? null : ['', Validators.required] 
    };

    this.loginForm = this.fb.group(formControls, {
      validators: this.passwordMatchValidator(this.isRegistered)
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isRegistered'] && this.loginForm) {
        if (this.isRegistered) {
            if (this.loginForm.get('newPassword')) {
                this.loginForm.removeControl('newPassword');
            }
        } else {
            if (!this.loginForm.get('newPassword')) {
                this.loginForm.addControl('newPassword', this.fb.control('', Validators.required));
            }
        }
    }

    if (changes['typeLogin'] && this.loginForm) {
        const usernameControl = this.loginForm.get('username');
        if (usernameControl) {
            usernameControl.clearValidators();
            usernameControl.setValidators([Validators.required, this.userNameValidator(this.typeLogin)]);
            usernameControl.updateValueAndValidity();
        }
    }
}


  userNameValidator(typeLogin: string) {
    return (control: AbstractControl): { [key: string]: string } | null => {
      const username = control.value;
      const isEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(username);
      const isPhoneNumber = /^\d+$/.test(username);
      console.log(typeLogin);
      if (typeLogin === 'Número de teléfono' && !isPhoneNumber) {
        return { 'usernameInvalid': 'Debe ingresar un número de teléfono válido' };
      }
      if (typeLogin === 'Correo electrónico' && !isEmail) {
        return { 'usernameInvalid': 'Correo inválido' };
      }
      return null;
    };
  }
  passwordValidator( control : AbstractControl):  { [key: string]: string } | null{
    const password = control.value;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumeric = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const isValidLength = password && password.length >= 6;
    if (!isValidLength) {
      return { passwordInvalid: 'La contraseña debe tener al menos 6 caracteres.' };
    }
    if (!hasUpperCase) {
      return { passwordInvalid: 'La contraseña debe tener al menos una mayúscula.' };
    }
    if (!hasLowerCase) {
      return { passwordInvalid: 'La contraseña debe tener al menos una minúscula.' };
    }
    if (!hasNumeric) {
      return { passwordInvalid: 'La contraseña debe tener al menos un número.' };
    }
    if (!hasSpecialChar) {
      return { passwordInvalid: 'La contraseña debe tener al menos un carácter especial.' };
    }
  
  return null;
  }
  passwordMatchValidator(isRegistered: boolean) {
    return (form: FormGroup) => {
        const passwordControl = form.get('password');
        const newPasswordControl = form.get('newPassword');

        if (!isRegistered) {
            if (passwordControl && newPasswordControl) {
                return passwordControl.value === newPasswordControl.value ? null : { 'mismatch': true };
            }
        }
        return null;
    };
}

async onSubmit() {
  console.log('Formulario valido: ', this.loginForm.valid);
  console.log('Errores en el formulario: ', this.loginForm.errors);
  console.log(this.isRegistered);
  console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      
      let loginData : LoginData;
      if (this.isRegistered) {
         loginData = this.typeLogin === 'Número de teléfono'
          ? { email: null, phoneNumber: username, password }
          : { email: username, phoneNumber: null, password };
          try {
            console.log(loginData);
            const response = await this.login(loginData);
            this.message = "Login exitoso";
            localStorage.setItem('token', response);
            this.messageType = 'success';
            setTimeout(()=>{
              this.router.navigate(['../home']);
            },5000)
          } catch (error) {
            this.message = `${error}`;
            this.messageType = 'error';
            setTimeout(()=>{
              this.message = '';
              this.messageType = 'success';
            },2000);
          }
      } else {
        const registerData :LoginData = this.typeLogin === 'Número de teléfono'
          ? { email: null, phoneNumber: username, password, codeReferrer: this.codeReferrer || null }
          : { email: username, phoneNumber: null, password, codeReferrer: this.codeReferrer || null};
          try {
            console.log(registerData);
            const response  = await this.register(registerData);
            console.log(response.status);
            this.message = response.message;
            this.messageType = 'success';
            setTimeout(()=>{
              this.router.navigate(['../home']);
            },5000)
          } catch (error) {
            console.error(error);
            alert(error);
            this.message = `${error}`;
            this.messageType = 'error';
            console.log(this.message);
            setTimeout(()=>{
              this.message = '';
              this.messageType = 'success';
            }, 2000);
          }
        
      }
    }
  }

  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }

  async login(data: { email: string | null; phoneNumber: string | null; password: string }): Promise<any> {
    const url = 'https://meta-xi-api-production.up.railway.app/api/User/Login';
    try {
        const response = await firstValueFrom(this.http.post(url, data, { responseType: 'text' })); // Cambia a 'text'
        return response; 
    } catch (error: any) {
        let errorMsg = 'Error desconocido';
        if (error.error) {
            if (typeof error.error === 'string') {
                errorMsg = error.error;
            } else if (error.error.message) {
                errorMsg = error.error.message;
            }
        }
        throw errorMsg;
    }
}
  async register(data: {email:string | null, phoneNumber:string | null , password : string , codeReferrer? : string | null}) : Promise<any> {
    const url = 'https://meta-xi-api-production.up.railway.app/api/User/UserRegister';
    try {
      const response = await firstValueFrom(this.http.post<any>(url, data, { observe: 'response' }));
      if (response.status === 200) {
        return response.body;
      } else if (response.status === 400) {
        return 'Error: ' + response.body;
      } else if (response.status === 404) {
        return 'Error: ' + response.body;
      } else {
        return 'Error desconocido';
      }
    } catch (error: any) {
      let errorMsg = 'Error desconocido';
      if (typeof error.error === 'string') {
        errorMsg = error.error;
      } else if (error.error && error.error.message) {
        errorMsg = error.error.message;
      }
      throw errorMsg;
    }
}

  allowOnlyNumbers(event: KeyboardEvent): void {
    const Key = event.key;
    if(!/^[0-9]$/.test(Key) && Key !== 'Backspace' && Key !== 'Delete') {
      event.preventDefault();
  }
}
}


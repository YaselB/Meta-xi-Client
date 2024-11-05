import { Component, inject, OnInit} from '@angular/core';
import { BackHomeComponent } from '../../../shared/back-home/back-home.component';
import { AbstractControl,ReactiveFormsModule, FormControl, FormGroup, FormsModule, ValidationErrors, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient , HttpClientModule } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { NotificationService } from '../../../services/products/notification.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-changepass',
  standalone: true,
  imports: [BackHomeComponent, FormsModule, ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './changepass.component.html',
  styleUrl: './changepass.component.scss',
})
export class ChangepassComponent implements OnInit {
  passwordForm!: FormGroup;
  passwordFieldTypeOld = 'password';
  passwordFieldTypeNew = 'password';
  passwordFieldTypeConfirm = 'password';
  message: string = '';
  messageType: 'success' | 'error' = 'success';
  private http = inject(HttpClient);
  router = inject(Router);
  constructor(private notification : NotificationService) {}
  ngOnInit(): void {
    this.passwordForm = new FormGroup(
      {
        oldPassword: new FormControl('', [Validators.required]),
        newPassword: new FormControl('', [Validators.required, this.PasswordValidator]),
        confirmPassword: new FormControl('', [Validators.required])
      },
      {
        validators: this.passwordMatchValidator
      }
    );
    
  }
  async OnSubmit() {
    console.log(this.passwordForm.valid);
    if (this.passwordForm.valid) {
        const username = localStorage.getItem('username') || '';
        const oldPassword = this.passwordForm.get('oldPassword')?.value;
        const newPassword = this.passwordForm.get('newPassword')?.value;
        console.log(username);
        if (!username) {
            this.message = 'El nombre de usuario no está disponible';
            this.messageType = 'error';
            return;
        }
        try {
            const response = await this.ChangePassword({ Username: username, OldPassword: oldPassword, NewPassword: newPassword });
            console.log(response.message);
            this.notification.correct(response.message);
            setTimeout(() => {
                this.router.navigate(['../me']);
            }, 6000);
        } catch (error) {
            this.notification.errorMessage(`${error}`);
        }
    }
}

  PasswordValidator(control: AbstractControl): { [key: string]: string } | null {
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
  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const newPassword = control.get('newPassword')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    if (newPassword && confirmPassword) {
      return newPassword === confirmPassword ? null : { passwordMismatch: "Las contraseñas no coinciden" };
    }
    return null;
  }

  togglePasswordVisibility(field : 'old' | 'new' | 'confirm') {
    if(field === 'old') {
      this.passwordFieldTypeOld = this.passwordFieldTypeOld === 'password' ? 'text' : 'password';
    } else if(field === 'new') {
      this.passwordFieldTypeNew = this.passwordFieldTypeNew === 'password' ? 'text' : 'password';
    } else if(field === 'confirm') {
      this.passwordFieldTypeConfirm = this.passwordFieldTypeConfirm === 'password' ? 'text' : 'password';
    }
  }
  async ChangePassword(data: { Username: string; OldPassword: string; NewPassword: string; }): Promise<any> {
    const url = 'https://meta-xi-api-production.up.railway.app/api/User/UpdatePassword';
    try {
        const response = await firstValueFrom(this.http.patch<any>(url, data, { observe: 'response' }));
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

    
}

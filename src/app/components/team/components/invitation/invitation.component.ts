import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-invitation',
  standalone: true,
  imports: [],
  templateUrl: './invitation.component.html',
  styleUrl: './invitation.component.scss',
})
export class InvitationComponent {
  code : string = '';
  link : string = '';
  username: string = localStorage.getItem('username') || '';    

  constructor(private http: HttpClient){}
  ngOnInit(): void {
    this.GetCode();
  }
  async GetCode() {
    try {
      this.link = await this.GettingCode();
      this.code = this.extractCodeFromUrl(this.link);
      console.log(this.link);
    } catch (error: any) {
      console.error(error.message);
    }
  }
  async GettingCode() : Promise<any> {
    const url = 'https://meta-api-production-3abd.up.railway.app/api/User/GetLink/'+this.username;
    try {
      const response : any = await firstValueFrom(this.http.get(url));
      console.log(response.link)
      return response.link;
    } catch (error : any) {
      let errorMessage = '';
      if (error.error ) {
        if(typeof error.error === 'string') {
          errorMessage = error.error;
        } else if(error.error.message) {
          errorMessage = error.error.message;
        }
        return errorMessage;
      }
    }
  }
  private extractCodeFromUrl(url: string): string {
    const urlParams = new URL(url).searchParams;
    return urlParams.get('code') || '';
  }
  copyToClipboard(text: string, button: HTMLButtonElement): void {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        button.textContent = 'Copied';
        setTimeout(() => {
          button.textContent = 'Copiar';
        }, 1000);
      })
      .catch((err) => {
        console.error('Error al copiar al portapapeles:', err);
      });
  }
}

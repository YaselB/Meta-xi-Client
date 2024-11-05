import { Component, inject , } from '@angular/core';
import { HttpClient , HttpClientModule } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-bar',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './bar.component.html',
  styleUrl: './bar.component.scss'
})
export class BarComponent {
  coin = 0;
  email = localStorage.getItem('username');
  vip=0;
  private http = inject(HttpClient);

  ngOnInit(): void {
    this.GetBalance();
  }
  async GetBalance(){
    try {
      if(this.email !== null){
        this.coin = await this.CallToApiForGetBalance(this.email);
      }else{
        console.log('No hay usuario');
      }
    } catch (error) {
      console.error('Error al obtener el balance: ',error);
    }
    
  }
  async CallToApiForGetBalance(username: string) :Promise<any>{
    const url = 'https://meta-xi-api-production.up.railway.app/api/Wallet/GetBalance/'+username;
    try {
      const response = await firstValueFrom(this.http.get(url));
      console.log(response);
      return response;
    } catch (error : any) {
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
}

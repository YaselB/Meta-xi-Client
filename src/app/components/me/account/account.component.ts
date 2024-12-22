import { Component} from '@angular/core';
import { BackHomeComponent } from '../../../shared/back-home/back-home.component';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [BackHomeComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
})
export class AccountComponent {
  basic = '0.00';
  retiro = '0.00';
  username : string = localStorage.getItem('username') || '';
  constructor(private http: HttpClient) {}
  ngOnInit(): void{
    this.GetParameters();
  }
  async GetParameters(){
    const url = 'https://meta-api-production-3abd.up.railway.app/api/Wallet/GetRechargeAndWithdraw/'+this.username;
    try {
      const response : any = await firstValueFrom(this.http.get(url));
      this.basic = response.recharge;
      this.retiro = response.withdraw;
    } catch (error : any) {
      const response = error.error.message;
      console.error(response);
    }
  }
}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BackHomeComponent } from '../../shared/back-home/back-home.component';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../../services/products/notification.service';
import { TelegramService } from '../../services/products/Telegram.service';

@Component({
  selector: 'app-withdraw',
  standalone: true,
  imports: [BackHomeComponent , FormsModule],
  templateUrl: './withdraw.component.html',
  styleUrl: './withdraw.component.scss',
})
export class WithdrawComponent {
  balance = '0.00';
  username : string = localStorage.getItem('username') || '';
  amount : number | null = null;
  accountNumber : string = '';
  password : string = '';
  withdrawalFee : number = 0;
  AmountToReceive : number = 0;
  constructor(private http: HttpClient,
    private notification : NotificationService,
    private telegram : TelegramService,
  ){}
  ngOnInit(): void{
    this.GetBalance();
  }
  async GetBalance(){
    const url = 'http://localhost:5071/api/Wallet/GetBalance/'+this.username;
    try {
      const response : any = await firstValueFrom(this.http.get(url));
      console.log(response);
      this.balance = response;
    } catch (error : any) {
      let Message = error.error.message;
      console.log(Message);
    }
  }
  CalculateFees(){
    if(this.amount && this.amount >= 20000 && this.amount <= 10000000){
      this.withdrawalFee = this.amount * 0.06;
      this.AmountToReceive = this.amount - this.withdrawalFee;
    }
    else{
      this.withdrawalFee = 0;
      this.AmountToReceive = 0;
    }
  }
  async RequestWithdrawal(){
    const isVerified = await this.VerifyPassword();
    if(isVerified){
      const message = `Withdrawal request:\n\nUsername: ${this.username}\nAccount: ${this.accountNumber}\nAmount: ${this.amount}\nFee: ${this.withdrawalFee}\nAmoutToReceive: ${this.AmountToReceive}`;
      this.telegram.sendMessageToChannel(message);
      this.notification.correct('Solicitud de retiro enviada correctamente');
    }
  }
  async VerifyPassword(): Promise<boolean> {
    const url = 'https://meta-api-production-3abd.up.railway.app/api/User/VerifyPassword';
    const body = {username :this.username, password : this.password};
    try {
      const response : any = await firstValueFrom(this.http.post(url, body));
      console.log(response);
      return true;
    } catch (error : any) {
      const response = error.error.message;
      this.notification.errorMessage(response);
      return false;
    }
  }
}

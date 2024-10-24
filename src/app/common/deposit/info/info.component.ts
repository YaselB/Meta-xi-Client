import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
})
export class InfoComponent implements OnInit {
  @Input('token') token: string = '';
  coin: string = '';
  coin2: string = '';

  ngOnInit() {
    if (this.token === 'usdt-trc20') {
      this.coin = 'USDT';
    } else if (this.token === 'trx') {
      this.coin2 = 'Tron';
      this.coin='TRX'
    }
  }
}

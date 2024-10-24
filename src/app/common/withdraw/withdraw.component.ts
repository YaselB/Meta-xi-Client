import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BackHomeComponent } from '../../shared/back-home/back-home.component';

@Component({
  selector: 'app-withdraw',
  standalone: true,
  imports: [BackHomeComponent],
  templateUrl: './withdraw.component.html',
  styleUrl: './withdraw.component.scss',
})
export class WithdrawComponent {
  balance = '0.00';
}

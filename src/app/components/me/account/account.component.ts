import { Component, Input, OnInit } from '@angular/core';
import { BackHomeComponent } from '../../../shared/back-home/back-home.component';

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

}

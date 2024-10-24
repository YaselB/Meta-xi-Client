import { Component } from '@angular/core';

@Component({
  selector: 'app-selection',
  standalone: true,
  imports: [],
  templateUrl: './selection.component.html',
  styleUrl: './selection.component.scss',
})
export class SelectionComponent {
  teamSize = 0;
  recharge = 0;
  withdraw = 0;
  newTeam = 0;
  rechargeFirst = 0;
  firstWithdraw = 0;
}

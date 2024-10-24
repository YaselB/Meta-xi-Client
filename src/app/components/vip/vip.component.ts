import { Component } from '@angular/core';
import { CardComponent } from '../glasses/card/card.component';
import { NavComponent } from './components/nav/nav.component';

@Component({
  selector: 'app-vip',
  standalone: true,
  imports: [CardComponent,NavComponent],
  templateUrl: './vip.component.html',
  styleUrl: './vip.component.scss',
})
export class VipComponent {
  cliam = '0.00';
  todayMission = 0;
  missions = 0;
}

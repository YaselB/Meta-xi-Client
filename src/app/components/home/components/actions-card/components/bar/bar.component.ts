import { Component } from '@angular/core';

@Component({
  selector: 'app-bar',
  standalone: true,
  imports: [],
  templateUrl: './bar.component.html',
  styleUrl: './bar.component.scss'
})
export class BarComponent {
  coin = 0;
  email = 'algo@mail.com';
  vip=0
}

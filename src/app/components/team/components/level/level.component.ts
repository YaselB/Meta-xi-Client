import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-level',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './level.component.html',
  styleUrl: './level.component.scss',
})
export class LevelComponent {
  

  lvl1 = {
    register: 0,
    commission: 0,
    totalIncome: 0,
  };
  lvl2 = {
    register: 0,
    commission: 0,
    totalIncome: 0,
  };
  lvl3 = {
    register: 0,
    commission: 0,
    totalIncome: 0,
  };
}

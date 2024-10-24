import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from '../../shared/nav/nav.component';
import { ButtonsComponent } from '../../shared/buttons/buttons.component';

@Component({
  selector: 'app-background',
  standalone: true,
  imports: [RouterOutlet, NavComponent, ButtonsComponent],
  templateUrl: './background.component.html',
  styleUrl: './background.component.scss',
})
export class BackgroundComponent {}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-me',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './me.component.html',
  styleUrl: './me.component.scss',
})
export class MeComponent {
  email = 'algo@mail.com';
  monto = '0.00';
  total = 0;
}

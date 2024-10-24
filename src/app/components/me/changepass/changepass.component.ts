import { Component } from '@angular/core';
import { BackHomeComponent } from '../../../shared/back-home/back-home.component';

@Component({
  selector: 'app-changepass',
  standalone: true,
  imports: [BackHomeComponent],
  templateUrl: './changepass.component.html',
  styleUrl: './changepass.component.scss',
})
export class ChangepassComponent {}

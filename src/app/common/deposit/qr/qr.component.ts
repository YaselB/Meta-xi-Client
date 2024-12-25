import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-qr',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './qr.component.html',
  styleUrl: './qr.component.scss',
})
export class QrComponent {
  @Input('token') token: string = '';
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr',
  standalone: true,
  imports: [],
  templateUrl: './qr.component.html',
  styleUrl: './qr.component.scss',
})
export class QrComponent {
  @Input('token') token: string = '';
}

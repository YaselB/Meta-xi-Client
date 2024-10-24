import { Component, Input, OnInit } from '@angular/core';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { NgStyle, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [FileuploadComponent, UpperCasePipe, NgStyle],
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss',
})
export class AddressComponent implements OnInit {
  btnText: string = 'Recarga completada';
  link: string = 'TThr4nZA59XZ5MC8ZPkUdjPa7QAtpAx692';
  @Input('token') token: string = '';
  format: string = 'png';
  minimo = 10;
  ring = 'green';
  currency = 'USDT';
  title='Dirección'

  ngOnInit() {
    if (this.token === 'trx') {
      this.format = 'webp';
      this.minimo = 75;
      this.currency = 'USD';
      this.ring = 'red';
    } else if (this.token === 'paypal') {
      this.link='nicolascastellanosd933@gmail.com'
      this.ring = 'blue';
      this.currency='USD'
      this.title='Correo de Recarga'
    }
  }

  copyToClipboard(text: string, button: HTMLButtonElement): void {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        button.textContent = 'Copied';
        setTimeout(() => {
          button.textContent = 'Copiar';
        }, 1000);
      })
      .catch((err) => {
        console.error('Error al copiar al portapapeles:', err);
      });
  }

  complete() {
    if (this.btnText === 'Recarga completada') {
      this.btnText = 'Confirmar';
    } else if (this.btnText === 'Confirmar') {
      alert('Check picture');
      this.btnText = 'Recarga completada';
    }
  }
}

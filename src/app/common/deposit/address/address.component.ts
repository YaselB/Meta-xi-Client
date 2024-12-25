import { Component, Input, OnInit } from '@angular/core';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { CommonModule, NgStyle, UpperCasePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TelegramService } from '../../../services/products/Telegram.service';

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [FileuploadComponent, UpperCasePipe, NgStyle ,CommonModule],
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
  constructor(private router: ActivatedRoute,
    private telegramService: TelegramService
  ){}

  ngOnInit() {
    if (this.token === 'trx') {
      this.format = 'webp';
      this.minimo = 75;
      this.currency = 'TRX';
      this.ring = 'red';
    } else if (this.token === 'paypal') {
      this.link='nicolascastellanosd933@gmail.com'
      this.ring = 'blue';
      this.currency='USD'
      this.title='Correo de Recarga'
    }
    else if(this.token === "nequi"){
      this.currency = "nequi";
      this.router.queryParams.subscribe(params => {
        this.minimo = +params['cantidad'] || 0; // Convertir a número
      });
      this.ring = 'green';
      this.btnText = 'Enviar Referencia';
      this.title = 'QR';
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
    }else if(this.btnText === 'Enviar Referencia'){
      this.EnviarReferencia();
    }
  }
  EnviarReferencia() {
    const mensaje = `Nueva referencia enviada:\nEnlace: ${this.link}\nMonto: ${this.minimo} ${this.currency}`;
    this.telegramService.sendMessageToChannels(mensaje);
  }
}

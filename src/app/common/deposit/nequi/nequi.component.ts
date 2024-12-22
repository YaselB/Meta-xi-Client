import { DecimalPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { firstValueFrom } from 'rxjs';


@Component({
  selector: 'app-nequi',
  standalone: true,
  imports: [DecimalPipe,FormsModule ,RouterLink],
  templateUrl: './nequi.component.html',
  styleUrl: './nequi.component.scss'
})
export class NequiComponent {
  saldo:number = 100000; 
  cantidadSeleccionada: number = 0;
  username: string = localStorage.getItem('username') || '';
  constructor(private http: HttpClient) { }
  cantidades = [50000, 120000, 250000, 500000, 1000000, 1500000, 3000000, 5000000, 10000000];

  seleccionarCantidad(cantidad: number): void {
    this.cantidadSeleccionada = cantidad;
  }
  ngOnInit() {
    this.getSaldo();
  }

    async getSaldo() {
      const url = `https://meta-api-production-3abd.up.railway.app/api/Wallet/GetBalance/${this.username}`;
      try {
        const response: any = await firstValueFrom(this.http.get(url));
        console.log('Respuesta completa de la API:', response);
        this.saldo = response;
      } catch (error: any) {
        console.error('Error al obtener el balance: ', error);
      }
    }
    
  
  
}

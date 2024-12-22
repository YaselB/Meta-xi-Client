import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-nequi',
  standalone: true,
  imports: [DecimalPipe,FormsModule ,RouterLink],
  templateUrl: './nequi.component.html',
  styleUrl: './nequi.component.scss'
})
export class NequiComponent {
  saldo = 1000000; 
  cantidadSeleccionada: number = 0;
 
  cantidades = [50000, 120000, 250000, 500000, 1000000, 1500000, 3000000, 5000000, 10000000];

  seleccionarCantidad(cantidad: number): void {
    this.cantidadSeleccionada = cantidad;
  }
  
}

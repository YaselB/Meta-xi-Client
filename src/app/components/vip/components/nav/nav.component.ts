import { CommonModule, NgClass } from '@angular/common'; // Import CommonModule

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, NgClass], // Add CommonModule here
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent implements OnInit {
  // Control de estado de botones
  misiones = false;
  tendences = false;
  finalize = false;

   missions = [
    { id: 1, title: 'Invite 3 amigos', goal: 3, progress: 0, claimed: false, reward: 2500 },
    { id: 2, title: 'Invite 5 amigos', goal: 5, progress: 0, claimed: false, reward: 4000 },
    { id: 3, title: 'Compre sus primeras gafas VR', goal: 1, progress: 0, claimed: false, reward: 3000 },
    { id: 4, title: 'Indique a 1 referido a comprar gafas VR', goal: 1, progress: 0, claimed: false, reward: 2500 },
    { id: 5, title: 'Realice su primer depósito', goal: 1, progress: 0, claimed: false, reward: 1500 },
    { id: 6, title: 'Indique a 3 referidos a comprar gafas VR', goal: 3, progress: 0, claimed: false, reward: 5000 },
    { id: 7, title: 'Indique a 5 referidos a comprar gafas VR', goal: 5, progress: 0, claimed: false, reward: 6500 },
    { id: 8, title: 'Realice un depósito superior a 100Mil COP', goal: 100000, progress: 0, claimed: false, reward: 5000 },
    { id: 9, title: 'Indique a 5 referidos a depositar 60Mil COP o más', goal: 5, progress: 0, claimed: false, reward: 12000 },
    { id: 10, title: 'Mantenga 3 gafas VR generando ingresos a la vez', goal: 3, progress: 0, claimed: false, reward: 5000 },
    { id: 11, title: 'Supere los 500Mil COP en su saldo total', goal: 500000, progress: 0, claimed: false, reward: 16000 },
    { id: 12, title: 'Realice su primer retiro', goal: 1, progress: 0, claimed: false, reward: 1000 },
    { id: 13, title: 'Logre que su amigo invite 5 nuevos amigos', goal: 5, progress: 0, claimed: false, reward: 2000 },
    { id: 14, title: 'Agote el suministro máximo de cualquiera de las gafas VR', goal: 1, progress: 0, claimed: false, reward: 5000 },
    { id: 15, title: 'Realice una recarga superior a 800Mil COP', goal: 800000, progress: 0, claimed: false, reward: 16000 },
    { id: 16, title: 'Compre y agote el tiempo de vida de cualquier gafa VR', goal: 1, progress: 0, claimed: false, reward: 2500 },
  ];
  tendency = [
    { id: 1, title: 'Invite 5 referidos en menos de 30 Minutos', goal: 5, progress: 0, claimed: false, reward: 2500 },
    { id: 2, title: 'Consigue que 3 referidos recarguen sus cuentas en menos de 24 horas', goal: 3, progress: 0, claimed: false, reward: 5000 },
    { id: 3, title: 'Completa 3 misiones el mismo día', goal: 3, progress: 0, claimed: false, reward: 2000 },
    { id: 4, title: 'Invite 15 referidos en menos de 1 hora', goal: 15, progress: 0, claimed: false, reward: 3000 },
    { id: 5, title: 'Invite 10 referidos válidos en menos de 24 horas', goal: 10, progress: 0, claimed: false, reward: 5000 },
    { id: 6, title: 'Publique su enlace de referencia en su estado de WhatsApp', goal: 1, progress: 0, claimed: false, reward: 1500 },
    { id: 7, title: 'Consiga que 12 de sus referidos recarguen sus cuentas', goal: 12, progress: 0, claimed: false, reward: 20000 },
    { id: 8, title: 'Invite un amigo a recargar al menos 500Mil COP', goal: 1, progress: 0, claimed: false, reward: 50000 },
  ];
  


  ngOnInit(): void {
    this.getMisiones(); // Inicialmente se muestran todas las misiones
  }

  getMisiones() {
    this.misiones = true;
    this.tendences = false;
    this.finalize = false;// Muestra todas las misiones
  }

  getTendencia() {
    this.tendences = true;
    this.misiones = false;
    this.finalize = false;// Filtra misiones en tendencia
  }

  getTerminadas() {
    this.finalize = true;
    this.tendences = false;
    this.misiones = false;// Filtra misiones completadas
  }
}
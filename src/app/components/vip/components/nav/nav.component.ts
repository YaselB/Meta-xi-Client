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
    { id: 1, title: 'Invita 5 usuarios con recarga', goal: 5, progress: 0, claimed: false, reward: 10000 },
    { id: 2, title: 'Invita 10 usuarios con recarga', goal: 10, progress: 0, claimed: false, reward: 20000 },
    { id: 3, title: 'Invita 20 usuarios con recarga', goal: 20, progress: 0, claimed: false, reward: 20000 },
    { id: 4, title: 'Invita 30 usuarios con recarga', goal: 30, progress: 0, claimed: false, reward: 20000 },
    { id: 5, title: 'Invita 40 usuarios con recarga', goal: 40, progress: 0, claimed: false, reward: 30000 },
    { id: 6, title: 'Invita 50 usuarios con recarga', goal: 50, progress: 0, claimed: false, reward: 30000 },
    { id: 7, title: 'Invita 60 usuarios con recarga', goal: 60, progress: 0, claimed: false, reward: 30000 },
    { id: 8, title: 'Invita 70 usuarios con recarga', goal: 70, progress: 0, claimed: false, reward: 30000 }
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
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
    { id: 1, title: 'Dirige a un referido a comprar el VR3', goal: 1, progress: 0, claimed: false, reward: 4225 },
    { id: 2, title: 'Dirige a un referido a comprar el VR4', goal: 1, progress: 0, claimed: false, reward: 6225 },
    { id: 3, title: 'Dirige a un referido a comprar el VR5', goal: 1, progress: 0, claimed: false, reward: 9250 },
    { id: 4, title: 'Dirige a un referido a comprar el VR6', goal: 1, progress: 0, claimed: false, reward: 12900 }
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
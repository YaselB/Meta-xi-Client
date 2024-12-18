import { NgClass, CommonModule } from '@angular/common'; // Import CommonModule
import { Component, OnInit } from '@angular/core';
import { missions } from './utils/data';

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
  missions = missions;
  filteredMissions = missions; // Para almacenar las misiones filtradas

  ngOnInit(): void {
    this.getMisiones(); // Inicialmente se muestran todas las misiones
  }

  getMisiones() {
    this.misiones = true;
    this.tendences = false;
    this.finalize = false;
    this.filteredMissions = this.missions; // Muestra todas las misiones
  }

  getTendencia() {
    this.tendences = true;
    this.misiones = false;
    this.finalize = false;
    this.filteredMissions = this.missions.filter(mission => mission.status === 'trending'); // Filtra misiones en tendencia
  }

  getTerminadas() {
    this.finalize = true;
    this.tendences = false;
    this.misiones = false;
    this.filteredMissions = this.missions.filter(mission => mission.status === 'completed'); // Filtra misiones completadas
  }
}
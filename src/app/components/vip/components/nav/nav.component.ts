import { CommonModule, NgClass } from '@angular/common'; // Import CommonModule

import { Component, OnInit } from '@angular/core';
import { Mission } from '../../Imisions';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NotificationService } from '../../../../services/products/notification.service';


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
  username = localStorage.getItem('username');
   missions : Mission [] = [];
  
   tendency = [
    { id: 1, title: 'Dirige a un referido a comprar el VR3', goal: 1, progress: 0, claimed: false, reward: 4225 },
    { id: 2, title: 'Dirige a un referido a comprar el VR4', goal: 1, progress: 0, claimed: false, reward: 6225 },
    { id: 3, title: 'Dirige a un referido a comprar el VR5', goal: 1, progress: 0, claimed: false, reward: 9250 },
    { id: 4, title: 'Dirige a un referido a comprar el VR6', goal: 1, progress: 0, claimed: false, reward: 12900 }
  ];
  
  
constructor(private http: HttpClient,
  private notification :NotificationService
) { }

  ngOnInit(): void {
    this.getMisiones();
    this.GetMissions(); // Inicialmente se muestran todas las misiones
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
  async GetMissions() {
    const url = 'https://meta-api-production-3abd.up.railway.app/api/MisionsUser/GetMissions/' + this.username;
    try {
      const response: Mission[] = await firstValueFrom(this.http.get<Mission[]>(url));
      this.missions = response;
      this.misiones = true;
      console.log(this.missions);
    } catch (error: any) {
      console.error('Error al obtener las misiones:', error);
    }
  }
  async Claim(id: number) {
    const url = 'https://meta-api-production-3abd.up.railway.app/api/MisionsUser/LogToClaim';
  
    // Construir el objeto data
    const data = {
      idMission: id,
      username: this.username
    };
  
    try {
      // Realizar la petición POST
      const response = await firstValueFrom(this.http.post(url, data));
      console.log('Respuesta de la API:', response);
      this.notification.correct(`¡Reclamaste la misión correctamente!`);
      setTimeout(()=>
      window.location.reload(),
      7000
      )
    } catch (error: any) {
      console.error('Error al reclamar la misión:', error);
    }
  }

}
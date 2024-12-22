import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-level',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './level.component.html',
  styleUrl: './level.component.scss',
})
export class LevelComponent {
  username : string = localStorage.getItem("username") || '';
  constructor(private http: HttpClient) {}
  ngOnInit(){
    this.GettingRefers();
  };
  async GettingRefers(){
    const url = 'https://meta-api-production-3abd.up.railway.app/api/Refer/GetReferrer/'+this.username;
    try {
      const response: any = await firstValueFrom(this.http.get(url));
      this.lvl1.register = response.quantityRefersLevel1 || 0;
      this.lvl1.totalIncome = response.level1Earnings || 0;
      this.lvl2.register = response.quantityRefersLevel2 || 0;
      this.lvl2.totalIncome = response.level2Earnings || 0;
      this.lvl3.register = response.quantityRefersLevel3 || 0;
      this.lvl3.totalIncome = response.level3Earnings || 0;
    } catch (error) {
      console.error("Error al obtener los referidos", error);
    }
  }
  lvl1 = {
    register: 0,
    totalIncome: 0,
  };
  lvl2 = {
    register: 0,
    totalIncome: 0,
  };
  lvl3 = {
    register: 0,
    totalIncome: 0,
  };
}

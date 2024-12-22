import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-selection',
  standalone: true,
  imports: [],
  templateUrl: './selection.component.html',
  styleUrl: './selection.component.scss',
})
export class SelectionComponent {
  teamSize = 0;
  recharge = 0;
  withdraw = 0;
  newTeam = 0;
  rechargeFirst = 0;
  firstWithdraw = 0;
  username : string = localStorage.getItem("username") || '';
  constructor(private http: HttpClient) {}
  ngOnInit(){
    this.GettingTeamDates();
  }
  async GettingTeamDates (){
    const url = 'https://meta-api-production-3abd.up.railway.app/api/Refer/GetTeamParameters/'+this.username;
    try {
      const response : any = await firstValueFrom(this.http.get(url));
      console.log(response);
      this.teamSize = response.teamSize || 0;
      this.recharge = response.teamRecharge || 0;
      this.newTeam = response.newTeamToday || 0;
      this.rechargeFirst = response.newTeamTodayRecharge || 0;
      this.firstWithdraw = response.teamWithdrawToday || 0;
      this.withdraw = response.teamWithdraw || 0;
    } catch (error) {
      console.error("Error al obtener los datos de la equipo", error);
    }
  }
}


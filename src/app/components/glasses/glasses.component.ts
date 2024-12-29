import { CommonModule, NgClass } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { CardComponent } from './card/card.component';
import { firstValueFrom } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NotificationService } from '../../services/products/notification.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [NgClass, CardComponent , HttpClientModule , RouterLink ,CommonModule],
  templateUrl: './glasses.component.html',
})
export class TasksComponent implements OnInit {
  balance = '0.00';
  todayProfits = 0;
  profits = 0;
  list: any = [];
  mine = true;
  private http = inject(HttpClient);
  username = localStorage.getItem('username');
  private notificationService = inject(NotificationService);
  ngOnInit(): void {
    this.gafasVR();
    this.GetBenefits();
  }
  async GetBenefits() {
    try {
      if(this.username !== null){
        const response = await this.GetBenefitsToServer(this.username);
        this.balance = response.acumulatedTotalBenefit;
        this.profits = response.acumulatedTotalBenefit;
        console.log(this.profits);
        this.todayProfits = response.acumulatedBenefitperHour;
      }else{
        console.log('no hay usuario');
      }
    } catch (error: any) {
      console.error('Error al obtener los beneficios: ',error);
    }
  }
  async gafasVR() {
    try {
      const data = await this.GetPlans();
      // Ordena la lista por idPlan en orden ascendente
      this.list = data.sort((a: any, b: any) => a.idPlan - b.idPlan);
      this.mine = true;
    } catch (error) {
      console.error('Error al obtener los planes: ', error);
    }
  }
  
  async myGafas() {
    try {
      const data = await this.GetMyPlans();
      // Ordena la lista por idPlan en orden ascendente
      this.list = data.sort((a: any, b: any) => a.idPlan - b.idPlan);
      this.mine = false;
    } catch (error) {
      console.error('Error al obtener mis planes: ', error);
    }
  }
  
  async GetMyPlans() : Promise<any>{
    const url = 'https://meta-api-production-3abd.up.railway.app/api/UserPlans/GetUserPlans/'+ this.username;
    try {
      const response = await firstValueFrom(this.http.get(url));
      console.log(response);
      return response;
    } catch (error : any) {
      let errorMsg = 'Error desconocido';
      if (error.error) {
        if (typeof error.error === 'string') {
          errorMsg = error.error;
        } else if (error.error.message) {
          errorMsg = error.error.message;
        }
      }
      throw errorMsg;
    }
  }
  async GetPlans() : Promise<any>{
    const url = 'https://meta-api-production-3abd.up.railway.app/api/Plans/Plans/'+ this.username;
    try {
      const response = await firstValueFrom(this.http.get(url));
      console.log(response);
      return response;
    } catch (error : any) {
      let errorMsg = 'Error desconocido';
      if (error.error) {
        if (typeof error.error === 'string') {
          errorMsg = error.error;
        } else if (error.error.message) {
          errorMsg = error.error.message;
        }
      }
      throw errorMsg;
    }
  }
  async buyPlan(name: string): Promise<void> {
    const url = 'https://meta-api-production-3abd.up.railway.app/api/UserPlans/UserBuyPlans';
    const body = {
      idPlan: name,
      username: this.username
    }
    try {
      const response = await firstValueFrom(this.http.post<any>(url, body));
      if(response)
      this.notificationService.correct(response.message);
    } catch (error: any) {
      let errorMsg = 'Error desconocido';
      if(error.error && error.error.message){
        errorMsg = error.error.message;
      }
      this.notificationService.errorMessage(errorMsg);
    }
  }
  async GetBenefitsToServer(name: string): Promise<any>{
    const url = 'https://meta-api-production-3abd.up.railway.app/api/UserPlans/GetBalaceToUser/'+ this.username;
    try {
      const response = await firstValueFrom(this.http.get(url));
      return response;
    } catch (error : any) {
      let errorMsg = 'Error desconocido';
      if (error.error) {
        if (typeof error.error === 'string') {
          errorMsg = error.error;
        } else if (error.error.message) {
          errorMsg = error.error.message;
        }
      }
      throw errorMsg;
    }
  }
}

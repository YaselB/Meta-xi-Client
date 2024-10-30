import { NgClass } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { CardComponent } from './card/card.component';
import { ProductService } from '../../services/products/products.service';
import { firstValueFrom } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [NgClass, CardComponent , HttpClientModule],
  templateUrl: './glasses.component.html',
})
export class TasksComponent implements OnInit {
  balance = '0.00';
  todayProfits = 0;
  profits = 0;
  list: any = [];
  notMine = true;
  private http = inject(HttpClient);

  private productService = inject(ProductService);

  ngOnInit(): void {
    this.gafasVR();
  }

  async gafasVR() {
   try {
    this.list = await this.GetPlans();
    this.notMine = true;
   } catch (error) {
    console.error('Error al obtener los planes: ',error);
   }
  }

  myGafas() {
    this.list = this.productService.MyGlasses();
    this.notMine = false;
  }
  async GetPlans() : Promise<any>{
    const url = 'http://localhost:5071/api/Plans/Plans';
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
}

import { Component, Input, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {
  @Input() data:any={};
  @Input() mine:any=false
  idPlan: string = '';
  name: string = '';
  price: number = 0;
  maxQuantity: number = 0;
  daysActive: number = 0;
  dailyBenefit: number = 0;
  totalBenefit: number = 0;


  ngOnInit(): void {
    this.cleanData()
  }

  cleanData(){
    const {idPlan, name, price , maxQuantity , daysActive , dailyBenefit , totalBenefit} = this.data;
    this.idPlan = idPlan;
    this.name = name;
    this.price = price;
    this.maxQuantity = maxQuantity;
    this.daysActive = daysActive;
    this.dailyBenefit = dailyBenefit;
    this.totalBenefit = totalBenefit;
  }

  getSrcSet(id: number): string {
    return `
      assets/glasses/vr${id}.png 300w,
      assets/glasses/vr${id}.png 600w,
      assets/glasses/vr${id}.png 1200w
    `;
  }
}

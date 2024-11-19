import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges {
  @Input() data: any;
  @Input() mine: boolean = false;
  @Output() onBuy = new EventEmitter<string>();

  idPlan: string = '';
  name: string = '';
  price: number = 0;
  maxQuantity: number = 0;
  daysActive: number = 0;
  dailyBenefit: number = 0;
  totalBenefit: number = 0;
  daysRemaining: number = 0;
  hourBenefit: number = 0;
  percentage: number = 0;

  ngOnInit(): void {
    this.updateData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] || changes['mine']) {
      this.updateData();
    }
  }

  updateData(): void {
    if (this.mine) {
      this.cleanData();
      console.log("Datos cuando 'mine' es true", this.data);
    } else {
      this.cleanData2();
      console.log("Datos cuando 'mine' es false", this.data);
    }
  }

  cleanData() {
    const { idPlan, name, price, maxQuantity, daysActive, dailyBenefit, totalBenefit } = this.data;
    this.idPlan = idPlan;
    this.name = name;
    this.price = price;
    this.maxQuantity = maxQuantity;
    this.daysActive = daysActive;
    this.dailyBenefit = dailyBenefit;
    this.totalBenefit = totalBenefit;
  }

  cleanData2() {
    const { idPlan, name, percentage, daysRemaining, hourBenefit, dailyBenefit, totalBenefit } = this.data;
    this.idPlan = idPlan;
    this.name = name;
    this.percentage = percentage;
    this.daysRemaining = daysRemaining;
    this.hourBenefit = hourBenefit;
    this.dailyBenefit = dailyBenefit;
    this.totalBenefit = totalBenefit;
  }

  buy() {
    this.onBuy.emit(this.name);
  }
}

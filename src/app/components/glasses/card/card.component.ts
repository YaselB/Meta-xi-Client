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
  id: number = 0;
  name: string = '';
  price: number = 0;
  total: number = 0;
  currency: string = '';

  ngOnInit(): void {
    this.cleanData()
  }

  cleanData(){
    const {id, name, price, total, currency} = this.data;
    this.id = id;
    this.name = name;
    this.price = price;
    this.total = total;
    this.currency = currency;
  }

  getSrcSet(id: number): string {
    return `
      assets/glasses/${id}.png 300w,
      assets/glasses/${id}.png 600w,
      assets/glasses/${id}.png 1200w
    `;
  }
}

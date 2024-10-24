import { NgClass } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { CardComponent } from './card/card.component';
import { ProductService } from '../../services/products/products.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [NgClass, CardComponent],
  templateUrl: './glasses.component.html',
})
export class TasksComponent implements OnInit {
  balance = '0.00';
  todayProfits = 0;
  profits = 0;
  list: any = [];
  notMine = true;

  private productService = inject(ProductService);

  ngOnInit(): void {
    this.gafasVR();
  }

  gafasVR() {
    this.list = this.productService.getGlasses();
    this.notMine = true;
  }

  myGafas() {
    this.list = this.productService.MyGlasses();
    this.notMine = false;
  }
}

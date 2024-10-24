import { Component } from '@angular/core';
import { BarComponent } from './components/bar/bar.component';
import { FinancialComponent } from './components/financial/financial.component';
import { AppComponent } from './components/app/app.component';

const components = [BarComponent, FinancialComponent, AppComponent];

@Component({
  selector: 'app-actions-card',
  standalone: true,
  imports: [components],
  templateUrl: './actions-card.component.html',
  styleUrl: './actions-card.component.scss',
})
export class ActionsCardComponent {}

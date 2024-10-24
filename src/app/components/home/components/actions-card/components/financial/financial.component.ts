import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-financial',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './financial.component.html',
  styleUrl: './financial.component.scss',
})
export class FinancialComponent {}

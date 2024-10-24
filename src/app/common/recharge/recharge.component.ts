import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { BackHomeComponent } from '../../shared/back-home/back-home.component';

@Component({
  selector: 'app-recharge',
  standalone: true,
  imports: [BackHomeComponent,RouterLink],
  templateUrl: './recharge.component.html',
  styleUrl: './recharge.component.scss',
})
export class RechargeComponent {

  private router=inject(Router)
  
  goToView(token:string){
    this.router.navigate(['/deposit',token]);
  }
}

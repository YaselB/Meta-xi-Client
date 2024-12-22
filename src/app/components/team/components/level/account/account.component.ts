import { Component, Input } from '@angular/core';
import { BackHomeComponent } from '../../../../../shared/back-home/back-home.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [BackHomeComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
})
export class AccountComponent {
  basic = '0.00';
  retiro = '0.00';
  @Input('lvl') lvl!: number

  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.route.params.subscribe(params =>{
      this.lvl = + params['lvl']
    });
    this.route.queryParams.subscribe(queryparams =>{
      this.retiro = queryparams['ingreso'] || 0.00;
      console.log(this.retiro);
    });
  }
}

import { Component, Input } from '@angular/core';
import { BackHomeComponent } from '../../../../shared/back-home/back-home.component';
import { QrComponent } from '../../qr/qr.component';
import { AddressComponent } from '../address.component';
import { InfoComponent } from '../../info/info.component';


@Component({
  selector: 'app-nequi-component',
  templateUrl: './nequi-confirmation.component.html',
  styleUrls: ['./nequi-confirmation.component.scss'],
  imports: [BackHomeComponent,
    QrComponent,
    AddressComponent,
    InfoComponent
  ],
  standalone : true,
})
export class NequiConfirmationComponent {
  @Input('token') token: string = '';	
  montoRecarga: number = 0;

  ngOnInit() {
   console.log(this.token);
  }
}
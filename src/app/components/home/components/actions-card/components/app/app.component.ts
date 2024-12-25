import { Component } from '@angular/core';
import { NotificationService } from '../../../../../../services/products/notification.service';

@Component({
  selector: 'app-app',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private notificationService: NotificationService) {}

  notifyCreation() {
    this.notificationService.showCustomMessage(
      'En proceso de creación ⚒',
      '#6a0dad', // Color morado o el color oscuro deseado
    );
  }
}

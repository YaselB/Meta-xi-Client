import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.scss'
})
export class ActivityComponent {
  private router=inject(Router);

  client(){
    window.open('https://t.me/MetaBox2208', '_blank');
  }

  support(){
    window.open('https://t.me/MetaBox_Chat', '_blank');
  }

  youtube(){
    window.open('https://www.youtube.com/@MetaBox-l4l', '_blank');
  }
}

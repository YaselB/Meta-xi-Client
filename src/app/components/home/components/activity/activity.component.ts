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
    window.open('https://t.me/xll2208 ', '_blank');
  }

  support(){
    window.open('https://t.me/IndexVerse', '_blank');
  }

  youtube(){
    window.open('https://www.youtube.com/@IndexVerseVR', '_blank');
  }
  canal(){
    window.open('https://t.me/IndexVerseVR', '_blank');
  }
}

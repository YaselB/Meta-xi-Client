import { Component, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss',
})
export class ButtonsComponent implements OnInit {
  isLogined = false;

  private router = inject(Router);
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isLogined = event.urlAfterRedirects === '/login';
      }
    });
  }
}

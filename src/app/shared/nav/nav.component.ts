import { NgClass } from '@angular/common';
import { Component, HostListener, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NgClass],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent implements OnInit {
  isMeRoute = false;
  isScrolled = false;
  isLogined = false;

  private router = inject(Router);

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isLogined = event.urlAfterRedirects === '/login';
        if (!this.isLogined) {
          this.isMeRoute = event.urlAfterRedirects === '/me';
        }
      }
    });
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 0;
  }
}

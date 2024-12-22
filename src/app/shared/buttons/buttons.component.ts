import { Component, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss',
})
export class ButtonsComponent implements OnInit {
  isLogined = false;
  articleIcon = 'assets/icons/gafas.png';
  homeIcon = 'assets/buttons/home.svg';
  teamIcon = 'assets/icons/manos.png';
  meIcon = 'assets/icons/persona.png';
  vipIcon = 'assets/icons/dinero.png';
  selectedButton: string = '';  // Almacena el botón seleccionado

  private router = inject(Router);
  
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isLogined = event.urlAfterRedirects === '/login';
      }
    });
  }

  // Método para cambiar el icono del botón seleccionado
  changeIcon(selectedButton: string) {
    this.selectedButton = selectedButton;  // Guardar el botón seleccionado
    console.log(this.selectedButton);
    if (selectedButton === 'article') {
      this.articleIcon = 'assets/iconoscolor/gafas.png'; 
      this.homeIcon = 'assets/buttons/home.svg';
      this.teamIcon = 'assets/icons/manos.png';
      this.meIcon = 'assets/icons/persona.png';
      this.vipIcon = 'assets/icons/dinero.png';
    } else if(this.selectedButton === 'home'){
      this.articleIcon = 'assets/icons/gafas.png';
      this.homeIcon = 'assets/iconoscolor/casa.png';
      this.teamIcon = 'assets/icons/manos.png';
      this.meIcon = 'assets/icons/persona.png';
      this.vipIcon = 'assets/icons/dinero.png';
    } 
    else if(this.selectedButton === 'team'){
      this.articleIcon = 'assets/icons/gafas.png';
      this.homeIcon = 'assets/buttons/home.svg';
      this.teamIcon = 'assets/iconoscolor/manos.png';
      this.meIcon = 'assets/icons/persona.png';
      this.vipIcon = 'assets/icons/dinero.png';
    } 
    else if(this.selectedButton === 'vip'){
      this.articleIcon = 'assets/icons/gafas.png';
      this.homeIcon = 'assets/buttons/home.svg';
      this.teamIcon = 'assets/icons/manos.png';
      this.meIcon = 'assets/icons/persona.png';
      this.vipIcon = 'assets/iconoscolor/dinero.png';
    }
    else if(this.selectedButton === 'me'){
      this.articleIcon = 'assets/icons/gafas.png';
      this.homeIcon = 'assets/buttons/home.svg';
      this.teamIcon = 'assets/icons/manos.png';
      this.meIcon = 'assets/iconoscolor/persona.png';
      this.vipIcon = 'assets/icons/dinero.png';
    }
    }
  }



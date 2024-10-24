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
  articleIcon = 'assets/icons/gafas.png';  // Imagen por defecto para "Artículos"
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
      this.articleIcon = 'assets/buttons/gafas 1.png';  // Cambiar a gafa 3 cuando se selecciona "Artículos"
    } else {
      this.articleIcon = 'assets/icons/gafas.png';  // Cambiar a gafas.png cuando se selecciona otro botón
    }
  }
}


import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NgClass],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent implements OnInit{
  misiones = false;
  tendences = false;
  finalize = false;


  ngOnInit(): void {
    this.getMisiones()
  }

  getMisiones() {
    this.misiones = true;
    this.tendences = false;
    this.finalize = false;
  }

  getTendencia() {
    this.tendences = true;
    this.misiones = false;
    this.finalize = false;
  }
  getTerminadas() {
    this.finalize = true;
    this.tendences = false;
    this.misiones = false;
  }
}

import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgClass],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {

  current: number = 1;

  public slides: any[] = [
    { src: 'assets/images/movil/1.jpg' },
    { src: 'assets/images/movil/2.jpg' },
    { src: 'assets/images/movil/3.jpg' },
    { src: 'assets/images/movil/4.jpg' },
  ];



  ngOnInit(): void {
      this.startAutoSlide();
  }

  startAutoSlide() {
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide() {
    if (this.current === this.slides.length - 1) {
      this.current = 0;
      return;
    }
    this.current = this.current + 1;
  }

  prevSlide() {
    if (this.current === 0) {
      this.current = this.slides.length - 1;
      return;
    }
    this.current = this.current - 1;
  }
}

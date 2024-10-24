import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  ngOnInit(): void {
    const galleryContainer = document.querySelector('.gallery');
    const galleryItems = document.querySelectorAll('.gallery-item');

    class Carousel {
      carouselContainer: any;
      carouselArray: any;

      constructor(container: any, items: any) {
        this.carouselContainer = container;
        this.carouselArray = [...items];
      }

      updateGallery() {
        this.carouselArray.forEach((el: any) => {
          el.classList.remove('gallery-item-1');
          el.classList.remove('gallery-item-2');
          el.classList.remove('gallery-item-3');
        });

        this.carouselArray.slice(0, 3).forEach((el: any, i: number) => {
          el.classList.add(`gallery-item-${i + 1}`);
        });
      }

      setCurrentState() {
        this.carouselArray.push(this.carouselArray.shift());
        this.updateGallery();
      }

      autoSlide() {
        setInterval(() => {
          this.setCurrentState();
        }, 2000); 
      }
    }

    const exampleCarousel = new Carousel(galleryContainer, galleryItems);
    exampleCarousel.updateGallery();
    exampleCarousel.autoSlide();
  }
}

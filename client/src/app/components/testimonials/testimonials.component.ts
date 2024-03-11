import { Component } from '@angular/core';

type Testimonial = {
  imgUrl: string;
  testimonial: string;
  author: string;
};

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      imgUrl: '../../../assets/testimonial1.jpg',
      testimonial:
        '"FitHub transformed my approach to fitness. The personalized plans and community support kept me motivated, and I achieved goals I never thought possible."',
      author: '- Jessica T.',
    },
    {
      imgUrl: '../../../assets/testimonial2.jpg',
      testimonial:
        '"As a fitness enthusiast, I appreciate the attention to detail in the workout tracking. FitHub adapts to my evolving goals, making it an essential part of my routine."',
      author: '- Sarah L.',
    },
    {
      imgUrl: '../../../assets/testimonial3.jpg',
      testimonial:
        '"I\'ve tried various fitness apps, but FitHub stands out. The progress analytics are insightful, and the community feels like a virtual gym buddy cheering me on."',
      author: '- Alex M.',
    },
  ];

  slide: number = 0;
  scrollable: boolean = true;

  nextSlide() {
    if (!this.scrollable) return;
    this.scrollable = false;
    if (this.slide < this.testimonials.length - 1) {
      this.slide++;
    } else {
      this.slide = 0;
    }
    setTimeout(() => {
      this.scrollable = true;
    }, 500);
  }

  prevSlide() {
    if (!this.scrollable) return;
    this.scrollable = false;
    if (this.slide > 0) {
      this.slide--;
    } else {
      this.slide = this.testimonials.length - 1;
    }
    setTimeout(() => {
      this.scrollable = true;
    }, 500);
  }
}

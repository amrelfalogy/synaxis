import { Component, HostListener } from '@angular/core';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  faInstagram = faInstagram;
  faWhatsapp = faWhatsapp;
  faFacebook = faFacebook;
  faTwitter = faTwitter;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = document.querySelectorAll('.section');

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // If the section is in view, add the 'visible' class
      if (sectionTop < windowHeight - 100) {
        section.classList.add('visible');
      }
    });
  }
}

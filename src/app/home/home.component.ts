import { Component, HostListener } from '@angular/core';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { LanguageService } from '../services/languages.service';

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
  isArabic: boolean = false;
  

  noProperties = false;
  noCars = false;
  noJobs = false;

get allEmpty(): boolean {
  return this.noProperties && this.noCars && this.noJobs;
}

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe((lang) => {
      this.isArabic = lang === 'ar';
    });
    this.revealSections(); // Reveal sections on initial load
    setTimeout(() => {
      
      this.revealSections(); // Show after ready
    }, 500);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.revealSections(); // Reveal sections on scroll
  }

  private revealSections() {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (sectionTop < windowHeight - 100) {
        section.classList.add('visible');
      }
    });
  }
}
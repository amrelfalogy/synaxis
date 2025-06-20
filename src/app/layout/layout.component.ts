import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import { CartComponent } from '../cart/cart.component';
import { LanguageService } from '../services/languages.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  isHomePage: boolean = false;
  isAtTop: boolean = true;
  isAtNewsPage: boolean = false;
  isAtPoliciesPage: boolean = false;
  isNavbarVisible = true;
  isNavbarCollapsed = false;
  lastScrollTop = 0;
  activeLink: string = 'home';
  faInstagram = faInstagram;
  faWhatsapp = faWhatsapp;
  currentYear = new Date().getFullYear();
  currentLang: string = 'en';

  constructor(
    private router: Router,
    public cartComponent: CartComponent,
    private elRef: ElementRef,
    private languageService: LanguageService
  ) {}

  onLanguageChange(lang: string): void {
    this.languageService.changeLanguage(lang);
    console.log(`Language changed to: ${lang}`);
  }
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
      const url = this.router.url;

      this.isHomePage = url === '/home' || url === '/';
      this.isAtPoliciesPage = url === '/privacy-policy' || url === '/terms-conditions';
      this.isAtNewsPage = url.includes('/news'); 
    }
    });
    this.languageService.currentLanguage$.subscribe((lang) => {
      this.currentLang = lang;
    });
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;

    this.isAtTop = currentScroll === 0;
    if (currentScroll > this.lastScrollTop) {
      // Scrolling down
      this.isNavbarVisible = false;
    } else {
      // Scrolling up
      this.isNavbarVisible = true;
    }
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }
  onCartClick(): void {
    this.cartComponent.toggleVisibility();
  }
  setActiveLink(link: string): void {
    this.activeLink = link;
  }
  toggleNavbar(): void {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
  collapseNavbar() {
    const navbarToggle =
      this.elRef.nativeElement.querySelector('.navbar-collapse');
    if (navbarToggle && navbarToggle.classList.contains('show')) {
      navbarToggle.classList.remove('show');
    }
  }
}

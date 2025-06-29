import { Component, OnInit } from '@angular/core';
import { LanguageService } from './services/languages.service';
import { ViewportScroller } from '@angular/common';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isLoading = true;
  
  title = 'Synaxis';

  constructor(
    private languageService: LanguageService,
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    },
      2000
    );
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (!event.url.includes('#')) {
          this.viewportScroller.scrollToPosition([0, 0]);
        }
      }
    });
  }

  changeLanguage(lang: string) {
    this.languageService.changeLanguage(lang);
  }
}

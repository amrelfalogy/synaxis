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
  title = 'Synaxis';

  constructor(
    private languageService: LanguageService,
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.viewportScroller.scrollToPosition([0, 0]);
      }
    });
  }

  changeLanguage(lang: string) {
    this.languageService.changeLanguage(lang);
  }
}

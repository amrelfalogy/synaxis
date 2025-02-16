import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private languageSubject = new BehaviorSubject<string>('en'); // Default language
  currentLanguage$ = this.languageSubject.asObservable();

  constructor(private translateService: TranslateService) {
    const userLang =
      localStorage.getItem('lang') || navigator.language.split('-')[0] || 'en';
    this.setLanguage(userLang);
  }

  changeLanguage(lang: string): void {
    localStorage.setItem('lang', lang); // Save user preference
    this.setLanguage(lang);
  }

  private setLanguage(lang: string): void {
    this.translateService.use(lang); // Set active language
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr'); // Set direction
    this.languageSubject.next(lang);
  }
}

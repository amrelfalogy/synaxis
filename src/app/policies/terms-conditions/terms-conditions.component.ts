import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.css']
})
export class TermsConditionsComponent {
 title: string = '';
  sections: any[] = [];

    constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.loadTranslations();

    // Reload on language change
    this.translate.onLangChange.subscribe(() => {
      this.loadTranslations();
    });
  }

  loadTranslations() {
    this.translate.get('terms_conditions.title').subscribe((res: string) => {
      this.title = res;
    });
    this.translate.get('terms_conditions.sections').subscribe((res: any[]) => {
      this.sections = res;
    });
  }
  
}

import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent {
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
    this.translate.get('privacy_policy.title').subscribe((res: string) => {
      this.title = res;
    });
    this.translate.get('privacy_policy.sections').subscribe((res: any[]) => {
      this.sections = res;
    });
  }
  
}

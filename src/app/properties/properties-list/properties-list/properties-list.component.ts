import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../../services/property.service';
import { LanguageService } from 'src/app/services/languages.service';

@Component({
  selector: 'app-properties-list',
  templateUrl: './properties-list.component.html',
  styleUrls: ['./properties-list.component.css'],
})
export class PropertiesListComponent implements OnInit {
  properties: any[] = [];
  displayedProperties: any[] = [];
  isArabic: boolean = false;
  isLoading: boolean = true;
  noProperties = false;
  visibleCount = 3; // Number of properties to show initially

  constructor(
    private propertyService: PropertyService,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.fetchApprovedProperties();
    this.languageService.currentLanguage$.subscribe((lang) => {
      this.isArabic = lang === 'ar';
    });
  }

  fetchApprovedProperties(): void {
    this.propertyService.getApprovedProperties().subscribe({
      next: (properties) => {
        this.isLoading = false;
        if (properties.length === 0) {
          this.noProperties = true;
        } else {
          this.properties = properties;
          this.displayedProperties = this.properties.slice(
            0,
            this.visibleCount
          );
        }
      },
      error: (error) => {
        console.error('Error fetching properties:', error);
        this.isLoading = false;
        this.noProperties = true;
      },
    });
  }

  showMore(): void {
    this.visibleCount += 3; // Load 3 more properties each time
    this.displayedProperties = this.properties.slice(0, this.visibleCount);
  }
}

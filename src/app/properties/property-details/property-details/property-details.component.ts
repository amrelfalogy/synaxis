import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from '../../../services/property.service';
import { Clipboard } from '@angular/cdk/clipboard';

declare var bootstrap: any; // Import Bootstrap for modal handling

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css'],
})
export class PropertyDetailsComponent implements OnInit {
  property: any;
  mainImage: string = '';
  galleryImages: string[] = [];
  shareUrl: string = '';
  encodedShareUrl: string = '';
  showShareOptions: boolean = false;
  linkCopied = false;
  currentImageIndex: number = 0;

  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyService,
    private clipboard: Clipboard
  ) {}

  toggleShareOptions() {
    this.showShareOptions = !this.showShareOptions;
  }

  ngOnInit(): void {
    const propertyId = this.route.snapshot.paramMap.get('id');
    if (propertyId) {
      this.fetchProperty(propertyId);
    }

    this.shareUrl =
      window.location.origin + '/properties/details/' + propertyId;
    this.encodedShareUrl = encodeURIComponent(this.shareUrl);
  }

  fetchProperty(id: string): void {
    this.propertyService.getPropertyById(id).subscribe({
      next: (property) => {
        this.property = property;

        if (property?.images?.length > 0) {
          this.mainImage = property.images[0];
          this.galleryImages = property.images.slice(1);
        }
      },
      error: (err) => {
        console.error('Error fetching property details:', err);
      },
    });
  }

  swapMainImage(index: number): void {
    const temp = this.mainImage;
    this.mainImage = this.galleryImages[index];
    this.galleryImages[index] = temp;
  }

  copyLink(): void {
    this.clipboard.copy(this.shareUrl);
    alert('Link copied to clipboard!');
  }
    isArabicText(text: string): boolean {
  const arabicRegex = /[\u0600-\u06FF]/;
  return arabicRegex.test(text);
}

getCardDirection(job: any): 'rtl' | 'ltr' {
  const titleIsArabic = this.isArabicText(job.title || '');
  const descriptionIsArabic = this.isArabicText(job.description || '');
  return titleIsArabic || descriptionIsArabic ? 'rtl' : 'ltr';
}
}

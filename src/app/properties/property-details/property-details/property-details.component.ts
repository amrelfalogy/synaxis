import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from '../../../services/property.service';
import { Clipboard } from '@angular/cdk/clipboard';

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
  showShareOptions: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyService,
    private clipboard: Clipboard
  ) {}

  ngOnInit(): void {
    const propertyId = this.route.snapshot.paramMap.get('id');
    if (propertyId) {
      this.fetchProperty(propertyId);
    }
    this.shareUrl =
      window.location.origin + '/properties/details/' + propertyId;
  }

  toggleShareOptions() {
    this.showShareOptions = !this.showShareOptions;
  }
  copyLink() {
    this.clipboard.copy(this.shareUrl);
    alert('Link copied to clipboard!');
  }

  fetchProperty(id: string): void {
    this.propertyService.getPropertyById(id).subscribe({
      next: (property) => {
        console.log('Fetched Property:', property); // Debugging
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
}

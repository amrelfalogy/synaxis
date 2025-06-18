import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../../../services/car.service';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css'],
})
export class CarDetailsComponent implements OnInit {
  car: any;
  mainImage: string = '';
  galleryImages: string[] = [];
  shareUrl: string = '';
  encodedShareUrl: string = '';
  showShareOptions: boolean = false;
  linkCopied = false;
  currentImageIndex: number = 0;

  constructor(
    private route: ActivatedRoute,
    private carService: CarService,
    private clipboard: Clipboard
  ) {}

  toggleShareOptions() {
    this.showShareOptions = !this.showShareOptions;
  }

  ngOnInit(): void {
    const carId = this.route.snapshot.paramMap.get('id');
    if (carId) {
      this.fetchCar(carId);
    }

    this.shareUrl = window.location.origin + '/cars/details/' + carId;
    this.encodedShareUrl = encodeURIComponent(this.shareUrl);
  }

  fetchCar(id: string): void {
    this.carService.getCarById(id).subscribe({
      next: (car) => {
        this.car = car;
        if (car?.images?.length > 0) {
          this.mainImage = car.images[0];
          this.galleryImages = car.images.slice(1);
        }
      },
      error: (err) => {
        console.error('Error fetching car details:', err);
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
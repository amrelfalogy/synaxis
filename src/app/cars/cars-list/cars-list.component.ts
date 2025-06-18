import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CarService } from '../../services/car.service';
import { LanguageService } from 'src/app/services/languages.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css'],
})
export class CarsListComponent implements OnInit {
  cars: any[] = [];
  displayedCars: any[] = [];
  isArabic: boolean = false;
  isLoading: boolean = true;
  noCars = false;
  visibleCount = 3; // Number of cars to show initially

  @Output() empty = new EventEmitter<boolean>();
  
  constructor(
    private carService: CarService,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.fetchApprovedCars();
    this.languageService.currentLanguage$.subscribe((lang) => {
      this.isArabic = lang === 'ar';
    });
  }

  fetchApprovedCars(): void {
    this.carService.getApprovedCars().subscribe({
      next: (cars) => {
        this.isLoading = false;
        if (!cars || cars.length === 0) {
          this.noCars = true;
          this.empty.emit(true);
        } else {
          this.cars = cars;
          this.displayedCars = this.cars.slice(0, this.visibleCount);
          this.noCars = false;
          this.empty.emit(false); // Emit not empty
        }
      },
      error: (error) => {
        console.error('Error fetching cars:', error);
        this.isLoading = false;
        this.noCars = true;
        this.empty.emit(true);
      },
    });
  }

  showMore(): void {
    this.visibleCount += 3;
    this.displayedCars = this.cars.slice(0, this.visibleCount);
  }
}
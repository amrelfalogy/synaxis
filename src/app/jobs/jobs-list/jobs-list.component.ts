import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { JobService } from '../../services/job.service';
import { LanguageService } from 'src/app/services/languages.service';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css'],
})
export class JobsListComponent implements OnInit {
  jobs: any[] = [];
  displayedJobs: any[] = [];
  isArabic: boolean = false;
  isLoading: boolean = true;
  noJobs = false;
  visibleCount = 3; // Number of jobs to show initially

  @Output() empty = new EventEmitter<boolean>();


  constructor(
    private jobService: JobService,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.fetchApprovedJobs();
    this.languageService.currentLanguage$.subscribe((lang) => {
      this.isArabic = lang === 'ar';
    });
  }

  fetchApprovedJobs(): void {
    this.jobService.getApprovedJobs().subscribe({
      next: (jobs) => {
        this.isLoading = false;
        if (!jobs || jobs.length === 0) {
          this.noJobs = true;
           this.empty.emit(true); 
        } else {
          this.jobs = jobs;
          this.displayedJobs = this.jobs.slice(0, this.visibleCount);
          this.noJobs = false;
           this.empty.emit(false);
        }
      },
      error: (error) => {
        console.error('Error fetching jobs:', error);
        this.isLoading = false;
        this.noJobs = true;
        this.empty.emit(true);
      },
    });
  }

  showMore(): void {
    this.visibleCount += 3;
    this.displayedJobs = this.jobs.slice(0, this.visibleCount);
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
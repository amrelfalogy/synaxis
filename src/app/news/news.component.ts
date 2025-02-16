import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  topHeadlines: any[] = [];
  businessArticles: any[] = [];
  bbcHeadlines: any[] = [];
  searchResults: any[] = [];
  egyptNews: any[] = [];
  errorMessage: string = '';

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.getTopHeadlines();
    this.getBusinessNews();
    this.getBBCHeadlines();
    this.getEgyptNews();
  }

  getEgyptNews(): void {
    this.newsService.getEgyptNews().subscribe({
      next: (data) => (this.egyptNews = data.items),
      error: (error) => (this.errorMessage = 'Failed to load Egypt news'),
    });
  }

  getBusinessNews(): void {
    this.newsService.getBusinessNews().subscribe({
      next: (data) =>
        (this.businessArticles = data.articles.filter(
          (article: any) => article.urlToImage
        )),
      error: (error) =>
        (this.errorMessage = 'Failed to load Business headlines'),
    });
  }

  getBBCHeadlines(): void {
    this.newsService.getBBCHeadlines().subscribe({
      next: (data) =>
        (this.bbcHeadlines = data.articles.filter(
          (article: any) =>
            article.urlToImage &&
            article.description && // Ensure it has a description
            !article.description.toLowerCase().includes('news bulletin') &&
            !article.title.toLowerCase().includes('five minute')
        )),
      error: (error) => (this.errorMessage = 'Failed to load BBC headlines'),
    });
  }

  getTopHeadlines(): void {
    this.newsService.getTopHeadlines().subscribe({
      next: (data) =>
        (this.topHeadlines = data.articles.filter(
          (article: any) => article.urlToImage
        )),
      error: (error) => (this.errorMessage = 'Failed to load top headlines'),
    });
  }

  searchNews(query: string): void {
    this.newsService.searchNews(query).subscribe({
      next: (data) =>
        (this.searchResults = data.articles.filter(
          (article: any) => article.urlToImage
        )),
      error: (error) => (this.errorMessage = 'Failed to search news'),
    });
  }
}

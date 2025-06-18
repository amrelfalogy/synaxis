import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private apiKey = '6d5498439a904f5ab73281ffcb88db50';
  private baseUrl = 'https://newsapi.org/v2';

  constructor(private http: HttpClient) {}

  // Fetch Egypt News
  getEgyptNews(page: number = 1, limit: number = 10): Observable<any> {
    const url = `https://amrproject.codepeak.software/rss/youm7`;
    const params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());
    return this.http.get(url, { params });
  }

  // Fetch top headlines in the 'business' category
  getBusinessNews(): Observable<any> {
    const url = `${this.baseUrl}/top-headlines?category=business&apiKey=${this.apiKey}`;
    return this.http.get(url);
  }

  // Fetches top headlines specifically from BBC
  getBBCHeadlines(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/everything?sources=bbc-news&apiKey=${this.apiKey}`
    );
  }

  // Feaches Top Headlines Endpoint
  getTopHeadlines(country: string = 'us'): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/top-headlines?country=${country}&apiKey=${this.apiKey}`
    );
  }

  // Searches for news articles based on a query Endpoint
  searchNews(query: string): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/everything?q=${query}&apiKey=${this.apiKey}`
    );
  }
}

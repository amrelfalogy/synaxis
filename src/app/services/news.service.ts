import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private backendBaseUrl = 'https://amrproject.codepeak.software';

  constructor(private http: HttpClient) {}

  // Egypt News (مثال قديم شغال)
  getEgyptNews(page: number = 1, limit: number = 10): Observable<any> {
    const url = `${this.backendBaseUrl}/rss/youm7`;
    const params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());
    return this.http.get(url, { params });
  }

  // Business News
  getBusinessNews(): Observable<any> {
    return this.http.get(`${this.backendBaseUrl}/BusinessNews`);
  }

  // BBC News
  getBBCHeadlines(): Observable<any> {
    return this.http.get(`${this.backendBaseUrl}/bbc`);
  }

  // Top Headlines (country = 'us' is default)
  getTopHeadlines(country: string = 'us'): Observable<any> {
    const params = new HttpParams().set('country', country);
    return this.http.get(`${this.backendBaseUrl}/TopHeadlines`, { params });
  }

  // Search News
  searchNews(query: string): Observable<any> {
    const params = new HttpParams().set('q', query);
    return this.http.get(`${this.backendBaseUrl}/search`, { params });
  }
}

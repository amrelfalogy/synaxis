import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  private apiUrl = 'https://AmrProject.codepeak.software/api/v1/properties';

  constructor(private http: HttpClient) {}

  addProperty(data: FormData): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  getPropertyById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      map((response) => response.data) // Extracts only the data object
    );
  }

  getApprovedProperties(): Observable<any[]> {
    return this.http
      .get<any>(this.apiUrl)
      .pipe(map((response) => response.data || []));
  }
}

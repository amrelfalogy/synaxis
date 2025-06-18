import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private apiUrl = 'https://AmrProject.codepeak.software/api/v1/cars';

  constructor(private http: HttpClient) {}

  addCar(data: FormData): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  getApprovedCars(): Observable<any[]> {
    return this.http.get<any>(this.apiUrl).pipe(map((res) => res.data || []));
  }

  getCarById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(map((res) => res.data));
  }
}

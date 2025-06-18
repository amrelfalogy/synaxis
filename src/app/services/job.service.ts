import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private apiUrl = 'https://AmrProject.codepeak.software/api/v1/jobs';

  constructor(private http: HttpClient) {}

  addJob(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  getApprovedJobs(): Observable<any[]> {
    return this.http.get<any>(this.apiUrl).pipe(map((res) => res.data || []));
  }

  getJobById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(map((res) => res.data));
  }
}

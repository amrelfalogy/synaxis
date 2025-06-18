import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = 'https://amrproject.codepeak.software/send-email';

  constructor(private http: HttpClient) {}

  sendEmail(data: {
    name: string;
    email: string;
    message: string;
  }): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}

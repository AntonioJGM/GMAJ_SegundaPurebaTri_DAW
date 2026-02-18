import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Serie } from '../models/series';

@Injectable({
  providedIn: 'root',
})
export class SeriesServices {

  private readonly url = 'https://peticiones.online/api/series';

  constructor(private http: HttpClient) {}

  getAllSeries(): Observable<Serie[]> {
    return this.http.get<Serie[]>(this.url);
  }

  create(payload: {
    title: string;
    channel: string;
    rating: number;
  }): Observable<any> {
    return this.http.post<any>(this.url, payload);
  }
  
}

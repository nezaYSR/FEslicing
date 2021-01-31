import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private http: HttpClient) {}

  getVideos(): Observable<any> {
    return this.http.get<any>(
      `https://my-json-server.typicode.com/nezaYSR/slicingNinja/Videos`
    );
  }

  getLastActivity(): Observable<any> {
    return this.http.get<any>(
      `https://my-json-server.typicode.com/nezaYSR/slicingNinja/Activity`
    );
  }

  getChannels(): Observable<any> {
    return this.http.get<any>(
      `https://my-json-server.typicode.com/nezaYSR/slicingNinja/Channels`
    );
  }

  getDocs(): Observable<any> {
    return this.http.get<any>(
      `https://my-json-server.typicode.com/nezaYSR/slicingNinja/Documents`
    );
  }

  getFeatured(): Observable<any> {
    return this.http.get<any>(`
      https://my-json-server.typicode.com/nezaYSR/slicingNinja/Featured
    `);
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'https://api.countrystatecity.in/v1/countries';
  private apiKey = 'VFVZOHU4VElTeGo2Q2t0ajA5TjkyQ3FEZGdlaW5jVmxCbkhPUE1LbQ==';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'X-CSCAPI-KEY': `${this.apiKey}`,
    }),
  };

  getCountries(): Observable<any> {
    return this.http.get(`${this.apiUrl}`, {
      headers: this.httpOptions.headers,
    });
  }

  getStates(countryIso: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${countryIso}/states`, {
      headers: this.httpOptions.headers,
    });
  }

  getCities(countryIso: string, stateIso: string): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/${countryIso}/states/${stateIso}/cities`,
      { headers: this.httpOptions.headers }
    );
  }
}

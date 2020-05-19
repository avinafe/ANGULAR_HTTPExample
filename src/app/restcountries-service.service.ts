import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RESTCountriesServiceService {
  BASE_URI = "https://restcountries.eu/rest/v2";

  constructor(private http: HttpClient) { 
  }

  getCountry( countryName: string ): Observable<any> {
    return this.http.get(`${this.BASE_URI}/name/${countryName}`)
  }
}

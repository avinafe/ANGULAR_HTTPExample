import { Component, OnInit } from '@angular/core';
import { RESTCountriesServiceService } from '../restcountries-service.service';

@Component({
  selector: 'app-countries-component',
  templateUrl: './countries-component.component.html',
  styleUrls: ['./countries-component.component.css']
})
export class CountriesComponentComponent implements OnInit {

  countryName: string;
  capitalName: string

  constructor(private countriesSrv : RESTCountriesServiceService) { }

  ngOnInit(): void {
  }

  showCapital(countryName: string) {
    this.countriesSrv.getCountry(countryName)
      .subscribe(
        data => this.capitalName = data[0].capital,
        error => console.log('Error: ', error)
      )    
  }
}

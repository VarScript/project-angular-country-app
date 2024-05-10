import { Component, OnInit } from '@angular/core';
import { CounriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``,
})
export class ByCountryPageComponent implements OnInit {
  public countries: Country[] = [];
  public initialValue: string = '';

  constructor(private counriesService: CounriesService) {}

  ngOnInit(): void {
    this.countries = this.counriesService.cacheStore.byCountries.countries;
    this.initialValue = this.counriesService.cacheStore.byCountries.term
  }

  searchByCountry(term: string) {
    this.counriesService.searchCountry(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}

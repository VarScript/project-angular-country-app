import { Component } from '@angular/core';
import { CounriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``,
})
export class ByCountryPageComponent {
  public countries: Country[] = [];

  constructor(private counriesService: CounriesService) {}

  searchByCountry(term: string) {
    this.counriesService.searchCountry(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}

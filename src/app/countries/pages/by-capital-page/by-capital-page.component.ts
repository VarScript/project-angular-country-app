import { Component, EventEmitter, Output } from '@angular/core';
import { CounriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``,
})
export class ByCapitalPageComponent {
  public countries: Country[] = [];

  constructor(private counriesService: CounriesService) {}

  searchByCapital(term: string): void {
    this.counriesService.searchCapital(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}

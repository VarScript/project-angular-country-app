import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CounriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``,
})
export class ByRegionPageComponent {
  public countries: Country[] = [];

  constructor(private counriesService: CounriesService) {}

  searchByRegion(term: string) {
    this.counriesService.searchRegion(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}

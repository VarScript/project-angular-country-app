import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CounriesService } from '../../services/countries.service';

type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``,
})
export class ByRegionPageComponent {
  public countries: Country[] = [];
  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];
  public selectedRegion?: Region;

  constructor(private counriesService: CounriesService) {}

  searchByRegion(region: Region) {
    this.selectedRegion = region;
    this.counriesService.searchRegion(region).subscribe((countries) => {
      this.countries = countries;
    });
  }
}

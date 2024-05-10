import { Component, OnInit } from '@angular/core';

import { CounriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';


@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``,
})
export class ByRegionPageComponent implements OnInit {
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

  ngOnInit(): void {
    this.countries = this.counriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.counriesService.cacheStore.byRegion.region;
  }

  searchByRegion(region: Region) {
    this.selectedRegion = region;
    this.counriesService.searchRegion(region).subscribe((countries) => {
      this.countries = countries;
    });
  }
}

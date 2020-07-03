import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RegionService } from '../_store/region.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ab-world-bank-country',
  template: `
   <div *ngIf="countries$ | async as countries">
      <be-ui-item-list [items]="countries" (itemSelected)="loadDetails($event)"></be-ui-item-list>
    </div>
  `,
  styles: [
  ],
})
export class CountryComponent implements OnInit {

  public countries$: Observable<any>;

  constructor(
    private regionService: RegionService,
    private router: Router,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.countries$ = this.regionService.getCountriesList$();

    this.activatedRoute.params.subscribe(param =>
      {
        this.regionService.loadRegionCountries(param['code']);
      }
    );
  }

  loadDetails(country) {
    this.router.navigate([`/country/${country.id}`]);
  }
}

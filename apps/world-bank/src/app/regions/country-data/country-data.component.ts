import { Component, OnInit } from '@angular/core';
import { RegionService } from '../_store/region.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'ab-world-bank-country-data',
  template: `
    <div *ngIf="country$ | async as country">

        <h3>Nombre</h3>
        {{country.name}}

        <h3>Capital</h3>
        {{country.capitalCity}}

        <h3>Longitud</h3>
        {{country.longitude}}

        <h3>Latitud</h3>
        {{country.latitude}}
    </div>
  `,
  styles: [
  ],
})
export class CountryDataComponent implements OnInit {

  public country$: Observable<any>;

  constructor(
    private regionService: RegionService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.country$ = this.regionService.getCountry$();
    this.activatedRoute.params.subscribe(param =>
      {
        this.regionService.loadCountry(param['id']);
      }
    );
  }

}

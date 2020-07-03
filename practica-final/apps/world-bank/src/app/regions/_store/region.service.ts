import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as RegionActions from './region.actions';
import * as RegionsSelectors from './region.selectors';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor(private store: Store<any>) {}

  public loadRegions() {
    this.store.dispatch(RegionActions.loadRegions());
  }

  public loadRegionCountries(id: string) {
    this.store.dispatch(RegionActions.loadRegionCountries({id}));
  }

  public loadCountry(id: string) {
    this.store.dispatch(RegionActions.loadCountry({id}));
  }

  public getRegionsList$(): Observable<any> {
    return this.store.select(RegionsSelectors.selectRegions);
  }

  public getCountriesList$(): Observable<any> {
    return this.store.select(RegionsSelectors.selectCountries);
  }

  public getCountry$(): Observable<any> {
    return this.store.select(RegionsSelectors.selectCountry);
  }
}

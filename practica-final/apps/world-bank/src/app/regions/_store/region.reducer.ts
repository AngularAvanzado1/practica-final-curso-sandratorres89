import { Action, createReducer, on } from '@ngrx/store';
import * as RegionActions from './region.actions';

export const regionFeatureKey = 'region';

export interface State {
  regions: any[];
  countries: any[];
  country: any;
}

export const initialState: State = {
  regions: null,
  countries: null,
  country: null
};


export const reducer = createReducer(
  initialState,

  on(RegionActions.loadRegions, state => state),
  on(RegionActions.loadRegionsSuccess, (state, payload) => ({
    ...state,
    regions: payload.data.filter(reg => reg.id !== '')
  })),
  on(RegionActions.loadRegionsFailure, (state, action) => state),

  on(RegionActions.loadRegionCountries, state => state),
  on(RegionActions.loadRegionCountriesSuccess, (state, payload) => ({
    ...state,
    countries: payload.data
  })),
  on(RegionActions.loadRegionCountriesFailure, (state, action) => state),

  on(RegionActions.loadCountry, state => state),
  on(RegionActions.loadCountrySuccess, (state, payload) => ({
    ...state,
    country: payload.data
  })),
  on(RegionActions.loadCountryFailure, (state, action) => state),
);


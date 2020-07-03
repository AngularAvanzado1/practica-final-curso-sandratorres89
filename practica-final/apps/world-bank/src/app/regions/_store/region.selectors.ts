import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRegion from './region.reducer';

export const getRegionState = createFeatureSelector<fromRegion.State>(
  fromRegion.regionFeatureKey
);

export const selectRegions = createSelector(
  getRegionState,
  (state: fromRegion.State) => state.regions
);

export const selectCountries = createSelector(
  getRegionState,
  (state: fromRegion.State) => state.countries
)

export const selectCountry = createSelector(
  getRegionState,
  (state: fromRegion.State) => state.country
)

import { createAction, props } from '@ngrx/store';

export const loadRegions = createAction(
  '[Region] Load Regions'
);

export const loadRegionsSuccess = createAction(
  '[Region] Load Regions Success',
  props<{ data: any[] }>()
);

export const loadRegionsFailure = createAction(
  '[Region] Load Regions Failure',
  props<{ error: any }>()
);

export const loadRegionCountries = createAction(
  '[Region Countries] Load Region Countries',
  props<{id: string}>()
);

export const loadRegionCountriesSuccess = createAction(
  '[Region Countries] Load Region Countries Success',
  props<{ data: any }>()
);

export const loadRegionCountriesFailure = createAction(
  '[Region Countries] Load Region Countries Failure',
  props<{ error: any }>()
);

export const loadCountry = createAction(
  '[Country] Load Country',
  props<{id: string}>()
);

export const loadCountrySuccess = createAction(
  '[Country] Load Country Success',
  props<{ data: any }>()
);

export const loadCountryFailure = createAction(
  '[Country] Load Country Failure',
  props<{ error: any }>()
);

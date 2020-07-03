import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as RegionActions from './region.actions';
import { RegionApiService } from '../api/region-api.service';




@Injectable()
export class RegionEffects {

  constructor(
    private readonly regionApiService: RegionApiService,
    private actions$: Actions
    ) {}

  loadRegions$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(RegionActions.loadRegions),
      concatMap(() => {
        return this.regionApiService.loadRegions()
        .pipe(
          map(data => RegionActions.loadRegionsSuccess({ data: data[1] })),
          catchError(error => of(RegionActions.loadRegionsFailure({ error }))))
        }
      )
    );
  });

  loadRegionCountries$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(RegionActions.loadRegionCountries),
      concatMap((payload) => {
        return this.regionApiService.loadRegionCountries(payload.id)
        .pipe(
          map(data => RegionActions.loadRegionCountriesSuccess({ data: data[1] })),
          catchError(error => of(RegionActions.loadRegionCountriesFailure({ error }))))
        }
      )
    );
  });

  loadCountry$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(RegionActions.loadCountry),
      concatMap((payload) => {
        return this.regionApiService.loadCountry(payload.id)
        .pipe(
          map(data => RegionActions.loadCountrySuccess({ data: data[1][0] })),
          catchError(error => of(RegionActions.loadCountryFailure({ error }))))
        }
      )
    );
  });
}

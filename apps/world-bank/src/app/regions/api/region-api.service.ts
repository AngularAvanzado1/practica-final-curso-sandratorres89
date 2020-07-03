import { Injectable } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class RegionApiService {

  constructor(private readonly http: HttpClient) { }


  public loadRegions() {
    const url = 'http://api.worldbank.org/v2/region/?format=json';

    return this.http.get<any>(url);
  }

  public loadRegionCountries(id: string) {
    const url = `http://api.worldbank.org/v2/region/${id}/country?per_page=1000&format=json`;

    return this.http.get(url)
    .pipe(
      map((res: any) => res)
    );
  }

  public loadCountry(id: string) {
    const url = `http://api.worldbank.org/V2/country/${id}?format=json`;
    return this.http.get(url)
    .pipe(
      map((res: any) => res)
    );
  }

}

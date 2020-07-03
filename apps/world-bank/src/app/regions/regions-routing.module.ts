import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegionsComponent } from './regions.component';
import { CountryComponent } from './country/country.component';
import { CountryDataComponent } from './country-data/country-data.component';

const routes: Routes = [
  { path: 'home', component: RegionsComponent },
  { path: 'region/:code', component: CountryComponent},
  { path: 'country/:id', component: CountryDataComponent},
  { path: '**', pathMatch:'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegionsRoutingModule { }

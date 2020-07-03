import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { BeUiModule } from '@practica-final/shared/ui'
import { RegionsRoutingModule } from './regions-routing.module';
import { RegionsComponent } from './regions.component';
import { StoreModule } from '@ngrx/store';
import * as fromRegion from './_store/region.reducer';
import { EffectsModule } from '@ngrx/effects';
import { RegionEffects } from './_store/region.effects';
import { CountryComponent } from './country/country.component';
import { CountryDataComponent } from './country-data/country-data.component';

const routes: Routes = [
  { path: '', component: RegionsComponent }
];

@NgModule({
  declarations: [RegionsComponent, CountryComponent, CountryDataComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RegionsRoutingModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(fromRegion.regionFeatureKey, fromRegion.reducer),
    EffectsModule.forFeature([RegionEffects]),
    BeUiModule
  ],
  exports: [RegionsComponent, CountryComponent, CountryDataComponent]
})
export class RegionsModule { }

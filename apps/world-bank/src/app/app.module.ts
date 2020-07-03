import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule, RouterState, routerReducer } from '@ngrx/router-store';
import { RegionsModule } from './regions/regions.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    RegionsModule,
    BrowserModule,
    RouterModule.forRoot([{ path: 'regions', loadChildren: () => import('./regions/regions.module').then(m => m.RegionsModule) }], { initialNavigation: 'enabled' }),
    StoreModule.forRoot(
      {
        router: routerReducer
      },
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot({ routerState: RouterState.Minimal }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

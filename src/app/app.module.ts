import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Configuracion del locale de la app
import localeEsHN from '@angular/common/locales/es-HN';
import localeEsSV from '@angular/common/locales/es-SV';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEsSV);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
    provide: LOCALE_ID, useValue: 'es-SV'
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

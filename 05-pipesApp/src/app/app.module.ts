import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

// Configuración del locale-idioma de la app
import localeEsCO from '@angular/common/locales/es-CO';
import localeDeAT from '@angular/common/locales/de-AT';
import { registerLocaleData } from '@angular/common'

registerLocaleData(localeEsCO);
registerLocaleData(localeDeAT);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CO' }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CdkCopyToClipboard} from "@angular/cdk/clipboard";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PhotoUploadComponent } from './photo-upload/photo-upload.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';
import {registerLocaleData} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import { PaymentComponent } from './payment/payment.component';
registerLocaleData(localeDe, 'de-DE', localeDeExtra);

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    PhotoUploadComponent,
    OrderSummaryComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CdkCopyToClipboard,
  ],
  providers: [    { provide: LOCALE_ID, useValue: 'de-DE' },     // <-- Locale for Germany
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

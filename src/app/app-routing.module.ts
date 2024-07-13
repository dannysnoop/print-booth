import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {PhotoUploadComponent} from "./photo-upload/photo-upload.component";
import {OrderSummaryComponent} from "./order-summary/order-summary.component";
import {PaymentComponent} from "./payment/payment.component";
const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'upload', component: PhotoUploadComponent },
  { path: 'order-summary', component: OrderSummaryComponent },
  { path: 'payment', component: PaymentComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

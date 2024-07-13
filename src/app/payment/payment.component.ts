import { Component } from '@angular/core';
import {LandingPageService} from "../landing-page/landing-page.service";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {

  priceMustPay = 0
  messageTransfer = ''
  constructor(private service: LandingPageService) {
    this.priceMustPay = service.listImage.value.length * 20000;
    this.messageTransfer = service.transaction.value + ' TEST02'
  }
}

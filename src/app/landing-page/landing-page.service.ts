import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import * as signalR from "@microsoft/signalr";
import {HttpTransportType} from "@microsoft/signalr";
import swal from 'sweetalert';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {
  listImage = new BehaviorSubject([]);
  transaction: BehaviorSubject<any> =  new BehaviorSubject<any>('');

  private hubConnection: signalR.HubConnection | undefined;
  constructor(private router: Router) {

      this.startConnection();

      setTimeout(() =>  {
        this.sendData()

      },1000)
      this.addTransferChartDataListener()
      this.successPayment();
  }

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:7000/general/booth-hub' , {skipNegotiation: true, transport: HttpTransportType.WebSockets})
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err));
  }

  public addTransferChartDataListener = () => {
    // @ts-ignore
    this.hubConnection.on('pingPhoneMessage', (user, message) => {
      console.log(user, message);
    });
  }

  public successPayment = () => {
    // @ts-ignore
    this.hubConnection.on('successPayment', (transaction, message) => {
      swal("Thành Công", "Bạn đã thanh toán thành công", "success");

      console.log(transaction, message);
    });
  }

  public sendData() {
    // @ts-ignore
    this.hubConnection.invoke('PingBoothFromPhone', this.transaction.value)
      .catch(err => console.error(err));
  }

}

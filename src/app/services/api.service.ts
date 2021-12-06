import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Socket } from 'ngx-socket-io';
import { LokListModel } from '../models/lok-list';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class API {
  
  //LokList = LokListModel;
  LokList: any[];

  constructor(private toastCtrl: ToastController,
    private socket: Socket) 
      { 
        this.getMessages().subscribe(message => {
        this.LokList = JSON.parse(message['LokList']);
        });
      }


  getMessages() {
    let observable = new Observable(observer => {
      this.socket.on('initialisation', (data) => {
        observer.next(data);
      });

      this.socket.on('loklist_data', (data) => {
        observer.next(data);
      });

    })
    return observable;
  };

  async showToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      position: 'top',
      duration: 2000
    });
    toast.present();
  }
}

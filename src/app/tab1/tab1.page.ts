import { Component } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { API } from '../services/api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {



  constructor(public myAPI: API, private socket: Socket) { }

  ngOnInit() {
  }

  onSliderChanged(event, item){

    var Lok = this.myAPI.LokList.find(x => x.id == item.id);
    Lok.speed = event.detail.value;
    this.socket.emit('main_controller_value_changed', { data: Lok });
    console.log(event);
    event.stopPropagation();
  }

}

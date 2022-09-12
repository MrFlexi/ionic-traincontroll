import { Component } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { API } from '../services/api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

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


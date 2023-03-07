import { Component } from '@angular/core';
import { WebsocketService } from '../../service/websocket.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent {

  constructor(public wsService:WebsocketService){

  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    public wsService:WebsocketService
  ) { }
  sendMessage(mensaje:string){
    const payload={
      de:'David',
      cuerpo: mensaje
    }
    this.wsService.emit('mensaje', payload);
  }
  getMenssage(){
    return this.wsService.listen('nuevo-mensaje');
  }
}

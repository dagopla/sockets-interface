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
      de:this.wsService.getUsuario()!.nombre,
      cuerpo: mensaje
    }
    this.wsService.emit('mensaje', payload);
  }
  getMenssage(){
    return this.wsService.listen('nuevo-mensaje');
  }
  getMessagePrivate(){
    return this.wsService.listen('mensaje-privado');
  }
  getUsuariosActivos(){
    return this.wsService.listen('usuarios-activos');
  }
  emitirUsuarios(){
    this.wsService.emit('obtener-usuarios');
  }
}

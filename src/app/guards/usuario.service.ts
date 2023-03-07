import { inject, Injectable } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { WebsocketService } from '../service/websocket.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(public wsService:WebsocketService,
    private router:Router) { }
  canMatch(){
    if (this.wsService.getUsuario()) {
      return true
      
    }
    this.router.navigate(['/'])
    return false
  }
}
export const canMatchUser:CanMatchFn=()=>{
  return inject(UsuarioService).canMatch()
}
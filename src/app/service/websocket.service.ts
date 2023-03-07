import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Usuario } from '../classes/usuario';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  public socketStatus:boolean=false;
  public usuario!:Usuario;


  constructor(
    private socket:Socket
  ) { 
    this.getUserOfLocalStorage();
    this.checkStatus()
  }

  checkStatus(){
    this.socket.on('connect',()=>{
      console.log('Conectado al servidor');
      this.socketStatus=true;
      
    });
    this.socket.on('disconnect',()=>{
      console.log('Desconectado del servidor');
      this.socketStatus=false;
      
    });
  }

  emit(event:string, payload?:any, callback?:any){
    this.socket.emit(event, payload, callback);

  }
  listen(event:string){
    return this.socket.fromEvent(event);
  }
  loginWS(nombre:string){

    return new Promise((resolve,reject)=>{
      this.emit('configurar-usuario', {nombre}, (resp:any)=>{
       this.usuario= new Usuario(nombre);
       this.guardarUserEnStorage()
      resolve(resp);
    })
    
      
    })
  }
  getUsuario(){
    return this.usuario;
  }
  guardarUserEnStorage(){
    localStorage.setItem('user',JSON.stringify(this.usuario));
  }
  getUserOfLocalStorage(){
    if (localStorage.getItem('user')) {
      this.usuario=JSON.parse(localStorage.getItem('user')!);
      this.loginWS(this.usuario.nombre)
    }
    
   
  }

}

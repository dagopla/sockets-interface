import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, tap } from 'rxjs';
import { ChatService } from '../../service/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  texto=''
  mensajeRecibido:any[]=[];
  mesajeSubscription!:Subscription;
  elementoChat!:HTMLDivElement;


  constructor(public chatService:ChatService){

  }
  ngOnInit(){
    this.elementoChat= <HTMLDivElement>document.getElementById('chat-mesajes')
    this.mesajeSubscription=this.chatService.getMenssage().subscribe(msg=>{
      console.log(msg);
      this.mensajeRecibido.push(msg);
      setTimeout(() => {
        this.elementoChat.scrollTop=this.elementoChat?.scrollHeight;
      }, 50);
    })
  }
  ngOnDestroy(): void {
    this.mesajeSubscription.unsubscribe();
  }
  enviar(){
    this.chatService.sendMessage(this.texto);
    this.texto='';
  }

}

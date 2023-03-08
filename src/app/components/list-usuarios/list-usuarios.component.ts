import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../service/chat.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css']
})
export class ListUsuariosComponent implements OnInit {

  usuariosActivosObs!:Observable<any>;

  constructor(public chatService:ChatService){

  }
  ngOnInit(): void {
    this.chatService.emitirUsuarios();
    this.usuariosActivosObs=this.chatService.getUsuariosActivos();
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WebsocketService } from '../../service/websocket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  nombre:string='';

  constructor(public wsService:WebsocketService,
    private router:Router){

  }
  ingresar(){
    console.log(this.nombre);
    this.wsService.loginWS(this.nombre).then(()=>{
      this.router.navigateByUrl('/mensajes')
    });

  }
}

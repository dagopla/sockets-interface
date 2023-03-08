import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebsocketService } from '../../service/websocket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nombre:string='';

  constructor(public wsService:WebsocketService,
    private router:Router){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  ingresar(){
    console.log(this.nombre);
    this.wsService.loginWS(this.nombre).then(()=>{
      this.router.navigateByUrl('/mensajes')
    });

  }
}

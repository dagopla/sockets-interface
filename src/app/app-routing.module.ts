import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { canMatchUser } from './guards/usuario.service';
import { LoginComponent } from './pages/login/login.component';
import { MensajesComponent } from './pages/mensajes/mensajes.component';


const appRoutes:Routes=[
  {path:'', component:LoginComponent},
  {path:'mensajes', component:MensajesComponent, canMatch:[canMatchUser]},
  {path:'**', component:LoginComponent},
  
];

@NgModule({

  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }

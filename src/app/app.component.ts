import { Uid } from './models/models';
import { FirestoreService } from 'src/app/services/firestore.service';

import { Router } from '@angular/router';
import { InteractionService } from './services/interaction.service';
import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  login:boolean = false;
  rol: 'estudiante'|'profesor' = null;
  constructor(private menu:MenuController,
    private auth:AuthService,
    private interaction:InteractionService,
    private Router:Router,
    private firestore:FirestoreService ) {
      this.auth.stateUser().subscribe(res =>{
        if(res){
          console.log('esta logeado');
          this.login = true;
          this.getDatosUser(res.uid)

        }else {
          console.log('no esta logeado');
          this.login = false;
        }
      })
    }

  cerrarMenu()
  {
    this.menu.close('first');
  }
  logut(){
    this.auth.logut();
    this.interaction.presentToast('sesion suspendida');
    this.Router.navigate(['/ingreso'])

  }
  getDatosUser(uid:string){
    const path = 'Usuarios';
    const id = uid;
    this.firestore.getDoc<Uid>(path,id).subscribe(res =>{
      console.log('datos->',res);
      if(res){
        this.rol = res.perfil;
      }
    })
  }
}

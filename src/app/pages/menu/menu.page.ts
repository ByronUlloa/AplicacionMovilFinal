import { FirestoreService } from 'src/app/services/firestore.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage {

  username:string='';


    constructor(
      private router:Router,
      private activatedRouter:ActivatedRoute,
      private menu:MenuController,
      private database:FirestoreService 
    ){}
    
     ngOnInit() {}
    
  

  
    verMenu(){
      this.menu.open('first');
    }
  


}
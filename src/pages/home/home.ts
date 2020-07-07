import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LanchesPage } from '../lanches/lanches';
import { PrincipaisPage } from '../principais/principais';
import { SobremesasPage } from '../sobremesas/sobremesas';
import { BebidasPage } from '../bebidas/bebidas';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  LANCHES(){
    this.navCtrl.push(LanchesPage);
  }

  refeicao(){
    this.navCtrl.push(PrincipaisPage);

  }

  sobremesas(){
    this.navCtrl.push(SobremesasPage);

  }
  
  bebidas(){
    this.navCtrl.push(BebidasPage);

  }
  
}



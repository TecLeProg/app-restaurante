import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,} from 'ionic-angular';
import { EcasaPage } from '../ecasa/ecasa';
import { ComboPage } from '../combo/combo';
import { SaladaPage } from '../salada/salada';
import { CasadinhoPage } from '../casadinho/casadinho';
import { DesafioPage } from '../desafio/desafio';

@IonicPage()
@Component({
  selector: 'page-lanches',
  templateUrl: 'lanches.html',
})
export class LanchesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LanchesPage');
  }

  Ecasa(){
      this.navCtrl.push(EcasaPage);
  }

  COMBO(){
    this.navCtrl.push(ComboPage)

  }

  Salada(){
    this.navCtrl.push(SaladaPage)
  }

  Casadinho(){
    this.navCtrl.push(CasadinhoPage) 
  }
  Desafio(){
    this.navCtrl.push(DesafioPage) 
  }
  
}

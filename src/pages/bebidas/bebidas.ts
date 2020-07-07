import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WhiskeyPage } from '../whiskey/whiskey';
import { CervejaPage } from '../cerveja/cerveja';
import { RefrigerantePage } from '../refrigerante/refrigerante';
import { DellPage } from '../dell/dell';
import { CoquiteisPage } from '../coquiteis/coquiteis';

@IonicPage()
@Component({
  selector: 'page-bebidas',
  templateUrl: 'bebidas.html',
})
export class BebidasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BebidasPage');
  }

  whiskey(){
    this.navCtrl.push(WhiskeyPage);
  }

  cerveja(){
    this.navCtrl.push(CervejaPage);
  }

  refrigerante(){
    this.navCtrl.push(RefrigerantePage);
  }
  
  dell(){
    this.navCtrl.push(DellPage);
  }
  
  coquiteis(){
    this.navCtrl.push(CoquiteisPage);
  }
  
}

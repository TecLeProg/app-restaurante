import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BaunilhaPage } from '../baunilha/baunilha';
import { CanelaPage } from '../canela/canela';
import {  VermelhaPage } from '../vermelha/vermelha';
import { ChocolatePage } from '../chocolate/chocolate';
import { SorvetePage } from '../sorvete/sorvete';


@IonicPage()
@Component({
  selector: 'page-sobremesas',
  templateUrl: 'sobremesas.html',
})
export class SobremesasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SobremesasPage');
  }

  BAUNILHA(){
    this.navCtrl.push(BaunilhaPage);
  }

  CANELA(){
    this.navCtrl.push(CanelaPage);
  }

  VERMELHA(){
    this.navCtrl.push(VermelhaPage);
  }

  CHOCOLATE(){
    this.navCtrl.push(ChocolatePage);
  }

  sorvete(){
    this.navCtrl.push(SorvetePage);
  }
  
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PdiaPage } from '../pdia/pdia';
import { SalPage } from '../sal/sal';
import { ExecPage } from '../exec/exec';
import { ExclighPage } from '../excligh/excligh';
import { TradicionalPage } from '../tradicional/tradicional';
import { PicanhaPage } from '../picanha/picanha';
import { LeaoPage } from '../leao/leao';
import { GalinhaPage } from '../galinha/galinha';


@IonicPage()
@Component({
  selector: 'page-principais',
  templateUrl: 'principais.html',
})

export class PrincipaisPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipaisPage');
  }  

  pdia(){
    this.navCtrl.push(PdiaPage);
  }

  sal(){
    this.navCtrl.push(SalPage);
  }
 
  exec(){
    this.navCtrl.push(ExecPage);
  }

  exclgh(){
    this.navCtrl.push(ExclighPage);
  }

  tradicional(){
    this.navCtrl.push(TradicionalPage);
  }

  picanha(){
    this.navCtrl.push(PicanhaPage);
  }

  leao(){
    this.navCtrl.push(LeaoPage);
  }

  Galinha(){
    this.navCtrl.push(GalinhaPage);
  }

  }
  
  
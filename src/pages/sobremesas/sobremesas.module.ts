import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SobremesasPage } from './sobremesas';
import { BaunilhaPage } from '../baunilha/baunilha';
import { CanelaPage } from '../canela/canela';
import {  VermelhaPage } from '../vermelha/vermelha';
import { ChocolatePage } from '../chocolate/chocolate';
import { SorvetePage }  from '../sorvete/sorvete';

@NgModule({
  declarations: [
    SobremesasPage,
    BaunilhaPage,
    CanelaPage,
    VermelhaPage,
    ChocolatePage,
    SorvetePage,
  ],
  imports: [
    IonicPageModule.forChild(SobremesasPage),
  ],
})
export class SobremesasPageModule {}

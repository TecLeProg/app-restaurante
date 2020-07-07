import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BebidasPage } from './bebidas';
import { WhiskeyPage } from '../whiskey/whiskey';
import { CervejaPage } from '../cerveja/cerveja';
import { RefrigerantePage } from '../refrigerante/refrigerante';
import { DellPage } from '../dell/dell';
import { CoquiteisPage } from '../coquiteis/coquiteis';

@NgModule({
  declarations: [
    BebidasPage,
    WhiskeyPage,
    CervejaPage,
    RefrigerantePage,
    DellPage,
    CoquiteisPage,
  ],
  imports: [
    IonicPageModule.forChild(BebidasPage),
  ],
})
export class BebidasPageModule {}

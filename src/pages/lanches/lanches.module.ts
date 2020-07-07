import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LanchesPage } from './lanches';
import { EcasaPage } from "../ecasa/ecasa";
import { ComboPage} from "../combo/combo";

@NgModule({
  declarations: [
    LanchesPage,
    EcasaPage,
    ComboPage
  ],

  imports: [
    IonicPageModule.forChild(LanchesPage),
  ],

})
export class LanchesPageModule {}


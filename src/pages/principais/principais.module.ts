import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrincipaisPage } from './principais';
import { PdiaPage } from '../pdia/pdia';
import { SalPage} from '../sal/sal';
import { ExecPage } from '../exec/exec';
import { ExclighPage } from '../excligh/excligh';
import { TradicionalPage } from '../tradicional/tradicional';
import { PicanhaPage } from '../picanha/picanha';
import { LeaoPage } from '../leao/leao';
import { GalinhaPage } from '../galinha/galinha';

@NgModule({
  declarations: [
    PrincipaisPage,
    PdiaPage,
    SalPage,
    ExecPage,
    ExclighPage,
    TradicionalPage,
    PicanhaPage,
    LeaoPage,
    GalinhaPage,
  ],

  imports: [
    IonicPageModule.forChild(PrincipaisPage),
  ],

})

export class PrincipaisPageModule {}

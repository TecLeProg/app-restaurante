import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PdiaPage } from './pdia';

@NgModule({
  declarations: [
    PdiaPage,
  ],
  imports: [
    IonicPageModule.forChild(PdiaPage),
  ],
})
export class PdiaPageModule {}

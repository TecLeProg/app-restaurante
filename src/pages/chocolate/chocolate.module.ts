import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChocolatePage } from './chocolate';

@NgModule({
  declarations: [
    ChocolatePage,
  ],
  imports: [
    IonicPageModule.forChild(ChocolatePage),
  ],
})
export class ChocolatePageModule {}

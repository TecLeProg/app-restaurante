import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WhiskeyPage } from './whiskey';

@NgModule({
  declarations: [
    WhiskeyPage,
  ],
  imports: [
    IonicPageModule.forChild(WhiskeyPage),
  ],
})
export class WhiskeyPageModule {}

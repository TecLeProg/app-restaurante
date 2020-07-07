import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DellPage } from './dell';

@NgModule({
  declarations: [
    DellPage,
  ],
  imports: [
    IonicPageModule.forChild(DellPage),
  ],
})
export class DellPageModule {}

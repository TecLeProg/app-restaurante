import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalPage } from './sal';

@NgModule({
  declarations: [
    SalPage,
  ],
  imports: [
    IonicPageModule.forChild(SalPage),
  ],
})
export class SalPageModule {}

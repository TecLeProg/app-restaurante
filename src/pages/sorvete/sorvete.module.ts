import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SorvetePage } from './sorvete';

@NgModule({
  declarations: [
    SorvetePage,
  ],
  imports: [
    IonicPageModule.forChild(SorvetePage),
  ],
})
export class SorvetePageModule {}

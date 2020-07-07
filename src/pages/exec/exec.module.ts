import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExecPage } from './exec';

@NgModule({
  declarations: [
    ExecPage,
  ],
  imports: [
    IonicPageModule.forChild(ExecPage),
  ],
})
export class ExecPageModule {}

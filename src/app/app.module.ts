import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LanchesPage } from '../pages/lanches/lanches';
import { PrincipaisPage } from '../pages/principais/principais';
import { SobremesasPage } from '../pages/sobremesas/sobremesas';
import { BebidasPage } from '../pages/bebidas/bebidas';
import { EcasaPage } from '../pages/ecasa/ecasa';
import { ComboPage } from '../pages/combo/combo';
import { SaladaPage } from '../pages/salada/salada';
import { CasadinhoPage } from '../pages/casadinho/casadinho';
import { DesafioPage } from '../pages/desafio/desafio';
import { PdiaPage } from '../pages/pdia/pdia';
import { SalPage } from '../pages/sal/sal';
import { ExecPage } from '../pages/exec/exec';
import { ExclighPage } from '../pages/excligh/excligh';
import { TradicionalPage } from '../pages/tradicional/tradicional';
import { PicanhaPage } from '../pages/picanha/picanha';
import { LeaoPage } from '../pages/leao/leao';
import { GalinhaPage } from '../pages/galinha/galinha';
import { BaunilhaPage } from '../pages/baunilha/baunilha';
import { CanelaPage } from '../pages/canela/canela';
import { VermelhaPage } from '../pages/vermelha/vermelha';
import { ChocolatePage } from '../pages/chocolate/chocolate';
import { SorvetePage } from '../pages/sorvete/sorvete';
import { WhiskeyPage } from '../pages/whiskey/whiskey';
import { CervejaPage } from '../pages/cerveja/cerveja';
import { RefrigerantePage } from '../pages/refrigerante/refrigerante';
import { DellPage } from '../pages/dell/dell';
import { CoquiteisPage } from '../pages/coquiteis/coquiteis';
 

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LanchesPage,
    PrincipaisPage,
    SobremesasPage,
    BebidasPage,
    EcasaPage,
    ComboPage,
    SaladaPage,
    CasadinhoPage,
    DesafioPage,
    PdiaPage,
    SalPage,
    ExecPage,
    ExclighPage,
    TradicionalPage,
    PicanhaPage,
    LeaoPage,
    GalinhaPage,
    BaunilhaPage,
    CanelaPage,
    VermelhaPage,
    ChocolatePage,
    SorvetePage,
    WhiskeyPage,
    CervejaPage,
    RefrigerantePage,
    DellPage,
    CoquiteisPage
  ],

  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LanchesPage,
    PrincipaisPage,
    SobremesasPage,
    BebidasPage,
   EcasaPage,
   ComboPage,
   SaladaPage,
   CasadinhoPage,
   DesafioPage,
   PdiaPage,
   SalPage,
   ExecPage,
   ExclighPage,
   TradicionalPage,
   PicanhaPage,
   LeaoPage,
   GalinhaPage,
   BaunilhaPage,
   CanelaPage,
   VermelhaPage,
   ChocolatePage,
   SorvetePage,
   WhiskeyPage,
   CervejaPage,
   RefrigerantePage,
   DellPage,
   CoquiteisPage
  ],

  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]

})

export class AppModule {}

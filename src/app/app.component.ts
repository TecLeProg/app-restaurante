import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  
  @ViewChild(Nav) Nav: Nav;

  rootPage: any = HomePage;
  pages: Array<{ title: string, Component: any }>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    platform.ready().then(() => {

      statusBar.styleDefault();
      splashScreen.hide();
      
    });


  }

}

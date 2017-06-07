import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {
  Push,
  PushToken
} from '@ionic/cloud-angular';

import { TabsPage } from '../pages/tabs/tabs';
import { AboutPage } from '../pages/about/about';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private push: Push
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      //this.registerToken();
      //this.listenerNotifications();
    });
  }

  private registerToken(){
    this.push.register()
    .then(token=>{
      console.log('Token',token);
      this.push.saveToken(token, {
        ignore_user: true
      });
    })
  }

  private listenerNotifications(){
    this.push.rx.notification()
    .subscribe((msg:any) =>{
      if(msg.payload.page == 'AboutPage'){
        this.rootPage = AboutPage;
      }
      console.log('Message', msg);
    })
  }
}

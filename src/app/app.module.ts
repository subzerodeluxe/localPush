import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// import pages
import { HomePage } from '../pages/home/home';
import { CountdownPage } from '../pages/countdown/countdown'; 
import { TabsPage } from "../pages/tabs/tabs";


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TimerComponent } from "../components/timer/timer";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CountdownPage,
    TabsPage,
    TimerComponent 
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CountdownPage,
    TabsPage,
    TimerComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

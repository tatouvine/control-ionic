import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {VilleListPageModule} from "../pages/ville-list/ville-list.module";
import {AboutPageModule} from "../pages/about/about.module";
import {TabPageModule} from "../pages/tab/tab.module";
import {VillePageModule} from "../pages/ville-list/ville/ville.module";
import {VilleNewPageModule} from "../pages/ville-list/ville-new/ville-new.module";
import { VilleProvider } from '../providers/ville/ville';

import {AngularFireModule} from 'angularfire2'
import {AngularFirestoreModule} from 'angularfire2/firestore'
import {Camera} from "@ionic-native/camera";
import {PhotosPageModule} from "../pages/photos/photos.module";

const firebase = {
  apiKey: 'AIzaSyAl0bDmauZ4vCcolAjyZcMfPyTRbAxi87Y',
  authDomain: 'my-project-1523274451936.firebaseapp.com',
  projectId: 'my-project-1523274451936',
  storageBucket: 'my-project-1523274451936.appspot.com',
  messaginSenderId: '618665345967',
  appId: '1:618665345967:web:177e241b0cbfcde5cae55a'
}

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    VilleListPageModule,
    AboutPageModule,
    TabPageModule,
    VillePageModule,
    VilleNewPageModule,
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule,
    PhotosPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    VilleProvider,
    Camera
  ]
})
export class AppModule {}

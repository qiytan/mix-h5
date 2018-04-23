import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MessagePage } from '../pages/message/message';
import { SearchPage } from '../pages/search/search';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AgreementPage } from '../pages/agreement/agreement';
import {SearchpwdPage } from '../pages/searchpwd/searchpwd';
import {FabuPage } from '../pages/fabu/fabu';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SearchPage,
    MessagePage,
    LoginPage,
    RegisterPage,
    AgreementPage,
    SearchpwdPage ,
    FabuPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MessagePage,
    SearchPage,
    LoginPage,
    RegisterPage,
    AgreementPage,
    SearchpwdPage,
    FabuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

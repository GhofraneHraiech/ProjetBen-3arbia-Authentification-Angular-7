import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginComponent } from '../app/admin/login/login.component'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControlComponent } from './control/control.component';
import { AngularFireDatabase } from 'angularfire2/database';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { RegisterComponent } from './admin/register/register.component';
import { HttpClientModule } from '@angular/common/http';


  var config = {
    apiKey: "AIzaSyB8HXKPpMQBE-KfrYkBBSU6XcxfL3kBW94",
    authDomain: "smart-301d2.firebaseapp.com",
    databaseURL: "https://smart-301d2.firebaseio.com",
    projectId: "smart-301d2",
    storageBucket: "smart-301d2.appspot.com",
    messagingSenderId: "656000308436"
  };


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ControlComponent,
    RegisterComponent,
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    HttpClientModule,
    
    
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }

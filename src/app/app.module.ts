import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddWikiComponent } from './add-wiki/add-wiki.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule} from '@angular/forms';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {RouterModule, Routes} from '@angular/router';
import { environment } from '../environments/environment';
import { AddAndshowComponent } from './add-andshow/add-andshow.component';
import { Add2Component } from './add2/add2.component';
import { TestComponent } from './test/test.component';
import { ListsComponent } from './lists/lists.component';



@NgModule({
  declarations: [
    AppComponent,
    AddWikiComponent,
    HomeComponent,
    AddAndshowComponent,
    Add2Component,
    TestComponent,
    ListsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp({apiKey: "AIzaSyChaepxxa_e96coIkyQA9P4YEFKUqU3E_M",
    authDomain: "ethereal-accord-193810.firebaseapp.com",
    databaseURL: "https://ethereal-accord-193810.firebaseio.com",
    projectId: "ethereal-accord-193810",
    storageBucket: "ethereal-accord-193810.appspot.com",
    messagingSenderId: "344959569062"}),
    AngularFireDatabaseModule,
    RouterModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

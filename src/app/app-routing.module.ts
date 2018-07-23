import { NgModule, Testability } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '../../node_modules/@angular/router';
import { AddWikiComponent } from './add-wiki/add-wiki.component';
import { HomeComponent } from './home/home.component';
import { AddAndshowComponent } from './add-andshow/add-andshow.component';
import { Add2Component } from './add2/add2.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path: '', component: AddWikiComponent},
  {path: 'home', component: HomeComponent},
  {path: 'add', component: AddAndshowComponent},
  {path: 'editWiki/:id', component: AddWikiComponent},
  {path: 'add2', component: Add2Component},
  {path: 'test', component: TestComponent},

  
  {path: '**', redirectTo: '/addwiki', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }

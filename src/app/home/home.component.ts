import { Component, OnInit } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '../../../node_modules/angularfire2/database';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  wikiList: AngularFireList<any>;
  wikis: any[];
  constructor(db: AngularFireDatabase,private router:Router) { 
    this.wikiList = db.list('wikis');
  }

  ngOnInit() {
    this.wikiList.snapshotChanges().map(actions => {
    return actions.map(action => ({ key: action.key, value: action.payload.val() }));
    }).subscribe(items => {
    this.wikis = items;
    });
  }
  delWiki(data){
    this.wikiList.remove(data.key)
    
  }
  editWiki(data){
    this.router.navigate([`/editWiki/${data.key}`]);
  }

}

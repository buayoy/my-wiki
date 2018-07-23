import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/observable';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  wikiList: AngularFireList<any>;
  constructor(private db:AngularFireDatabase) { 
    this.wikiList=db.list('wikis');
  }
  getWikiList():Observable<any[]>{
    return this.wikiList.snapshotChanges().map(action=>{
      return action.map(action=>({key:action.key,value:action.payload.val}))
    })
  };
  getWiki(id): Observable<any> {
    return this.db.object('wikis/' + id).snapshotChanges().map(res => {
    return res.payload.val();
    });
    }
  removeWiki(id):void{
    this.wikiList.remove(id);
  }
  addWiki(data) {
    return this.wikiList.push(data);
    }
    editWiki(id, data) {
    return this.wikiList.update(id, data);
    }
  }

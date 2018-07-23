import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {ActivatedRoute,Router} from '@angular/router';
import { NgForm } from '../../../node_modules/@angular/forms';
@Component({
  selector: 'app-add-wiki',
  templateUrl: './add-wiki.component.html',
  styleUrls: ['./add-wiki.component.css']
})
export class AddWikiComponent implements OnInit {
  wiki:any={};
  title: string = "Add Wiki"
  id;
  
  constructor(private db: AngularFireDatabase,private route:ActivatedRoute,private router:Router) { 
   
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
if(this.id){
    this.title = "Edit wiki";
    this.getWikiByKey(this.id);
}
  }
  addWiki(data:NgForm){
    if(this.id){
    this.db.list("/wikis").update(this.id,data.value).then(this.goToHome);
    }else{
      this.db.list("/wikis").push(data.value).then(this.goToHome);
    }
  }
getWikiByKey(id){
  this.wiki=this.db.object('wikis/' +id).snapshotChanges().map(res=>{
    return res.payload.val();
  })
}
goToHome=()=>{
  this.router.navigate(['/home']);
  }
}

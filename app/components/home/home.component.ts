import { Component, OnInit } from '@angular/core';
import { registerElement } from 'nativescript-angular/element-registry';
import { CardView } from 'nativescript-cardview';

registerElement('CardView', () => CardView);
const firebase = require("nativescript-plugin-firebase/app");


@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public shops:Array<any> = [];
  public docIds:Array<any> = [];
  constructor() { }

  ngOnInit() { 
    const shopsCollection = firebase.firestore().collection("shops")
    //shopsCollection.get().then(doc =>{ });
    shopsCollection.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
        //this.docIds.push(doc.id);
        this.shops.push(doc);
      });
      
    });
    setTimeout(() => {
    this.getShops();
    }, 1500);
  }

  getShops() {
   
  }



}

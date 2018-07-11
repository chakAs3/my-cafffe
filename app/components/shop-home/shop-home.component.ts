import { Component, OnInit , ViewContainerRef, ViewChild } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { registerElement } from 'nativescript-angular/element-registry';
//import { CardView } from 'nativescript-cardview';
import { ModalDialogService,  } from "nativescript-angular/directives/dialogs";
import { ItemModalComponent } from "./item-modal/item-modal.component";
const firebase = require("nativescript-plugin-firebase/app");

@Component({
  moduleId: module.id,
  selector: 'app-shop-home',
  templateUrl: './shop-home.component.html',
  styleUrls: ['./shop-home.component.scss']
})
export class ShopHomeComponent implements OnInit {
  id: any;
  products:Array<any> = [];
  shopProducts:Array<any> = [];
  currentShop:Array<any> = [];
  constructor(private route: ActivatedRoute,private modal: ModalDialogService, private vcRef: ViewContainerRef) { }
  ngOnInit() { 
    this.route.params.subscribe((params) => {
      this.id = params["id"];
      //console.log(this.id);
  });

  const productsfromShop = firebase.firestore().collection("shops").doc(this.id);
  productsfromShop.get().then(doc => {
    if (doc.exists) {
      this.currentShop = doc;
    } else {
      console.log("No such document!");
    }
  }); 




  const productsCollection = firebase.firestore().collection("shop-product");
    /*productsCollection.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        //console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
        //console.log(doc.data().shop.id)
        if(doc.data().shop.id == this.id){
        this.products.push(doc.data());
        }
        });
        //console.log(this.products);
      })*/
      const query = productsCollection
    .where("shop", "==", this.id);
    query
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            //console.log(`Relatively small Californian city: ${doc.id} => ${JSON.stringify(doc.data())}`);
            this.products.push(doc.data());
            //console.log(doc.data());
        });
      });
      setTimeout(() => {
      for(var i = 0; i < this.products.length; i++){
      const productsfromShop = firebase.firestore().collection("product").doc(this.products[i].product);
      productsfromShop.get().then(doc => {
        if (doc.exists) {
          this.shopProducts.push(doc);
        } else {
          console.log("No such document!");
        }
      });  
    }
    
    }, 1500);
    //console.log(this.products);
    setTimeout(() => {
       //console.log(this.shopProducts[0]);
       for(var i=0; i < this.shopProducts.length;i++){
         console.log('Name ' + this.shopProducts[i]);
         console.log(this.products[i].product);
         this.products.forEach(element => {
           if(element.product == this.shopProducts[i].id){
               console.log(element);
               this.shopProducts[i].base_price = element.base_price;
               this.shopProducts[i].description = element.description;
               this.shopProducts[i].shopId = element.shop;
               //this.shopProducts[i].name = element.name;
           }
           
         });
         /*if(this.shopProducts[i].id == this.products[i].product.id){
           console.log(this.products[i].product);
         }*/
       }
    }, 2500);
    
    };

    public showModal(item) {
      let options = {
          context: {item: item},
          fullscreen: true,
          viewContainerRef: this.vcRef
      };
      this.modal.showModal(ItemModalComponent, options).then(res => {
          console.log(res);
         
      });
  }

    showProducts(){
      console.log(this.shopProducts[0].data());
    }
}

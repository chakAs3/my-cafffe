import { Component, OnInit } from '@angular/core';
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";
import { parseIntAutoRadix } from '@angular/common/src/i18n/format_number';
const firebase = require("nativescript-plugin-firebase/app");

@Component({
  moduleId: module.id,
  selector: 'app-item-modal',
  templateUrl: './item-modal.component.html',
  styleUrls: ['./item-modal.component.scss']
})
export class ItemModalComponent implements OnInit {
  public product:Array<any> = [];
  public base_price:Number;
  public productInfoFromParam;
  public addons:Array<any> = [];
  public options:Array<any> =[]
  testChecking:Object = {total:0};
  /*public frameworks: Array<any> = [];
    checkTest: boolean;
    model:Object = [];
    public options:Object= [];
    testChecking:Object = {};*/
  constructor(private params: ModalDialogParams) { 
    //console.log(params.context);
    //this.base_price = params.context.item.base_price;
    this.testChecking['total'] = Number(params.context.item.base_price);
    this.productInfoFromParam = params.context.item;
    console.log(this.productInfoFromParam);
    const productsfromShop = firebase.firestore().collection("product").doc(params.context.item.id);
    productsfromShop.get().then(doc => {
      if (doc.exists) {
        this.product.push(doc);
        //this.product.base_price = params.context.base_price;
      } else {
        console.log("No such document!");
      }
    }); 
  }

  ngOnInit() {
    //this.options = [];
    const productAddon = firebase.firestore().collection("product-addon");
    const query = productAddon
    .where("shop-product", "==", this.productInfoFromParam.shopId);
    query.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        //console.log(`Relatively small Californian city: ${doc.id} => ${JSON.stringify(doc.data())}`);
        this.options.push(doc);
        //console.log(doc.data());
        });
      });
    /*productAddon.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        this.addons.push(doc.data()); 
        console.log(this.addons[0]['shop-product']);
        //console.log(this.productInfoFromParam.shopId);
        //if(this.productInfoFromParam.shopId == this.addons[0]['shop-product']){
        //console.log(doc.data());
        //this.options.push(doc);
        //}
      });
    });*/


    setTimeout(() => {
      //console.log(this.productInfoFromParam.id);
      this.product.forEach(element => {
        //console.log(this.product[0].data());
      });
    } , 1500);
   }

  public close(res: string) {
    this.params.closeCallback(res);
}

  public submit() {
    console.log(this.testChecking);
  }

  public addTotal(price,name) {
    //var Amount = parseInt(price);
    setTimeout(() => {
    //console.log(this.testChecking[name]);
    if(this.testChecking[name] == true){
    console.log(Number(this.testChecking['total']+price));
    this.testChecking['total'] = Number(this.testChecking['total']+price);

    console.log(this.testChecking);
        }
        else{
            //this.testChecking['total'] = Number(this.testChecking['total']-price);
        }

    }, 100);
}

}

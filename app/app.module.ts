import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { ItemService } from "./item/item.service";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { HomeComponent } from "./components/home/home.component";
import { ShopHomeComponent } from "./components/shop-home/shop-home.component";
import {DrinkComponent} from "./components/drink/drink.component"
import {ItemCustomComponent} from "./components/item-custom/item-custom.component"
import {DrinkOptionsComponent} from "./components/drink/drink-options/drink-options.component"

import {LoginComponent} from "./components/login/login.component"
import {RegisterComponent} from "./components/register/register.component"
import {DashboardComponent} from "./components/dashboard/dashboard.component"


//import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular';
import { TNSCheckBoxModule } from 'nativescript-checkbox/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { DropDownModule } from "nativescript-drop-down/angular";

//import { ModalComponent } from "./components/shop-home/item.modal";
import { ItemModalComponent } from "./components/shop-home/item-modal/item-modal.component";
import firebase = require("nativescript-plugin-firebase");

import { Feedback} from "nativescript-feedback"

firebase.init({
    // Optionally pass in properties for database, authentication and cloud messaging,
    // see their respective docs.
  }).then(
    instance => {
      console.log("firebase.init done");
    },
    error => {
      console.log(`firebase.init error: ${error}`);
    }
  );

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptUIListViewModule,
        ReactiveFormsModule,
        TNSCheckBoxModule,
        NativeScriptFormsModule,
        NativeScriptUISideDrawerModule,
        DropDownModule
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        ItemDetailComponent,
        HomeComponent,
        ShopHomeComponent,
        ItemModalComponent,
        LoginComponent,
        RegisterComponent,
        DashboardComponent,
        DrinkComponent,
        DrinkOptionsComponent,
        ItemCustomComponent
    ],
    entryComponents: [ItemModalComponent,DrinkOptionsComponent],
    providers: [
        ItemService,
        Feedback
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }

import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";

import { HomeComponent } from "./components/home/home.component";
import { ShopHomeComponent } from "./components/shop-home/shop-home.component";
import {DrinkComponent} from "./components/drink/drink.component"
import {LoginComponent} from "./components/login/login.component"
import {RegisterComponent} from "./components/register/register.component"
import {DashboardComponent} from "./components/dashboard/dashboard.component"
import {ItemCustomComponent} from "./components/item-custom/item-custom.component"



const routes: Routes = [
    { path: "", redirectTo: "/dashboard", pathMatch: "full" },
    { path: "items", component: ItemsComponent },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    { path: "dashboard", component: DashboardComponent },
    { path: "drink", component: DrinkComponent },
    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent },
    { path: "home", component: HomeComponent },
    { path: "shop/:id", component: ShopHomeComponent },
    { path: "custom/:id", component: ItemCustomComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
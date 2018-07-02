import { Component, OnInit , ViewContainerRef } from "@angular/core";
import { RadListView } from "nativescript-ui-listview";
import { Item } from "./item";
import { ItemService } from "./item.service";
import { Page } from "tns-core-modules/ui/page";
import { ModalDialogService,  } from "nativescript-angular/directives/dialogs";
import { ModalComponent } from "./item.modal";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Item[];

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private itemService: ItemService, private modal: ModalDialogService, private vcRef: ViewContainerRef) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }

    public showModal(item) {
        let options = {
            context: {item: item},
            fullscreen: true,
            viewContainerRef: this.vcRef
        };
        this.modal.showModal(ModalComponent, options).then(res => {
            console.log(res);
           
        });
    }
}
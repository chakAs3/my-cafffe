import { Component, OnInit, ViewContainerRef } from '@angular/core'; 
import { ModalDialogService,  } from "nativescript-angular/directives/dialogs";
import { DrinkOptionsComponent } from "./drink-options/drink-options.component";

@Component({
  moduleId: module.id,
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.scss']
})
export class DrinkComponent implements OnInit {
  items = [];
  constructor(private modal: ModalDialogService, private vcRef: ViewContainerRef) {
    
   }

  ngOnInit() {
      this.items.push(
        {
            itemName: "Latte",
            itemDesc: "Funeral",
            image:"~/images/coffee/latte.png"
        },
        {
            itemName: "Hot Chocolate",
            itemDesc: "For Emma, Forever Ago",
            image:"~/images/coffee/milk-coffee.png"
        },
        {
            itemName: "Espresso",
            itemDesc: "Random Access Memories",
            image:"~/images/coffee/black.png"
        },
        {
            itemName: "Black Coffee",
            itemDesc: "Build a Rocket Boys!",
            image:"~/images/coffee/espresso.png"
        },
        {
          itemName: "Latte",
          itemDesc: "Funeral",
          image:"~/images/coffee/latte.png"
      },
      {
          itemName: "Hot Chocolate",
          itemDesc: "For Emma, Forever Ago",
          image:"~/images/coffee/milk-coffee.png"
      },
      {
          itemName: "Espresso",
          itemDesc: "Random Access Memories",
          image:"~/images/coffee/black.png"
      },
      {
          itemName: "Black Coffee",
          itemDesc: "Build a Rocket Boys!",
          image:"~/images/coffee/espresso.png"
      }
    )
   }

   public showModal(item) {
    let options = {
        context: {item:item},
        fullscreen: true,
        viewContainerRef: this.vcRef
    };
    this.modal.showModal(DrinkOptionsComponent, options).then(res => {
        console.log(res);
    });
}

}

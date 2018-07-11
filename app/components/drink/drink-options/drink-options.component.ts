import { Component, OnInit } from '@angular/core';
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";


@Component({
  moduleId: module.id,
  selector: 'app-drink-options',
  templateUrl: './drink-options.component.html',
  styleUrls: ['./drink-options.component.scss']
})
export class DrinkOptionsComponent implements OnInit {
  items:Array<any> = [];
  constructor(public params:ModalDialogParams) { 
    this.items.push(params.context.item);
    console.log(params.context);
  }

  ngOnInit() { }

  public close(res: string) {
    this.params.closeCallback(res);
}

}

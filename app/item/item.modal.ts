import { Component } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";

@Component({
    selector: "my-modal",
    moduleId: module.id,
    templateUrl: "item.modal.html"
})
export class ModalComponent {

    public frameworks: Array<any> = [];

    public constructor(private params: ModalDialogParams) {
        console.log(params.context);
        this.frameworks.push(params.context.item);
        console.log(this.frameworks);
    }

    public close(res: string) {
        this.params.closeCallback(res);
    }

}
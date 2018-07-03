import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RadioOption } from "./radio-option";
import { Switch } from "ui/switch";
@Component({
    selector: "my-modal",
    moduleId: module.id,
    templateUrl: "item.modal.html"
})
export class ModalComponent implements OnInit {

    public frameworks: Array<any> = [];
    formGroup: FormGroup;
    checkTest: boolean;
    sugarCheck?: Array<RadioOption>;
    radioOptions?: Array<RadioOption>;
    model:Object = [];
    testChecking:Object = {'sugar':false,'milk':false};
    //@ViewChild("elem") checkTest: ElementRef;

    public constructor(private params: ModalDialogParams, private formBuilder: FormBuilder,) {
        console.log(params.context);
        this.frameworks.push(params.context.item);
        console.log(this.frameworks);
    }

    ngOnInit(): void {
        this.formGroup = this.formBuilder.group({
          testCheck: [
            {
              value: true,
              disabled: false
            },
            [Validators.required]
          ]
        });
    
        //this.items = this.itemService.getItems();
    
        // Plain ol' inline Array definition coming up :)
        this.sugarCheck = [
          new RadioOption("Sugar"),
          new RadioOption("Non Sugar"),
          //new RadioOption("Radio option 3")
        ];

        this.radioOptions = [
            new RadioOption("Radio option 1"),
            new RadioOption("Radio option 2"),
            new RadioOption("Radio option 3")
          ];
      }

    public close(res: string) {
        this.params.closeCallback(res);
    }

    public checkedChange(modelRef) {
        console.log("checkedChange:", modelRef.checked);
        
      }
    
      public submit() {
        //console.log(this.model);
        console.log("NgModel value:", this.checkTest);
        console.log(
          "Reactive FormGroup value:",
          this.formGroup.get("testCheck").value
        );
        console.log(this.testChecking);
      }
    
      changeCheckedRadio(radioOption: RadioOption): void {
        radioOption.selected = !radioOption.selected;
        //console.log(this.checkTest);
        this.testChecking['radio'] = radioOption.text;
        if (!radioOption.selected) {
          return;
        }
    
        // uncheck all other options
        this.radioOptions.forEach(option => {
          if (option.text !== radioOption.text) {
            option.selected = false;
            
          }
        });
      }

      //public firstSwitchState = "OFF";
      //public secondSwitchState = "ON";
  
      public onFirstChecked(args) {
          let firstSwitch = <Switch>args.object;
          if (firstSwitch.checked) {
             // this.firstSwitchState = "ON";
              this.testChecking['milk'] = true;
          } else {
              //this.firstSwitchState = "OFF";
              this.testChecking['milk'] = false;
          }
      }
  

}
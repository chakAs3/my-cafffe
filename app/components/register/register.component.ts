import { Component , OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Location } from "@angular/common";
import { SnackBar } from "nativescript-snackbar";
import * as ApplicationSettings from "application-settings";
import firebase = require("nativescript-plugin-firebase");
import * as dialogs from "ui/dialogs";

@Component({
    moduleId: module.id,
    selector: "app-register",
    templateUrl: "register.component.html",
})
export class RegisterComponent implements OnInit {

    public input: any;

    public ngOnInit() {


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

    }

    public constructor(private router: RouterExtensions, private location: Location) {
        this.input = {
            "email": "",
            "password": ""
        }
    }

    public register() {
        if(this.input.email && this.input.password) {
            //ApplicationSettings.setString("account", JSON.stringify(this.input));
            firebase.createUser({
                email: this.input.email,
                password: this.input.password,        
            }).then((result) => {
                    //let User = result;
                    //localStorage.setItem('profile', User ); 
                    dialogs.alert({
                        title: "Congrats You are Registered",
                        //message: result.key,
                        okButtonText: "Confirm"
                    }).then(() => {
                        
                        this.router.navigate(["/login"], { clearHistory: true });
                                             
                    });


                    //alert('User Created with user id - '+result.key);
                    
                },
                function (errorMessage) {
                    // dialogs.alert({
                    //  title: "No user created",
                    //  message: errorMessage,
                    //  okButtonText: "OK, got it"
                    // })
                    alert('No user created. Got error message insted - '+errorMessage); 
                             
                }
            )
             
            
        } else {
            (new SnackBar()).simple("All Fields Required!");
        }
    }

    public goBack() {
        this.location.back();
    }

}
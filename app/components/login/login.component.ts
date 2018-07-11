import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { SnackBar } from "nativescript-snackbar";
import * as ApplicationSettings from "application-settings";
import firebase = require("nativescript-plugin-firebase");

@Component({
    moduleId: module.id,
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public input: any;
    resultCallback:Object;

    public constructor(private router: RouterExtensions) {
        this.input = {
            "email": "",
            "password": ""
        }
    }

    public ngOnInit() {
        if(ApplicationSettings.getBoolean("authenticated", false)) {
            this.router.navigate(["/dashboard"], { clearHistory: true });
        }
    }

    public login() {
        
        if(this.input.email && this.input.password) {
            console.log(this.input.email);
            console.log(this.input.password);
           firebase.login(
          {
            type: firebase.LoginType.PASSWORD,
            passwordOptions: {
              //email: 'eddyverbruggen@gmail.com',
              //password: 'firebase'
              email:this.input.email,
              password:this.input.password
            }
          })
          .then(result => {
              this.resultCallback = result;
              //console.log(this.resultCallback);
              ApplicationSettings.setBoolean("authenticated", true);
              this.router.navigate(["/dashboard"], { clearHistory: true });
          })
          .catch(error => {
              //console.log(error)
              (new SnackBar()).simple(error);
          });

          //console.log(this.resultCallback);
            //let account = JSON.parse(ApplicationSettings.getString("account", "{}"));
            //if(this.input.email == account.email && this.input.password == account.password) {
              //  ApplicationSettings.setBoolean("authenticated", true);
                //this.router.navigate(["/secure"], { clearHistory: true });
            } else {
                (new SnackBar()).simple("Incorrect Credentials!");
            }
        } 
}

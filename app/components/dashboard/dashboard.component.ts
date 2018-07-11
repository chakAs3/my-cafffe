import { Component, ViewChild, OnInit , AfterViewInit , ChangeDetectorRef } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import * as ApplicationSettings from "application-settings";
import firebase = require("nativescript-plugin-firebase");
import { Feedback, FeedbackType, FeedbackPosition } from "nativescript-feedback";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-ui-sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
const firebaseApi = require("nativescript-plugin-firebase/app");

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit , OnInit {

  User:Object;
  shops:Array<any> = [];
  coffees:Array<any> = [];
  items = [];
  private _mainContentText: string;
  public constructor(private router: RouterExtensions, private feedback: Feedback, private _changeDetectionRef: ChangeDetectorRef) { }

  @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private drawer: RadSideDrawer;

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    }

  public ngOnInit() {
      
    this.mainContentText = "SideDrawer for NativeScript can be easily setup in the HTML definition of your page by defining tkDrawerContent and tkMainContent. The component has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.";

    /*if(!ApplicationSettings.getBoolean("authenticated", false)) {
        this.router.navigate(["/login"], { clearHistory: true });
        }*/
     //else{
         //console.log('User is Authenticated');
         firebase.getCurrentUser()
          .then(user => {
              //console.log("User uid: " + user.uid)
              this.User = user; 
              console.log(this.User);
              if(!user.emailVerified){
                  this.feedback.warning({
                      message: "Email is not Verified"
                    });
                    firebase.sendEmailVerification().then(
                      function () {
                        console.log("Email verification sent");
                      },
                      function (error) {
                        console.log("Error sending email verification: " + error);
                      }
                  );
              }
          })
          .catch(error => console.log("Trouble in paradise: " + error));
     //}
     const citiesShops = firebaseApi.firestore().collection("shops");

     citiesShops.get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
        //console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
        this.shops.push(doc);
        });
    });
    //this.coffees = [{"name":"Hello"},{"name":"Hello"}];
    const citiesCoffees = firebaseApi.firestore().collection("product");

    citiesCoffees.get().then(querySnapshot => {
   querySnapshot.forEach(doc => {
       //console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
       this.coffees.push(doc.data());
       
       });
   });


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
        }
    )

  }

  public logout() {
      ApplicationSettings.remove("authenticated");
      this.router.navigate(["/login"], { clearHistory: true });
  }

    get mainContentText() {
        return this._mainContentText;
    }

    set mainContentText(value: string) {
        this._mainContentText = value;
    }

    public openDrawer() {
        this.drawer.showDrawer();
    }

    public onCloseDrawerTap() {
    this.drawer.closeDrawer();
    }


}

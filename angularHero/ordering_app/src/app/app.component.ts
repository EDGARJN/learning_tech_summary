import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root12345',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  switcher:boolean = false;

onSwitch(menubar:number){
    menubar == 0 ? this.switcher = true : this.switcher = false;
    console.log("okay man")
  }
  serverElement:object[] = [{"name":"server0ne","amount":50},{"name":"server02","amount":70}];
  title = 'ordering_app';
  
}

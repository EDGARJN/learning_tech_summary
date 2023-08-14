import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElement:object[] = [{"name":"server0ne","amount":50},{"name":"server02","amount":70}];
  title = 'ordering_app';
}

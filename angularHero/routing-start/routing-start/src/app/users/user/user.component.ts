import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private route:ActivatedRoute) { }
  id:string;
  name:string;
  ngOnInit() {
    // this.id = this.route.snapshot.params['id'];
    // this.name = this.route.snapshot.params['name'];
    this.route.params.subscribe((params:Params)=>{
      this.id = params['id'];
      this.name = params["name"];
    })  }

}

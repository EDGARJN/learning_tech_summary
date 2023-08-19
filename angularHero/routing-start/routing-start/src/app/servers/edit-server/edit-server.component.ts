import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  param:string;

  constructor(private serversService: ServersService,private route:ActivatedRoute, private nav:Router) { }
  

  ngOnInit() {
    this.param = this.route.snapshot.params["id"]
    console.log(this.param)
      this.server = this.serversService.getServer(parseInt(this.param));
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
  }
   onBtnClick(id:number){

   }

  onUpdateServer() {
    this.serversService.updateServer(parseInt(this.param), {name: this.serverName, status: this.serverStatus});
    this.nav.navigate(["/servers"])
  }

}

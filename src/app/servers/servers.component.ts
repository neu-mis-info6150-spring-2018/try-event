import { Component, OnInit } from '@angular/core';
//import { Event } from '_debugger';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

serverCreationStatus = 'No server was Created';
  allowNewServer = false;
  serverCreated  = false;
  servers = ['testServer1', 'testServer2'];
  serverName = 'Try Test';
  constructor() {

    setTimeout( () => {

      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was Created! Name is:' + this.serverName;
  }

onUpdateServerName(event) {
//console.log(event);

this.serverName = (<HTMLInputElement>event.target).value;
console.log(this.serverName);
  }

}


//import the decorator

import {Component} from '@angular/core';
@Component({
  selector:'app-server',
  //templateUrl will hold the template of html of our file here.
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
//added the decorator
//export class as we have to use it in app component
export class ServerComponent{

  serverId: Number = 10;
  serverStatus: String = 'Offline';

  constructor() {
   this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';

  }

  getColor() {
    return this.serverStatus === 'Online' ? 'green' : 'red';

  }

}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No Server was created';
  newServerName = '';

  constructor() {
    setTimeout(()=>this.allowNewServer=true, 1000);
   }

  ngOnInit(): void {
  }

  onServerCreation(){
    this.serverCreationStatus = 'A new Server is created'
  }

  onServerNameChange(event){
    // console.log(event);
    this.newServerName = event.target.value;
  }

}

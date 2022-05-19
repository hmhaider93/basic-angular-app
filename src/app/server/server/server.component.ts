import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverId:number = 34;
  serverStatus:string = 'offline';

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignement2',
  templateUrl: './assignement2.component.html',
  styleUrls: ['./assignement2.component.css']
})
export class Assignement2Component implements OnInit {

  username = '';
  isUsernameEmpty = ()=>{
    if(this.username === '') return true;
    else false
  };

  constructor() { }

  ngOnInit(): void {
  }

  onUsernameSelect(event){
    this.username = '';
  }

}

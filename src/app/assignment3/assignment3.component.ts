import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {

   getTime() {
    const today = new Date();
    const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    return time;
  }

  getColor(log){
    console.log(log);
    let indexOfLog = this.buttonClickedLog.findIndex((item)=> item === log)
    console.log(indexOfLog);
    return indexOfLog>4 ? 'blue' : 'white';
  }



  buttonClickedLog = []

  displayPassword = false;
  toggleDisplayPassword = ()=>{
    // console.log(this.getTime())
    let time = this.getTime();
    this.buttonClickedLog.unshift("Button is Clicked at " +time);
    if(this.displayPassword === false) this.displayPassword = true
    else this.displayPassword = false
  }

  constructor() { }

  ngOnInit(): void {
  }

}

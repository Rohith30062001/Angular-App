import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Input } from '@angular/core'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  public username: string ="";
  public password: string = "";
  public allowroute:boolean=false

  constructor() { }

  ngOnInit(): void {
  }
  check(data:any){
    console.log(data.value['username'])
    if(data.value['username']==='admin' && data.value['password']==='admin'){
      console.log("true")
      this.allowroute=true
      this.username=''
      this.password=''
    }
    else{
      this.allowroute=false
    }
  }
  
}

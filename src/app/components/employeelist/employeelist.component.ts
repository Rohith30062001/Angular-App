import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  constructor(public userservice:UserService) { }
  public data:any
  public popup:boolean=false
  public editdata:any
  ngOnInit(): void {
    this.press()
  }
  press(){
    this.userservice.getusers().subscribe(
      data => {this.data=data
      console.log("data",data)},
      error => console.log("error")
    )
    console.log(this.data)
  }
  popupfun(x:any){
    this.popup=true
    this.editdata=x
    console.log("edit data",x)
  }
  deleteuser(){
    this.userservice.deleteuser(this.editdata[0]).subscribe(
      data => console.log('deleted'),
      error => console.log("error")
    )
    location.reload()
  }
}

import { Component, OnInit, Output, Input } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input()
  editform:boolean=false
  @Input()
  data:any

  public logincomp:boolean=false
  public type = ['admin','employee']
  
  userModel = new User('','',false,'','','','','','','')

  
  constructor(public service:UserService) { }
  

  ngOnInit(): void {
    if(this.editform){
      console.log("before usermodel",this.userModel)
      console.log('clicked teditform')
      this.userModel.userid=this.data[0]
      this.userModel.username=this.data[1]
      this.userModel.surname=this.data[2]
      this.userModel.mobile=this.data[9]
      this.userModel.dob=this.data[3]
      this.userModel.gender=this.data[4]
      this.userModel.adress=this.data[5]
      this.userModel.email=this.data[6]
      this.userModel.type=this.data[7]
      this.userModel.remeber=true?this.data[8]==1:false
      console.log("after usermodel",this.userModel)
    }
    
  }  
  submit(){
    console.log("subit fun",this.userModel);
    this.service.enroll(this.userModel).subscribe(
      data => console.log("sucesss"),
      error => console.log("error")
    )
    this.resetform()
    if(this.editform){
      location.reload()}
    
  }
  resetform(){
    this.userModel.adress='',
    this.userModel.dob='',
    this.userModel.email=''
    this.userModel.gender='',
    this.userModel.mobile='',
    this.userModel.remeber=false,
    this.userModel.surname='',
    this.userModel.type='',
    this.userModel.username=''

  }
 

  
}

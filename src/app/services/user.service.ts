import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url="http://127.0.0.1:5000"
  geturl = "http://127.0.0.1:5000/employees"
  deletusereurl = "http://127.0.0.1:5000/delete"
  constructor(public http:HttpClient) { }
  enroll(user:any){
    console.log("enroolll", user);
    
    return this.http.post<any>(this.url,user)
  }
  getusers(){
    console.log('url',this.geturl)
    console.log("get users service")
    return this.http.get<any>(this.geturl)
  }
  deleteuser(id:any){
    let deleteurl = this.deletusereurl + '/'+id
    console.log('delete usere service',deleteurl)
    return this.http.delete<any>(deleteurl)
  }

}

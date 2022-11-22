import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-demo',
  templateUrl: './login-demo.component.html',
  styleUrls: ['./login-demo.component.css']
})
export class LoginDemoComponent implements OnInit {
  ngOnInit(): void {
  }

  employee:Employee = new Employee();
show: boolean= false;
submit(){
console.log("user name is " + this.employee.username)
this.clear();
}
clear(){
this.employee.username ="";
this.employee.password = "";
this.show = true;
}
}
export class Employee
{
  username : string ="";
  password : string ="";
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

//data="Happy banking with us" <h1>{{data}}</h1> - on html file : string interpollation
data1="account number" //[property]="method()" [placeholder]="varaiable"

acno:any=""

 ano:string=""  //two way binding 
psw:string=""

login()
{
  console.log(this.ano);
  console.log(this.psw);
  
  
}

/*login()
{
  alert("login clicked") //(click)="login()" //event binding
}*/

acnochange(event:any)
{
  console.log(event.target.value);
  
}
/*acnochange(event:any)
{
  //this.acno=event.target.value;
  console.log(event);
  
  //console.log(this.acno);
  
}*/
}

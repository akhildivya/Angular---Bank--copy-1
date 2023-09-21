import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

//data="Happy banking with us" <h1>{{data}}</h1> - on html file : string interpollation
data1="account number" //[property]="method()" [placeholder]="varaiable"

login()
{
  alert("login clicked") //(click)="login()"
}

acnochange(event:any)
{
  console.log(event.target.value);
  
}

}

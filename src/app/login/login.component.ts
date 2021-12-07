import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  hide = true;
  loginData={
    userName:'',
    password:''

  }
  constructor(private service:AuthService,
              private router:Router) { }

  login(){
    this.service.login(this.loginData).subscribe((data:any)=>{
      localStorage.setItem('userName',data.result.userName);
      localStorage.setItem('token_value',data.result.token);
      this.router.navigate(['/clientes']);
    },
    (errorData)=>alert(errorData.error.displayMessage));//trae los errores del back
  }

}

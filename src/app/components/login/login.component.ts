import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName='';
  password='';
  errMsg='';
 

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    if(this.userName.trim().length===0){
      this.errMsg = 'Username is required';
    }else if(this.password.trim().length===0){
      this.errMsg = 'Password is required';
    }else{
      this.errMsg=''
      let res = this.auth.login(this.userName,this.password);
      if(res===200){
        this.router.navigate(['home'])
      }if(res === 403){
        this.errMsg = 'Invalid Credentials'
      }
    }

  }

}

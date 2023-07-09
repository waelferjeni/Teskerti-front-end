import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/Services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string = '';
  password:string = '';
  constructor( private authe:AuthentificationService,) { }
  ngOnInit(): void {
  }
  getuser(){
   this.authe.Login(this.username,this.password)
    
  }
}

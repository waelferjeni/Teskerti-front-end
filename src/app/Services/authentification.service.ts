import { Injectable } from '@angular/core';
import{AngularFireAuth} from '@angular/fire/compat/auth';
 import { Router } from '@angular/router';
//import { Router } from 'express';
 @Injectable({
   providedIn: 'root'
 })
 export class AuthentificationService {

   constructor(private frauth :AngularFireAuth,private router: Router) { }
     Login(username:any , password:any ){
     this.frauth.signInWithEmailAndPassword(username,password).then( ()=>{
     localStorage.setItem('token','true');
     //console.log('work');
     this.router.navigateByUrl('AllTickets')
     },err =>{
 alert('Login failed');
     }
    )
   }
   isAuthenticated(): boolean {
    // Check if the user is authenticated
    return !!localStorage.getItem('token');
  }
  Logout(){
    localStorage.setItem('token','false');
    this.router.navigateByUrl('/')
  }
 }

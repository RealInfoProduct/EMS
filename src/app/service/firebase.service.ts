import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { from } from 'rxjs';
import {  signInWithEmailAndPassword } from 'firebase/auth';
import { Firestore } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private authentication: Auth, ) { }


   /////////////////////// Authentication ////////////////////////

   login(username : string, password: string){
    return from(signInWithEmailAndPassword(this.authentication,username,password));
  }
  logout(){
    return from(this.authentication.signOut());
  }
}

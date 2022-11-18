import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  showPassword:boolean = false

  constructor(private formBuilder: FormBuilder,
              private router:Router,
              private afAuth:AngularFireAuth,
              private firebaseService:FirebaseService
              ) { }

  ngOnInit(): void {
    this.buildForm()
  }

  buildForm():void{
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  // submit() {
  //   const credential = {
  //     email: this.loginForm.value.username,
  //     password: this.loginForm.value.password,
  //   }

  //   this.firebaseService.login(credential.email, credential.password).subscribe((res) => {
  //     if (res) {
  //       console.log(res);
        
  //       alert("Login Successfully !!")
  //       this.router.navigate(['web/dashboard'])
  //     } else {
  //       alert("Something Went Wrong !")
  //     }
  //   })
  //   console.log(this.loginForm.value);
  // }

  submit() {
    return this.afAuth.signInWithEmailAndPassword(this.loginForm.value.username, this.loginForm.value.password)
      .then((result) => {
        this.afAuth.authState.subscribe((user) => {
          if (user) {
            alert("Login Successfully !!")
            this.router.navigate(['web/dashboard'])
          }
        });
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  navigateToRegister(){
    this.router.navigate(['/register'])
  }
}

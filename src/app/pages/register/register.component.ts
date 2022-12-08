import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponse } from 'src/app/interfaces/interface';
import { AuthService } from 'src/app/service/auth.service';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  error
  success

  registrationForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private router:Router,
    private afAuth:AngularFireAuth,
    private firebaseService:FirebaseService ,private authService:AuthService) { }

  ngOnInit(): void {
    this.buildForm()
  }

  
  buildForm():void{
    this.registrationForm = this.formBuilder.group({
      email: ['',[ Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }

  onSubmit(): void {
    const email = this.registrationForm.value.email
    const password = this.registrationForm.value.password

    let authObservable: Observable<AuthResponse>;
    this.authService.signUp(email, password).subscribe(
      (res) => {
        this.success = `Your Email: ${res.email} Register Successfully.. Go to Loginpage...`
      },
      err => {
        console.log('ERROR===>', err);
        this.error =  err.error.error.message
      })
  }

  navigateToLogin(){
    this.router.navigate(['/login'])
  }

}

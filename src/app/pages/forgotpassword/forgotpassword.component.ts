import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthResponse } from 'src/app/interfaces/interface';
import { AuthService } from 'src/app/service/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {

  success:boolean = false
  error

  forgotPasswordForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private router:Router,
    private authService:AuthService) { }

  ngOnInit(): void {
    this.buildForm()
  }

  
  buildForm():void{
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['',[ Validators.required , Validators.email]],
    })
  }


  submit(){
    this.authService.forgotPassword(this.forgotPasswordForm.value.email).subscribe(
      (res)=>{
      this.success = true
      this.forgotPasswordForm.reset()
    },
    (err)=>{
      this.error = err.error.error.message
      console.log(this.error);
      
    })
    
  }
  navigateToLogin(){
    this.router.navigate(['/login'])
  }
}


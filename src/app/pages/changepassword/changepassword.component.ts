import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

export function ConfirmPasswordValidator(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    let control = formGroup.controls[controlName];
    let matchingControl = formGroup.controls[matchingControlName]
    if (
      matchingControl.errors &&
      !matchingControl.errors["confirmPasswordValidator"]
    ) {
      return;
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ confirmPasswordValidator: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {
  success:boolean = false
  error
  token:any

  changePasswordForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private router:Router,
    private authService:AuthService) { }

    ngOnInit(): void {
      this.buildForm()
      const userDataList = sessionStorage.getItem('UserData');
      this.token = JSON.parse(userDataList)._token
    }
  
    
    buildForm():void{
      this.changePasswordForm = this.formBuilder.group({
        password: ['', Validators.required ],
        confirmPassword: ['', Validators.required]
      },
      {
        validator: ConfirmPasswordValidator("password", "confirmPassword")
      },)
    }
  
  
    submit(){
      const payload = {
        idToken:this.token,
        password:this.changePasswordForm.value.password
      }

      this.authService.changePassword(payload).subscribe(
        (res) =>{
          this.success = true
          setTimeout(() => { this.router.navigate(['/login']) }, 3000);
        },
        (err)=>{
          this.error = err.error.error.message
          setTimeout(() => { this.error = undefined }, 5000);

        })
    }
    
    navigateToLogin(){
      this.router.navigate(['/login'])
    }
}

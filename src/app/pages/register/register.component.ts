import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthResponse } from 'src/app/interfaces/interface';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  onSubmit() : void {
    const email = "test1433@gmail.com"
    const password = '123456'

    let authObservable :Observable<AuthResponse>;


    this.authService.signUp(email,password).subscribe(
      (res) =>{
      console.log('RES==>' ,res);
    },
      err => {
      console.log('ERROR===>',err);
      
    })

  }

}

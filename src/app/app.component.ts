import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';
import { BnNgIdleService } from 'bn-ng-idle';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TMS';

  constructor(private authService:AuthService,
              private router:Router, 
              private bnIdle: BnNgIdleService
    ){
     if (this.authService.user != undefined)
    //  this.authService.user.subscribe(x => this.currentUser = x);
   this.bnIdle.startWatching(600).subscribe((res) => {
     if (res) {
      this.authService.signOut()
     }
   })
  }

  ngOnInit(): void {
    this.authService.autoSignIn();
  }

}


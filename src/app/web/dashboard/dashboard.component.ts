import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    // private firebaseService:FirebaseService,
              private router:Router)  { }

  ngOnInit(): void {
  }

  // logOut(): void{
  //   localStorage.clear();
  //   this.firebaseService.logout().subscribe(()=>{
  //     this.router.navigate(['/login'])
  //   })
  // }
}

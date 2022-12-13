import { Component, OnInit,Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-thm-menubar',
  templateUrl: './thm-menubar.component.html',
  styleUrls: ['./thm-menubar.component.scss']
})
export class ThmMenubarComponent implements OnInit {
  
  items!: MenuItem[]
  list:any 
  // @Input() sideNavStatus: boolean = false
  // @Input() sideNavStatusClose: boolean = false
  constructor(private translate:TranslateService , private authService:AuthService) { 
  //   this.translate.get(['DASHBOARD','Add_Employee','Bonus_Attendance','Report','Settings','Logout']).subscribe(translations => {
    
  //   this.list= [
  //     {
  //       icon:'fa fa-home',
  //       name:translations.DASHBOARD,
  //       link:'/web/dashboard'
  //     },
  //     {
  //       icon:'fa fa-pencil-square-o',
  //       name:translations.Add_Employee,
  //       link:'/web/addemployee'
  //     },
  //     {
  //       icon:'fa fa-user-o',
  //       name:translations.Bonus_Attendance,
  //       link:'/web/bonusattendance'
  //     },
  //     {
  //       icon:'fa fa-book',
  //       name:translations.Report,
  //       link:'/web/report'
  //     },
  //     {
  //       icon:'fa fa-cog',
  //       name:translations.Settings,
  //       link:'#'
  //     },
  //     {
  //       icon:'fa fa-sign-in',
  //       name:translations.Logout,
  //       link:'/login'
  //     },
  //   ];
  // })
  }

  
  
  ngOnInit(): void {

  }
  logout(){
    this.authService.signOut()
  }

  }


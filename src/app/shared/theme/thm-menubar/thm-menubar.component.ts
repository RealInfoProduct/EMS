import { Component, OnInit,Input } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-thm-menubar',
  templateUrl: './thm-menubar.component.html',
  styleUrls: ['./thm-menubar.component.scss']
})
export class ThmMenubarComponent implements OnInit {

  // @Input() sideNavStatus: boolean = false
  // @Input() sideNavStatusClose: boolean = false
  
  items!: MenuItem[]
  list:any =[
    {
      icon:'fa fa-home',
      name:'Dashboard',
      link:'/web/dashboard'
    },
    {
      icon:'fa fa-pencil-square-o',
      name:'Add Employee',
      link:'/web/addemployee'
    },
    {
      icon:'fa fa-user-o',
      name:'Bonus & Attendance',
      link:'/web/bonusattendance'
    },
    {
      icon:'fa fa-book',
      name:'Report',
      link:'/web/report'
    },
    {
      icon:'fa fa-cog',
      name:'Settings',
      link:'#'
    },
    {
      icon:'fa fa-sign-in',
      name:'Logout',
      link:'/login'
    },
    
  ]

  constructor() { }

  ngOnInit(): void {
}
  }


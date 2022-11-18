import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-thm-menubar',
  templateUrl: './thm-menubar.component.html',
  styleUrls: ['./thm-menubar.component.scss']
})
export class ThmMenubarComponent implements OnInit {

  // @Input() sideNavStatus: boolean = false
  // @Input() sideNavStatusClose: boolean = false
  

  list:any =[
    {
      icon:'fa fa-home',
      name:'Home',
      link:'/web/dashboard'
    },
    {
      icon:'fa fa-home',
      name:'About',
      link:'#'
    },
    {
      icon:'fa fa-home',
      name:'Seting',
      link:'#'
    },
    {
      icon:'fa fa-home',
      name:'Logout',
      link:'#'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

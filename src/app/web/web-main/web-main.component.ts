import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-web-main',
  templateUrl: './web-main.component.html',
  styleUrls: ['./web-main.component.scss']
})
export class WebMainComponent implements OnInit {

  sideNavStatus:boolean =false
  sideNavStatusClose:boolean = false

  constructor() { }

  ngOnInit(): void {
    
  }

}

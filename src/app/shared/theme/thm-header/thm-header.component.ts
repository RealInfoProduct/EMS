import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/service/firebase.service';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-thm-header',
  templateUrl: './thm-header.component.html',
  styleUrls: ['./thm-header.component.scss']
})
export class ThmHeaderComponent implements OnInit {
  @Output() sideNavToggled = new EventEmitter<boolean>();
  @Output() sideNavToggledClosed = new EventEmitter<boolean>();
  

  menuStatus: boolean = false
  menuStatusClose: boolean = true
  language = [
    {value : 'en'},
    {value : 'gu'},
]

 

  constructor(private firebaseService:FirebaseService,
                      private router:Router,
                      private translate: TranslateService,
                      private authService:AuthService) { 
    translate.setDefaultLang('en')
    
  }

  //  this one use for a handle click and double click on one icon

  // @Output() singleClick = new EventEmitter();
  // @Output() doubledClick = new EventEmitter();

  // timer:any
  // stopClick:boolean = false

  // @HostListener('click', ['$event']) onClick(e: any) {
  //   this.timer = 0
  //   this.stopClick = false;

  //   this.timer = setTimeout(() => {
  //     if (!this.stopClick) {
  //       this.menuStatus = !this.menuStatus
  //       this.sideNavToggled.emit(this.menuStatus)
  //     }
  //   }, 200);
  // }

  // @HostListener('dblclick', ['$event']) onDbClick(e: any) {
  //   this.stopClick = true;
  //   clearTimeout(this.timer)
  //   this.menuStatusClose = !this.menuStatusClose
  //   this.sideNavToggledClosed.emit(this.menuStatusClose)
  // }

  ngOnInit(): void {

  }

  singleClicked(){
    this.menuStatus = !this.menuStatus
    this.sideNavToggled.emit(this.menuStatus)
  }

  // singleHandler(event:any){
  //   console.log('in Single clicked' , event);
  // }

  // doubleHandler(event:any){
  //   console.log('in Doubled clicked' , event);
  // }

  // logOut(): void{
  //   localStorage.clear();
  //   this.firebaseService.logout().subscribe(()=>{
  //     this.router.navigate(['/login'])
  //   })
  // }

  logOut(){
    this.authService.signOut()
  }
  changepassword(){
    this.router.navigate(['/changepassword'])
  }
  

  languageChange(event:any){
    this.translate.use(event.attributes.value.value)
  }

}

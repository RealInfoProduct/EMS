import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TMS';

  constructor(private authService:AuthService){}

  ngOnInit(): void {
    this.authService.autoSignIn();
  }

}


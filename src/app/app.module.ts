import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from './shared/shared.module';
import { RegisterComponent } from './pages/register/register.component'

// import { provideFirebaseApp,initializeApp} from '@angular/fire/app'
// import { getFirestore,provideFirestore} from '@angular/fire/firestore';
// import { environment } from 'src/environments/environment'
// import { provideAuth,getAuth } from '@angular/fire/auth';
// import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,

    // provideFirebaseApp(()=>initializeApp(environment.firebaseConfig)),
    // provideFirestore(()=> getFirestore()),
    // provideAuth(() => getAuth()),

    // // this one use for authentication handle error only
    // AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

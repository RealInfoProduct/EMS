import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from './auth/auth.guard';
import { ForgotpasswordComponent } from './pages/forgotpassword/forgotpassword.component';
import { ChangepasswordComponent } from './pages/changepassword/changepassword.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'register',
    component:RegisterComponent,
  },
  {
    path:'forgotpassword',
    component:ForgotpasswordComponent,
  },
  {
    path:'changepassword',
    component:ChangepasswordComponent,
  },
  // {
  //   path:'**',
  //   component:LoginComponent
  // },
  {
    path: 'web',
    canActivate:[AuthGuard],
    loadChildren: () => import('./web/web.module').then(m => m.WebModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { canActivate,redirectLoggedInTo} from '@angular/fire/auth-guard'

// const redirectDashboard = () =>  redirectLoggedInTo(['web']);

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent,
    // ...canActivate(redirectDashboard)
  },
  {
    path:'register',
    component:RegisterComponent,
    // ...canActivate(redirectDashboard)
  },
  // {
  //   path:'**',
  //   component:LoginComponent
  // },
  {
    path: 'web',
    loadChildren: () => import('./web/web.module').then(m => m.WebModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

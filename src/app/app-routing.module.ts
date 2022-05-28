import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CusdetailComponent } from './app/cusdetail/cusdetail.component';
import { HomeComponent } from './app/home/home.component';
import { LoginComponent } from './app/login/login.component';
import { RegistratioinComponent } from './app/registratioin/registratioin.component';

const routes: Routes = [
  {path:'', redirectTo:'Home', pathMatch:'full'},
  {path:'Home',component:HomeComponent},
  {path:'Login',component:LoginComponent},
  {path:'Registration',component:RegistratioinComponent},
  {path:'CustomerDetails',component:CusdetailComponent},
  {path:'**',component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

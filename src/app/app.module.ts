import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistratioinComponent } from './app/registratioin/registratioin.component';
import { LoginComponent } from './app/login/login.component';
import { HomeComponent } from './app/home/home.component';
import { CusdetailComponent } from './app/cusdetail/cusdetail.component';
import { RestapisService } from '../app/restapis.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RxjsmergeComponent } from './rxjsmerge/rxjsmerge.component';
@NgModule({
  declarations: [
    AppComponent,
    RegistratioinComponent,
    LoginComponent,
    HomeComponent,
    CusdetailComponent,
    RxjsmergeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

  ],
  providers: [RestapisService],
  bootstrap: [AppComponent]
})
export class AppModule { }

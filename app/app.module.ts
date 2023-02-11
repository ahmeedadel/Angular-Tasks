import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { UsersComponent } from './Routing/users/users.component';
import { ProfileComponent } from './Routing/profile/profile.component';
import { ErrorComponent } from './Routing/error/error.component';
import { HeaderComponent } from './Routing/header/header.component';
import { AppRoutingModule} from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import { UserDetilsComponent } from './Routing/user-detils/user-detils.component';
import { PfirstService } from './Service/pfirst.service';


const routes:Routes = [
  {path:"", component:UsersComponent},
  {path:"users", component:UsersComponent},
  {path:"users/:id", component:UserDetilsComponent},
  {path:"profile", component:ProfileComponent},
  {path:"**", component:ErrorComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ProfileComponent,
    ErrorComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    PfirstService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

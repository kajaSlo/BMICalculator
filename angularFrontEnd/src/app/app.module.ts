import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserService } from './services/user.service';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { UsersWhichCheckedTheirBMIsComponent } from './components/users-which-checked-their-bmis/users-which-checked-their-bmis.component';


const appRoutes: Routes = [
  {path: '', component: NavbarComponent},
  {path: 'users', component: UsersWhichCheckedTheirBMIsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersWhichCheckedTheirBMIsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

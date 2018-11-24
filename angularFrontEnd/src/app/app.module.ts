import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserService } from './services/user.service';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { UsersWhichCheckedTheirBMIsComponent } from './components/users-which-checked-their-bmis/users-which-checked-their-bmis.component';
import { BmiComponentComponent } from './components/bmi-component/bmi-component.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import {PopupModule} from 'ng2-opd-popup';


const appRoutes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'users', component: UsersWhichCheckedTheirBMIsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersWhichCheckedTheirBMIsComponent,
    BmiComponentComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    PopupModule.forRoot(),
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

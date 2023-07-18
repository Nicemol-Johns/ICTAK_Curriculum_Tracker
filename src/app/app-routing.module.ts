import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
<<<<<<< HEAD
import { AppComponent } from './app.component';
import { IntroComponent } from './pages/home/intro/intro.component';

const routes: Routes = [
=======

const routes: Routes = [
  {path:'signup',component:SignupComponent}
>>>>>>> a6b3255a634810c3a30e66995ecbcd0fa1ba8a95
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

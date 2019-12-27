import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RoomsComponent } from './rooms/rooms.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'rooms', component: RoomsComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes), FormsModule, ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

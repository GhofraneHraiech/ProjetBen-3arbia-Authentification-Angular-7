import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/admin/login/login.component'
import { ControlComponent } from './control/control.component';
import { RegisterComponent } from './admin/register/register.component';
const routes: Routes = [
  { path: "", redirectTo: 'App', pathMatch: 'full'},
  { path: "admin/login", component: LoginComponent },
  { path: "control", component: ControlComponent  },
  { path: "admin/register", component: RegisterComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

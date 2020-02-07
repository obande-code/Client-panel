import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./Auguard/auth.guard";



import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { ClientsComponent } from "./components/clients/clients.component";
import { AddClientComponent } from "./components/add-client/add-client.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { SettingsComponent } from "./components/settings/settings.component";

const routes : Routes = [
  {path : '', component:DashboardComponent, canActivate: [AuthGuard]},
  {path : 'login', component:LoginComponent},
  {path : 'register', component:RegisterComponent},
  {path : 'clients', component:ClientsComponent,canActivate: [AuthGuard]},
  {path : 'add', component:AddClientComponent ,canActivate: [AuthGuard]},
  {path : 'setting', component:SettingsComponent,canActivate: [AuthGuard]},
  {path : '**', component:NotFoundComponent,canActivate: [AuthGuard]}
];


@NgModule({
  providers: [AuthGuard],
  exports : [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
    
  ]
})
export class AppRountingModule { }

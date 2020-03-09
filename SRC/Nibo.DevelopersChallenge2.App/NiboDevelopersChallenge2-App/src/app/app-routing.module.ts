import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { AuthGuard } from './auth/auth.guard';
import { PlayersComponent } from './players/players.component';
import { UploadComponent } from './upload/upload.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'registration', component: RegistrationComponent }
    ]
  },
  {path: 'players', component: PlayersComponent, canActivate: [AuthGuard]},
  {path: 'upload', component: UploadComponent, canActivate: [AuthGuard]},
  {path: 'transactions', component: TransactionsComponent, canActivate: [AuthGuard]},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},

   {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
   {path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

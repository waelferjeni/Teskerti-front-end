import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { TicketListComponent } from './Components/ticket-list/ticket-list.component';
import { AuthGuard } from './Services/auth.guard';

const routes: Routes = [
  {path: '',component : LoginComponent},
  {path : 'AllTickets', component : TicketListComponent,canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{AngularFireModule} from '@angular/fire/compat';
import { LoginComponent } from './Components/login/login.component';
import { TicketListComponent } from './Components/ticket-list/ticket-list.component';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import {PrimeIcons} from 'primeng/api';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TicketListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
    ReactiveFormsModule,
    TableModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

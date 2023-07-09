import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ticket } from '../Models/ticket';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private apiURL = "https://localhost:7187/api/Ticket";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) {
   }
   getAll(): Observable<any> {
  
    return this.httpClient.get(this.apiURL + '/GetAllTickets')
  
    .pipe(
      catchError(this.errorHandler)
    )
  }
  create(ticket:Ticket): Observable<any> {
    
    return this.httpClient.post(this.apiURL + '/PostTicket', JSON.stringify(ticket), this.httpOptions)
  
    .pipe(
      catchError(this.errorHandler)
    )
    
  } 
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}

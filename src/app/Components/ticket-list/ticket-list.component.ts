import { AfterViewInit, Component,OnInit } from '@angular/core';
import { Ticket } from 'src/app/Models/ticket';
import { TicketService } from 'src/app/Services/ticket.service';
import { FormBuilder, FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/Services/authentification.service';
declare var window:any;
@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit  {
  myForm: FormGroup;
  formModal: any;
  prixtotal:number=0.0;
  tk:Ticket={} as Ticket;
 tickets: Ticket[] = [];
ldate: any;
fdate: any;
datatk:Ticket[]=[];
products:Ticket[]=[];
 constructor(public ticketService: TicketService,private fb: FormBuilder,private router:Router, private authe:AuthentificationService) {
  this.myForm = this.fb.group({
    id: ['', Validators.required],
    type: ['', Validators.required],
    nbr: ['', Validators.required],
  });
  }
  onSubmit() {
    this.tk.type=this.myForm.value.type;
    this.tk.employeeId=this.myForm.value.id;
    for (let index = 1; index <= this.myForm.value.nbr; index++) {
      this.ticketService.create(this.tk).subscribe();
    }
    this.router.navigate(['/AllTickets']);
    this.formModal.hide();
  }
  ngOnInit(): void {
      this.formModal=new window.bootstrap.Modal(document.getElementById('myModal'));    
    this.ticketService.getAll().subscribe((data)=>{
      this.datatk=data;
    this.tickets = data;
    console.log(this.tickets);
     })    
  }
  openFormModal() {
    this.formModal.show();
  }
  close() {
    // confirm or save something
    this.formModal.hide();
  }
  filterByDate = new FormGroup({
    startDate: new FormControl(''),
    endDate: new FormControl(''),
  });
  DateFormat(date: Date){
    const dateToFormat=date.toString();
    return dateToFormat.substring(0,10);
  }
  filterbydate(tk:Ticket[],sd:any,ed:any){
    var ftk:Ticket[]=[];
     for(let ticket of tk)
     {
      if (ticket.dateAchat < ed && ticket.dateAchat > sd)
      {
        console.log("date",ticket.dateAchat);
        ftk.push(ticket);
      }
     }
     var prix:number=0;
     for(let tk of ftk)
     {
      
      if(tk.type=="Ticket douvriers")
      {
        prix=prix+0.8
      }
      else if(tk.type=="Ticket demployés")
      {
        prix=prix+1.2;
      }
      else if(tk.type="Ticket des cadres")
      {
        prix=prix+1.8;
      }
      else if (tk.type="Ticket d'invités"){
        prix=prix+5.4;
      }
      
     }
     this.prixtotal=prix;
    return ftk;
  }
LogOut(){
  this.authe.Logout();
}
  testTheChange(event :any){
    console.log("endDate",this.filterByDate.value.endDate);
    // this.filterByDate.controls.startDate.setValue('2023-03-10');
    console.log("startDate",this.filterByDate.value.startDate);
    this.tickets=this.filterbydate(this.datatk,this.filterByDate.value.startDate,this.filterByDate.value.endDate);
    console.log("new list of tickets",this.tickets); 
  }
}

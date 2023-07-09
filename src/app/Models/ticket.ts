import { Employee } from "./employee"

export interface Ticket {
    id : number,
    type : string,
    dateAchat : Date,
    employeeId : number
    employee : Employee
}

import { Ticket } from "./ticket";

export interface Employee {
    id : number,
    firstName : string,
    lastname : string,
    grade : number
    tickets : Ticket[]
}

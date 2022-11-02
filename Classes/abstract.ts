export {}
abstract class Employee{

   
   constructor(private fname: string, private lname: string){
       
   }

   abstract getfullsalary(): number

   getfullname(): string{
    return `fullname of employee is ${this.fname} ${this.lname}`
   }

   compensationStatement(): string {
    return `${this.fname} makes ${this.getfullsalary()} a month.`;
}
}


class FullTimeEmployee extends Employee {
    constructor(firstName: string, lastName: string, private salary: number) {
        super(firstName, lastName);
    }
    getfullsalary(): number {
        return this.salary;
    }
}

class Contractor extends Employee {
    constructor(firstName: string, lastName: string, private rate: number, private hours: number) {
        super(firstName, lastName);
    }
    getfullsalary(): number {
        return this.rate * this.hours;
    }
}
let jay = new FullTimeEmployee('Jay', 'sheth', 12000);
let jaydeep = new Contractor('Jaydeep', 'desai', 100, 160);

console.log(jay.compensationStatement());
console.log(jaydeep.compensationStatement());
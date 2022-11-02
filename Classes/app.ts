export {}
class student{
    rollno: number;
    fname: string;
    lname: string;
    semester: number = 4;
   // course: string;
    private city: string;
    protected age: number;
    readonly dob: Date = new Date(1999,2,3);

    constructor(rollno: number, fname: string, lname: string,city: string, age: number){
        this.rollno = rollno;
        this.fname = fname;
        this.lname = lname;
        this.city = city;
        this.age = age
    }
    
    /*public get sem(){
        return this.semester;
    }*/


   /* public set coursevalue(course: string)
    {
        this.course = course;
    }
    public get courses(){
        return this.course;
    }
    */
    getfullname(): string {
        return `Full Name of Student is ${this.fname} ${this.lname}`
    }

    getcity(): string{
        return `the city of the ${this.fname} is ${this.city}`
    }

    getdateofbirth(){
        return `the date of birth of yash is ${this.dob}`
    }
}

let yash = new student(1,'yash','shah','baroda',19)
console.log(yash.getfullname())
console.log(yash.getcity())
console.log(yash.fname)
console.log(yash.getdateofbirth())
//yash.coursevalue='angular'
//console.log(yash.courses)

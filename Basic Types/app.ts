export {};
let empoyeeid: number = 101;
let age: number = 23;
let name: string = "Malay Modi";
let skills: string[] = ["dotnet","javascript","typescript","angular"]
skills.push("reactjs")

let data: any = 55;
data = "any value"

//example of tupple
let details: [string,number,string];
details =['ram',20,'surat']
details.push('shyam','30','baroda')

//example of enum
enum statuscodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
  }


console.log(empoyeeid)
console.log(age)
console.log(name)
console.log(skills)
console.log(skills[3])
console.log(data)
console.log(details)
console.log(statuscodes)
console.log(statuscodes.Success)

export {}
class Person {
	constructor(private firstName: string,private lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	getName(): string {
		return `I am ${this.firstName} ${this.lastName}.`;
	}

    parentshow(): string{
        return "This is the method of parent class";
    }

    show(): string{
        return "This is the show method of parent class";
    }
}
class Employee extends Person {
	constructor(
		firstName: string,
		lastName: string,
		private jobTitle: string) {
			
		// Invoking the constructor of the Person class
		super(firstName, lastName);
	}
	displayInfo(): void {
		console.log(super.getName());
		console.log(`My Job title is ${this.jobTitle}`);
	}

    childshow(): string{
        return super.parentshow()
    }

    show(): string{
        return "This is the show method of child class";
    }
}
let employee = new Employee('Mehul',
		'Sharma', 'Software Developer');
		
employee.displayInfo();
console.log(employee.childshow());
console.log(employee.parentshow());
console.log(employee.show());

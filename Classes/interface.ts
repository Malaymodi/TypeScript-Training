export {}
interface Person {
    firstName: string;
    middleName?: string;
    lastName: string;
}

function getFullName(person: Person) {
    if(person.middleName!=null)
        return `${person.firstName} ${person.middleName} ${person.lastName}`;
    else 
        return `${person.firstName} ${person.lastName}`;
}

let parth = {
    firstName: 'Parth',
    //middleName: 'K.',
    lastName: 'Desai',
    age: 41,
    middleName: 'K.'
    
    
};

console.log(getFullName(parth));
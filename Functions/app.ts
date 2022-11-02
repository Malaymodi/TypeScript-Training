export {}
function add(a: number, b: number): number{
    return a+b;
}

//function with default parameters
function welcome( name: string, greeting = 'hello')
{
        return greeting+ " " + name
}

//function with rest parameters
function restfunct(...number: number[]){
    let total = 0;
    number.forEach((num) => total += num);
    return total;
}

console.log(add(10,15))
console.log(welcome('malay'))
console.log(restfunct(10,20,30))
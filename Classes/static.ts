export {}
class circle {
    static pi: number = 3.14;

    static area(radius: number){
        return this.pi * radius * radius;
    }

}
console.log("static property of the class circle is "+circle.pi)
console.log("calling the static method of class and displaying the area " + circle.area(10))

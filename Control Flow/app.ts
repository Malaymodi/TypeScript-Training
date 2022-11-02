export {};
let age: number =28;
if(age>18)
    console.log("eligible for voting")
else
    console.log("not eligible for voting")

 let counter: number = 40;
  counter > 50 ? counter++: counter=200
  console.log(counter)   


  let percentage: number = 70;
  switch(true){
    case percentage>40 && percentage<=50:
        console.log("result pass")
        break;

    case percentage>50 && percentage<=60:
        console.log("result second class")
        break;

    case percentage>60 && percentage<=70:
        console.log("result first class")  
        break;

    case percentage>70:
        console.log("result distinction")    
        break;
        
    default:
        console.log("result fail")
        break;    

  }

  //for loop
  let i: number;
  for(i=0;i<5;i++)
   console.log(i)

   

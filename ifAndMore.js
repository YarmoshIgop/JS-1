'use strict'

let num=50;

if(num<49){
    console.log("Neverno")
} else if(num>100){
    console.log("Mnogo")
}else{
    console.log("Verno")
}

(num==50) ? console.log("Verno"): console.log("Neverno");

switch(num){
    case num < 49 :
        console.log("Neverno");
        break;
    case num > 100 :
        console.log("Mnogo");
        break;
    case num >55 :
        console.log("Mnogo")
        break;
    case 50:
        console.log("Zbs");
        break;
}


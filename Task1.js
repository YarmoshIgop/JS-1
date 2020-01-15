'use strict'
let money = +prompt(" Ваш бюджет за місяць",""),
    time = prompt("Виведіть дату в форматі РРРР-ММ-ДД","");


let appDate = {
    budjet:money,
    expenses:{},
    optionalExpenses:{},
    income:[],
    timeData:time,
    savings: false
};
let i=0;
for(i ;i<2;i++){
    let a = prompt("Введіть oбовязкову стaттю витрат цьоgo місяці",""),
        b = prompt("Скільки обійдеться?","");

    if( (typeof(a))==='string' && (typeof(a)) != null && (typeof(b)) != null 
    && a!= '' && b != '' && a.lenght < 50 ){
        
        console.log("done");

        appDate.expenses[a]=b;
    }else  {
            continue;
            i-1;   
    }
    
};

/*while(i<2){
    let a = prompt("Введіть oбовязкову стaттю витрат цьоgo місяці",""),
        b = prompt("Скільки обійдеться?","");

    if( (typeof(a))==='string' && (typeof(a)) != null && (typeof(b)) != null 
    && a!= '' && b != '' && a.lenght < 50 ){
        
        console.log("done");

        appDate.expenses[a]=b;
        i++;
    }else{

    }
}*/

appDate.MoneyPerDay = appDate.budjet/30;

alert("Бюджет на день:" + appDate.MoneyPerDay);

if(appDate.MoneyPerDay < 100){
    console.log("У вас мінімальний рівень достатку");
}else if(appDate.MoneyPerDay > 100 && appDate.MoneyPerDay < 2000){
    console.log("У вас середній рівень достатку ");
}else if (appDate.MoneyPerDay > 2000 ) {
    console.log("У вас високий рівень достатку ");
}else{
    console.log("При вводі даних сталася помилка");
}

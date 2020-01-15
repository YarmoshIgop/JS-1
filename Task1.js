'use strict'

let money,time;

function start(){
    money = +prompt(" Ваш бюджет за місяць","");
    time = prompt("Виведіть дату в форматі РРРР-ММ-ДД","");

    while(isNaN(money) || money == " "|| money == null ){

        money = +prompt(" Ваш бюджет за місяць?","");
    }
}

start()

let appDate = {
    budjet:money,
    expenses:{},
    optionalExpenses:{},
    income:[],
    timeData:time,
    savings: true
};

function chooseExpension(){
    for(let i=0 ;i<2;i++){
        let a = prompt("Введіть oбовязкову стaттю витрат цьоgo місяці",""),
            b = prompt("Скільки обійдеться?","");
    
        if( (typeof(a))==='string' && (typeof(a)) != null && (typeof(b)) != null 
        && a!= '' && b != '' && a.lenght < 50 ){
            
            console.log("done");
    
            appDate.expenses[a]=b;
        } else {
    
        }
    };
}

chooseExpension();


function detectDayBudget(){
  
appDate.MoneyPerDay = Math.round(appDate.budjet/30);
alert("Бюджет на день:" + Math.round(appDate.MoneyPerDay));
};
detectDayBudget();



function detectLevel(){
    if(appDate.MoneyPerDay < 100){
        console.log("У вас мінімальний рівень достатку");
    }else if(appDate.MoneyPerDay > 100 && appDate.MoneyPerDay < 2000){
        console.log("У вас середній рівень достатку ");
    }else if (appDate.MoneyPerDay > 2000 ) {
        console.log("У вас високий рівень достатку ");
    }else{
        console.log("При вводі даних сталася помилка");
    };
}

detectLevel();
/*
if(appDate.MoneyPerDay < 100){
    console.log("У вас мінімальний рівень достатку");
}else if(appDate.MoneyPerDay > 100 && appDate.MoneyPerDay < 2000){
    console.log("У вас середній рівень достатку ");
}else if (appDate.MoneyPerDay > 2000 ) {
    console.log("У вас високий рівень достатку ");
}else{
    console.log("При вводі даних сталася помилка");
}; */

function checkSavings(){
    if (appDate.savings == true ) {
        let save = + prompt ("Яка сума збережень?"," "),
            percent = + prompt("Під який відсоток?","");
            appDate.monthIncome = save/100/12 * percent;
            alert("Прибуток в місяць за ваш депозит: " + appDate.monthIncome);
    }
}

checkSavings();

let optionalExpenses ={
    1: "відповідь на питанння",
    2: "відповідь на питанння",
    3: "відповідь на питанння"
};

function chooseOptExpenses(){
    optionalExpenses[1]  = prompt("Які необовязкові витрати?","");
    optionalExpenses[2]  = prompt("Які необовязкові витрати?","");
    optionalExpenses[3]  = prompt("Які необовязкові витрати?","");
}
chooseOptExpenses();
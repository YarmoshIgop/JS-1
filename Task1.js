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
    savings: true,
    chooseExpension : function(){
        for(let i=0 ;i<2;i++){
            let a = prompt("Введіть oбовязкову стaттю витрат цьоgo місяці",""),
                b = prompt("Скільки обійдеться?","");
        
            if( (typeof(a))==='string' && (typeof(a)) !== null && (typeof(b)) !== null 
            && a!== '' && b !== '' && a.lenght < 50 ){
                
                console.log("done");
        
                appDate.expenses[a]=b;
            } else {
                return 0;
            }
        };
    },
    detectDayBudget: function(){
        appDate.MoneyPerDay = Math.round(appDate.budjet/30);
        alert("Бюджет на день:" + Math.round(appDate.MoneyPerDay));
    },
    detectLevel : function(){
        if(appDate.MoneyPerDay < 100){
            console.log("У вас мінімальний рівень достатку");
        }else if(appDate.MoneyPerDay > 100 && appDate.MoneyPerDay < 2000){
            console.log("У вас середній рівень достатку ");
        }else if (appDate.MoneyPerDay > 2000 ) {
            console.log("У вас високий рівень достатку ");
        }else{
            console.log("При вводі даних сталася помилка");
        };
    },
    checkSavings : function(){
        if (appDate.savings === true ) {
            let save = + prompt ("Яка сума збережень?"," "),
                percent = + prompt("Під який відсоток?","");
                appDate.monthIncome = save/100/12 * percent;
                alert("Прибуток в місяць за ваш депозит: " + appDate.monthIncome);
        }
    },
    chooseOptExpenses : function(){
        for(let i = 0 ; i < 3; i++){
            let opt = prompt("Які необовязкові витрати?","");
            appDate.optionalExpenses[i]= opt;
        }
    },
    chooseIncome: function(){
        let items = prompt("Що принесе додаткові прибутки? (Перечисліть через кому)","");
        
            
       
            
            appDate.income = items.split (" , ");
            appDate.income.push(prompt("Може ще щось?"));
            appDate.income.sort();
        
            appDate.income.forEach(function(item, num, mass){
                console.log(num+1 + ":" + item + "Способы доп. заработка::" + mass + '');
                })
       const name = 'IGOP';        
       console.log(`${name} - lox`);     
        
        // appDate.income = items.split (" , ");
        // appDate.income.push(prompt("Може ще щось?"));
        // appDate.income.sort();}
    }
    // DataInTheObject : function (){
    //     for (let key  in appDate){
    //         console.log("Наша программа включает в себя данные:" + key + " : " +appDate[key])
    //     };
    // }
  
};

// function AddIncore(){
//     for(let i=0 ;i=1;i++){
//         let ChooInc = prompt("Додаткові прибутки",""),
             
    
        // if( (typeof(ChooInc))==='string' && (typeof(ChooInc)) != null 
        // && ChooInc!= '' && ChooInc.lenght < 50 ){
            
//             console.log("done");
    
//             appDate.chooseIncore = ChooInc;

              
            // appDate.chooseIncore.forEach(function(item, num, mass){
            // console.log(num+1 + ":" + item + "Способы доп. заработка::" + mass + '');
            // })

//         } else {
    
//         }
//     };
// };

// AddIncore();

// function DataInTheObject(){
//     for (let key  in appDate){
//         console.log("Наша программа включает в себя данные:" + key + " : " +appDate[key])
//     };
// }
// keyInProgram();



  

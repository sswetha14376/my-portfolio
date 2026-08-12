// Get Account Data


let account = JSON.parse(

localStorage.getItem("account")

);





let depositAmount = 0;

let withdrawAmount = 0;







if(account){



account.transactions.forEach(function(transaction){



if(transaction.type === "Deposit"){


depositAmount += transaction.amount;


}





if(transaction.type === "Withdraw"){


withdrawAmount += transaction.amount;


}





});



}








// Balance Chart



let balanceChart = document.getElementById(
"balanceChart"
);






new Chart(balanceChart, {


type:"doughnut",



data:{



labels:[

"Available Balance",

"Used Amount"

],



datasets:[{


data:[


account ? account.balance : 0,


account ? 10000-account.balance : 10000


]



}]



},



options:{


responsive:true


}



});









// Transaction Chart



let transactionChart = document.getElementById(
"transactionChart"
);






new Chart(transactionChart, {



type:"bar",



data:{



labels:[

"Deposit",

"Withdraw"

],



datasets:[{


label:"Amount",



data:[

depositAmount,

withdrawAmount

]



}]



},




options:{


responsive:true


}



});
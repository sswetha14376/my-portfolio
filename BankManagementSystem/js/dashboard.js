// Get Account Data

let account = JSON.parse(
    localStorage.getItem("account")
);





if(account){


document.getElementById("username").innerHTML =
account.name;



document.getElementById("accNumber").innerHTML =
account.accountNumber;



document.getElementById("balance").innerHTML =
"$" + account.balance;



loadTransactions();


}

else{


alert("Please Login First");


window.location.href="login.html";


}









// Deposit Money


function deposit(){


let amount = prompt(
"Enter Deposit Amount"
);



if(amount == null || amount <= 0){

return;

}




amount = Number(amount);




account.balance += amount;



account.transactions.push({


type:"Deposit",


amount:amount,


date:new Date().toLocaleString()


});





saveAccount();



alert(
"Money Deposited Successfully ✅"
);



location.reload();



}









// Withdraw Money


function withdrawMoney(){


let amount = prompt(
"Enter Withdraw Amount"
);



if(amount == null || amount <=0){

return;

}




amount = Number(amount);





if(amount > account.balance){


alert(
"Insufficient Balance ❌"
);


return;


}





account.balance -= amount;



account.transactions.push({


type:"Withdraw",


amount:amount,


date:new Date().toLocaleString()


});





saveAccount();



alert(
"Money Withdrawn Successfully ✅"
);



location.reload();



}









// Load Transactions


function loadTransactions(){


let table =
document.getElementById("transactionTable");



table.innerHTML="";





account.transactions
.slice(-5)
.reverse()
.forEach(function(transaction){



let row = `


<tr>


<td>
${transaction.type}
</td>


<td>
$${transaction.amount}
</td>


<td>
${transaction.date}
</td>


</tr>



`;



table.innerHTML += row;



});



}









// Save Account Data


function saveAccount(){


localStorage.setItem(

"account",

JSON.stringify(account)

);


}
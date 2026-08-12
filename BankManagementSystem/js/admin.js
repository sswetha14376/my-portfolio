// Get Account Data


let account = JSON.parse(

localStorage.getItem("account")

);





let customerTable =

document.getElementById("customerTable");








if(account){





// Total Customers


document.getElementById("customers").innerHTML = 1;






// Total Accounts


document.getElementById("accounts").innerHTML = 1;







// Total Balance


document.getElementById("balance").innerHTML =

"$" + account.balance;







// Total Transactions


document.getElementById("transactions").innerHTML =

account.transactions.length;







// Customer Details Table


customerTable.innerHTML = `



<tr>


<td>

${account.name}

</td>




<td>

${account.email}

</td>




<td>

${account.accountNumber}

</td>




<td>

$${account.balance}

</td>



</tr>



`;





}

else{



customerTable.innerHTML = `


<tr>


<td colspan="4">

No Customer Data Available

</td>


</tr>


`;



}
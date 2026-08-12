// Get Account Data


let account = JSON.parse(

localStorage.getItem("account")

);





// Display Profile Details


if(account){


document.getElementById("name").value =
account.name;



document.getElementById("email").value =
account.email;



document.getElementById("accountNumber").value =
account.accountNumber;



document.getElementById("balance").value =
account.balance;



}

else{


alert("Please Login First");


window.location.href="login.html";


}









// Update Profile


function updateProfile(){



account.name =

document.getElementById("name").value;





account.email =

document.getElementById("email").value;







localStorage.setItem(

"account",

JSON.stringify(account)

);





localStorage.setItem(

"user",

JSON.stringify(account)

);







document.getElementById("message").innerHTML =

"Profile Updated Successfully ✅";



}









// Logout


function logout(){



localStorage.removeItem("account");



window.location.href="login.html";


}
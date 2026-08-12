// ==========================
// Register User
// ==========================


let registerForm = document.getElementById("registerForm");



if(registerForm){


registerForm.addEventListener("submit",function(e){


e.preventDefault();



let user = {


name: document.getElementById("regName").value,


email: document.getElementById("regEmail").value,


password: document.getElementById("regPassword").value,


accountNumber: document.getElementById("regAccount").value,


balance: Number(
document.getElementById("regBalance").value
),


transactions:[

{

type:"Account Created",

amount:Number(
document.getElementById("regBalance").value
),

date:new Date().toLocaleString()

}

]


};





localStorage.setItem(

"user",

JSON.stringify(user)

);





localStorage.setItem(

"account",

JSON.stringify(user)

);





alert(
"Registration Successful ✅"
);



window.location.href="login.html";



});


}







// ==========================
// Login User
// ==========================



let loginForm = document.getElementById("loginForm");



if(loginForm){


loginForm.addEventListener("submit",function(e){


e.preventDefault();




let email =
document.getElementById("loginEmail").value;



let password =
document.getElementById("loginPassword").value;





let user = JSON.parse(

localStorage.getItem("user")

);





if(user && 
user.email === email &&
user.password === password){



localStorage.setItem(

"account",

JSON.stringify(user)

);



alert(
"Login Successful ✅"
);



window.location.href="dashboard.html";



}

else{


alert(
"Invalid Email or Password ❌"
);



}



});


}
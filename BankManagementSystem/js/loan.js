// Select Loan Type


function selectLoan(type){


document.getElementById("loanType").value = type;


}







// Loan Application


let loanForm = document.getElementById("loanForm");





if(loanForm){



loanForm.addEventListener("submit",function(e){



e.preventDefault();





let loan = {


name:
document.getElementById("loanName").value,



amount:
Number(
document.getElementById("loanAmount").value
),



duration:
document.getElementById("loanDuration").value,



type:
document.getElementById("loanType").value,



status:"Pending",



date:
new Date().toLocaleString()



};








let loans = JSON.parse(

localStorage.getItem("loans")

) || [];






loans.push(loan);






localStorage.setItem(

"loans",

JSON.stringify(loans)

);







document.getElementById("loanMessage").innerHTML =

"Loan Application Submitted Successfully ✅";






loanForm.reset();



});



}
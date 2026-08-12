// Apply Card Function


function applyCard(cardType){



let card = {


type:cardType,


number:"XXXX XXXX XXXX 1234",


expiry:"12/30",


status:"Active"



};







localStorage.setItem(

"card",

JSON.stringify(card)

);







displayCard();







alert(

cardType + " Applied Successfully ✅"

);



}









// Block Card Function


function blockCard(){



let card = JSON.parse(

localStorage.getItem("card")

);






if(card){



card.status="Blocked";






localStorage.setItem(

"card",

JSON.stringify(card)

);






displayCard();






alert(

"Card Blocked Successfully 🔒"

);



}

else{


alert(

"No Card Available"

);


}



}









// Display Card Details


function displayCard(){



let card = JSON.parse(

localStorage.getItem("card")

);






let cardInfo =

document.getElementById("cardInfo");







if(card){



cardInfo.innerHTML = `



<h3>

${card.type}

</h3>



<p>

Card Number : ${card.number}

</p>




<p>

Expiry : ${card.expiry}

</p>




<p>

Status : ${card.status}

</p>



`;



}



}







displayCard();
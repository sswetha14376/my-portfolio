// MyBank Home Page JavaScript


// Smooth Scroll Function

function scrollToSection(id){

    document
    .getElementById(id)
    .scrollIntoView({

        behavior:"smooth"

    });

}






// Open Account Button Alert


let openButtons = document.querySelectorAll("button");


openButtons.forEach(function(button){


    button.addEventListener("click",function(){


        if(button.innerText === "Open Account"){


            console.log("Redirecting to Register Page");


        }


    });


});






// Check Login Status


let account = JSON.parse(localStorage.getItem("account"));



if(account){


    console.log(

        "Welcome " + account.name

    );


}
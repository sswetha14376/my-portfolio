// ==========================
// AOS Animation
// ==========================

AOS.init({

    duration:1200,

    once:true

});




// ==========================
// Typing Animation
// ==========================


var typed = new Typed(".typing",{


    strings:[

        "Java Full Stack Developer",

        "Spring Boot Developer",

        "Frontend Developer",

        "Backend Developer"

    ],


    typeSpeed:100,

    backSpeed:60,

    backDelay:1500,

    loop:true


});






// ==========================
// Vanilla Tilt Effect
// ==========================


VanillaTilt.init(

document.querySelectorAll(".project-card"),

{

    max:8,

    speed:400,

    glare:true,

    "max-glare":0.2

}

);




VanillaTilt.init(

document.querySelectorAll(".skill-card"),

{

    max:10,

    speed:400,

    glare:true,

    "max-glare":0.2

}

);






// ==========================
// Back To Top Button
// ==========================


let topBtn=document.getElementById("topBtn");



window.addEventListener("scroll",()=>{


    if(window.scrollY > 300){


        topBtn.style.display="block";


    }

    else{


        topBtn.style.display="none";


    }


});





topBtn.onclick=function(){


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


};








// ==========================
// Mobile Menu
// ==========================


const menuBtn=document.querySelector(".menu-btn");

const navLinks=document.querySelector(".nav-links");



menuBtn.onclick=()=>{


    navLinks.classList.toggle("show");


};








// ==========================
// Active Navbar
// ==========================


const sections=document.querySelectorAll("section");

const navItems=document.querySelectorAll(".nav-links a");



window.addEventListener("scroll",()=>{


    let current="";


    sections.forEach(section=>{


        let sectionTop=section.offsetTop-150;


        if(window.scrollY >= sectionTop){


            current=section.getAttribute("id");


        }


    });





    navItems.forEach(link=>{


        link.classList.remove("active");


        if(link.getAttribute("href")=="#"+current){


            link.classList.add("active");


        }


    });


});








// ==========================
// Sticky Navbar Shadow
// ==========================


const header=document.querySelector("header");



window.addEventListener("scroll",()=>{


    if(window.scrollY>50){


        header.style.boxShadow=
        "0 5px 20px rgba(0,0,0,.3)";


    }

    else{


        header.style.boxShadow="none";


    }


});








// ==========================
// Button Hover Effect
// ==========================


const buttons=document.querySelectorAll(

".btn1,.btn2,.resume-btn,.send-btn"

);



buttons.forEach(button=>{


    button.addEventListener("mouseenter",()=>{


        button.style.transform="scale(1.05)";


    });





    button.addEventListener("mouseleave",()=>{


        button.style.transform="scale(1)";


    });



});








// ==========================
// Contact Form
// ==========================


const form=document.querySelector("form");



form.addEventListener("submit",(e)=>{


    e.preventDefault();



    alert(

    "Thank You! Your message has been sent successfully."

    );



    form.reset();



});








// ==========================
// Scroll Progress Bar
// ==========================


let progress=document.createElement("div");



progress.style.position="fixed";

progress.style.top="0";

progress.style.left="0";

progress.style.height="4px";

progress.style.background="#38bdf8";

progress.style.zIndex="99999";



document.body.appendChild(progress);






window.addEventListener("scroll",()=>{


    let height=

    document.documentElement.scrollHeight -

    document.documentElement.clientHeight;





    let scrolled=

    (document.documentElement.scrollTop / height) * 100;




    progress.style.width=scrolled+"%";



});
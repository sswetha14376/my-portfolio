// MyBank Theme Switcher


let themeBtn = document.getElementById("themeBtn");





if(themeBtn){


themeBtn.addEventListener("click",function(){



document.body.classList.toggle(
"dark-mode"
);





let theme = document.body.classList.contains(
"dark-mode"
)
?
"dark"
:
"light";





localStorage.setItem(

"theme",

theme

);




});



}








// Load Saved Theme


let savedTheme = localStorage.getItem(
"theme"
);





if(savedTheme === "dark"){



document.body.classList.add(
"dark-mode"
);



}
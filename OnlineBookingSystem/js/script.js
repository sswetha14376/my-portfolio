// ======================================
// BookEase Online Booking System
// FINAL JavaScript
// ======================================



// ================================
// Booking Form Submit
// ================================


const bookingForm = document.getElementById("bookingForm");


if(bookingForm){


bookingForm.addEventListener("submit", function(e){


e.preventDefault();



let booking = {


id : "BK" + Date.now(),


name : document.getElementById("name").value,


email : document.getElementById("email").value,


phone : document.getElementById("phone").value,


service : document.getElementById("service").value,


date : document.getElementById("date").value,


time : document.getElementById("time").value,


message : document.getElementById("message").value,


status : "Confirmed"


};





let bookings = JSON.parse(localStorage.getItem("bookings")) || [];



bookings.push(booking);



localStorage.setItem(
"bookings",
JSON.stringify(bookings)
);



alert("Booking Confirmed Successfully 🎉");



bookingForm.reset();



window.location.href="mybooking.html";


});


}









// ================================
// My Booking Display
// ================================


const bookingData = document.getElementById("bookingData");



if(bookingData){


let bookings = JSON.parse(localStorage.getItem("bookings")) || [];



if(bookings.length === 0){


bookingData.innerHTML = `

<tr>

<td colspan="6">

No Bookings Available

</td>

</tr>

`;



}

else{


bookings.forEach(function(booking){



bookingData.innerHTML += `


<tr>

<td>${booking.id}</td>

<td>${booking.service}</td>

<td>${booking.date}</td>

<td>${booking.time}</td>

<td>${booking.status}</td>


<td>

<button class="cancel-btn"
onclick="cancelBooking('${booking.id}')">

Cancel

</button>


</td>


</tr>


`;



});



}



}









// ================================
// Cancel Booking
// ================================


function cancelBooking(id){



let bookings = JSON.parse(localStorage.getItem("bookings")) || [];



bookings.forEach(function(booking){


if(booking.id === id){


booking.status="Cancelled";


}


});



localStorage.setItem(
"bookings",
JSON.stringify(bookings)
);



alert("Booking Cancelled Successfully");


location.reload();


}









// ================================
// Admin Dashboard
// ================================


const adminBookingData =
document.getElementById("adminBookingData");



if(adminBookingData){



let bookings = JSON.parse(localStorage.getItem("bookings")) || [];



document.getElementById("totalBookings").innerHTML =
bookings.length;



document.getElementById("confirmedBookings").innerHTML =
bookings.filter(
b=>b.status==="Confirmed"
).length;



document.getElementById("cancelledBookings").innerHTML =
bookings.filter(
b=>b.status==="Cancelled"
).length;





if(bookings.length===0){


adminBookingData.innerHTML=`

<tr>

<td colspan="6">

No Customer Bookings

</td>

</tr>

`;

}


else{


bookings.forEach(function(booking){



adminBookingData.innerHTML += `


<tr>


<td>${booking.id}</td>


<td>${booking.name}</td>


<td>${booking.service}</td>


<td>${booking.date}</td>


<td>${booking.status}</td>


<td>


<button class="cancel-btn"
onclick="deleteBooking('${booking.id}')">

Delete

</button>


</td>


</tr>


`;



});


}



}









// ================================
// Admin Delete Booking
// ================================


function deleteBooking(id){



let bookings =
JSON.parse(localStorage.getItem("bookings")) || [];



bookings =
bookings.filter(
booking=>booking.id!==id
);



localStorage.setItem(
"bookings",
JSON.stringify(bookings)
);



alert("Booking Deleted");


location.reload();


}







// ================================
// Button Animation
// ================================


document.querySelectorAll(".btn")
.forEach(function(button){


button.addEventListener("mouseenter",function(){

this.style.transform="scale(1.05)";

});


button.addEventListener("mouseleave",function(){

this.style.transform="scale(1)";

});


});
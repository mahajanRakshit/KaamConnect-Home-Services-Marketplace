const BOOKING_KEY = "kaamconnect_bookings";
function getBookings(){ try{return JSON.parse(localStorage.getItem(BOOKING_KEY)) || [];}catch{return [];} }
function saveBookings(items){localStorage.setItem(BOOKING_KEY,JSON.stringify(items));}
function searchServices(){
  const term=(document.getElementById("searchInput")?.value || "").trim().toLowerCase();
  const cards=[...document.querySelectorAll(".service-card")]; let visible=0;
  cards.forEach(card=>{const match=!term || (card.dataset.name+" "+card.innerText).toLowerCase().includes(term);card.hidden=!match;if(match)visible++;});
  const noResults=document.getElementById("noResults");if(noResults)noResults.hidden=visible!==0;
}
function bookService(service){
  const select=document.getElementById("selectedService");
  if(select){select.value=service;document.getElementById("booking")?.scrollIntoView({behavior:"smooth"});}
}
document.addEventListener("DOMContentLoaded",()=>{
  const date=document.getElementById("bookingDate");
  if(date){const today=new Date();date.min=new Date(today.getTime()-today.getTimezoneOffset()*60000).toISOString().slice(0,10);}
  document.getElementById("bookingForm")?.addEventListener("submit",event=>{
    event.preventDefault();
    const booking={id:Date.now(),name:document.getElementById("customerName").value.trim(),phone:document.getElementById("customerPhone").value.trim(),service:document.getElementById("selectedService").value,address:document.getElementById("customerAddress").value.trim(),date:document.getElementById("bookingDate").value,problem:document.getElementById("problem").value.trim(),status:"Pending",createdAt:new Date().toISOString()};
    const bookings=getBookings();bookings.unshift(booking);saveBookings(bookings);
    const message=document.getElementById("bookingMessage");message.textContent="Your demo booking has been saved in this browser. Log in as a customer to view it.";message.className="success-message";
    event.target.reset();
  });
});
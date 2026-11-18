const SESSION_KEY="kaamconnect_session", USERS_KEY="kaamconnect_users", BOOKING_KEY="kaamconnect_bookings";
function currentSession(){try{return JSON.parse(localStorage.getItem(SESSION_KEY));}catch{return null;}}
function logout(){localStorage.removeItem(SESSION_KEY);location.href="index.html";}
function showProfile(){const s=currentSession();if(s)alert(`Name: ${s.name}\nEmail: ${s.email}\nAccount type: ${s.role}`);}
function showBookings(){
  const s=currentSession(),target=document.getElementById("bookingList");if(!target||!s)return;
  let items=[];try{items=JSON.parse(localStorage.getItem(BOOKING_KEY))||[];}catch{}
  items=items.filter(b=>b.phone===s.phone || b.name.toLowerCase()===s.name.toLowerCase());
  renderCards(target,items,"No bookings yet. Submit a request from the home page.");
}
function renderCards(target,items,empty){
  target.innerHTML="";
  if(!items.length){const p=document.createElement("p");p.className="muted";p.textContent=empty;target.append(p);return;}
  items.forEach(b=>{const card=document.createElement("article");card.className="booking-item";
    const h=document.createElement("h3");h.textContent=b.service;
    const detail=document.createElement("p");detail.textContent=`${b.name} · ${b.date} · ${b.status}`;
    const problem=document.createElement("p");problem.textContent=b.problem;
    const address=document.createElement("p");address.textContent=b.address;
    card.append(h,detail,problem,address);target.append(card);
  });
}
document.addEventListener("DOMContentLoaded",()=>{
  const s=currentSession();if(!s){location.href="login.html";return;}
  const welcome=document.getElementById("welcomeName");if(welcome)welcome.textContent=`Hi, ${s.name}`;
  if(s.role==="customer"&&document.getElementById("bookingList"))showBookings();
  if(s.role==="worker"&&document.getElementById("requestList")){
    let items=[];try{items=JSON.parse(localStorage.getItem(BOOKING_KEY))||[];}catch{}
    renderCards(document.getElementById("requestList"),items,"No customer requests have been submitted yet.");
  }
});
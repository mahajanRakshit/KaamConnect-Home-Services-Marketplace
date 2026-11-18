const USERS_KEY="kaamconnect_users", SESSION_KEY="kaamconnect_session";
function users(){try{return JSON.parse(localStorage.getItem(USERS_KEY))||[];}catch{return [];}}
function setMessage(id,text,kind="error"){const el=document.getElementById(id);if(el){el.textContent=text;el.className=kind==="success"?"success-message":"error-message";}}
document.addEventListener("DOMContentLoaded",()=>{
  const params=new URLSearchParams(location.search);const roleSelect=document.getElementById("role");if(roleSelect&&params.get("role"))roleSelect.value=params.get("role");
  document.getElementById("registerForm")?.addEventListener("submit",e=>{
    e.preventDefault();const user={id:Date.now(),name:document.getElementById("name").value.trim(),email:document.getElementById("email").value.trim().toLowerCase(),phone:document.getElementById("phone").value.trim(),password:document.getElementById("password").value,role:roleSelect.value};
    const list=users();if(list.some(u=>u.email===user.email&&u.role===user.role)){setMessage("registerMessage","An account with this email and role already exists.");return;}
    list.push(user);localStorage.setItem(USERS_KEY,JSON.stringify(list));setMessage("registerMessage","Account created. You can now log in.","success");e.target.reset();
  });
  document.getElementById("loginForm")?.addEventListener("submit",e=>{
    e.preventDefault();const email=document.getElementById("email").value.trim().toLowerCase(),password=document.getElementById("password").value,role=roleSelect.value;
    const user=users().find(u=>u.email===email&&u.password===password&&u.role===role);
    if(!user){setMessage("loginMessage","Account not found. Check your details or register first.");return;}
    localStorage.setItem(SESSION_KEY,JSON.stringify({id:user.id,name:user.name,email:user.email,role:user.role}));
    location.href=role==="worker"?"worker-dashboard.html":"customer-dashboard.html";
  });
});
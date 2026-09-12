
const Auth = {
  hashPassword(pw){let h=0;for(let i=0;i<pw.length;i++){h=((h<<5)-h)+pw.charCodeAt(i);h|=0}return "h"+Math.abs(h).toString(36)},

  signup(name,email,password,role){
    const users=JSON.parse(localStorage.getItem("dw_users")||"[]");
    if(users.find(u=>u.email===email))return{ok:false,error:"Email already registered"};
    const user={id:"u"+Date.now(),name,email,password:this.hashPassword(password),role:role||"buyer",createdAt:new Date().toISOString()};
    users.push(user);localStorage.setItem("dw_users",JSON.stringify(users));
    this.setSession(user);return{ok:true,user};
  },

  login(email,password){
    const users=JSON.parse(localStorage.getItem("dw_users")||"[]");
    const user=users.find(u=>u.email===email);
    if(!user)return{ok:false,error:"No account found with this email"};
    if(user.password!==this.hashPassword(password))return{ok:false,error:"Incorrect password"};
    this.setSession(user);return{ok:true,user};
  },

  setSession(user){
    const safeUser={id:user.id,name:user.name,email:user.email,role:user.role};
    localStorage.setItem("dw_session",JSON.stringify(safeUser));
  },

  logout(){localStorage.removeItem("dw_session")},

  currentUser(){
    const s=localStorage.getItem("dw_session");
    return s?JSON.parse(s):null;
  },

  isLoggedIn(){return!!this.currentUser()},
  isVendor(){const u=this.currentUser();return u&&u.role==="vendor"},
  requireAuth(){if(!this.isLoggedIn()){window.location.href="login.html";return false}return true},
  requireVendor(){if(!this.isVendor()){window.location.href="login.html";return false}return true},
};

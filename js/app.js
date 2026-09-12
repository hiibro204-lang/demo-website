
function toast(msg){
  let t=document.getElementById("toast");
  if(!t){t=document.createElement("div");t.id="toast";t.className="toast";document.body.appendChild(t)}
  t.textContent=msg;t.classList.add("show");
  clearTimeout(t._timer);t._timer=setTimeout(()=>t.classList.remove("show"),3000);
}

function renderNav(){
  const user=Auth.currentUser();
  const cartCount=Cart.count();
  document.getElementById("nav-placeholder").innerHTML=`
  <nav>
    <div class="container">
      <a href="index.html" class="logo"><span class="dot"></span>demo_website <span style="font-size:.65rem;color:var(--text-dim);font-weight:400">[DEMO]</span></a>
      <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="catalog.html">Catalog</a></li>
        <li><a href="faq.html">FAQ</a></li>
        <li><a href="contact.html">Contact</a></li>
        ${user?'<li><a href="dashboard.html">Dashboard</a></li>':''}
        ${user&&user.role==="vendor"?'<li><a href="vendor.html">Vendor Portal</a></li>':''}
      </ul>
      <div class="nav-right">
        <a href="cart.html" class="cart-link" style="font-size:1.2rem">🛒
          <span class="cart-count" id="cart-count" style="display:${cartCount>0?'flex':'none'}">${cartCount}</span>
        </a>
        ${user?`
          <div class="user-chip" onclick="toggleUserMenu(event)">
            👤 ${user.name.split(' ')[0]}
            <div class="user-menu" id="user-menu">
              <a href="dashboard.html">Dashboard</a>
              ${user.role==="vendor"?'<a href="vendor.html">Vendor Portal</a>':''}
              <a href="javascript:doLogout()">Logout</a>
            </div>
          </div>
        `:'<a href="login.html" class="btn btn-primary btn-sm">Login</a>'}
      </div>
    </div>
  </nav>`;
}

function toggleUserMenu(e){
  e&&e.stopPropagation();
  const m=document.getElementById("user-menu");
  if(m)m.classList.toggle("open");
}
document.addEventListener("click",()=>{const m=document.getElementById("user-menu");if(m)m.classList.remove("open")});

function doLogout(){Auth.logout();toast("Logged out successfully");setTimeout(()=>window.location.href="index.html",800)}

function renderFooter(){
  document.getElementById("footer-placeholder").innerHTML=`
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <div class="footer-brand"><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:var(--accent);margin-right:6px"></span>demo_website [DEMO]</div>
          <p style="font-size:.85rem;color:var(--text-dim);max-width:280px">A full-stack procurement platform. Office supplies, managed procurement, and software — under one roof.</p>
        </div>
        <div class="footer-col">
          <h4>Shop</h4>
          <ul>
            <li><a href="catalog.html">All Products</a></li>
            <li><a href="catalog.html?cat=Stationery">Stationery</a></li>
            <li><a href="catalog.html?cat=IT%20%26%20Technology">IT & Tech</a></li>
            <li><a href="catalog.html?cat=Pantry">Pantry</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="index.html#about">About</a></li>
            <li><a href="faq.html">FAQ</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="login.html">Login</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>hello@demo-website.com</li>
            <li>+1 (555) 010-0200</li>
            <li>100 Demo Street</li>
            <li>Suite 200, Demo City</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2026 demo_website — Educational Demo</p>
        <span class="demo-notice">FOR EDUCATIONAL PURPOSES ONLY</span>
      </div>
    </div>
  </footer>`;
}

function initPage(){
  renderNav();
  renderFooter();
  Cart.updateBadge();
  const obs=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");obs.unobserve(e.target)}});
  },{threshold:.1});
  document.querySelectorAll(".reveal").forEach(el=>obs.observe(el));
}

document.addEventListener("DOMContentLoaded",initPage);

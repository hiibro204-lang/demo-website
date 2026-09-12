
// Mock product catalog
const CATEGORIES = ["Stationery","Housekeeping","IT & Technology","Pantry","Gifting","Facility Assets"];

const PRODUCTS = [
  {id:1,name:"A4 Copier Paper (500 sheets)",category:"Stationery",price:4.50,stock:320,emoji:"📄",desc:"Premium 80 GSM A4 copier paper, FSC-certified. Smooth feed, jam-free printing. Compatible with all laser and inkjet printers."},
  {id:2,name:"Blue Ballpoint Pens (Pack of 50)",category:"Stationery",price:12.00,stock:150,emoji:"🖊️",desc:"Smooth-writing 0.7mm blue ballpoint pens. Comfortable grip, quick-dry ink. Pack of 50."},
  {id:3,name:"Sticky Notes Assorted (Pack of 12)",category:"Stationery",price:8.50,stock:200,emoji:"📌",desc:"Vibrant assorted-color sticky notes, 76x76mm. Strong adhesive, removes cleanly. Pack of 12 pads."},
  {id:4,name:"Eco-Cert Cleaning Liquid (5L)",category:"Housekeeping",price:18.00,stock:80,emoji:"🧴",desc:"Eco-certified multi-surface cleaning liquid. Biodegradable formula, safe for all surfaces. 5-litre jerry can."},
  {id:5,name:"Bio-degradable Garbage Bags (Roll of 100)",category:"Housekeeping",price:15.00,stock:120,emoji:"🗑️",desc:"Heavy-duty bio-degradable garbage bags. 24x36 inch, tear-resistant. Roll of 100 bags."},
  {id:6,name:"FSC-Certified Tissue Roll (Pack of 12)",category:"Housekeeping",price:22.00,stock:90,emoji:"🧻",desc:"2-ply FSC-certified facial tissue rolls. Soft, absorbent, forest-friendly. Pack of 12 rolls."},
  {id:7,name:"USB-C Hub 7-in-1",category:"IT & Technology",price:45.00,stock:60,emoji:"🔌",desc:"7-in-1 USB-C hub with HDMI, 3x USB 3.0, SD/microSD, and 100W PD passthrough. Aluminum body."},
  {id:8,name:"Wireless Mouse",category:"IT & Technology",price:25.00,stock:110,emoji:"🖱️",desc:"Ergonomic 2.4GHz wireless mouse. Silent click, adjustable DPI, 18-month battery life."},
  {id:9,name:"Mechanical Keyboard",category:"IT & Technology",price:65.00,stock:45,emoji:"⌨️",desc:"Hot-swappable mechanical keyboard with blue switches. RGB backlight, aluminum frame, USB-C."},
  {id:10,name:"Compostable Cutlery Set (200 pcs)",category:"Pantry",price:14.00,stock:130,emoji:"🍴",desc:"Plant-based compostable cutlery set. 200 pieces — forks, knives, spoons. Heat-resistant up to 90°C."},
  {id:11,name:"Premium Tea Assortment",category:"Pantry",price:28.00,stock:75,emoji:"🍵",desc:"Assorted premium tea collection — green, black, herbal, masala. 100 tea bags in a gift box."},
  {id:12,name:"Coffee Beans 1kg (Arabica)",category:"Pantry",price:32.00,stock:55,emoji:"☕",desc:"Single-origin Arabica coffee beans, medium roast. Freshly roasted, rich aroma. 1kg bag."},
  {id:13,name:"Corporate Gift Box (Premium)",category:"Gifting",price:85.00,stock:30,emoji:"🎁",desc:"Premium corporate gift box with notebook, pen, mug, and artisanal chocolates. Custom branding available."},
  {id:14,name:"Recycled Leather Notebook",category:"Gifting",price:18.00,stock:100,emoji:"📓",desc:"Handcrafted notebook made from 100% recycled leather. 200 ruled pages, elastic closure, bookmark."},
  {id:15,name:"LED Desk Lamp (Adjustable)",category:"Facility Assets",price:38.00,stock:70,emoji:"💡",desc:"LED desk lamp with adjustable brightness and color temperature. USB-powered, touch control, eye-care mode."},
  {id:16,name:"Ergonomic Office Chair",category:"Facility Assets",price:180.00,stock:20,emoji:"🪑",desc:"Ergonomic mesh office chair with lumbar support, adjustable armrests, and height control. Breathable mesh back."},
];

// Mock orders
const SAMPLE_ORDERS = [
  {id:"ORD-2401",date:"2026-08-15",status:"delivered",items:[{productId:1,qty:10},{productId:2,qty:2},{productId:10,qty:1}],total:85.00},
  {id:"ORD-2402",date:"2026-09-02",status:"shipped",items:[{productId:7,qty:3},{productId:8,qty:5}],total:260.00},
  {id:"ORD-2403",date:"2026-09-10",status:"confirmed",items:[{productId:12,qty:4},{productId:11,qty:2}],total:184.00},
];

// Mock invoices
const SAMPLE_INVOICES = [
  {id:"INV-2026-001",orderId:"ORD-2401",date:"2026-08-15",amount:85.00,status:"paid"},
  {id:"INV-2026-002",orderId:"ORD-2402",date:"2026-09-02",amount:260.00,status:"pending"},
  {id:"INV-2026-003",orderId:"ORD-2403",date:"2026-09-10",amount:184.00,status:"pending"},
];

// Vendor sample data
const SAMPLE_VENDOR_ORDERS = [
  {id:"VORD-001",customer:"Acme Corp",product:"A4 Copier Paper",qty:50,status:"pending",total:225.00,date:"2026-09-11"},
  {id:"VORD-002",customer:"TechStart Inc",product:"Wireless Mouse",qty:20,status:"processing",total:500.00,date:"2026-09-10"},
  {id:"VORD-003",customer:"GreenLife Ltd",product:"Eco-Cert Cleaning Liquid",qty:15,status:"shipped",total:270.00,date:"2026-09-08"},
  {id:"VORD-004",customer:"BuildRight Co",product:"Ergonomic Office Chair",qty:5,status:"delivered",total:900.00,date:"2026-09-01"},
];

function getProduct(id){return PRODUCTS.find(p=>p.id===id)}
function formatPrice(p){return "$"+p.toFixed(2)}

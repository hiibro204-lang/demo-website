
const Cart = {
  get(){return JSON.parse(localStorage.getItem("dw_cart")||"[]")},

  save(items){localStorage.setItem("dw_cart",JSON.stringify(items));this.updateBadge()},

  add(productId,qty=1){
    const items=this.get();const existing=items.find(i=>i.productId===productId);
    if(existing)existing.qty+=qty;else items.push({productId,qty});
    this.save(items);
  },

  remove(productId){
    let items=this.get();items=items.filter(i=>i.productId!==productId);
    this.save(items);
  },

  updateQty(productId,qty){
    if(qty<=0){this.remove(productId);return}
    const items=this.get();const item=items.find(i=>i.productId===productId);
    if(item)item.qty=qty;this.save(items);
  },

  clear(){localStorage.removeItem("dw_cart");this.updateBadge()},

  count(){return this.get().reduce((s,i)=>s+i.qty,0)},

  total(){return this.get().reduce((s,i)=>{const p=getProduct(i.productId);return s+(p?p.price*i.qty:0)},0)},

  updateBadge(){
    const badge=document.getElementById("cart-count");
    if(badge){const c=this.count();badge.textContent=c;badge.style.display=c>0?"flex":"none"}
  },

  itemsWithProducts(){
    return this.get().map(i=>({...i,product:getProduct(i.productId)})).filter(i=>i.product);
  }
};

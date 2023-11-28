(()=>{"use strict";var e,t={812:(e,t,r)=>{const a=window.React,c=window.wp.element,n={products:[],status:"init",cart:{},error:"",categories:{},wizzard:{step:0,checkValidity:!1},selectedProduct:0,showOrderModal:!1},l=(e,t)=>{var r;const{type:a,payload:c}=t;switch(a){case"SET_WIZZARD_STEP":return e.wizzard.step=c,e.wizzard.checkValidity=!0,{...e};case"INCREMENT_WIZZARD":return e.wizzard.step=e.wizzard.step+(c||1),e.wizzard.checkValidity=!0,{...e};case"DECREMENT_WIZZARD":return e.wizzard.step=e.wizzard.step-(c||1),e.wizzard.checkValidity=!0,{...e};case"SET_PRODUCTS":return{...e,products:c};case"SET_ORDER_MODAL":return{...e,showOrderModal:c};case"SET_CATEGORIES":return{...e,categories:c};case"SET_STATUS":return e.status=c,{...e};case"SET_SELECTED_PRODUCT":return{...e,selectedProduct:c};case"ADD_TO_CART":return 0===c.count?(delete e.cart[c.id],{...e}):(e.cart[c.id]=null!==(r=c.count)&&void 0!==r?r:1,0===Object.keys(e.cart).length&&(e.showOrderModal=!1),{...e});case"REMOVE_FROM_CART":return delete e.cart[c.id],0===Object.keys(e.cart).length&&(e.showOrderModal=!1),{...e};case"RESET":return console.log("resetting..."),{};default:console.log("UNKNOWN ACTION",t)}return{...e}},o=(0,c.createContext)({state:n,dispatch:()=>{}}),s=({children:e})=>{const[t,r]=(0,c.useReducer)(l,n);return(0,a.createElement)(o.Provider,{value:{state:t,dispatch:r}},e)},d=window.wp.apiFetch;var m=r.n(d);const i=e=>{const{cartSize:t,onClick:r}=e,c=t?"button button--pop button--primary":"button button--disabled";return(0,a.createElement)(a.Fragment,null,(0,a.createElement)("button",{className:c,onClick:r,disabled:0==t},"Warenkorb",(0,a.createElement)("em",{className:"material-icons"},"shopping_cart"),!!t&&(0,a.createElement)("span",{className:"badge ml-2 primary-inverse"},t)))},u=e=>{const{product:t,onCartClick:r}=e,{state:n,dispatch:l}=(0,c.useContext)(o),[s,d]=(0,c.useState)(1);return(0,a.createElement)("div",{key:t.id,className:"ctx-product-card"},(0,a.createElement)("div",{className:"ctx-product-card-image"},(0,a.createElement)("img",{src:t._embedded["wp:featuredmedia"][0].source_url})),(0,a.createElement)("div",{className:"ctx-product-card-content"},(0,a.createElement)("h4",null,t.title.rendered),(0,a.createElement)("div",{dangerouslySetInnerHTML:{__html:t.content.rendered}}),(0,a.createElement)("div",{className:"ctx-product-card-footer"},(0,a.createElement)("div",null,(0,a.createElement)("button",{className:"button button--secondary"},"Details")),(0,a.createElement)("div",null,(0,a.createElement)("div",{className:"ctx-number-picker"},(0,a.createElement)("button",{className:"button button--secondary",onClick:()=>d(s-1)},"-"),(0,a.createElement)("span",{className:"ctx-number-picker__number"},s),(0,a.createElement)("button",{className:"button button--secondary",onClick:()=>d(s+1)},"+")),(0,a.createElement)("span",{className:"button button--link button--pop button--gray button--icon",onClick:()=>((e,t=1)=>{l({type:"ADD_TO_CART",payload:{id:e,count:t}})})(t.id,s)},(0,a.createElement)("em",{className:"material-icons"},"add_shopping_cart"))))))},p=e=>{const{products:t,onCartClick:r,title:n}=e,{state:l,dispatch:s}=(0,c.useContext)(o),[d,m]=(0,c.useState)([]);return(0,a.createElement)(a.Fragment,null,(0,a.createElement)("div",{className:"ctx-products-category "+(d?"":"hidden")},(0,a.createElement)("button",{onClick:()=>{m(!d)}},(0,a.createElement)("i",{className:"material-icons"},"keyboard_arrow_down")),(0,a.createElement)("h4",null,n)),(0,a.createElement)("div",{className:"ctx-product-grid-wrapper "+(d?"":"hidden")},(0,a.createElement)("div",{className:"ctx-product-grid"},t.map((e=>(0,a.createElement)(u,{key:e.id,product:e,onCartClick:()=>((e,t=1)=>{s({type:"ADD_TO_CART",payload:{id:e,count:t}})})(e.id,quantity)}))))))},E=({products:e})=>{const{state:t,dispatch:r}=(0,c.useContext)(o),[n,l]=(0,c.useState)([]),s=t=>e.filter((e=>e.categories.hasOwnProperty(t)));return(0,a.createElement)("div",null,Object.entries(t.categories).map((([e,t])=>{const r=s(e);return(0,a.createElement)(p,{key:e,title:t,products:r})})))},b=window.wp["element;"],h=({products:e})=>{const{state:t,dispatch:r}=(0,b.useContext)(o);return(0,a.createElement)("div",{className:"grid grid--columns-3 grid--gap-8"},e.map((e=>(0,a.createElement)(u,{key:e.id,product:e}))))},v=e=>{const{state:t,dispatch:r}=(0,c.useContext)(o),n=(e,t)=>{r({type:0==t?"REMOVE_FROM_CART":"ADD_TO_CART",payload:{id:e,count:t}})};return(0,a.createElement)("div",{className:"ctx-order-modal "+(t.showOrderModal?"open":""),onClick:e=>{(e=>{e.bubbles=!1,e.target===e.currentTarget&&r({type:"SET_ORDER_MODAL",payload:!1})})(e)}},(0,a.createElement)("div",{className:"ctx-order-modal-content"},(0,a.createElement)("div",{className:"ctx-order-modal-header"},(0,a.createElement)("h2",null,"Order"),(0,a.createElement)("button",{onClick:()=>{r({type:"SET_ORDER_MODAL",payload:!1})}},(0,a.createElement)("i",{className:"material-icons"},"close"))),(0,a.createElement)("div",{className:"ctx-order-modal-summary"},Object.keys(t.cart).map((e=>{const r=t.products.find((t=>t.id==e)),c=t.cart[e];return console.log(r),(0,a.createElement)("div",{className:"ctx-order-modal-product"},(0,a.createElement)("div",{className:"ctx-order-modal-product-image"},(0,a.createElement)("img",{src:r?._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url})),(0,a.createElement)("div",{className:"ctx-order-modal-product-content"},(0,a.createElement)("h4",null,r?.title.rendered),(0,a.createElement)("div",{dangerouslySetInnerHTML:{__html:r?.content.rendered}})),(0,a.createElement)("div",{className:"ctx-order-modal-product-footer"},(0,a.createElement)("div",{className:"ctx-number-picker"},(0,a.createElement)("button",{className:"button button--secondary",onClick:()=>{n(e,0)}},(0,a.createElement)("i",{className:"material-icons"},"delete")),(0,a.createElement)("input",{className:"ctx-number-picker__number",value:c,onChange:t=>{n(e,t.target.value)}}))))}))),(0,a.createElement)("div",{className:"ctx-order-modal-customer"},(0,a.createElement)("h3",null,"Customer"),(0,a.createElement)("div",{className:"ctx-order-modal-customer-form"},(0,a.createElement)("div",{className:"ctx-order-modal-customer-form-group"},(0,a.createElement)("label",{htmlFor:"name"},"Name"),(0,a.createElement)("input",{type:"text",name:"name"})),(0,a.createElement)("div",{className:"ctx-order-modal-customer-form-group"},(0,a.createElement)("label",{htmlFor:"email"},"Email"),(0,a.createElement)("input",{type:"email",name:"email"})),(0,a.createElement)("div",{className:"ctx-order-modal-customer-form-group"},(0,a.createElement)("label",{htmlFor:"phone"},"Phone"),(0,a.createElement)("input",{type:"text",name:"phone"})),(0,a.createElement)("div",{className:"ctx-order-modal-customer-form-group"},(0,a.createElement)("label",{htmlFor:"address"},"Address"),(0,a.createElement)("input",{type:"text",name:"address"}))))))},y=e=>{const{id:t}=e,{state:r,dispatch:n}=(0,c.useContext)(o);if(!t)return(0,a.createElement)(a.Fragment,null);const l=r.products.find((e=>e.id==t));return(0,a.createElement)("div",null,(0,a.createElement)("h1",null,l?.title.raw))},g=({attributes:e})=>{const{state:t,dispatch:r}=(0,c.useContext)(o);console.log(t);const[n,l]=(0,c.useState)([]),[s,d]=(0,c.useState)(0);(0,c.useEffect)((()=>{m()({path:"wp/v2/ctx-products?_embed&per_page=100"}).then((e=>{r({type:"SET_PRODUCTS",payload:e}),r({type:"SET_CATEGORIES",payload:u(e)})}))}),[]);const u=e=>{let t={};console.log("hihi",e);for(const r of e)t={...t,...r.categories};return t},p=n.length?n:t.products,b=Object.keys(t.cart).length;return(0,a.createElement)("div",null,(0,a.createElement)("div",{className:"flex justify-between"},(0,a.createElement)("div",{className:"input"},(0,a.createElement)("input",{type:"text",onChange:e=>{const r=e.target.value,a=t.products.filter((e=>e.title.rendered.toLowerCase().includes(r.toLowerCase())));l(a)}})),(0,a.createElement)("div",null,(0,a.createElement)(i,{cartSize:b,onClick:()=>{r({type:"SET_ORDER_MODAL",payload:!0})}}))),e.sortByCategory?(0,a.createElement)(E,{products:p,onDetails:e=>d(e)}):(0,a.createElement)(h,{products:p,onDetails:e=>d(e)}),(0,a.createElement)(y,{id:s}),(0,a.createElement)(v,null))};g.defaultProps={};const _=g;document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("ctx-products-shop");if(console.log("shop",e),e){const t=JSON.parse(e.dataset.attributes);(0,c.createRoot)(e).render((0,a.createElement)(a.Fragment,null,(0,a.createElement)(s,null,(0,a.createElement)(_,{attributes:t}))))}}))}},r={};function a(e){var c=r[e];if(void 0!==c)return c.exports;var n=r[e]={exports:{}};return t[e](n,n.exports,a),n.exports}a.m=t,e=[],a.O=(t,r,c,n)=>{if(!r){var l=1/0;for(m=0;m<e.length;m++){for(var[r,c,n]=e[m],o=!0,s=0;s<r.length;s++)(!1&n||l>=n)&&Object.keys(a.O).every((e=>a.O[e](r[s])))?r.splice(s--,1):(o=!1,n<l&&(l=n));if(o){e.splice(m--,1);var d=c();void 0!==d&&(t=d)}}return t}n=n||0;for(var m=e.length;m>0&&e[m-1][2]>n;m--)e[m]=e[m-1];e[m]=[r,c,n]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={523:0,97:0};a.O.j=t=>0===e[t];var t=(t,r)=>{var c,n,[l,o,s]=r,d=0;if(l.some((t=>0!==e[t]))){for(c in o)a.o(o,c)&&(a.m[c]=o[c]);if(s)var m=s(a)}for(t&&t(r);d<l.length;d++)n=l[d],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(m)},r=globalThis.webpackChunkctx_products=globalThis.webpackChunkctx_products||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var c=a.O(void 0,[97],(()=>a(812)));c=a.O(c)})();
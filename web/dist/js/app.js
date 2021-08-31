(function(t){function e(e){for(var n,o,u=e[0],l=e[1],a=e[2],b=0,d=[];b<u.length;b++)o=u[b],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&d.push(c[o][0]),c[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);i&&i(e);while(d.length)d.shift()();return s.push.apply(s,a||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,u=1;u<r.length;u++){var l=r[u];0!==c[l]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},c={app:0},s=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var a=0;a<u.length;a++)e(u[a]);var i=l;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),c=(r("b0c0"),{class:"text-right"}),s=Object(n["f"])("i",{class:"material-icons"},"shopping_cart",-1),o=Object(n["e"])(),u={key:1},l={class:"modal-dialog"},a={class:"dialog-header"},i={class:"dialog-title"},b={class:"dialog-content"},d={key:2,class:"success-window"},j={class:"foot button-group right"};function O(t,e,r,O,p,f){var g=this,m=Object(n["i"])("ProductCard"),x=Object(n["i"])("ProductDetails"),C=Object(n["i"])("Cart"),h=Object(n["i"])("Checkout");return Object(n["g"])(),Object(n["c"])("div",null,[Object(n["f"])("div",c,[Object(n["f"])("span",{class:"button bg-primary text-white",onClick:e[1]||(e[1]=function(e){t.showCartModal=!0,t.showCartList=!0})},[s,Object(n["f"])("span",{textContent:Object(n["j"])(t.strings.cart)},null,8,["textContent"]),o,0!=f.countCartItems()?(Object(n["g"])(),Object(n["c"])("span",{key:0,class:"badge ml-2 primary-inverse",textContent:Object(n["j"])(f.countCartItems())},null,8,["textContent"])):Object(n["d"])("",!0)])]),t.attributes.sortByCategory?Object(n["d"])("",!0):(Object(n["g"])(),Object(n["c"])("div",{key:0,class:["posts gap-12 grid",["grid-cols-"+t.attributes.columnsSmall,"md:grid-cols-"+t.attributes.columnsMedium,"lg:grid-cols-"+t.attributes.columnsLarge]]},[Object(n["f"])("ul",null,[Object(n["f"])("li",{onClick:e[2]||(e[2]=function(e){return t.selectedCategory=0}),textContent:Object(n["j"])(t.strings.all)},null,8,["textContent"]),(Object(n["g"])(!0),Object(n["c"])(n["a"],null,Object(n["h"])(f.filteredCategories,(function(t,e){return Object(n["g"])(),Object(n["c"])("li",{key:e,onClick:function(e){return g.selectedCategory=t.id},textContent:Object(n["j"])(t.name)},null,8,["onClick","textContent"])})),128))]),(Object(n["g"])(!0),Object(n["c"])(n["a"],null,Object(n["h"])(f.filteredShopItems(),(function(e,r){return Object(n["g"])(),Object(n["c"])(m,{key:r,product:e,attributes:t.attributes,onSelect:f.addToCart,onDetails:f.showDetails},null,8,["product","attributes","onSelect","onDetails"])})),128))],2)),t.attributes.sortByCategory?(Object(n["g"])(),Object(n["c"])("div",u,[(Object(n["g"])(!0),Object(n["c"])(n["a"],null,Object(n["h"])(f.filteredCategories(),(function(e,r){return Object(n["g"])(),Object(n["c"])("div",{class:"mb-8",key:r},[Object(n["f"])("h4",{class:"my-2 text-gray-500 uppercase text-sm font-bold",textContent:Object(n["j"])(e.name.toUpperCase())},null,8,["textContent"]),Object(n["f"])("div",{class:["posts gap-12 grid",["grid-cols-"+t.attributes.columnsSmall,"md:grid-cols-"+t.attributes.columnsMedium,"lg:grid-cols-"+t.attributes.columnsLarge]]},[(Object(n["g"])(!0),Object(n["c"])(n["a"],null,Object(n["h"])(f.filteredShopItems(e.id),(function(e,r){return Object(n["g"])(),Object(n["c"])(m,{key:r,product:e,attributes:t.attributes,onSelect:f.addToCart,onDetails:f.showDetails},null,8,["product","attributes","onSelect","onDetails"])})),128))],2)])})),128))])):Object(n["d"])("",!0),-1!=t.currentProduct?(Object(n["g"])(),Object(n["c"])(x,{key:2,product:t.products[t.currentProduct],attributes:t.attributes,strings:t.strings,onSelect:f.addToCart,onClose:e[3]||(e[3]=function(e){return t.currentProduct=-1})},null,8,["product","attributes","strings","onSelect"])):Object(n["d"])("",!0),t.showCartModal?(Object(n["g"])(),Object(n["c"])("div",{key:3,class:["modal fullscreen",{primary:!t.success,success:t.success}]},[Object(n["f"])("div",l,[Object(n["f"])("div",a,[Object(n["f"])("div",i,[Object(n["f"])("h2",{textContent:Object(n["j"])(t.strings.cart)},null,8,["textContent"])]),Object(n["f"])("button",{class:"close",onClick:e[4]||(e[4]=function(e){return t.showCartModal=!1})})]),Object(n["f"])("div",b,[t.showCartList?(Object(n["g"])(),Object(n["c"])(C,{key:0,products:t.products,attributes:t.attributes,strings:t.strings,cart:t.cart,onClose:e[5]||(e[5]=function(e){return t.showCartModal=!1})},null,8,["products","attributes","strings","cart"])):Object(n["d"])("",!0),t.showCheckout?(Object(n["g"])(),Object(n["c"])(h,{key:1,products:t.products,attributes:t.attributes,strings:t.strings,cart:t.cart,user:t.user,"onUpdate:user":e[6]||(e[6]=function(e){return t.user=e})},null,8,["products","attributes","strings","cart","user"])):Object(n["d"])("",!0),t.success?(Object(n["g"])(),Object(n["c"])("div",d,[Object(n["f"])("h2",{textContent:Object(n["j"])(t.strings.thanksHead)},null,8,["textContent"]),Object(n["f"])("p",{textContent:Object(n["j"])(t.strings.thanksText)},null,8,["textContent"])])):Object(n["d"])("",!0),Object(n["f"])("div",j,[t.showCartList?(Object(n["g"])(),Object(n["c"])("button",{key:0,onClick:e[7]||(e[7]=function(e){t.showCartList=!1,t.showCheckout=!0}),class:"button primary",textContent:Object(n["j"])(t.strings.order)},null,8,["textContent"])):Object(n["d"])("",!0),t.showCheckout?(Object(n["g"])(),Object(n["c"])("button",{key:1,onClick:e[8]||(e[8]=function(e){t.showCartList=!0,t.showCheckout=!1}),class:"button primary",textContent:Object(n["j"])(t.strings.back)},null,8,["textContent"])):Object(n["d"])("",!0),t.showCheckout?(Object(n["g"])(),Object(n["c"])("button",{key:2,onClick:e[9]||(e[9]=function(t){return f.order()}),class:"button primary",textContent:Object(n["j"])(t.strings.order)},null,8,["textContent"])):Object(n["d"])("",!0),t.success?(Object(n["g"])(),Object(n["c"])("button",{key:3,onClick:e[10]||(e[10]=function(e){return t.showCartModal=!1}),class:"button close",textContent:Object(n["j"])(t.strings.close)},null,8,["textContent"])):Object(n["d"])("",!0)])])])],2)):Object(n["d"])("",!0)])}var p=r("1da1"),f=(r("96cf"),r("c740"),r("4de4"),r("caad"),r("2532"),r("159b"),r("b64b"),r("d3b7"),r("a15b"),{key:0,class:"inline-block absolute bg-primary text-primary-contrast rounded-tl-lg rounded-br-lg top-0 right-0 px-2  mr-4 text-sm -mt-2"}),g={class:"flex flex-grow flex-col p-4 w-full"},m={class:"mt-auto text-right"},x=Object(n["f"])("em",{class:"material-icons"},"shopping_cart",-1);function C(t,e,r,c,s,o){return Object(n["g"])(),Object(n["c"])("div",{onClick:e[2]||(e[2]=function(e){return t.$emit("details",e,r.product.id)}),class:["flex card bg-white overflow-visible",{"flex-row card bg-white":"list"===r.attributes.style,"flex-col card bg-white":"card"===r.attributes.style}]},[r.attributes.showCategory?(Object(n["g"])(),Object(n["c"])("span",f,[r.product.categories?(Object(n["g"])(),Object(n["c"])("span",{key:0,textContent:Object(n["j"])(0!=r.product.categories.length?r.product.categories[0].name:"")},null,8,["textContent"])):Object(n["d"])("",!0)])):Object(n["d"])("",!0),Object(n["f"])("img",{class:["object-cover",{"h-32 w-32":"list"===r.attributes.style,"h-64 w-full":"card"===r.attributes.style}],src:r.product.images.large},null,10,["src"]),Object(n["f"])("div",g,[Object(n["f"])("h3",{class:"block font-bold text-primary inline-block",textContent:Object(n["j"])(r.product.title.rendered)},null,8,["textContent"]),Object(n["f"])("span",{class:"block text-gray-500 text-sm",innerHTML:r.product.excerpt.rendered},null,8,["innerHTML"]),Object(n["f"])("div",m,[Object(n["f"])("span",{class:"button primary pop p-2",onClick:e[1]||(e[1]=Object(n["o"])((function(e){return t.$emit("select",e,r.product.id)}),["stop"]))},[x])])])],2)}var h={name:"Product",props:{product:Object,attributes:Object,selected:String}};h.render=C;var v=h,y={class:"modal fullscreen"},k={class:"modal-dialog"},w={class:"dialog-header"},S={class:"dialog-title"},M={class:"dialog-content"},P={class:"flex items-center justify-end"},L={class:"number-picker"},T=Object(n["f"])("em",{class:"material-icons"},"shopping_cart",-1);function U(t,e,r,c,s,o){return Object(n["g"])(),Object(n["c"])("div",y,[Object(n["f"])("div",k,[Object(n["f"])("div",w,[Object(n["f"])("img",{src:r.product.images.full,class:"object-cover w-full",style:{height:"30vh"}},null,8,["src"]),Object(n["f"])("div",S,[Object(n["f"])("h2",{textContent:Object(n["j"])(r.product.title.rendered),class:""},null,8,["textContent"])]),Object(n["f"])("button",{class:"close",onClick:e[1]||(e[1]=function(e){return t.$emit("close")})})]),Object(n["f"])("div",M,[Object(n["f"])("div",{class:"my-8",innerHTML:r.product.content.rendered},null,8,["innerHTML"]),Object(n["f"])("div",P,[Object(n["f"])("span",L,[Object(n["f"])("button",{onClick:e[2]||(e[2]=Object(n["o"])((function(t){return r.product.cart--}),["stop"]))}),Object(n["n"])(Object(n["f"])("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=function(t){return r.product.cart=t})},null,512),[[n["m"],r.product.cart]]),Object(n["f"])("button",{onClick:e[4]||(e[4]=Object(n["o"])((function(t){return r.product.cart++}),["stop"]))})]),Object(n["f"])("span",{class:"button primary p-2 pop",onClick:e[5]||(e[5]=Object(n["o"])((function(e){return t.$emit("select",e,r.product.id)}),["stop"]))},[T]),Object(n["f"])("span",{class:"button bg-gray-300 ml-4 p-2",onClick:e[6]||(e[6]=function(e){return t.$emit("close")}),textContent:Object(n["j"])(r.strings.back)},null,8,["textContent"])])])])])}var _={name:"Product",props:{product:Object,attributes:Object,selected:String,strings:Object}};_.render=U;var I=_,V={class:"grid grid-cols-2 gap-12"},H={class:"item-list overflow-y-auto"},D={class:"text"},q={class:"title"},z={class:"count"},R=Object(n["e"])("x"),$={class:"input-select mb-10"};function B(t,e,r,c,s,o){return Object(n["g"])(),Object(n["c"])("div",V,[Object(n["f"])("div",null,[Object(n["f"])("ul",H,[(Object(n["g"])(!0),Object(n["c"])(n["a"],null,Object(n["h"])(r.cart,(function(t,e){return Object(n["g"])(),Object(n["c"])("li",{class:"item",key:e},[Object(n["f"])("img",{src:r.products[t.index].images.thumbnail},null,8,["src"]),Object(n["f"])("div",D,[Object(n["f"])("div",q,[Object(n["f"])("b",{textContent:Object(n["j"])(r.products[t.index].title.rendered)},null,8,["textContent"]),""!=r.products[t.index].excerpt.rendered?(Object(n["g"])(),Object(n["c"])("span",{key:0,class:"description",innerHTML:r.products[t.index].excerpt.rendered},null,8,["innerHTML"])):Object(n["d"])("",!0)])]),Object(n["f"])("div",z,[Object(n["f"])("b",{textContent:Object(n["j"])(t.count)},null,8,["textContent"]),R])])})),128))])]),Object(n["f"])("div",null,[Object(n["f"])("form",null,[Object(n["f"])("div",$,[Object(n["f"])("label",{textContent:Object(n["j"])(r.strings.title)},null,8,["textContent"]),Object(n["n"])(Object(n["f"])("select",{"onUpdate:modelValue":e[1]||(e[1]=function(t){return r.user.title.value=t}),type:"text",required:""},[Object(n["f"])("option",{textContent:Object(n["j"])(r.strings.sir)},null,8,["textContent"]),Object(n["f"])("option",{textContent:Object(n["j"])(r.strings.madame)},null,8,["textContent"])],512),[[n["l"],r.user.title.value]])]),Object(n["f"])("div",{class:["input-text mb-10",{error:r.user.forename.error}]},[Object(n["f"])("label",{textContent:Object(n["j"])(r.strings.forename)},null,8,["textContent"]),Object(n["n"])(Object(n["f"])("input",{"onUpdate:modelValue":e[2]||(e[2]=function(t){return r.user.forename.value=t}),type:"text",required:""},null,512),[[n["m"],r.user.forename.value]]),r.user.forename.error?(Object(n["g"])(),Object(n["c"])("span",{key:0,class:"error-message",textContent:Object(n["j"])(r.user.forename.msg)},null,8,["textContent"])):Object(n["d"])("",!0)],2),Object(n["f"])("div",{class:["input-text mb-10",{error:r.user.surname.error}]},[Object(n["f"])("label",{textContent:Object(n["j"])(r.strings.surname)},null,8,["textContent"]),Object(n["n"])(Object(n["f"])("input",{"onUpdate:modelValue":e[3]||(e[3]=function(t){return r.user.surname.value=t}),type:"text",required:""},null,512),[[n["m"],r.user.surname.value]]),r.user.surname.error?(Object(n["g"])(),Object(n["c"])("span",{key:0,class:"error-message",textContent:Object(n["j"])(r.user.surname.msg)},null,8,["textContent"])):Object(n["d"])("",!0)],2),Object(n["f"])("div",{class:["input-text mb-10",{error:r.user.email.error}]},[Object(n["f"])("label",{textContent:Object(n["j"])(r.strings.email)},null,8,["textContent"]),Object(n["n"])(Object(n["f"])("input",{"onUpdate:modelValue":e[4]||(e[4]=function(t){return r.user.email.value=t}),type:"text",required:""},null,512),[[n["m"],r.user.email.value]]),r.user.email.error?(Object(n["g"])(),Object(n["c"])("span",{key:0,class:"error-message",textContent:Object(n["j"])(r.user.email.msg)},null,8,["textContent"])):Object(n["d"])("",!0)],2),Object(n["f"])("div",{class:["input-text mb-10",{error:r.user.address.error}]},[Object(n["f"])("label",{textContent:Object(n["j"])(r.strings.address)},null,8,["textContent"]),Object(n["n"])(Object(n["f"])("input",{"onUpdate:modelValue":e[5]||(e[5]=function(t){return r.user.address.value=t}),type:"text",required:""},null,512),[[n["m"],r.user.address.value]]),r.user.address.error?(Object(n["g"])(),Object(n["c"])("span",{key:0,class:"error-message",textContent:Object(n["j"])(r.user.address.msg)},null,8,["textContent"])):Object(n["d"])("",!0)],2),Object(n["f"])("div",{class:["input-text mb-10",{error:r.user.zip.error}]},[Object(n["f"])("label",{textContent:Object(n["j"])(r.strings.zip)},null,8,["textContent"]),Object(n["n"])(Object(n["f"])("input",{"onUpdate:modelValue":e[6]||(e[6]=function(t){return r.user.zip.value=t}),type:"text",required:""},null,512),[[n["m"],r.user.zip.value]]),r.user.zip.error?(Object(n["g"])(),Object(n["c"])("span",{key:0,class:"error-message",textContent:Object(n["j"])(r.user.zip.msg)},null,8,["textContent"])):Object(n["d"])("",!0)],2),Object(n["f"])("div",{class:["input-text mb-10",{error:r.user.city.error}]},[Object(n["f"])("label",{textContent:Object(n["j"])(r.strings.city)},null,8,["textContent"]),Object(n["n"])(Object(n["f"])("input",{"onUpdate:modelValue":e[7]||(e[7]=function(t){return r.user.city.value=t}),type:"text",required:""},null,512),[[n["m"],r.user.city.value]]),r.user.city.error?(Object(n["g"])(),Object(n["c"])("span",{key:0,class:"error-message",textContent:Object(n["j"])(r.user.city.msg)},null,8,["textContent"])):Object(n["d"])("",!0)],2),Object(n["f"])("div",{class:["input-textarea mb-10",{error:r.user.comment.error}]},[Object(n["f"])("label",{textContent:Object(n["j"])(r.strings.comment)},null,8,["textContent"]),Object(n["n"])(Object(n["f"])("textarea",{"onUpdate:modelValue":e[8]||(e[8]=function(t){return r.user.comment.value=t})},null,512),[[n["m"],r.user.comment.value]]),r.user.comment.error?(Object(n["g"])(),Object(n["c"])("span",{key:0,class:"error-message",textContent:Object(n["j"])(r.user.comment.msg)},null,8,["textContent"])):Object(n["d"])("",!0)],2),Object(n["f"])("div",{class:["input-checkbox mb-10",{error:r.user.forename.error}]},[Object(n["n"])(Object(n["f"])("input",{"onUpdate:modelValue":e[9]||(e[9]=function(t){return r.user.consent.value=t}),type:"checkbox",required:""},null,512),[[n["k"],r.user.consent.value]]),Object(n["f"])("label",{innerHTML:r.strings.consent},null,8,["innerHTML"]),r.user.consent.error?(Object(n["g"])(),Object(n["c"])("span",{key:0,class:"error-message",textContent:Object(n["j"])(r.user.consent.msg)},null,8,["textContent"])):Object(n["d"])("",!0)],2)])])])}var J={model:{prop:"user",event:"change"},props:{products:Object,cart:Object,user:Object,strings:Object}};J.render=B;var N=J,A={class:"item-list overflow-y-auto"},E={class:"text"},W={class:"title"},X={class:"control"},F={class:"number-picker"},G=Object(n["f"])("em",{class:"material-icons"},"delete",-1);function K(t,e,r,c,s,o){return Object(n["g"])(),Object(n["c"])("div",null,[Object(n["f"])("ul",A,[(Object(n["g"])(!0),Object(n["c"])(n["a"],null,Object(n["h"])(r.cart,(function(t,e){return Object(n["g"])(),Object(n["c"])("li",{class:"item",key:e},[Object(n["f"])("img",{src:r.products[t.index].images.thumbnail},null,8,["src"]),Object(n["f"])("div",E,[Object(n["f"])("div",W,[Object(n["f"])("b",{textContent:Object(n["j"])(r.products[t.index].title.rendered)},null,8,["textContent"]),""!=r.products[t.index].excerpt.rendered?(Object(n["g"])(),Object(n["c"])("span",{key:0,class:"description",innerHTML:r.products[t.index].excerpt.rendered},null,8,["innerHTML"])):Object(n["d"])("",!0)]),Object(n["f"])("div",X,[Object(n["f"])("span",F,[Object(n["f"])("button",{onClick:Object(n["o"])((function(e){return t.count--}),["stop"])},null,8,["onClick"]),Object(n["n"])(Object(n["f"])("input",{type:"text",class:"px-1 w-8 mx-1 text-center bg-gray-200","onUpdate:modelValue":function(e){return t.count=e}},null,8,["onUpdate:modelValue"]),[[n["m"],t.count]]),Object(n["f"])("button",{class:"",onClick:Object(n["o"])((function(e){return t.count++}),["stop"])},null,8,["onClick"])]),Object(n["f"])("span",{class:"button p-2 ml-auto md:ml-0",onClick:function(t){return o.removeItem(e)}},[G],8,["onClick"])])])])})),128))])])}r("a434");var Q={name:"Product",props:{products:Object,attributes:Object,cart:Object},methods:{removeItem:function(t){this.cart.splice(t,1)}}};Q.render=K;var Y=Q,Z=r("2ef0"),tt=r.n(Z),et=window.ctx_products_vuejs,rt={name:"App",components:{ProductCard:v,ProductDetails:I,Cart:Y,Checkout:N},data:function(){return{attributes:window.productSettings?window.productSettings:{columnsLarge:0,columnsMedium:0,columnsSmall:1,dropShadow:!1,excerptLength:20,order:"desc",orderBy:"date",selectedCategory:"0",selectedTags:[],showCategory:!0,showFilter:!1,showImages:!0,showSearchbar:!1,style:"list",textAlignment:"left"},showProductModal:!1,currentProduct:-1,showCartModal:!1,showCartList:!1,showCheckout:!1,showResult:!1,products:[{title:""}],categories:[],cart:[],strings:[],selectedCategory:0,user:{title:{value:"",error:!1,msg:""},forename:{value:"",error:!1,msg:""},surname:{value:"",error:!1,msg:""},email:{value:"",error:!1,msg:""},address:{value:"",error:!1,msg:""},zip:{value:"",error:!1,msg:""},city:{value:"",error:!1,msg:""},comment:{value:"",error:!1,msg:""},consent:{value:"",error:!1,msg:""}},success:!1}},methods:{addToCart:function(t,e){var r=tt.a.findIndex(this.products,(function(t){return t.id==e})),n=(this.products[r],tt.a.findIndex(this.cart,(function(t){return t.index==r})));if(console.log(n),-1!=n)return this.cart[n].count+=this.products[r].cart,this.products[r].cart=1,void console.log(this.cart);this.cart.push({index:r,id:e,count:this.products[r].cart}),this.products[r].cart=1,this.currentProduct=-1},showDetails:function(t,e){this.currentProduct=tt.a.findIndex(this.products,(function(t){return t.id==e}))},filteredShopItems:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(0!=this.selectedCategory||0!=t){t=0==t?this.selectedCategory:t;var e=tt.a.filter(this.products,(function(e){return!!e.category&&e.category.term_id==t}));return e}return this.products},filteredCategories:function(){var t=this.attributes.selectedCategories,e=tt.a.filter(this.categories,(function(e){return 0!=e.count&&!(t.length>0&&!t.includes(e.id))}));return e},countCartItems:function(){var t=0;return this.cart.forEach((function(e){t+=e.count})),t},order:function(){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function e(){var r,n,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=t.user,Object.keys(r).forEach((function(t){r[t]["error"]=!1,r[t]["msg"]=""})),console.log(r),n={method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json","X-WP-Nonce":et.nonce},body:JSON.stringify({user:r,cart:t.cart})},c="".concat(et.root,"ctx-products/v2/order"),fetch(c,n).then((function(t){return t.json()})).then((function(e){"invalid"==e.status&&(t.user=e.data),"ok"==e.status&&(t.success=!0,t.showCheckout=!1,t.showCartList=!1),console.log(e)}));case 6:case"end":return e.stop()}}),e)})))()}},created:function(){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function e(){var r,n,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.strings=et.strings,r={headers:{"X-WP-Nonce":et.nonce}},n="".concat(et.root,"wp/v2/ctx-products?_embed"),0!=t.attributes.selectedCategories.length&&(n+="&product-categories="+t.attributes.selectedCategories.join(",")),fetch(n,r).then((function(t){return t.json()})).then((function(e){t.products=e,console.log(e)})),c="".concat(et.root,"wp/v2/product-categories"),fetch(c,r).then((function(t){return t.json()})).then((function(e){t.categories=e,console.log(e)}));case 9:case"end":return e.stop()}}),e)})))()}};rt.render=O;var nt=rt;Object(n["b"])(nt).mount("#app")}});
//# sourceMappingURL=app.js.map
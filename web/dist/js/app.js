(function(t){function e(e){for(var n,s,u=e[0],a=e[1],i=e[2],d=0,b=[];d<u.length;d++)s=u[d],Object.prototype.hasOwnProperty.call(c,s)&&c[s]&&b.push(c[s][0]),c[s]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);l&&l(e);while(b.length)b.shift()();return o.push.apply(o,i||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,u=1;u<r.length;u++){var a=r[u];0!==c[a]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},c={app:0},o=[];function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],a=u.push.bind(u);u.push=e,u=u.slice();for(var i=0;i<u.length;i++)e(u[i]);var l=a;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),c=(r("b0c0"),{class:"button-group button-group--right"}),o=Object(n["f"])("i",{class:"material-icons"},"shopping_cart",-1),s=Object(n["e"])(),u=Object(n["f"])("hr",null,null,-1),a={key:1},i={class:"modal__dialog"},l={class:"modal__header"},d={class:"modal__title"},b={class:"modal__content"},j={class:"section"},O={class:"container"},p={key:2,class:"modal__overlay"},f=Object(n["f"])("div",{class:"spinning-loader"},null,-1),m={key:3,class:"success-window"},g={key:0,class:"modal__footer"},h={class:"container"},C={class:"button-group button-group--right"};function v(t,e,r,v,x,_){var y=this,w=Object(n["i"])("ProductCard"),k=Object(n["i"])("ProductDetails"),S=Object(n["i"])("Cart"),M=Object(n["i"])("Checkout");return Object(n["g"])(),Object(n["c"])("div",null,[Object(n["f"])("div",c,[Object(n["f"])("span",{class:"button button--primary",onClick:e[1]||(e[1]=function(e){t.showCartModal=!0,t.showCartList=!0})},[o,Object(n["f"])("span",{textContent:Object(n["j"])(t.strings.cart)},null,8,["textContent"]),s,0!=_.countCartItems()?(Object(n["g"])(),Object(n["c"])("span",{key:0,class:"badge ml-2 primary-inverse",textContent:Object(n["j"])(_.countCartItems())},null,8,["textContent"])):Object(n["d"])("",!0)])]),u,t.attributes.sortByCategory?Object(n["d"])("",!0):(Object(n["g"])(),Object(n["c"])("div",{key:0,class:["grid grid--gap-12",["grid--columns-"+t.attributes.columnsSmall,"md:grid--columns-"+t.attributes.columnsMedium,"lg:grid--columns-"+t.attributes.columnsLarge]]},[Object(n["f"])("ul",null,[Object(n["f"])("li",{onClick:e[2]||(e[2]=function(e){return t.selectedCategory=0}),textContent:Object(n["j"])(t.strings.all)},null,8,["textContent"]),(Object(n["g"])(!0),Object(n["c"])(n["a"],null,Object(n["h"])(_.filteredCategories,(function(t,e){return Object(n["g"])(),Object(n["c"])("li",{key:e,onClick:function(e){return y.selectedCategory=t.id},textContent:Object(n["j"])(t.name)},null,8,["onClick","textContent"])})),128))]),(Object(n["g"])(!0),Object(n["c"])(n["a"],null,Object(n["h"])(_.filteredShopItems(),(function(e,r){return Object(n["g"])(),Object(n["c"])(w,{key:r,product:e,attributes:t.attributes,onSelect:_.addToCart,onDetails:_.showDetails},null,8,["product","attributes","onSelect","onDetails"])})),128))],2)),t.attributes.sortByCategory?(Object(n["g"])(),Object(n["c"])("div",a,[(Object(n["g"])(!0),Object(n["c"])(n["a"],null,Object(n["h"])(_.filteredCategories(),(function(e,r){return Object(n["g"])(),Object(n["c"])("div",{class:"mb-8",key:r},[Object(n["f"])("h6",{class:"my-8 text-gray-500 uppercase",textContent:Object(n["j"])(e.name.toUpperCase())},null,8,["textContent"]),Object(n["f"])("div",{class:["grid grid--gap-12",["grid--columns-"+t.attributes.columnsSmall,"md:grid--columns-"+t.attributes.columnsMedium,"lg:grid--columns-"+t.attributes.columnsLarge]]},[(Object(n["g"])(!0),Object(n["c"])(n["a"],null,Object(n["h"])(_.filteredShopItems(e.id),(function(e,r){return Object(n["g"])(),Object(n["c"])(w,{key:r,product:e,attributes:t.attributes,onSelect:_.addToCart,onDetails:_.showDetails},null,8,["product","attributes","onSelect","onDetails"])})),128))],2)])})),128))])):Object(n["d"])("",!0),-1!=t.currentProduct?(Object(n["g"])(),Object(n["c"])(k,{key:2,product:t.products[t.currentProduct],attributes:t.attributes,strings:t.strings,onSelect:_.addToCart,onClose:e[3]||(e[3]=function(e){return t.currentProduct=-1})},null,8,["product","attributes","strings","onSelect"])):Object(n["d"])("",!0),Object(n["f"])("div",{class:["modal modal--fullscreen",{"modal--open":t.showCartModal,primary:!t.success,success:t.success}]},[Object(n["f"])("div",i,[Object(n["f"])("div",l,[Object(n["f"])("div",d,[Object(n["f"])("h2",{textContent:Object(n["j"])(t.strings.cart)},null,8,["textContent"])]),Object(n["f"])("button",{class:"modal__close",onClick:e[4]||(e[4]=function(e){return t.showCartModal=!1})})]),Object(n["f"])("div",b,[Object(n["f"])("div",j,[Object(n["f"])("div",O,[1==t.wizzardStep?(Object(n["g"])(),Object(n["c"])(S,{key:0,products:t.products,attributes:t.attributes,strings:t.strings,cart:t.cart,onClose:e[5]||(e[5]=function(e){return t.showCartModal=!1})},null,8,["products","attributes","strings","cart"])):Object(n["d"])("",!0),2==t.wizzardStep?(Object(n["g"])(),Object(n["c"])(M,{key:1,products:t.products,attributes:t.attributes,strings:t.strings,cart:t.cart,user:t.user,"onUpdate:user":e[6]||(e[6]=function(e){return t.user=e})},null,8,["products","attributes","strings","cart","user"])):Object(n["d"])("",!0),t.processingCheckout?(Object(n["g"])(),Object(n["c"])("div",p,[Object(n["f"])("aside",null,[f,Object(n["f"])("h2",{textContent:Object(n["j"])(t.strings.wait)},null,8,["textContent"])])])):Object(n["d"])("",!0),3==t.wizzardStep?(Object(n["g"])(),Object(n["c"])("div",m,[Object(n["f"])("h2",{textContent:Object(n["j"])(t.strings.thanksHead)},null,8,["textContent"]),Object(n["f"])("p",{textContent:Object(n["j"])(t.strings.thanksText)},null,8,["textContent"])])):Object(n["d"])("",!0)])])]),t.processingCheckout?Object(n["d"])("",!0):(Object(n["g"])(),Object(n["c"])("div",g,[Object(n["f"])("div",h,[Object(n["f"])("div",C,[2==t.wizzardStep?(Object(n["g"])(),Object(n["c"])("button",{key:0,onClick:e[7]||(e[7]=function(e){return t.wizzardStep=1}),class:"button button--gray button--link",textContent:Object(n["j"])(t.strings.back)},null,8,["textContent"])):Object(n["d"])("",!0),t.showCartList&&1==t.wizzardStep?(Object(n["g"])(),Object(n["c"])("button",{key:1,onClick:e[8]||(e[8]=function(e){return t.wizzardStep=2}),class:"button button--primary",textContent:Object(n["j"])(t.strings.next)},null,8,["textContent"])):Object(n["d"])("",!0),2==t.wizzardStep?(Object(n["g"])(),Object(n["c"])("button",{key:2,onClick:e[9]||(e[9]=function(t){return _.order()}),class:"button button--primary",textContent:Object(n["j"])(t.strings.order)},null,8,["textContent"])):Object(n["d"])("",!0),3==t.wizzardStep?(Object(n["g"])(),Object(n["c"])("button",{key:3,onClick:e[10]||(e[10]=function(e){return t.showCartModal=!1}),class:"button button--primary",textContent:Object(n["j"])(t.strings.close)},null,8,["textContent"])):Object(n["d"])("",!0)])])]))])],2)])}var x=r("1da1"),_=(r("96cf"),r("c740"),r("4de4"),r("caad"),r("2532"),r("159b"),r("b64b"),r("d3b7"),r("a15b"),{key:0,class:"card-label bg-primary text-white"}),y={class:"card__image"},w={class:"card__content"},k={class:"card__footer"},S={class:"card__actions"},M={class:"card__supplemental"},z=Object(n["f"])("em",{class:"material-icons"},"add_shopping_cart",-1);function P(t,e,r,c,o,s){var u;return Object(n["g"])(),Object(n["c"])("div",{class:["card bg-white card--image-left",{"card--shadow":r.attributes.dropShadow,"card--image-left":"list"===r.attributes.style,"card--image-top":"card"===r.attributes.style}]},[r.attributes.showCategory?(Object(n["g"])(),Object(n["c"])("span",_,[r.product.categories?(Object(n["g"])(),Object(n["c"])("span",{key:0,textContent:Object(n["j"])(0!=r.product.categories.length?r.product.categories[0].name:"")},null,8,["textContent"])):Object(n["d"])("",!0)])):Object(n["d"])("",!0),Object(n["f"])("div",y,[Object(n["f"])("img",{src:null===(u=r.product.images)||void 0===u?void 0:u.large},null,8,["src"])]),Object(n["f"])("div",w,[Object(n["f"])("h5",{class:"card__title",textContent:Object(n["j"])(r.product.title.rendered)},null,8,["textContent"]),Object(n["f"])("p",{class:"card__text",innerHTML:r.product.excerpt.rendered,style:{overflow:"hidden"}},null,8,["innerHTML"]),Object(n["f"])("div",k,[Object(n["f"])("div",S,[Object(n["f"])("a",{class:"button button--link button--primary",onClick:e[1]||(e[1]=function(e){return t.$emit("details",e,r.product.id)})},"Details")]),Object(n["f"])("div",M,[Object(n["f"])("span",{class:"button button--link button--pop button--gray button--icon",onClick:e[2]||(e[2]=Object(n["n"])((function(e){return t.$emit("select",e,r.product.id)}),["stop"]))},[z])])])])],2)}var L={name:"ProductCard",props:{product:Object,attributes:Object,selected:String}};L.render=P;var T=L,D={class:"modal modal--fullscreen modal--open"},U={class:"modal__dialog"},I={class:"modal__header"},H={class:"modal__title"},V={class:"modal__content"},q=Object(n["f"])("hr",null,null,-1),R={class:"button-group button-group--right"},E={class:"number-picker"},$=Object(n["f"])("em",{class:"material-icons"},"shopping_cart",-1);function B(t,e,r,c,o,s){return Object(n["g"])(),Object(n["c"])("div",D,[Object(n["f"])("div",U,[Object(n["f"])("div",I,[Object(n["f"])("img",{src:r.product.images.full,class:"object-cover w-full",style:{height:"30vh"}},null,8,["src"]),Object(n["f"])("div",H,[Object(n["f"])("h2",{textContent:Object(n["j"])(r.product.title.rendered),class:""},null,8,["textContent"])]),Object(n["f"])("button",{class:"modal__close",onClick:e[1]||(e[1]=function(e){return t.$emit("close")})})]),Object(n["f"])("div",V,[Object(n["f"])("div",{class:"my-8",innerHTML:r.product.content.rendered},null,8,["innerHTML"]),q,Object(n["f"])("div",R,[Object(n["f"])("span",E,[Object(n["f"])("button",{onClick:e[2]||(e[2]=Object(n["n"])((function(t){return r.product.cart--}),["stop"])),disabled:r.product.cart<1?"":t.disabled},null,8,["disabled"]),Object(n["m"])(Object(n["f"])("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=function(t){return r.product.cart=t})},null,512),[[n["l"],r.product.cart]]),Object(n["f"])("button",{onClick:e[4]||(e[4]=Object(n["n"])((function(t){return r.product.cart++}),["stop"])),disabled:r.product.cart>50?"":t.disabled},null,8,["disabled"])]),Object(n["f"])("span",{class:"button button--primary button--icon button--pop",onClick:e[5]||(e[5]=Object(n["n"])((function(e){return t.$emit("select",e,r.product.id)}),["stop"]))},[$])])])])])}var J={name:"ProductDetails",props:{product:Object,attributes:Object,selected:String,strings:Object}};J.render=B;var N=J,A={class:"grid xl:grid--columns-2 grid--gap-12"},W={class:"hidden xl:show"},X={class:"list"},F={class:"list__content"},G={class:"list__title"},K={class:"count"},Q=Object(n["e"])("x"),Y={class:"form"},Z={class:"checkbox__label",for:"consent"};function tt(t,e,r,c,o,s){return Object(n["g"])(),Object(n["c"])("div",A,[Object(n["f"])("div",W,[Object(n["f"])("ul",X,[(Object(n["g"])(!0),Object(n["c"])(n["a"],null,Object(n["h"])(r.cart,(function(t,e){return Object(n["g"])(),Object(n["c"])("li",{class:"list__item",key:e},[Object(n["f"])("img",{class:"list__image",src:r.products[t.index].images.thumbnail},null,8,["src"]),Object(n["f"])("div",F,[Object(n["f"])("div",G,[Object(n["f"])("b",{textContent:Object(n["j"])(r.products[t.index].title.rendered)},null,8,["textContent"]),""!=r.products[t.index].excerpt.rendered?(Object(n["g"])(),Object(n["c"])("span",{key:0,class:"description",innerHTML:r.products[t.index].excerpt.rendered},null,8,["innerHTML"])):Object(n["d"])("",!0)])]),Object(n["f"])("div",K,[Object(n["f"])("b",{textContent:Object(n["j"])(t.count)},null,8,["textContent"]),Q])])})),128))])]),Object(n["f"])("div",null,[Object(n["f"])("form",Y,[Object(n["f"])("div",{class:["form__group input input--half",{error:r.user.forename.error}]},[Object(n["f"])("label",{textContent:Object(n["j"])(r.strings.forename)},null,8,["textContent"]),Object(n["m"])(Object(n["f"])("input",{class:"form__input","onUpdate:modelValue":e[1]||(e[1]=function(t){return r.user.forename.value=t}),type:"text",required:""},null,512),[[n["l"],r.user.forename.value]]),r.user.forename.error?(Object(n["g"])(),Object(n["c"])("span",{key:0,class:"form__error",textContent:Object(n["j"])(r.user.forename.msg)},null,8,["textContent"])):Object(n["d"])("",!0)],2),Object(n["f"])("div",{class:["form__group input input--half",{error:r.user.surname.error}]},[Object(n["f"])("label",{textContent:Object(n["j"])(r.strings.surname)},null,8,["textContent"]),Object(n["m"])(Object(n["f"])("input",{class:"form__input","onUpdate:modelValue":e[2]||(e[2]=function(t){return r.user.surname.value=t}),type:"text",required:""},null,512),[[n["l"],r.user.surname.value]]),r.user.surname.error?(Object(n["g"])(),Object(n["c"])("span",{key:0,class:"form__error",textContent:Object(n["j"])(r.user.surname.msg)},null,8,["textContent"])):Object(n["d"])("",!0)],2),Object(n["f"])("div",{class:["form__group input",{error:r.user.email.error}]},[Object(n["f"])("label",{textContent:Object(n["j"])(r.strings.email)},null,8,["textContent"]),Object(n["m"])(Object(n["f"])("input",{class:"form__input","onUpdate:modelValue":e[3]||(e[3]=function(t){return r.user.email.value=t}),type:"text",required:""},null,512),[[n["l"],r.user.email.value]]),r.user.email.error?(Object(n["g"])(),Object(n["c"])("span",{key:0,class:"form__error",textContent:Object(n["j"])(r.user.email.msg)},null,8,["textContent"])):Object(n["d"])("",!0)],2),Object(n["f"])("div",{class:["form__group input",{error:r.user.address.error}]},[Object(n["f"])("label",{textContent:Object(n["j"])(r.strings.address)},null,8,["textContent"]),Object(n["m"])(Object(n["f"])("input",{class:"form__input","onUpdate:modelValue":e[4]||(e[4]=function(t){return r.user.address.value=t}),type:"text",required:""},null,512),[[n["l"],r.user.address.value]]),r.user.address.error?(Object(n["g"])(),Object(n["c"])("span",{key:0,class:"form__error",textContent:Object(n["j"])(r.user.address.msg)},null,8,["textContent"])):Object(n["d"])("",!0)],2),Object(n["f"])("div",{class:["form__group input",{error:r.user.zip.error}]},[Object(n["f"])("label",{textContent:Object(n["j"])(r.strings.zip)},null,8,["textContent"]),Object(n["m"])(Object(n["f"])("input",{class:"form__input","onUpdate:modelValue":e[5]||(e[5]=function(t){return r.user.zip.value=t}),type:"text",required:""},null,512),[[n["l"],r.user.zip.value]]),r.user.zip.error?(Object(n["g"])(),Object(n["c"])("span",{key:0,class:"form__error",textContent:Object(n["j"])(r.user.zip.msg)},null,8,["textContent"])):Object(n["d"])("",!0)],2),Object(n["f"])("div",{class:["form__group input",{error:r.user.city.error}]},[Object(n["f"])("label",{textContent:Object(n["j"])(r.strings.city)},null,8,["textContent"]),Object(n["m"])(Object(n["f"])("input",{class:"form__input","onUpdate:modelValue":e[6]||(e[6]=function(t){return r.user.city.value=t}),type:"text",required:""},null,512),[[n["l"],r.user.city.value]]),r.user.city.error?(Object(n["g"])(),Object(n["c"])("span",{key:0,class:"form__error",textContent:Object(n["j"])(r.user.city.msg)},null,8,["textContent"])):Object(n["d"])("",!0)],2),Object(n["f"])("div",{class:["form__group textarea",{error:r.user.comment.error}]},[Object(n["f"])("label",{textContent:Object(n["j"])(r.strings.comment)},null,8,["textContent"]),Object(n["m"])(Object(n["f"])("textarea",{class:"form__textarea","onUpdate:modelValue":e[7]||(e[7]=function(t){return r.user.comment.value=t})},null,512),[[n["l"],r.user.comment.value]]),r.user.comment.error?(Object(n["g"])(),Object(n["c"])("span",{key:0,class:"form__error",textContent:Object(n["j"])(r.user.comment.msg)},null,8,["textContent"])):Object(n["d"])("",!0)],2),Object(n["f"])("div",{class:["form__group checkbox",{error:r.user.forename.error}]},[Object(n["f"])("label",Z,[Object(n["m"])(Object(n["f"])("input",{"onUpdate:modelValue":e[8]||(e[8]=function(t){return r.user.consent.value=t}),name:"consent",type:"checkbox",required:""},null,512),[[n["k"],r.user.consent.value]]),Object(n["f"])("div",{innerHTML:r.strings.consent},null,8,["innerHTML"])]),r.user.consent.error?(Object(n["g"])(),Object(n["c"])("span",{key:0,class:"form__error",textContent:Object(n["j"])(r.user.consent.msg)},null,8,["textContent"])):Object(n["d"])("",!0)],2)])])])}var et={name:"Checkout",model:{prop:"user",event:"change"},props:{products:Object,cart:Object,user:Object,strings:Object}};et.render=tt;var rt=et,nt={class:"list"},ct={class:"list__content"},ot={class:"list__controls"},st={class:"number-picker"},ut=Object(n["f"])("em",{class:"material-icons"},"delete",-1);function at(t,e,r,c,o,s){return Object(n["g"])(),Object(n["c"])("div",null,[Object(n["f"])("ul",nt,[(Object(n["g"])(!0),Object(n["c"])(n["a"],null,Object(n["h"])(r.cart,(function(t,e){return Object(n["g"])(),Object(n["c"])("li",{class:"list__item",key:e},[Object(n["f"])("img",{class:"list__image",src:r.products[t.index].images.thumbnail},null,8,["src"]),Object(n["f"])("div",ct,[Object(n["f"])("div",{class:"list__title",textContent:Object(n["j"])(r.products[t.index].title.rendered)},null,8,["textContent"]),""!=r.products[t.index].excerpt.rendered?(Object(n["g"])(),Object(n["c"])("div",{key:0,class:"list__subtitle",innerHTML:r.products[t.index].excerpt.rendered},null,8,["innerHTML"])):Object(n["d"])("",!0)]),Object(n["f"])("div",ot,[Object(n["f"])("div",st,[Object(n["f"])("button",{onClick:Object(n["n"])((function(e){return t.count--}),["stop"])},null,8,["onClick"]),Object(n["m"])(Object(n["f"])("input",{type:"text","onUpdate:modelValue":function(e){return t.count=e}},null,8,["onUpdate:modelValue"]),[[n["l"],t.count]]),Object(n["f"])("button",{onClick:Object(n["n"])((function(e){return t.count++}),["stop"])},null,8,["onClick"])]),Object(n["f"])("a",{class:"button button--link button--icon button--gray hidden lg:show",onClick:function(t){return s.removeItem(e)}},[ut],8,["onClick"])])])})),128))])])}r("a434");var it={name:"Cart",props:{products:Object,attributes:Object,cart:Object},methods:{removeItem:function(t){this.cart.splice(t,1)}}};it.render=at;var lt=it,dt=r("2ef0"),bt=r.n(dt),jt=window.expose_vuejs,Ot={name:"App",components:{ProductCard:T,ProductDetails:N,Cart:lt,Checkout:rt},data:function(){return{attributes:window.productSettings?window.productSettings:{columnsLarge:0,columnsMedium:0,columnsSmall:1,dropShadow:!1,excerptLength:20,order:"desc",orderBy:"date",selectedCategory:"0",selectedTags:[],showCategory:!0,showFilter:!1,showImages:!0,showSearchbar:!1,style:"list",textAlignment:"left"},showProductModal:!1,currentProduct:-1,showCartModal:!1,showCartList:!1,showCheckout:!1,showResult:!1,wizzardStep:1,processingCheckout:!1,products:[{title:""}],categories:[],cart:[],strings:[],selectedCategory:0,user:{title:{value:"",error:!1,msg:""},forename:{value:"",error:!1,msg:""},surname:{value:"",error:!1,msg:""},email:{value:"",error:!1,msg:""},address:{value:"",error:!1,msg:""},zip:{value:"",error:!1,msg:""},city:{value:"",error:!1,msg:""},comment:{value:"",error:!1,msg:""},consent:{value:"",error:!1,msg:""}},success:!1}},methods:{addToCart:function(t,e){var r=bt.a.findIndex(this.products,(function(t){return t.id==e})),n=(this.products[r],bt.a.findIndex(this.cart,(function(t){return t.index==r})));if(-1!=n)return this.cart[n].count+=this.products[r].cart,void(this.products[r].cart=1);this.cart.push({index:r,id:e,count:this.products[r].cart}),this.products[r].cart=1,this.currentProduct=-1},showDetails:function(t,e){this.currentProduct=bt.a.findIndex(this.products,(function(t){return t.id==e}))},filteredShopItems:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(0!=this.selectedCategory||0!=t){t=0==t?this.selectedCategory:t;var e=bt.a.filter(this.products,(function(e){return!!e.category&&e.category.term_id==t}));return e}return this.products},filteredCategories:function(){var t=this.attributes.selectedCategories,e=bt.a.filter(this.categories,(function(e){return 0!=e.count&&!(t.length>0&&!t.includes(e.id))}));return e},backPressed:function(t){return t.preventDefault(),t.stopPropagation(),this.showProductModal?(window.history.forward(),void(this.showProductModal=!1)):this.showCartModal&&this.showCartList?(window.history.forward(),this.showCartModal=!1,void(this.showCartList=!1)):this.showCartModal&&this.showCheckout?(window.history.forward(),this.showCartModal=!0,void(this.showCheckout=!1)):this.success&&this.showCartModal?(window.history.forward(),void(this.showCartModal=!1)):void 0},countCartItems:function(){var t=0;return this.cart.forEach((function(e){t+=e.count})),t},order:function(){var t=this;return Object(x["a"])(regeneratorRuntime.mark((function e(){var r,n,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.processingCheckout=!0,r=t.user,Object.keys(r).forEach((function(t){r[t]["error"]=!1,r[t]["msg"]=""})),n={method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json","X-WP-Nonce":jt.nonce},body:JSON.stringify({user:r,cart:t.cart})},c="".concat(jt.root,"expose/v2/order"),fetch(c,n).then((function(t){return t.json()})).then((function(e){"invalid"==e.status&&(t.user=e.data,t.processingCheckout=!1),"ok"==e.status&&(t.success=!0,t.showCheckout=!1,t.processingCheckout=!1,t.cart=[],t.wizzardStep=3)}));case 6:case"end":return e.stop()}}),e)})))()}},created:function(){var t=this;return Object(x["a"])(regeneratorRuntime.mark((function e(){var r,n,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.strings=jt.strings,r={headers:{"X-WP-Nonce":jt.nonce}},n="".concat(jt.root,"wp/v2/ctx-products?_embed&per_page=100"),0!=t.attributes.selectedCategories.length&&(n+="&product-categories="+t.attributes.selectedCategories.join(",")),fetch(n,r).then((function(t){return t.json()})).then((function(e){t.products=e,console.log(e)})),c="".concat(jt.root,"wp/v2/product-categories"),fetch(c,r).then((function(t){return t.json()})).then((function(e){t.categories=e}));case 9:case"end":return e.stop()}}),e)})))()},mounted:function(){document.addEventListener("popstate",this.backPressed,!1)},beforeDestroy:function(){document.removeEventListener("popstate",this.backPressed)}};Ot.render=v;var pt=Ot;Object(n["b"])(pt).mount("#app")}});
//# sourceMappingURL=app.js.map
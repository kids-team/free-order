(window.webpackJsonp_ctx_products=window.webpackJsonp_ctx_products||[]).push([[1],{8:function(e,t,n){},9:function(e,t,n){}}]),function(e){function t(t){for(var l,r,a=t[0],s=t[1],i=t[2],p=0,u=[];p<a.length;p++)r=a[p],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&u.push(o[r][0]),o[r]=0;for(l in s)Object.prototype.hasOwnProperty.call(s,l)&&(e[l]=s[l]);for(m&&m(t);u.length;)u.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],l=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(l=!1)}l&&(c.splice(t--,1),e=r(r.s=n[0]))}return e}var l={},o={0:0},c=[];function r(t){if(l[t])return l[t].exports;var n=l[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=l,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)r.d(n,l,function(t){return e[t]}.bind(null,l));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var a=window.webpackJsonp_ctx_products=window.webpackJsonp_ctx_products||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var i=0;i<a.length;i++)t(a[i]);var m=s;c.push([10,1]),n()}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.i18n},function(e){e.exports=JSON.parse('{"name":"ctx-products/shop","category":"widgets","attributes":{"columnsSmall":{"type":"number","default":1},"columnsMedium":{"type":"number","default":2},"columnsLarge":{"type":"number","default":3},"showImages":{"type":"boolean","default":true},"dropShadow":{"type":"boolean","default":false},"showCategory":{"type":"boolean","default":true},"sortByCategory":{"type":"boolean","default":false},"showFilter":{"type":"boolean","default":false},"showSearchbar":{"type":"boolean","default":false},"style":{"type":"string","default":"card"},"order":{"type":"string","default":"desc"},"orderBy":{"type":"string","default":"date"},"selectedCategories":{"type":"array","default":[]},"selectedTags":{"type":"array","default":[]},"excerptLength":{"type":"number","default":20},"textAlignment":{"type":"string","default":"left"}}}')},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=window.wp.data},function(e,t){e.exports=window.wp.coreData},function(e,t){e.exports=window.wp.blocks},,,function(e,t,n){"use strict";n.r(t),n.d(t,"registerBlocks",(function(){return j}));var l={};n.r(l),n.d(l,"name",(function(){return b})),n.d(l,"category",(function(){return h})),n.d(l,"metadata",(function(){return d})),n.d(l,"settings",(function(){return O}));var o=n(7),c=n(0),r=n(4),a=n(1);let s=[];s.shop=Object(c.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},Object(c.createElement)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(c.createElement)("path",{d:"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"})),s.mini=Object(c.createElement)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2},Object(c.createElement)("path",{d:"M30 24v2H2.429v-2h27.57zm0-10v2H2.429v-2h27.57zm0-10v2H2.429V4h27.57z",fillRule:"nonzero"}),Object(c.createElement)("path",{fill:"#919191",fillRule:"nonzero",d:"M2.429 7h24.043v3H2.429zM2.429 17h24.043v3H2.429zM2.429 27h24.043v3H2.429z"})),s.list=Object(c.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"2",clipRule:"evenodd",viewBox:"0 0 32 32"},Object(c.createElement)("path",{d:"M30 24v2H10v-2h20zm0-10v2H10v-2h20zm0-10v2H10V4h20z"}),Object(c.createElement)("circle",{cx:"4.773",cy:"7",r:"3"}),Object(c.createElement)("circle",{cx:"4.773",cy:"7",r:"3",transform:"translate(0 10)"}),Object(c.createElement)("circle",{cx:"4.773",cy:"7",r:"3",transform:"translate(0 20)"}),Object(c.createElement)("path",{fill:"#919191",d:"M10 7H26.472V10H10z"}),Object(c.createElement)("path",{fill:"#919191",d:"M10 7H26.472V10H10z",transform:"translate(0 10)"}),Object(c.createElement)("path",{fill:"#919191",d:"M10 7H26.472V10H10z",transform:"translate(0 20)"})),s.cards=Object(c.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"2",clipRule:"evenodd",viewBox:"0 0 32 32"}," ",Object(c.createElement)("path",{fill:"#E5E5E5",d:"M2.274 1.794H10.702000000000002V16.772H2.274z",transform:"matrix(1.52569 0 0 1.59368 -1.304 1.206)"})," ",Object(c.createElement)("path",{d:"M10 24H30V26H10z",transform:"matrix(.4577 0 0 .96245 -.566 -6.375)"})," ",Object(c.createElement)("circle",{cx:"4.773",cy:"7",r:"3",transform:"translate(1.306 -.773) scale(1.52569)"})," ",Object(c.createElement)("path",{fill:"#919191",d:"M10 7H26.472V10H10z",transform:"matrix(.55574 0 0 1.52569 -1.546 10.482)"})," ",Object(c.createElement)("path",{fill:"#E5E5E5",d:"M2.274 1.794H10.702000000000002V16.772H2.274z",transform:"matrix(1.52569 0 0 1.59368 13.507 1.206)"})," ",Object(c.createElement)("path",{d:"M10 24H30V26H10z",transform:"matrix(.4577 0 0 .96245 14.245 -6.375)"})," ",Object(c.createElement)("circle",{cx:"4.773",cy:"7",r:"3",transform:"translate(16.117 -.773) scale(1.52569)"})," ",Object(c.createElement)("path",{fill:"#919191",d:"M10 7H26.472V10H10z",transform:"matrix(.55574 0 0 1.52569 13.265 10.482)"})," ");var i=s,m=n(2),p=n(5),u=n(6),d=n(3);n(8);const{__:__}=wp.i18n,{name:b,category:h,attributes:f}=d,O={title:__("Expose","expose"),description:__("Shows a free shop","expose"),icon:i.shop,apiVersion:2,keywords:["expose",__("events","expose"),__("list","expose")],attributes:f,edit:function({attributes:e,setAttributes:t}){const{columnsSmall:n,columnsMedium:l,columnsLarge:o,showImages:s,showFilter:d,showSearchbar:b,sortByCategory:h,dropShadow:f,style:O,textAlignment:g,showCategory:j,excerptLength:w,selectedCategories:x,selectedTags:v}=e;console.log(e);const[y,E]=Object(c.useState)(x),_=Object(p.useSelect)(e=>{const{getEntityRecords:t}=e(u.store),n=t("taxonomy","product-categories",{hide_empty:!0});let l=[];return n?(n.map(e=>{l.push({id:e.id,name:e.name})}),l):l},[]),C=Object(p.useSelect)(e=>{const{getEntityRecords:t}=e(u.store);return t("taxonomy","product-tags",{hide_empty:!0})||null},[]);let H=[],k=[];null!==C&&(H=C.map(e=>e.name),k=v.map(e=>{let t=C.find(t=>t.id===e);return!(void 0===t||!t)&&t.name}));const z=Object(r.useBlockProps)({className:["columns-"+o,!!s&&"hasImage",!!f&&"hover","style-"+O,"text-"+g].filter(Boolean).join(" ")}),M=Object(c.createElement)(r.InspectorControls,null,Object(c.createElement)(a.PanelBody,{title:Object(m.__)("Data","expose"),initialOpen:!0},_.map((e,n)=>Object(c.createElement)(a.CheckboxControl,{label:e.name,key:n,onChange:n=>{((e,n)=>{var l=x;if(n&&!l.includes(e)&&l.push(e),!n&&l.includes(e)){const t=l.indexOf(e);l.splice(t,1)}t({selectedCategories:Array.from(l)}),E(Array.from(l))})(e.id,n)},checked:y.includes(e.id)})),Object(c.createElement)(a.FormTokenField,{label:Object(m.__)("Tags","expose"),value:k,suggestions:H,onChange:e=>{let n=[];e.map(e=>{const t=C.find(t=>t.name===e);void 0!==t&&n.push(t.id)}),t({selectedTags:n})},__experimentalExpandOnFocus:!0})),Object(c.createElement)(a.PanelBody,{title:Object(m.__)("Layout","expose"),initialOpen:!0},Object(c.createElement)(a.RangeControl,{label:Object(m.__)("Columns on small screens","expose"),max:6,min:1,help:Object(m.__)("eg. Smartphones","expose"),onChange:e=>{t({columnsSmall:e})},value:n}),Object(c.createElement)(a.RangeControl,{label:Object(m.__)("Columns on medium screens","expose"),max:6,min:1,help:Object(m.__)("Tablets and smaller screens","expose"),onChange:e=>{t({columnsMedium:e})},value:l}),Object(c.createElement)(a.RangeControl,{label:Object(m.__)("Columns on large screens","expose"),max:6,min:1,help:Object(m.__)("Desktop screens","expose"),onChange:e=>{t({columnsLarge:e})},value:o})),Object(c.createElement)(a.PanelBody,{title:Object(m.__)("Appearance","expose"),initialOpen:!0},Object(c.createElement)("label",{className:"components-base-control__label",htmlFor:"inspector-range-control-4"},Object(m.__)("Style","expose")),Object(c.createElement)("br",null),Object(c.createElement)("div",{className:"styleSelector"},Object(c.createElement)(a.Button,{onClick:()=>t({style:"mini"}),className:"mini"==O?"active":""},Object(c.createElement)(a.Icon,{size:"64",className:"icon",icon:i.mini}),Object(c.createElement)("div",null,Object(m.__)("Minimal","expose"))),Object(c.createElement)(a.Button,{onClick:()=>t({style:"list"}),className:"list"==O?"active":""},Object(c.createElement)(a.Icon,{size:"64",className:"icon",icon:i.list}),Object(c.createElement)("div",null,Object(m.__)("List","expose"))),Object(c.createElement)(a.Button,{onClick:()=>t({style:"cards"}),className:"cards"==O?"active":""},Object(c.createElement)(a.Icon,{size:"64",className:"icon",icon:i.cards}),Object(c.createElement)("div",null,Object(m.__)("Cards","expose")))),s&&Object(c.createElement)(c.Fragment,null,Object(c.createElement)(a.PanelRow,null,Object(c.createElement)(a.ToggleControl,{label:Object(m.__)("Show filter","expose"),checked:d,onChange:e=>t({showFilter:e})})),Object(c.createElement)(a.PanelRow,null,Object(c.createElement)(a.ToggleControl,{label:Object(m.__)("Show searchbar","expose"),checked:b,onChange:e=>t({showSearchbar:e})})),Object(c.createElement)(a.PanelRow,null,Object(c.createElement)(a.ToggleControl,{label:Object(m.__)("Show category","expose"),checked:j,onChange:e=>t({showCategory:e})})),Object(c.createElement)(a.PanelRow,null,Object(c.createElement)(a.ToggleControl,{label:Object(m.__)("Sort by category","expose"),checked:h,onChange:e=>t({sortByCategory:e})})),Object(c.createElement)(a.PanelRow,null,Object(c.createElement)(a.ToggleControl,{label:Object(m.__)("Drop shadow","expose"),checked:f,onChange:e=>t({dropShadow:e})}))),Object(c.createElement)(a.RangeControl,{label:Object(m.__)("Length of preview text","expose"),max:200,min:0,help:Object(m.__)("Number of words","expose"),onChange:e=>{t({excerptLength:e})},value:w})));return Object(c.createElement)(c.Fragment,null,M,Object(c.createElement)("div",z,Object(c.createElement)("div",{className:"components-placeholder is-large"},Object(c.createElement)("div",{className:"components-placeholder__label"},Object(c.createElement)("span",{className:"block-editor-block-icon has-colors"},Object(c.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},Object(c.createElement)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(c.createElement)("path",{d:"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"}))),Object(m.__)("Product Shop","expose")),Object(c.createElement)("div",{className:"components-placeholder__instructions"},Object(m.__)("See for settings in the inspector. The result can be seen in the frontend","expose")))))},save:()=>null};n(9);const g=e=>{if(!e)return;const{name:t,category:n,settings:l}=e;Object(o.registerBlockType)(t,{category:n,...l})},j=()=>{[l].forEach(g)};j()}]);
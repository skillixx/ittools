import{d as v,o as w,e as p,f as l,bc as y,E,a as N,i as m,g,x as V,w as b,F as C,r as P,l as F,W as A,y as $,aj as j,m as B,t as x,c as M}from"./index-RUWH5Roo.js";import{w as z}from"./defaults-wMf-rINs.js";import{i as S}from"./boolean-x-quVNGS.js";import{_ as R}from"./SpanCopyable.vue_vue_type_script_setup_true_lang-tRPkor--.js";import{_ as D}from"./Table-7S37BeYi.js";const O={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},T=l("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[l("path",{d:"M5 12h14"}),l("path",{d:"M5 12l6 6"}),l("path",{d:"M5 12l6-6"})],-1),W=[T],U=v({name:"ArrowLeft",render:function(i,c){return w(),p("svg",O,W)}}),G={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},X=l("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[l("path",{d:"M5 12h14"}),l("path",{d:"M13 18l6-6"}),l("path",{d:"M13 6l6 6"})],-1),q=[X],H=v({name:"ArrowRight",render:function(i,c){return w(),p("svg",G,q)}});var I;(function(){var u,i,c,d,k,_,f,n;n=function(e){var t,s,r,o;return t=(e&255<<24)>>>24,s=(e&255<<16)>>>16,r=(e&65280)>>>8,o=e&255,[t,s,r,o].join(".")},f=function(e){var t,s,r,o,a,h;for(t=[],r=o=0;o<=3&&e.length!==0;r=++o){if(r>0){if(e[0]!==".")throw new Error("Invalid IP");e=e.substring(1)}h=i(e),a=h[0],s=h[1],e=e.substring(s),t.push(a)}if(e.length!==0)throw new Error("Invalid IP");switch(t.length){case 1:if(t[0]>4294967295)throw new Error("Invalid IP");return t[0]>>>0;case 2:if(t[0]>255||t[1]>16777215)throw new Error("Invalid IP");return(t[0]<<24|t[1])>>>0;case 3:if(t[0]>255||t[1]>255||t[2]>65535)throw new Error("Invalid IP");return(t[0]<<24|t[1]<<16|t[2])>>>0;case 4:if(t[0]>255||t[1]>255||t[2]>255||t[3]>255)throw new Error("Invalid IP");return(t[0]<<24|t[1]<<16|t[2]<<8|t[3])>>>0;default:throw new Error("Invalid IP")}},c=function(e){return e.charCodeAt(0)},d=c("0"),_=c("a"),k=c("A"),i=function(e){var t,s,r,o,a;for(o=0,t=10,s="9",r=0,e.length>1&&e[r]==="0"&&(e[r+1]==="x"||e[r+1]==="X"?(r+=2,t=16):"0"<=e[r+1]&&e[r+1]<="9"&&(r++,t=8,s="7")),a=r;r<e.length;){if("0"<=e[r]&&e[r]<=s)o=o*t+(c(e[r])-d)>>>0;else if(t===16)if("a"<=e[r]&&e[r]<="f")o=o*t+(10+c(e[r])-_)>>>0;else if("A"<=e[r]&&e[r]<="F")o=o*t+(10+c(e[r])-k)>>>0;else break;else break;if(o>4294967295)throw new Error("too large");r++}if(r===a)throw new Error("empty octet");return[o,r]},u=function(){function e(t,s){var r,o,a;if(typeof t!="string")throw new Error("Missing `net' parameter");if(s||(a=t.split("/",2),t=a[0],s=a[1]),s||(s=32),typeof s=="string"&&s.indexOf(".")>-1){try{this.maskLong=f(s)}catch{throw new Error("Invalid mask: "+s)}for(r=o=32;o>=0;r=--o)if(this.maskLong===4294967295<<32-r>>>0){this.bitmask=r;break}}else if(s||s===0)this.bitmask=parseInt(s,10),this.maskLong=0,this.bitmask>0&&(this.maskLong=4294967295<<32-this.bitmask>>>0);else throw new Error("Invalid mask: empty");try{this.netLong=(f(t)&this.maskLong)>>>0}catch{throw new Error("Invalid net address: "+t)}if(!(this.bitmask<=32))throw new Error("Invalid mask for ip4: "+s);this.size=Math.pow(2,32-this.bitmask),this.base=n(this.netLong),this.mask=n(this.maskLong),this.hostmask=n(~this.maskLong),this.first=this.bitmask<=30?n(this.netLong+1):this.base,this.last=this.bitmask<=30?n(this.netLong+this.size-2):n(this.netLong+this.size-1),this.broadcast=this.bitmask<=30?n(this.netLong+this.size-1):void 0}return e.prototype.contains=function(t){return typeof t=="string"&&(t.indexOf("/")>0||t.split(".").length!==4)&&(t=new e(t)),t instanceof e?this.contains(t.base)&&this.contains(t.broadcast||t.last):(f(t)&this.maskLong)>>>0===(this.netLong&this.maskLong)>>>0},e.prototype.next=function(t){return t==null&&(t=1),new e(n(this.netLong+this.size*t),this.mask)},e.prototype.forEach=function(t){var s,r,o;for(o=f(this.first),r=f(this.last),s=0;o<=r;)t(n(o),o,s),s++,o++},e.prototype.toString=function(){return this.base+"/"+this.bitmask},e}(),I=u}).call(y);function J({ip:u}){const[i]=u.split(".").map(Number);if(i<128)return"A";if(i>127&&i<192)return"B";if(i>191&&i<224)return"C";if(i>223&&i<240)return"D";if(i>239&&i<256)return"E"}const K={key:0},Q={"font-bold":""},Y={key:1,"op-70":""},Z={"mt-3":"",flex:"","items-center":"","justify-between":""},st=v({__name:"ipv4-subnet-calculator",setup(u){const i=E("ipv4-subnet-calculator:ip","192.168.0.1/24"),c=n=>new I(n.trim()),d=N(()=>z(()=>c(i.value),void 0)),k=[{message:"We cannot parse this address, check the format",validator:n=>S(()=>c(n.trim()))}],_=[{label:"Netmask",getValue:n=>n.toString()},{label:"Network address",getValue:({base:n})=>n},{label:"Network mask",getValue:({mask:n})=>n},{label:"Network mask in binary",getValue:({bitmask:n})=>("1".repeat(n)+"0".repeat(32-n)).match(/.{8}/g)?.join(".")??""},{label:"CIDR notation",getValue:({bitmask:n})=>`/${n}`},{label:"Wildcard mask",getValue:({hostmask:n})=>n},{label:"Network size",getValue:({size:n})=>String(n)},{label:"First address",getValue:({first:n})=>n},{label:"Last address",getValue:({last:n})=>n},{label:"Broadcast address",getValue:({broadcast:n})=>n,undefinedFallback:"No broadcast address with this mask"},{label:"IP class",getValue:({base:n})=>J({ip:n}),undefinedFallback:"Unknown class type"}];function f({count:n=1}){const e=d.value?.next(n);e&&(i.value=e.toString())}return(n,e)=>{const t=$,s=D,r=j,o=B;return w(),p("div",null,[m(t,{value:g(i),"onUpdate:value":e[0]||(e[0]=a=>V(i)?i.value=a:null),label:"An IPv4 address with or without mask",placeholder:"The ipv4 address...","validation-rules":k,"mb-4":""},null,8,["value"]),g(d)?(w(),p("div",K,[m(s,null,{default:b(()=>[l("tbody",null,[(w(),p(C,null,P(_,({getValue:a,label:h,undefinedFallback:L})=>l("tr",{key:h},[l("td",Q,x(h),1),l("td",null,[a(g(d))?(w(),M(R,{key:0,value:a(g(d))},null,8,["value"])):(w(),p("span",Y,x(L),1))])])),64))])]),_:1}),l("div",Z,[m(o,{onClick:e[1]||(e[1]=a=>f({count:-1}))},{default:b(()=>[m(r,{component:g(U)},null,8,["component"]),F(" Previous block ")]),_:1}),m(o,{onClick:e[2]||(e[2]=a=>f({count:1}))},{default:b(()=>[F(" Next block "),m(r,{component:g(H)},null,8,["component"])]),_:1})])])):A("",!0)])}}});export{st as default};

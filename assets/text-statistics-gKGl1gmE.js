import{d as _,n as c,o as i,c as p,w as f,i as n,g as t,x as m,f as d,y as x,z as v}from"./index-RUWH5Roo.js";import{f as g}from"./convert-Q_O7o-7d.js";import{_ as h}from"./Statistic-MapEui-5.js";function b(o){return new TextEncoder().encode(o).buffer.byteLength}const B={"mt-5":"",flex:""},k=_({__name:"text-statistics",setup(o){const e=c("");return(y,a)=>{const s=x,l=h,u=v;return i(),p(u,null,{default:f(()=>[n(s,{value:t(e),"onUpdate:value":a[0]||(a[0]=r=>m(e)?e.value=r:null),multiline:"",placeholder:"Your text...",rows:"5"},null,8,["value"]),d("div",B,[n(l,{label:"Character count",value:t(e).length,"flex-1":""},null,8,["value"]),n(l,{label:"Word count",value:t(e)===""?0:t(e).split(/\s+/).length,"flex-1":""},null,8,["value"]),n(l,{label:"Line count",value:t(e)===""?0:t(e).split(/\r\n|\r|\n/).length,"flex-1":""},null,8,["value"]),n(l,{label:"Byte size",value:t(g)(t(b)(t(e))),"flex-1":""},null,8,["value"])])]),_:1})}}});export{k as default};

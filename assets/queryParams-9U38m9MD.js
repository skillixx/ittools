import{j as x,ck as R,cl as d,a9 as k,cm as p,b4 as _,q as j,a as M}from"./index-RUWH5Roo.js";const y=new WeakMap;function O(e,t,i={}){const{mode:n="replace",route:o=x(),router:s=R(),transform:l=a=>a}=i;y.has(s)||y.set(s,new Map);const c=y.get(s);let u=o.query[e];d(()=>{u=void 0});let m;const q=k((a,f)=>(m=f,{get(){return a(),l(u!==void 0?u:p(t))},set(r){u!==r&&(u=r===t||r===null?void 0:r,c.set(e,r===t||r===null?void 0:r),f(),_(()=>{if(c.size===0)return;const g=Object.fromEntries(c.entries());c.clear();const{params:b,query:h,hash:w}=o;s[p(n)]({params:b,query:{...h,...g},hash:w})}))}}));return j(()=>o.query[e],a=>{u=a,m()},{flush:"sync"}),q}const Q={number:{fromQuery:e=>Number(e),toQuery:e=>String(e)},string:{fromQuery:e=>e,toQuery:e=>e},boolean:{fromQuery:e=>e.toLowerCase()==="true",toQuery:e=>e?"true":"false"}};function z({name:e,defaultValue:t}){const n=Q[typeof t]??Q.string,o=O(e,n.toQuery(t));return M({get(){return n.fromQuery(o.value)},set(s){o.value=n.toQuery(s)}})}export{z as u};

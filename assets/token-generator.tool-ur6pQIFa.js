import{d as C,cH as $,v as N,o as B,e as S,i as t,w as a,f as v,g as e,x as u,l as g,t as k,y as T,m as j,z,D}from"./index-RUWH5Roo.js";import{c as I}from"./token-generator.service-eniy3vN3.js";import{u as _}from"./queryParams-9U38m9MD.js";import{c as L}from"./computedRefreshable-ycOEO3PX.js";import{_ as P}from"./Switch-WRDFeMib.js";import{_ as R}from"./FormItem-r7b9Vsvg.js";import{_ as E}from"./Form-iPZCubBp.js";import{_ as G}from"./Slider-gHJuX7Eh.js";import"./use-form-item-TRmJq47h.js";const H={flex:"","justify-center":""},Q={"mt-5":"",flex:"","justify-center":"","gap-3":""},q=C({__name:"token-generator.tool",setup(A){const s=_({name:"length",defaultValue:64}),p=_({name:"uppercase",defaultValue:!0}),m=_({name:"lowercase",defaultValue:!0}),i=_({name:"numbers",defaultValue:!0}),c=_({name:"symbols",defaultValue:!1}),{t:n}=$(),[d,w]=L(()=>I({length:s.value,withUppercase:p.value,withLowercase:m.value,withNumbers:i.value,withSymbols:c.value})),{copy:y}=N({source:d,text:n("tools.token-generator.copied")});return(F,l)=>{const f=P,r=R,x=E,h=G,U=T,b=j,V=z;return B(),S("div",null,[t(V,null,{default:a(()=>[t(x,{"label-placement":"left","label-width":"140"},{default:a(()=>[v("div",H,[v("div",null,[t(r,{label:e(n)("tools.token-generator.uppercase")},{default:a(()=>[t(f,{value:e(p),"onUpdate:value":l[0]||(l[0]=o=>u(p)?p.value=o:null)},null,8,["value"])]),_:1},8,["label"]),t(r,{label:e(n)("tools.token-generator.lowercase")},{default:a(()=>[t(f,{value:e(m),"onUpdate:value":l[1]||(l[1]=o=>u(m)?m.value=o:null)},null,8,["value"])]),_:1},8,["label"])]),v("div",null,[t(r,{label:e(n)("tools.token-generator.numbers")},{default:a(()=>[t(f,{value:e(i),"onUpdate:value":l[2]||(l[2]=o=>u(i)?i.value=o:null)},null,8,["value"])]),_:1},8,["label"]),t(r,{label:e(n)("tools.token-generator.symbols")},{default:a(()=>[t(f,{value:e(c),"onUpdate:value":l[3]||(l[3]=o=>u(c)?c.value=o:null)},null,8,["value"])]),_:1},8,["label"])])])]),_:1}),t(r,{label:`${e(n)("tools.token-generator.length")} (${e(s)})`,"label-placement":"left"},{default:a(()=>[t(h,{value:e(s),"onUpdate:value":l[4]||(l[4]=o=>u(s)?s.value=o:null),step:1,min:1,max:512},null,8,["value"])]),_:1},8,["label"]),t(U,{value:e(d),"onUpdate:value":l[5]||(l[5]=o=>u(d)?d.value=o:null),multiline:"",placeholder:e(n)("tools.token-generator.tokenPlaceholder"),readonly:"",rows:"3",autosize:"",class:"token-display"},null,8,["value","placeholder"]),v("div",Q,[t(b,{onClick:l[6]||(l[6]=o=>e(y)())},{default:a(()=>[g(k(e(n)("tools.token-generator.button.copy")),1)]),_:1}),t(b,{onClick:e(w)},{default:a(()=>[g(k(e(n)("tools.token-generator.button.refresh")),1)]),_:1},8,["onClick"])])]),_:1})])}}}),te=D(q,[["__scopeId","data-v-28f904d5"]]);export{te as default};

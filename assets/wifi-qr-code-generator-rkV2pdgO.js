import{n as c,q as F,x as d,a3 as u,d as N,o as g,c as W,w as A,f as w,i as p,g as l,l as S,W as E,e as U,X as q,y as B,m as H,z as K}from"./index-RUWH5Roo.js";import{b as L}from"./browser-aNGpbESk.js";import{a as V}from"./downloadBase64-huUpt_pN.js";import{_ as z}from"./Checkbox-H-fpNq37.js";import{_ as O}from"./ColorPicker-ALxBUX8L.js";import{_ as R}from"./FormItem-r7b9Vsvg.js";import{_ as Y}from"./Form-iPZCubBp.js";import"./index-O1gwgbXR.js";import"./___vite-browser-external_commonjs-proxy-mSx37lIv.js";import"./use-form-item-TRmJq47h.js";import"./Button-1OMZcLjR.js";import"./use-locale-lnR_tg7s.js";import"./is-browser-uAM6ylUV.js";import"./color-to-class-gJrROfcT.js";import"./InputGroup-mKvJcmdW.js";const Q=["MD5","POTP","GTC","TLS","IKEv2","SIM","AKA","AKA'","TTLS","PWD","LEAP","PSK","FAST","TEAP","EKE","NOOB","PEAP"],G=["None","MSCHAPV2"];function h(P){return P.replace(/([\\;,:"])/g,"\\$1")}function X(P){const{ssid:t,password:n,encryption:a,eapMethod:s,isHiddenSSID:m,eapAnonymous:_,eapIdentity:f,eapPhase2Method:i}=P;if(!t)return null;if(a==="nopass")return`WIFI:S:${h(t)};;`;if(a!=="WPA2-EAP"&&n)return`WIFI:S:${h(t)};T:${a};P:${h(n)};${m?"H:true":""};`;if(a==="WPA2-EAP"&&n&&s){if(!f&&!_||s==="PEAP"&&!i)return null;const v=_?"A:anon":`I:${h(f)}`,b=i!=="None"?`PH2:${i};`:"";return`WIFI:S:${h(t)};T:WPA2-EAP;P:${h(n)};E:${s};${b}${v};${m?"H:true":""};`}return null}function j({ssid:P,password:t,eapMethod:n,isHiddenSSID:a,eapAnonymous:s,eapIdentity:m,eapPhase2Method:_,color:{background:f,foreground:i},options:v}){const b=c(""),r=c("WPA");return F([P,t,r,n,a,s,m,_,f,i].filter(d),async()=>{const x=X({ssid:u(P),password:u(t),encryption:u(r),eapMethod:u(n),isHiddenSSID:u(a),eapAnonymous:u(s),eapIdentity:u(m),eapPhase2Method:u(_)});x&&(b.value=await L.toDataURL(u(x).trim(),{color:{dark:u(i),light:u(f),...v?.color},errorCorrectionLevel:"M",...v}))},{immediate:!0}),{qrcode:b,encryption:r}}const J={grid:"","grid-cols-1":"","gap-12":""},Z={class:"mb-6 flex flex-row items-center gap-2"},ee={key:2,class:"mb-6 flex flex-row items-center gap-2"},oe={key:0},le={flex:"","flex-col":"","items-center":"","gap-3":""},te=["src"],ge=N({__name:"wifi-qr-code-generator",setup(P){const t=c("#000000ff"),n=c("#ffffffff"),a=c(),s=c(),m=c(),_=c(!1),f=c(!1),i=c(),v=c(),{qrcode:b,encryption:r}=j({ssid:a,password:s,eapMethod:m,isHiddenSSID:_,eapAnonymous:f,eapIdentity:i,eapPhase2Method:v,color:{background:n,foreground:t},options:{width:1024}}),{download:x}=V({source:b,filename:"qr-code.png"});return(ne,o)=>{const y=q,k=B,I=z,$=O,T=R,C=Y,D=H,M=K;return g(),W(M,null,{default:A(()=>[w("div",J,[w("div",null,[p(y,{value:l(r),"onUpdate:value":o[0]||(o[0]=e=>d(r)?r.value=e:null),"mb-4":"",label:"Encryption method","default-value":"WPA","label-position":"left","label-width":"130px","label-align":"right",options:[{label:"No password",value:"nopass"},{label:"WPA/WPA2",value:"WPA"},{label:"WEP",value:"WEP"},{label:"WPA2-EAP",value:"WPA2-EAP"}]},null,8,["value"]),w("div",Z,[p(k,{value:l(a),"onUpdate:value":o[1]||(o[1]=e=>d(a)?a.value=e:null),"label-position":"left","label-width":"130px","label-align":"right",label:"SSID:",rows:"1",autosize:"",placeholder:"Your WiFi SSID...","mb-6":""},null,8,["value"]),p(I,{checked:l(_),"onUpdate:checked":o[2]||(o[2]=e=>d(_)?_.value=e:null)},{default:A(()=>[S(" Hidden SSID ")]),_:1},8,["checked"])]),l(r)!=="nopass"?(g(),W(k,{key:0,value:l(s),"onUpdate:value":o[3]||(o[3]=e=>d(s)?s.value=e:null),"label-position":"left","label-width":"130px","label-align":"right",label:"Password:",rows:"1",autosize:"",type:"password",placeholder:"Your WiFi Password...","mb-6":""},null,8,["value"])):E("",!0),l(r)==="WPA2-EAP"?(g(),W(y,{key:1,value:l(m),"onUpdate:value":o[4]||(o[4]=e=>d(m)?m.value=e:null),label:"EAP method","label-position":"left","label-width":"130px","label-align":"right",options:l(Q).map(e=>({label:e,value:e})),searchable:"","mb-4":""},null,8,["value","options"])):E("",!0),l(r)==="WPA2-EAP"?(g(),U("div",ee,[p(k,{value:l(i),"onUpdate:value":o[5]||(o[5]=e=>d(i)?i.value=e:null),"label-position":"left","label-width":"130px","label-align":"right",label:"Identity:",rows:"1",autosize:"",placeholder:"Your EAP Identity...","mb-6":""},null,8,["value"]),p(I,{checked:l(f),"onUpdate:checked":o[6]||(o[6]=e=>d(f)?f.value=e:null)},{default:A(()=>[S(" Anonymous? ")]),_:1},8,["checked"])])):E("",!0),l(r)==="WPA2-EAP"?(g(),W(y,{key:3,value:l(v),"onUpdate:value":o[7]||(o[7]=e=>d(v)?v.value=e:null),label:"EAP Phase 2 method","label-position":"left","label-width":"130px","label-align":"right",options:l(G).map(e=>({label:e,value:e})),searchable:"","mb-4":""},null,8,["value","options"])):E("",!0),p(C,{"label-width":"130","label-placement":"left"},{default:A(()=>[p(T,{label:"Foreground color:"},{default:A(()=>[p($,{value:l(t),"onUpdate:value":o[8]||(o[8]=e=>d(t)?t.value=e:null),modes:["hex"]},null,8,["value"])]),_:1}),p(T,{label:"Background color:"},{default:A(()=>[p($,{value:l(n),"onUpdate:value":o[9]||(o[9]=e=>d(n)?n.value=e:null),modes:["hex"]},null,8,["value"])]),_:1})]),_:1})]),l(b)?(g(),U("div",oe,[w("div",le,[w("img",{alt:"wifi-qrcode",src:l(b),width:"200"},null,8,te),p(D,{onClick:l(x)},{default:A(()=>[S(" Download qr-code ")]),_:1},8,["onClick"])])])):E("",!0)])]),_:1})}}});export{ge as default};

import{H as w,J as C,G as M,d as O,K as S,L as _,aO as P,n as k,aq as I,R as B,bG as x}from"./index-RUWH5Roo.js";import{f as L,a as R}from"./FormItem-r7b9Vsvg.js";const F=w("form",[C("inline",`
 width: 100%;
 display: inline-flex;
 align-items: flex-start;
 align-content: space-around;
 `,[w("form-item",{width:"auto",marginRight:"18px"},[M("&:last-child",{marginRight:0})])])]);var V=function(t,m,i,o){function h(s){return s instanceof i?s:new i(function(f){f(s)})}return new(i||(i=Promise))(function(s,f){function v(n){try{e(o.next(n))}catch(d){f(d)}}function r(n){try{e(o.throw(n))}catch(d){f(d)}}function e(n){n.done?s(n.value):h(n.value).then(v,r)}e((o=o.apply(t,m||[])).next())})};const q=Object.assign(Object.assign({},_.props),{inline:Boolean,labelWidth:[Number,String],labelAlign:String,labelPlacement:{type:String,default:"top"},model:{type:Object,default:()=>{}},rules:Object,disabled:Boolean,size:String,showRequireMark:{type:Boolean,default:void 0},requireMarkPlacement:String,showFeedback:{type:Boolean,default:!0},onSubmit:{type:Function,default:t=>{t.preventDefault()}},showLabel:{type:Boolean,default:void 0},validateMessages:Object}),W=O({name:"Form",props:q,setup(t){const{mergedClsPrefixRef:m}=S(t);_("Form","-form",F,P,t,m);const i={},o=k(void 0),h=r=>{const e=o.value;(e===void 0||r>=e)&&(o.value=r)};function s(r){return V(this,arguments,void 0,function*(e,n=()=>!0){return yield new Promise((d,j)=>{const y=[];for(const u of x(i)){const g=i[u];for(const a of g)a.path&&y.push(a.internalValidate(null,n))}Promise.all(y).then(u=>{const g=u.some(l=>!l.valid),a=[],c=[];u.forEach(l=>{var p,b;!((p=l.errors)===null||p===void 0)&&p.length&&a.push(l.errors),!((b=l.warnings)===null||b===void 0)&&b.length&&c.push(l.warnings)}),e&&e(a.length?a:void 0,{warnings:c.length?c:void 0}),g?j(a.length?a:void 0):d({warnings:c.length?c:void 0})})})})}function f(){for(const r of x(i)){const e=i[r];for(const n of e)n.restoreValidation()}}return I(L,{props:t,maxChildLabelWidthRef:o,deriveMaxChildLabelWidth:h}),I(R,{formItems:i}),Object.assign({validate:s,restoreValidation:f},{mergedClsPrefix:m})},render(){const{mergedClsPrefix:t}=this;return B("form",{class:[`${t}-form`,this.inline&&`${t}-form--inline`],onSubmit:this.onSubmit},this.$slots)}});export{W as _};

import{_ as a}from"./FormatTransformer.vue_vue_type_script_setup_true_lang-ha0_YGO-.js";import{l as r}from"./index-A1G9Z81i.js";import{w as i}from"./defaults-wMf-rINs.js";import{d as s,o as l,c as p}from"./index-RUWH5Roo.js";import"./TextareaCopyable-h-rtNdHc.js";import"./Copy-zRvnpAjd.js";import"./Scrollbar-GGzTmcH4.js";const u=`{
	"hello": [
		"world"
	]
}`,N=s({__name:"json-minify",setup(m){const t=o=>i(()=>JSON.stringify(r.parse(o),null,0),""),e=[{validator:o=>o===""||r.parse(o),message:"Provided JSON is not valid."}];return(o,f)=>{const n=a;return l(),p(n,{"input-label":"Your raw JSON","input-default":u,"input-placeholder":"Paste your raw JSON here...","output-label":"Minified version of your JSON","output-language":"json","input-validation-rules":e,transformer:t})}}});export{N as default};

function o({value:g,fromBase:t,toBase:e}){const c="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/".split(""),l=c.slice(0,t),u=c.slice(0,e);let n=g.split("").reverse().reduce((s,i,I)=>{if(!l.includes(i))throw new Error(`Invalid digit "${i}" for base ${t}.`);return s+=BigInt(l.indexOf(i))*BigInt(t)**BigInt(I)},0n),r="";for(;n>0;)r=u[Number(n%BigInt(e))]+r,n=(n-n%BigInt(e))/BigInt(e);return r||"0"}export{o as c};

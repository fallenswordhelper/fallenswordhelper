import{a as c,b as _,c as h,d as y,f as m}from"./chunk-ZYUPJWLY.js";var b=[];function z(t,i){return{subscribe:A(t,i).subscribe}}function A(t,i=c){let r,s=new Set;function f(n){if(y(t,n)&&(t=n,r)){let u=!b.length;for(let e of s)e[1](),b.push(e,t);if(u){for(let e=0;e<b.length;e+=2)b[e][0](b[e+1]);b.length=0}}}function a(n){f(n(t))}function l(n,u=c){let e=[n,u];return s.add(e),s.size===1&&(r=i(f)||c),n(t),()=>{s.delete(e),s.size===0&&r&&(r(),r=null)}}return{set:f,update:a,subscribe:l}}function j(t,i,r){let s=!Array.isArray(t),f=s?[t]:t,a=i.length<2;return z(r,l=>{let n=!1,u=[],e=0,d=c,g=()=>{if(e)return;d();let o=i(s?u[0]:u,l);a?l(o):d=h(o)?o:c},q=f.map((o,p)=>m(o,x=>{u[p]=x,e&=~(1<<p),n&&g()},()=>{e|=1<<p}));return n=!0,g(),function(){_(q),d(),n=!1}})}export{A as a,j as b};
//# sourceMappingURL=chunk-CDGBAOPB.js.map
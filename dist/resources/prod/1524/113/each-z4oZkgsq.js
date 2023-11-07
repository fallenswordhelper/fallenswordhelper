import{Y as e,b4 as t,b7 as s}from"./calfSystem-VUa7wwu1.js"
function n(e){return void 0!==e?.length?e:Array.from(e)}function o(e,t){e.d(1),t.delete(e.key)}function a(e,t){s(e,1,1,(()=>{t.delete(e.key)}))}function r(s,n,o,a,r,f,c,h,i,d,u,y){let l=s.length,k=f.length,g=l
const p={}
for(;g--;)p[s[g].key]=g
const m=[],w=new Map,b=new Map,M=[]
for(g=k;g--;){const e=y(r,f,g),t=o(e)
let s=c.get(t)
s?a&&M.push((()=>s.p(e,n))):(s=d(t,e),s.c()),w.set(t,m[g]=s),t in p&&b.set(t,Math.abs(g-p[t]))}const S=new Set,j=new Set
function v(e){t(e,1),e.m(h,u),c.set(e.key,e),u=e.first,k--}for(;l&&k;){const e=m[k-1],t=s[l-1],n=e.key,o=t.key
e===t?(u=e.first,l--,k--):w.has(o)?!c.has(n)||S.has(n)?v(e):j.has(o)?l--:b.get(n)>b.get(o)?(j.add(n),v(e)):(S.add(o),l--):(i(t,c),l--)}for(;l--;){const e=s[l]
w.has(e.key)||i(e,c)}for(;k;)v(m[k-1])
return e(M),m}export{o as d,n as e,a as o,r as u}
//# sourceMappingURL=each-z4oZkgsq.js.map

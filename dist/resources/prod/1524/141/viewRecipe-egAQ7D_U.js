import{n,aO as t,a8 as e,q as s,d as i,bN as a,$ as r,S as o,L as c,M as u,O as l,R as m,V as p,db as f,dc as d,a4 as v,P as g,T as b,U as h,W as x,b5 as $,be as w,Y as C,bf as k,bg as y,c_ as I,Q as F,bj as j,bk as q,bh as _,a2 as D,dd as E,bi as N,X as S,s as O,p as R,r as L,l as M,aL as Q,aK as T,y as A,i as P,c6 as B}from"./calfSystem-Blt4DbaE.js"
import{i as G}from"./inventing-7vukp4k2.js"
import{L as U}from"./LinkButton-CTQrdC0s.js"
import{i as z}from"./interceptSubmit-DTfrwUG-.js"
import{x as J}from"./xPath-BOrRKfjR.js"
import"./formToUrl-Bfgg_ioA.js"
function K(n){const[t,i]=e(s("tr:nth-child(2) td",n)).split("/").map((n=>parseInt(n,10)))
return{have:t,need:i}}function V(){return n(`#pCC td[background^="${t}ui/inventory/"]`).map((n=>n.parentElement.parentElement)).map(K).reduce(((n,t)=>Math.min(n,Math.floor(t.have/t.need))),1/0)}function W(n){return G({subcmd:"doinvent",recipe_id:n})}async function X(n){const t=await i({cmd:"inventing",subcmd:"doinvent",recipe_id:n})
return t?function(n){const t=a(n)
return t.includes("successfully")?{r:{item:{}},s:!0}:{e:{message:t},s:!1}}(t):{s:!1}}function Y(n){let t
return{c(){t=p("(max)")},m(n,e){m(n,t,e)},d(n){n&&l(t)}}}function H(n){let t,e,s,i,a,r,o
return{c(){t=h("div"),e=h("div"),e.textContent="INFORMATION",s=x(),i=h("div"),a=p(n[4]),$(e,"background","#8E8668"),$(e,"color","#FFF"),$(e,"font-size","smaller"),$(t,"border","2px solid #FFF"),$(t,"margin","10px auto"),$(t,"width","80%"),$(t,"background","#D3CFC1")},m(n,r){m(n,t,r),b(t,e),b(t,s),b(t,i),b(i,a),o=!0},p(n,t){(!o||16&t)&&g(a,n[4])},i(n){o||(n&&v((()=>{o&&(r||(r=f(t,d,{},!0)),r.run(1))})),o=!0)},o(n){n&&(r||(r=f(t,d,{},!1)),r.run(0)),o=!1},d(n){n&&l(t),n&&r&&r.end()}}}function Z(n){let t,e,s,i,a,r,o,c,u,f,d,v,O,R,L,M,Q,T,A,P,B,G,z,J,K,V,W,X,Z,nn,tn=n[1]+n[2]+""
r=new U({props:{$$slots:{default:[Y]},$$scope:{ctx:n}}}),r.$on("click",n[5])
let en=n[4]&&H(n)
return{c(){t=h("form"),e=h("label"),e.textContent="Select how many to quick invent",s=x(),i=h("input"),a=x(),N(r.$$.fragment),o=x(),c=h("input"),u=x(),f=h("div"),en&&en.c(),d=x(),v=h("div"),O=h("div"),R=x(),L=h("p"),M=p(tn),Q=p(" / "),T=p(n[0]),A=x(),P=h("div"),B=h("div"),G=p("Successes: "),z=p(n[1]),J=x(),K=h("div"),V=p("Failures: "),W=p(n[2]),S(e,"for","quick-invent-amount"),S(i,"type","number"),S(i,"id","quick-invent-amount"),S(i,"name","quick-invent-amount"),S(i,"min","0"),S(i,"step","1"),S(i,"class","custominput fshNumberInput"),i.required=!0,S(c,"class","custombutton"),S(c,"type","submit"),c.value="Quick Invent",$(c,"margin-left","8px"),S(O,"class","composing-progress-bar"),$(O,"background-position","right top"),$(O,"width",n[3]+"%"),$(O,"transition","width 0.4s ease-out"),$(O,"position","absolute"),$(O,"top","0px"),$(L,"position","relative"),S(v,"class","composing-progress"),$(v,"margin","0px auto"),$(v,"font-weight","bold"),$(v,"color","#fff"),$(v,"left","0px"),$(B,"display","inline-block"),$(B,"width","250px"),S(B,"class","fshQs fshGreen"),$(K,"display","inline-block"),$(K,"width","250px"),S(K,"class","fshQs fshRed"),$(P,"margin-top","36px"),S(t,"class","fshCenter"),$(t,"margin-top","12px")},m(l,p){m(l,t,p),b(t,e),b(t,s),b(t,i),F(i,n[0]),b(t,a),_(r,t,null),b(t,o),b(t,c),b(t,u),b(t,f),en&&en.m(f,null),b(f,d),b(f,v),b(v,O),b(v,R),b(v,L),b(L,M),b(L,Q),b(L,T),b(f,A),b(f,P),b(P,B),b(B,G),b(B,z),b(P,J),b(P,K),b(K,V),b(K,W),X=!0,Z||(nn=[D(i,"input",n[9]),D(t,"submit",E(n[6]))],Z=!0)},p(n,[t]){1&t&&I(i.value)!==n[0]&&F(i,n[0])
const e={}
2048&t&&(e.$$scope={dirty:t,ctx:n}),r.$set(e),n[4]?en?(en.p(n,t),16&t&&y(en,1)):(en=H(n),en.c(),y(en,1),en.m(f,d)):en&&(j(),k(en,1,1,(()=>{en=null})),q()),(!X||8&t)&&$(O,"width",n[3]+"%"),(!X||6&t)&&tn!==(tn=n[1]+n[2]+"")&&g(M,tn),(!X||1&t)&&g(T,n[0]),(!X||2&t)&&g(z,n[1]),(!X||4&t)&&g(W,n[2])},i(n){X||(y(r.$$.fragment,n),y(en),X=!0)},o(n){k(r.$$.fragment,n),k(en),X=!1},d(n){n&&l(t),w(r),en&&en.d(),Z=!1,C(nn)}}}function nn(n,t,e){let{max:s}=t,{recipeID:i}=t,a=1,o=0,c=0,u=0,l=""
return n.$$set=n=>{"max"in n&&e(7,s=n.max),"recipeID"in n&&e(8,i=n.recipeID)},[a,o,c,u,l,function(){e(0,a=s),O("inventing","maxInventButton")},async function(){if(O("inventing","quickInvent"),!a)return
e(1,o=0),e(2,c=0),e(3,u=0),e(4,l=""),Array(a).fill(i).reduce((async(n,t)=>{const s=await n
if(!s||!0===s.s){const n=await function(n){return r(W,X,n)}(t)
return n?.s?n.r.success_count>0?e(1,o+=1):e(2,c+=1):e(4,l=n?.e?.message??"Server Error"),e(3,u=(o+c)/a*100),n}return s}),Promise.resolve())},s,i,function(){a=I(this.value),e(0,a)}]}class tn extends o{constructor(n){super(),c(this,n,nn,Z,u,{max:7,recipeID:8})}}function en(){const n=s('input[name="recipe_id"]')
if(!n)return
const t=V(),e=R().lastElementChild
var i,a
!function(n){const t=n.insertRow(-1).insertCell(-1)
t.className="header",t.setAttribute("height","1")}(e),i={max:t,recipeID:n.value},a=function(n){const t=n.insertRow(-1).insertCell(-1)
return t.className="fshCenter",t}(e),new tn({props:i,target:a})}function sn(n){return`${Q}items${T}view&item_id=${n}`}function an(n,t){const e=function(n){if(!n)return
const t=L(/\/items\/(?<id>\d+)\.gif/,n.src)
return t||void 0}(t)
if(!e)return
const s=function(n){return M({href:sn(n),target:"_blank"})}(e)
A(s,n),P(s,n)}function rn(n){an(n,n)}function on(){!function(){const n=J('.//b[.="Target Invention"]/../../following-sibling::*[1]//img')
an(s("#pCC b"),n)}(),n('#pCC img[src*="/items/"]').forEach(rn)
const t=s('#pCC input[value="Invent"]')?.form
t&&z(t)}function cn(){B()&&(on(),en())}export{cn as default}
//# sourceMappingURL=viewRecipe-egAQ7D_U.js.map

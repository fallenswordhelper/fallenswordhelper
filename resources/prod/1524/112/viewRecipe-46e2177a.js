import{j as n,aI as t,a3 as e,q as s,d as i,bA as a,$ as r,S as o,J as c,K as u,L as l,M as m,ba as p,_ as f,N as d,aY as v,P as b,Q as g,T as h,bb as x,U as $,cX as w,cI as C,b5 as I,b8 as k,b7 as y,a0 as F,X as j,bc as q,Y as _,O as D,cY as E,b6 as N,n as S,cZ as A,p as L,y as M,i as P,r as Q,m as R,aH as T,aG as O,bW as Y}from"./calfSystem-4830a18d.js"
import{i as B}from"./inventing-2970054c.js"
import{L as G}from"./LinkButton-59368dc4.js"
import{i as K}from"./interceptSubmit-0ca01d03.js"
import{x as U}from"./xPath-13f1f0a9.js"
import"./formToUrl-824efe66.js"
function X(n){const[t,i]=e(s("tr:nth-child(2) td",n)).split("/").map((n=>parseInt(n,10)))
return{have:t,need:i}}function z(){return n(`#pCC td[background^="${t}ui/inventory/"]`).map((n=>n.parentElement.parentElement)).map(X).reduce(((n,t)=>Math.min(n,Math.floor(t.have/t.need))),1/0)}function H(n){return B({subcmd:"doinvent",recipe_id:n})}async function J(n){return function(n){const t=a(n)
return t.includes("successfully")?{r:{item:{}},s:!0}:{e:{message:t},s:!1}}(await i({cmd:"inventing",subcmd:"doinvent",recipe_id:n}))}function W(n){let t
return{c(){t=f("(max)")},m(n,e){b(n,t,e)},d(n){n&&j(t)}}}function Z(n){let t,e,s,i,a,r,o
return{c(){t=l("div"),e=l("div"),e.textContent="INFORMATION",s=m(),i=l("div"),a=f(n[4]),v(e,"background","#8E8668"),v(e,"color","#FFF"),v(e,"font-size","smaller"),v(t,"border","2px solid #FFF"),v(t,"margin","10px auto"),v(t,"width","80%"),v(t,"background","#D3CFC1")},m(n,r){b(n,t,r),g(t,e),g(t,s),g(t,i),g(i,a),o=!0},p(n,t){(!o||16&t)&&F(a,n[4])},i(n){o||(n&&D((()=>{o&&(r||(r=E(t,A,{},!0)),r.run(1))})),o=!0)},o(n){n&&(r||(r=E(t,A,{},!1)),r.run(0)),o=!1},d(n){n&&j(t),n&&r&&r.end()}}}function V(n){let t,e,s,i,a,r,o,c,u,D,E,S,A,L,M,P,Q,R,T,O,Y,B,K,U,X,z,H,J,V,nn,tn=n[1]+n[2]+""
r=new G({props:{$$slots:{default:[W]},$$scope:{ctx:n}}}),r.$on("click",n[5])
let en=n[4]&&Z(n)
return{c(){t=l("form"),e=l("label"),e.textContent="Select how many to quick invent",s=m(),i=l("input"),a=m(),p(r.$$.fragment),o=m(),c=l("input"),u=m(),D=l("div"),en&&en.c(),E=m(),S=l("div"),A=l("div"),L=m(),M=l("p"),P=f(tn),Q=f(" / "),R=f(n[0]),T=m(),O=l("div"),Y=l("div"),B=f("Successes: "),K=f(n[1]),U=m(),X=l("div"),z=f("Failures: "),H=f(n[2]),d(e,"for","quick-invent-amount"),d(i,"type","number"),d(i,"id","quick-invent-amount"),d(i,"name","quick-invent-amount"),d(i,"min","0"),d(i,"step","1"),d(i,"class","custominput fshNumberInput"),i.required=!0,d(c,"class","custombutton"),d(c,"type","submit"),c.value="Quick Invent",v(c,"margin-left","8px"),d(A,"class","composing-progress-bar"),v(A,"background-position","right top"),v(A,"width",n[3]+"%"),v(A,"transition","width 0.4s ease-out"),v(A,"position","absolute"),v(A,"top","0px"),v(M,"position","relative"),d(S,"class","composing-progress"),v(S,"margin","0px auto"),v(S,"font-weight","bold"),v(S,"color","#fff"),v(S,"left","0px"),v(Y,"display","inline-block"),v(Y,"width","250px"),d(Y,"class","fshQs fshGreen"),v(X,"display","inline-block"),v(X,"width","250px"),d(X,"class","fshQs fshRed"),v(O,"margin-top","36px"),d(t,"class","fshCenter"),v(t,"margin-top","12px")},m(l,m){b(l,t,m),g(t,e),g(t,s),g(t,i),h(i,n[0]),g(t,a),x(r,t,null),g(t,o),g(t,c),g(t,u),g(t,D),en&&en.m(D,null),g(D,E),g(D,S),g(S,A),g(S,L),g(S,M),g(M,P),g(M,Q),g(M,R),g(D,T),g(D,O),g(O,Y),g(Y,B),g(Y,K),g(O,U),g(O,X),g(X,z),g(X,H),J=!0,V||(nn=[$(i,"input",n[9]),$(t,"submit",w(n[6]))],V=!0)},p(n,[t]){1&t&&C(i.value)!==n[0]&&h(i,n[0])
const e={}
2048&t&&(e.$$scope={dirty:t,ctx:n}),r.$set(e),n[4]?en?(en.p(n,t),16&t&&I(en,1)):(en=Z(n),en.c(),I(en,1),en.m(D,E)):en&&(N(),k(en,1,1,(()=>{en=null})),y()),(!J||8&t)&&v(A,"width",n[3]+"%"),(!J||6&t)&&tn!==(tn=n[1]+n[2]+"")&&F(P,tn),(!J||1&t)&&F(R,n[0]),(!J||2&t)&&F(K,n[1]),(!J||4&t)&&F(H,n[2])},i(n){J||(I(r.$$.fragment,n),I(en),J=!0)},o(n){k(r.$$.fragment,n),k(en),J=!1},d(n){n&&j(t),q(r),en&&en.d(),V=!1,_(nn)}}}function nn(n,t,e){let{max:s}=t,{recipeID:i}=t,a=1,o=0,c=0,u=0,l=""
return n.$$set=n=>{"max"in n&&e(7,s=n.max),"recipeID"in n&&e(8,i=n.recipeID)},[a,o,c,u,l,function(){e(0,a=s),S("inventing","maxInventButton")},async function(){if(S("inventing","quickInvent"),!a)return
e(1,o=0),e(2,c=0),e(3,u=0),e(4,l=""),Array(a).fill(i).reduce((async(n,t)=>{const s=await n
if(!s||!0===s.s){const n=await function(n){return r(H,J,n)}(t)
return n?.s?n.r.success_count>0?e(1,o+=1):e(2,c+=1):e(4,l=n?.e?.message??"Server Error"),e(3,u=(o+c)/a*100),n}return s}),Promise.resolve())},s,i,function(){a=C(this.value),e(0,a)}]}class tn extends o{constructor(n){super(),c(this,n,nn,V,u,{max:7,recipeID:8})}}function en(){const n=s('input[name="recipe_id"]')
if(!n)return
const t=z(),e=L().lastElementChild
var i,a
!function(n){const t=n.insertRow(-1).insertCell(-1)
t.className="header",t.setAttribute("height","1")}(e),i={max:t,recipeID:n.value},a=function(n){const t=n.insertRow(-1).insertCell(-1)
return t.className="fshCenter",t}(e),new tn({props:i,target:a})}function sn(n){return`${T}items${O}view&item_id=${n}`}function an(n,t){const e=function(n){if(!n)return
const t=Q(/\/items\/(?<id>\d+)\.gif/,n.src)
return t||void 0}(t)
if(!e)return
const s=function(n){return R({href:sn(n),target:"_blank"})}(e)
M(s,n),P(s,n)}function rn(n){an(n,n)}function on(){!function(){const n=U('.//b[.="Target Invention"]/../../following-sibling::*[1]//img')
an(s("#pCC b"),n)}(),n('#pCC img[src*="/items/"]').forEach(rn)
const t=s('#pCC input[value="Invent"]')?.form
t&&K(t)}function cn(){Y()&&(on(),en())}export{cn as default}
//# sourceMappingURL=viewRecipe-46e2177a.js.map

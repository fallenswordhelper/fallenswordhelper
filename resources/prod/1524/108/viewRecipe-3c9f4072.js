import{j as n,aL as t,a5 as e,q as s,d as i,bD as a,$ as r,S as o,L as c,M as u,N as m,O as l,bf as p,a1 as f,P as d,a$ as v,R as b,T as g,V as h,bg as x,W as $,cY as w,cM as C,ba as k,bd as y,bc as I,a2 as F,Z as _,bh as j,_ as q,Q as D,cZ as E,bb as N,n as S,c_ as L,p as M,y as R,i as P,r as Q,m as T,aK as A,aJ as O,bZ as Z}from"./calfSystem-34913441.js"
import{i as B}from"./inventing-696ba7d6.js"
import{L as K}from"./LinkButton-aabd28ac.js"
import{i as z}from"./interceptSubmit-2c6bfafb.js"
import{x as G}from"./xPath-7cfd59cf.js"
import"./formToUrl-4ee925a6.js"
function J(n){const[t,i]=e(s("tr:nth-child(2) td",n)).split("/").map((n=>parseInt(n,10)))
return{have:t,need:i}}function U(){return n(`#pCC td[background^="${t}ui/inventory/"]`).map((n=>n.parentElement.parentElement)).map(J).reduce(((n,t)=>Math.min(n,Math.floor(t.have/t.need))),1/0)}function V(n){return B({subcmd:"doinvent",recipe_id:n})}async function W(n){return function(n){const t=a(n)
return t.includes("successfully")?{r:{item:{}},s:!0}:{e:{message:t},s:!1}}(await i({cmd:"inventing",subcmd:"doinvent",recipe_id:n}))}function Y(n){let t
return{c(){t=f("(max)")},m(n,e){b(n,t,e)},d(n){n&&_(t)}}}function H(n){let t,e,s,i,a,r,o
return{c(){t=m("div"),e=m("div"),e.textContent="INFORMATION",s=l(),i=m("div"),a=f(n[4]),v(e,"background","#8E8668"),v(e,"color","#FFF"),v(e,"font-size","smaller"),v(t,"border","2px solid #FFF"),v(t,"margin","10px auto"),v(t,"width","80%"),v(t,"background","#D3CFC1")},m(n,r){b(n,t,r),g(t,e),g(t,s),g(t,i),g(i,a),o=!0},p(n,t){(!o||16&t)&&F(a,n[4])},i(n){o||(n&&D((()=>{o&&(r||(r=E(t,L,{},!0)),r.run(1))})),o=!0)},o(n){n&&(r||(r=E(t,L,{},!1)),r.run(0)),o=!1},d(n){n&&_(t),n&&r&&r.end()}}}function X(n){let t,e,s,i,a,r,o,c,u,D,E,S,L,M,R,P,Q,T,A,O,Z,B,z,G,J,U,V,W,X,nn,tn=n[1]+n[2]+""
r=new K({props:{$$slots:{default:[Y]},$$scope:{ctx:n}}}),r.$on("click",n[5])
let en=n[4]&&H(n)
return{c(){t=m("form"),e=m("label"),e.textContent="Select how many to quick invent",s=l(),i=m("input"),a=l(),p(r.$$.fragment),o=l(),c=m("input"),u=l(),D=m("div"),en&&en.c(),E=l(),S=m("div"),L=m("div"),M=l(),R=m("p"),P=f(tn),Q=f(" / "),T=f(n[0]),A=l(),O=m("div"),Z=m("div"),B=f("Successes: "),z=f(n[1]),G=l(),J=m("div"),U=f("Failures: "),V=f(n[2]),d(e,"for","quick-invent-amount"),d(i,"type","number"),d(i,"id","quick-invent-amount"),d(i,"name","quick-invent-amount"),d(i,"min","0"),d(i,"step","1"),d(i,"class","custominput fshNumberInput"),i.required=!0,d(c,"class","custombutton"),d(c,"type","submit"),c.value="Quick Invent",v(c,"margin-left","8px"),d(L,"class","composing-progress-bar"),v(L,"background-position","right top"),v(L,"width",n[3]+"%"),v(L,"transition","width 0.4s ease-out"),v(L,"position","absolute"),v(L,"top","0px"),v(R,"position","relative"),d(S,"class","composing-progress"),v(S,"margin","0px auto"),v(S,"font-weight","bold"),v(S,"color","#fff"),v(S,"left","0px"),v(Z,"display","inline-block"),v(Z,"width","250px"),d(Z,"class","fshQs fshGreen"),v(J,"display","inline-block"),v(J,"width","250px"),d(J,"class","fshQs fshRed"),v(O,"margin-top","36px"),d(t,"class","fshCenter"),v(t,"margin-top","12px")},m(m,l){b(m,t,l),g(t,e),g(t,s),g(t,i),h(i,n[0]),g(t,a),x(r,t,null),g(t,o),g(t,c),g(t,u),g(t,D),en&&en.m(D,null),g(D,E),g(D,S),g(S,L),g(S,M),g(S,R),g(R,P),g(R,Q),g(R,T),g(D,A),g(D,O),g(O,Z),g(Z,B),g(Z,z),g(O,G),g(O,J),g(J,U),g(J,V),W=!0,X||(nn=[$(i,"input",n[9]),$(t,"submit",w(n[6]))],X=!0)},p(n,[t]){1&t&&C(i.value)!==n[0]&&h(i,n[0])
const e={}
2048&t&&(e.$$scope={dirty:t,ctx:n}),r.$set(e),n[4]?en?(en.p(n,t),16&t&&k(en,1)):(en=H(n),en.c(),k(en,1),en.m(D,E)):en&&(N(),y(en,1,1,(()=>{en=null})),I()),(!W||8&t)&&v(L,"width",n[3]+"%"),(!W||6&t)&&tn!==(tn=n[1]+n[2]+"")&&F(P,tn),(!W||1&t)&&F(T,n[0]),(!W||2&t)&&F(z,n[1]),(!W||4&t)&&F(V,n[2])},i(n){W||(k(r.$$.fragment,n),k(en),W=!0)},o(n){y(r.$$.fragment,n),y(en),W=!1},d(n){n&&_(t),j(r),en&&en.d(),X=!1,q(nn)}}}function nn(n,t,e){let{max:s}=t,{recipeID:i}=t,a=1,o=0,c=0,u=0,m=""
return n.$$set=n=>{"max"in n&&e(7,s=n.max),"recipeID"in n&&e(8,i=n.recipeID)},[a,o,c,u,m,function(){e(0,a=s),S("inventing","maxInventButton")},async function(){if(S("inventing","quickInvent"),!a)return
e(1,o=0),e(2,c=0),e(3,u=0),e(4,m=""),Array(a).fill(i).reduce((async(n,t)=>{const s=await n
if(!s||!0===s.s){const n=await function(n){return r(V,W,n)}(t)
return n?.s?n.r.success_count>0?e(1,o+=1):e(2,c+=1):e(4,m=n?.e?.message??"Server Error"),e(3,u=(o+c)/a*100),n}return s}),Promise.resolve())},s,i,function(){a=C(this.value),e(0,a)}]}class tn extends o{constructor(n){super(),c(this,n,nn,X,u,{max:7,recipeID:8})}}function en(){const n=s('input[name="recipe_id"]')
if(!n)return
const t=U(),e=M().lastElementChild
var i,a
!function(n){const t=n.insertRow(-1).insertCell(-1)
t.className="header",t.setAttribute("height","1")}(e),i={max:t,recipeID:n.value},a=function(n){const t=n.insertRow(-1).insertCell(-1)
return t.className="fshCenter",t}(e),new tn({props:i,target:a})}function sn(n){return`${A}items${O}view&item_id=${n}`}function an(n,t){const e=function(n){if(!n)return
const t=Q(/\/items\/(?<id>\d+)\.gif/,n.src)
return t||void 0}(t)
if(!e)return
const s=function(n){return T({href:sn(n),target:"_blank"})}(e)
R(s,n),P(s,n)}function rn(n){an(n,n)}function on(){!function(){const n=G('.//b[.="Target Invention"]/../../following-sibling::*[1]//img')
an(s("#pCC b"),n)}(),n('#pCC img[src*="/items/"]').forEach(rn)
const t=s('#pCC input[value="Invent"]')?.form
t&&z(t)}function cn(){Z()&&(on(),en())}export{cn as default}
//# sourceMappingURL=viewRecipe-3c9f4072.js.map

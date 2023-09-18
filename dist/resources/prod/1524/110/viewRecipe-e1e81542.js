import{j as n,aJ as t,a4 as e,q as s,d as i,bB as a,$ as r,S as o,K as c,L as u,M as m,N as l,bb as p,a0 as f,O as d,aZ as v,Q as b,R as g,U as h,bc as x,V as $,cX as w,cI as C,b6 as k,b9 as I,b8 as y,a1 as F,Y as j,bd as q,Z as D,P as E,cY as N,b7 as S,n as _,cZ as R,p as M,y as P,i as Q,r as A,m as B,aI as K,aH as L,bX as O}from"./calfSystem-929ac228.js"
import{i as T}from"./inventing-0ba8bb87.js"
import{L as Z}from"./LinkButton-abc10b8a.js"
import{i as U}from"./interceptSubmit-9ec04868.js"
import{x as X}from"./xPath-cf79d874.js"
import"./formToUrl-25253a60.js"
function Y(n){const[t,i]=e(s("tr:nth-child(2) td",n)).split("/").map((n=>parseInt(n,10)))
return{have:t,need:i}}function z(){return n(`#pCC td[background^="${t}ui/inventory/"]`).map((n=>n.parentElement.parentElement)).map(Y).reduce(((n,t)=>Math.min(n,Math.floor(t.have/t.need))),1/0)}function G(n){return T({subcmd:"doinvent",recipe_id:n})}async function H(n){return function(n){const t=a(n)
return t.includes("successfully")?{r:{item:{}},s:!0}:{e:{message:t},s:!1}}(await i({cmd:"inventing",subcmd:"doinvent",recipe_id:n}))}function J(n){let t
return{c(){t=f("(max)")},m(n,e){b(n,t,e)},d(n){n&&j(t)}}}function V(n){let t,e,s,i,a,r,o
return{c(){t=m("div"),e=m("div"),e.textContent="INFORMATION",s=l(),i=m("div"),a=f(n[4]),v(e,"background","#8E8668"),v(e,"color","#FFF"),v(e,"font-size","smaller"),v(t,"border","2px solid #FFF"),v(t,"margin","10px auto"),v(t,"width","80%"),v(t,"background","#D3CFC1")},m(n,r){b(n,t,r),g(t,e),g(t,s),g(t,i),g(i,a),o=!0},p(n,t){(!o||16&t)&&F(a,n[4])},i(n){o||(n&&E((()=>{o&&(r||(r=N(t,R,{},!0)),r.run(1))})),o=!0)},o(n){n&&(r||(r=N(t,R,{},!1)),r.run(0)),o=!1},d(n){n&&j(t),n&&r&&r.end()}}}function W(n){let t,e,s,i,a,r,o,c,u,E,N,_,R,M,P,Q,A,B,K,L,O,T,U,X,Y,z,G,H,W,nn,tn=n[1]+n[2]+""
r=new Z({props:{$$slots:{default:[J]},$$scope:{ctx:n}}}),r.$on("click",n[5])
let en=n[4]&&V(n)
return{c(){t=m("form"),e=m("label"),e.textContent="Select how many to quick invent",s=l(),i=m("input"),a=l(),p(r.$$.fragment),o=l(),c=m("input"),u=l(),E=m("div"),en&&en.c(),N=l(),_=m("div"),R=m("div"),M=l(),P=m("p"),Q=f(tn),A=f(" / "),B=f(n[0]),K=l(),L=m("div"),O=m("div"),T=f("Successes: "),U=f(n[1]),X=l(),Y=m("div"),z=f("Failures: "),G=f(n[2]),d(e,"for","quick-invent-amount"),d(i,"type","number"),d(i,"id","quick-invent-amount"),d(i,"name","quick-invent-amount"),d(i,"min","0"),d(i,"step","1"),d(i,"class","custominput fshNumberInput"),i.required=!0,d(c,"class","custombutton"),d(c,"type","submit"),c.value="Quick Invent",v(c,"margin-left","8px"),d(R,"class","composing-progress-bar"),v(R,"background-position","right top"),v(R,"width",n[3]+"%"),v(R,"transition","width 0.4s ease-out"),v(R,"position","absolute"),v(R,"top","0px"),v(P,"position","relative"),d(_,"class","composing-progress"),v(_,"margin","0px auto"),v(_,"font-weight","bold"),v(_,"color","#fff"),v(_,"left","0px"),v(O,"display","inline-block"),v(O,"width","250px"),d(O,"class","fshQs fshGreen"),v(Y,"display","inline-block"),v(Y,"width","250px"),d(Y,"class","fshQs fshRed"),v(L,"margin-top","36px"),d(t,"class","fshCenter"),v(t,"margin-top","12px")},m(m,l){b(m,t,l),g(t,e),g(t,s),g(t,i),h(i,n[0]),g(t,a),x(r,t,null),g(t,o),g(t,c),g(t,u),g(t,E),en&&en.m(E,null),g(E,N),g(E,_),g(_,R),g(_,M),g(_,P),g(P,Q),g(P,A),g(P,B),g(E,K),g(E,L),g(L,O),g(O,T),g(O,U),g(L,X),g(L,Y),g(Y,z),g(Y,G),H=!0,W||(nn=[$(i,"input",n[9]),$(t,"submit",w(n[6]))],W=!0)},p(n,[t]){1&t&&C(i.value)!==n[0]&&h(i,n[0])
const e={}
2048&t&&(e.$$scope={dirty:t,ctx:n}),r.$set(e),n[4]?en?(en.p(n,t),16&t&&k(en,1)):(en=V(n),en.c(),k(en,1),en.m(E,N)):en&&(S(),I(en,1,1,(()=>{en=null})),y()),(!H||8&t)&&v(R,"width",n[3]+"%"),(!H||6&t)&&tn!==(tn=n[1]+n[2]+"")&&F(Q,tn),(!H||1&t)&&F(B,n[0]),(!H||2&t)&&F(U,n[1]),(!H||4&t)&&F(G,n[2])},i(n){H||(k(r.$$.fragment,n),k(en),H=!0)},o(n){I(r.$$.fragment,n),I(en),H=!1},d(n){n&&j(t),q(r),en&&en.d(),W=!1,D(nn)}}}function nn(n,t,e){let{max:s}=t,{recipeID:i}=t,a=1,o=0,c=0,u=0,m=""
return n.$$set=n=>{"max"in n&&e(7,s=n.max),"recipeID"in n&&e(8,i=n.recipeID)},[a,o,c,u,m,function(){e(0,a=s),_("inventing","maxInventButton")},async function(){if(_("inventing","quickInvent"),!a)return
e(1,o=0),e(2,c=0),e(3,u=0),e(4,m=""),Array(a).fill(i).reduce((async(n,t)=>{const s=await n
if(!s||!0===s.s){const n=await function(n){return r(G,H,n)}(t)
return n?.s?n.r.success_count>0?e(1,o+=1):e(2,c+=1):e(4,m=n?.e?.message??"Server Error"),e(3,u=(o+c)/a*100),n}return s}),Promise.resolve())},s,i,function(){a=C(this.value),e(0,a)}]}class tn extends o{constructor(n){super(),c(this,n,nn,W,u,{max:7,recipeID:8})}}function en(){const n=s('input[name="recipe_id"]')
if(!n)return
const t=z(),e=M().lastElementChild
var i,a
!function(n){const t=n.insertRow(-1).insertCell(-1)
t.className="header",t.setAttribute("height","1")}(e),i={max:t,recipeID:n.value},a=function(n){const t=n.insertRow(-1).insertCell(-1)
return t.className="fshCenter",t}(e),new tn({props:i,target:a})}function sn(n){return`${K}items${L}view&item_id=${n}`}function an(n,t){const e=function(n){if(!n)return
const t=A(/\/items\/(?<id>\d+)\.gif/,n.src)
return t||void 0}(t)
if(!e)return
const s=function(n){return B({href:sn(n),target:"_blank"})}(e)
P(s,n),Q(s,n)}function rn(n){an(n,n)}function on(){!function(){const n=X('.//b[.="Target Invention"]/../../following-sibling::*[1]//img')
an(s("#pCC b"),n)}(),n('#pCC img[src*="/items/"]').forEach(rn)
const t=s('#pCC input[value="Invent"]')?.form
t&&U(t)}function cn(){O()&&(on(),en())}export{cn as default}
//# sourceMappingURL=viewRecipe-e1e81542.js.map

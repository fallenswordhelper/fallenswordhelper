import{k as n,aN as t,a8 as e,q as s,e as i,bH as a,$ as r,S as o,L as c,M as u,O as m,P as l,bh as p,a3 as f,Q as d,b3 as v,T as b,U as g,W as h,bi as x,X as $,d5 as k,cT as w,bc as C,bf as I,be as y,a4 as F,a0 as j,bj as q,a1 as D,R as E,d6 as N,bd as S,s as _,d7 as M,p as R,y as T,i as L,r as P,n as Q,aM as A,aL as O,c1 as B}from"./calfSystem-G1dN925O.js"
import{i as U}from"./inventing-oWTenFBB.js"
import{L as z}from"./LinkButton-V4dDaBVi.js"
import{i as G}from"./interceptSubmit-Ji3kORWO.js"
import{x as H}from"./xPath-xUsSRzWa.js"
import"./formToUrl--m9Zwlne.js"
function K(n){const[t,i]=e(s("tr:nth-child(2) td",n)).split("/").map((n=>parseInt(n,10)))
return{have:t,need:i}}function W(){return n(`#pCC td[background^="${t}ui/inventory/"]`).map((n=>n.parentElement.parentElement)).map(K).reduce(((n,t)=>Math.min(n,Math.floor(t.have/t.need))),1/0)}function X(n){return U({subcmd:"doinvent",recipe_id:n})}async function J(n){const t=await i({cmd:"inventing",subcmd:"doinvent",recipe_id:n})
return t?function(n){const t=a(n)
return t.includes("successfully")?{r:{item:{}},s:!0}:{e:{message:t},s:!1}}(t):{s:!1}}function V(n){let t
return{c(){t=f("(max)")},m(n,e){b(n,t,e)},d(n){n&&j(t)}}}function Y(n){let t,e,s,i,a,r,o
return{c(){t=m("div"),e=m("div"),e.textContent="INFORMATION",s=l(),i=m("div"),a=f(n[4]),v(e,"background","#8E8668"),v(e,"color","#FFF"),v(e,"font-size","smaller"),v(t,"border","2px solid #FFF"),v(t,"margin","10px auto"),v(t,"width","80%"),v(t,"background","#D3CFC1")},m(n,r){b(n,t,r),g(t,e),g(t,s),g(t,i),g(i,a),o=!0},p(n,t){(!o||16&t)&&F(a,n[4])},i(n){o||(n&&E((()=>{o&&(r||(r=N(t,M,{},!0)),r.run(1))})),o=!0)},o(n){n&&(r||(r=N(t,M,{},!1)),r.run(0)),o=!1},d(n){n&&j(t),n&&r&&r.end()}}}function Z(n){let t,e,s,i,a,r,o,c,u,E,N,_,M,R,T,L,P,Q,A,O,B,U,G,H,K,W,X,J,Z,nn,tn=n[1]+n[2]+""
r=new z({props:{$$slots:{default:[V]},$$scope:{ctx:n}}}),r.$on("click",n[5])
let en=n[4]&&Y(n)
return{c(){t=m("form"),e=m("label"),e.textContent="Select how many to quick invent",s=l(),i=m("input"),a=l(),p(r.$$.fragment),o=l(),c=m("input"),u=l(),E=m("div"),en&&en.c(),N=l(),_=m("div"),M=m("div"),R=l(),T=m("p"),L=f(tn),P=f(" / "),Q=f(n[0]),A=l(),O=m("div"),B=m("div"),U=f("Successes: "),G=f(n[1]),H=l(),K=m("div"),W=f("Failures: "),X=f(n[2]),d(e,"for","quick-invent-amount"),d(i,"type","number"),d(i,"id","quick-invent-amount"),d(i,"name","quick-invent-amount"),d(i,"min","0"),d(i,"step","1"),d(i,"class","custominput fshNumberInput"),i.required=!0,d(c,"class","custombutton"),d(c,"type","submit"),c.value="Quick Invent",v(c,"margin-left","8px"),d(M,"class","composing-progress-bar"),v(M,"background-position","right top"),v(M,"width",n[3]+"%"),v(M,"transition","width 0.4s ease-out"),v(M,"position","absolute"),v(M,"top","0px"),v(T,"position","relative"),d(_,"class","composing-progress"),v(_,"margin","0px auto"),v(_,"font-weight","bold"),v(_,"color","#fff"),v(_,"left","0px"),v(B,"display","inline-block"),v(B,"width","250px"),d(B,"class","fshQs fshGreen"),v(K,"display","inline-block"),v(K,"width","250px"),d(K,"class","fshQs fshRed"),v(O,"margin-top","36px"),d(t,"class","fshCenter"),v(t,"margin-top","12px")},m(m,l){b(m,t,l),g(t,e),g(t,s),g(t,i),h(i,n[0]),g(t,a),x(r,t,null),g(t,o),g(t,c),g(t,u),g(t,E),en&&en.m(E,null),g(E,N),g(E,_),g(_,M),g(_,R),g(_,T),g(T,L),g(T,P),g(T,Q),g(E,A),g(E,O),g(O,B),g(B,U),g(B,G),g(O,H),g(O,K),g(K,W),g(K,X),J=!0,Z||(nn=[$(i,"input",n[9]),$(t,"submit",k(n[6]))],Z=!0)},p(n,[t]){1&t&&w(i.value)!==n[0]&&h(i,n[0])
const e={}
2048&t&&(e.$$scope={dirty:t,ctx:n}),r.$set(e),n[4]?en?(en.p(n,t),16&t&&C(en,1)):(en=Y(n),en.c(),C(en,1),en.m(E,N)):en&&(S(),I(en,1,1,(()=>{en=null})),y()),(!J||8&t)&&v(M,"width",n[3]+"%"),(!J||6&t)&&tn!==(tn=n[1]+n[2]+"")&&F(L,tn),(!J||1&t)&&F(Q,n[0]),(!J||2&t)&&F(G,n[1]),(!J||4&t)&&F(X,n[2])},i(n){J||(C(r.$$.fragment,n),C(en),J=!0)},o(n){I(r.$$.fragment,n),I(en),J=!1},d(n){n&&j(t),q(r),en&&en.d(),Z=!1,D(nn)}}}function nn(n,t,e){let{max:s}=t,{recipeID:i}=t,a=1,o=0,c=0,u=0,m=""
return n.$$set=n=>{"max"in n&&e(7,s=n.max),"recipeID"in n&&e(8,i=n.recipeID)},[a,o,c,u,m,function(){e(0,a=s),_("inventing","maxInventButton")},async function(){if(_("inventing","quickInvent"),!a)return
e(1,o=0),e(2,c=0),e(3,u=0),e(4,m=""),Array(a).fill(i).reduce((async(n,t)=>{const s=await n
if(!s||!0===s.s){const n=await function(n){return r(X,J,n)}(t)
return n?.s?n.r.success_count>0?e(1,o+=1):e(2,c+=1):e(4,m=n?.e?.message??"Server Error"),e(3,u=(o+c)/a*100),n}return s}),Promise.resolve())},s,i,function(){a=w(this.value),e(0,a)}]}class tn extends o{constructor(n){super(),c(this,n,nn,Z,u,{max:7,recipeID:8})}}function en(){const n=s('input[name="recipe_id"]')
if(!n)return
const t=W(),e=R().lastElementChild
var i,a
!function(n){const t=n.insertRow(-1).insertCell(-1)
t.className="header",t.setAttribute("height","1")}(e),i={max:t,recipeID:n.value},a=function(n){const t=n.insertRow(-1).insertCell(-1)
return t.className="fshCenter",t}(e),new tn({props:i,target:a})}function sn(n){return`${A}items${O}view&item_id=${n}`}function an(n,t){const e=function(n){if(!n)return
const t=P(/\/items\/(?<id>\d+)\.gif/,n.src)
return t||void 0}(t)
if(!e)return
const s=function(n){return Q({href:sn(n),target:"_blank"})}(e)
T(s,n),L(s,n)}function rn(n){an(n,n)}function on(){!function(){const n=H('.//b[.="Target Invention"]/../../following-sibling::*[1]//img')
an(s("#pCC b"),n)}(),n('#pCC img[src*="/items/"]').forEach(rn)
const t=s('#pCC input[value="Invent"]')?.form
t&&G(t)}function cn(){B()&&(on(),en())}export{cn as default}
//# sourceMappingURL=viewRecipe-M5IaLv3f.js.map

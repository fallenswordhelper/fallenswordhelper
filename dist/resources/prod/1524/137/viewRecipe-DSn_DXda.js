import{k as n,aP as t,a8 as e,q as s,e as i,bN as a,$ as r,S as o,L as c,M as u,O as l,P as m,bj as p,a4 as f,Q as d,b5 as v,T as g,U as b,W as h,bk as x,X as $,db as k,cZ as w,be as C,bf as y,bh as I,bg as F,a5 as j,a1 as q,bl as N,a2 as D,R as E,dc as S,s as _,dd as M,p as R,y as O,i as P,r as Q,n as T,aN as A,aM as L,c6 as B}from"./calfSystem-DZGU7L1H.js"
import{i as G}from"./inventing-CkQAwLax.js"
import{L as U}from"./LinkButton-DgLPvByR.js"
import{i as z}from"./interceptSubmit-ee1pG6cx.js"
import{x as J}from"./xPath-N4wIeO-K.js"
import"./formToUrl-BOvZ_tnn.js"
function W(n){const[t,i]=e(s("tr:nth-child(2) td",n)).split("/").map((n=>parseInt(n,10)))
return{have:t,need:i}}function X(){return n(`#pCC td[background^="${t}ui/inventory/"]`).map((n=>n.parentElement.parentElement)).map(W).reduce(((n,t)=>Math.min(n,Math.floor(t.have/t.need))),1/0)}function Z(n){return G({subcmd:"doinvent",recipe_id:n})}async function H(n){const t=await i({cmd:"inventing",subcmd:"doinvent",recipe_id:n})
return t?function(n){const t=a(n)
return t.includes("successfully")?{r:{item:{}},s:!0}:{e:{message:t},s:!1}}(t):{s:!1}}function K(n){let t
return{c(){t=f("(max)")},m(n,e){g(n,t,e)},d(n){n&&q(t)}}}function V(n){let t,e,s,i,a,r,o
return{c(){t=l("div"),e=l("div"),e.textContent="INFORMATION",s=m(),i=l("div"),a=f(n[4]),v(e,"background","#8E8668"),v(e,"color","#FFF"),v(e,"font-size","smaller"),v(t,"border","2px solid #FFF"),v(t,"margin","10px auto"),v(t,"width","80%"),v(t,"background","#D3CFC1")},m(n,r){g(n,t,r),b(t,e),b(t,s),b(t,i),b(i,a),o=!0},p(n,t){(!o||16&t)&&j(a,n[4])},i(n){o||(n&&E((()=>{o&&(r||(r=S(t,M,{},!0)),r.run(1))})),o=!0)},o(n){n&&(r||(r=S(t,M,{},!1)),r.run(0)),o=!1},d(n){n&&q(t),n&&r&&r.end()}}}function Y(n){let t,e,s,i,a,r,o,c,u,E,S,_,M,R,O,P,Q,T,A,L,B,G,z,J,W,X,Z,H,Y,nn,tn=n[1]+n[2]+""
r=new U({props:{$$slots:{default:[K]},$$scope:{ctx:n}}}),r.$on("click",n[5])
let en=n[4]&&V(n)
return{c(){t=l("form"),e=l("label"),e.textContent="Select how many to quick invent",s=m(),i=l("input"),a=m(),p(r.$$.fragment),o=m(),c=l("input"),u=m(),E=l("div"),en&&en.c(),S=m(),_=l("div"),M=l("div"),R=m(),O=l("p"),P=f(tn),Q=f(" / "),T=f(n[0]),A=m(),L=l("div"),B=l("div"),G=f("Successes: "),z=f(n[1]),J=m(),W=l("div"),X=f("Failures: "),Z=f(n[2]),d(e,"for","quick-invent-amount"),d(i,"type","number"),d(i,"id","quick-invent-amount"),d(i,"name","quick-invent-amount"),d(i,"min","0"),d(i,"step","1"),d(i,"class","custominput fshNumberInput"),i.required=!0,d(c,"class","custombutton"),d(c,"type","submit"),c.value="Quick Invent",v(c,"margin-left","8px"),d(M,"class","composing-progress-bar"),v(M,"background-position","right top"),v(M,"width",n[3]+"%"),v(M,"transition","width 0.4s ease-out"),v(M,"position","absolute"),v(M,"top","0px"),v(O,"position","relative"),d(_,"class","composing-progress"),v(_,"margin","0px auto"),v(_,"font-weight","bold"),v(_,"color","#fff"),v(_,"left","0px"),v(B,"display","inline-block"),v(B,"width","250px"),d(B,"class","fshQs fshGreen"),v(W,"display","inline-block"),v(W,"width","250px"),d(W,"class","fshQs fshRed"),v(L,"margin-top","36px"),d(t,"class","fshCenter"),v(t,"margin-top","12px")},m(l,m){g(l,t,m),b(t,e),b(t,s),b(t,i),h(i,n[0]),b(t,a),x(r,t,null),b(t,o),b(t,c),b(t,u),b(t,E),en&&en.m(E,null),b(E,S),b(E,_),b(_,M),b(_,R),b(_,O),b(O,P),b(O,Q),b(O,T),b(E,A),b(E,L),b(L,B),b(B,G),b(B,z),b(L,J),b(L,W),b(W,X),b(W,Z),H=!0,Y||(nn=[$(i,"input",n[9]),$(t,"submit",k(n[6]))],Y=!0)},p(n,[t]){1&t&&w(i.value)!==n[0]&&h(i,n[0])
const e={}
2048&t&&(e.$$scope={dirty:t,ctx:n}),r.$set(e),n[4]?en?(en.p(n,t),16&t&&C(en,1)):(en=V(n),en.c(),C(en,1),en.m(E,S)):en&&(y(),I(en,1,1,(()=>{en=null})),F()),(!H||8&t)&&v(M,"width",n[3]+"%"),(!H||6&t)&&tn!==(tn=n[1]+n[2]+"")&&j(P,tn),(!H||1&t)&&j(T,n[0]),(!H||2&t)&&j(z,n[1]),(!H||4&t)&&j(Z,n[2])},i(n){H||(C(r.$$.fragment,n),C(en),H=!0)},o(n){I(r.$$.fragment,n),I(en),H=!1},d(n){n&&q(t),N(r),en&&en.d(),Y=!1,D(nn)}}}function nn(n,t,e){let{max:s}=t,{recipeID:i}=t,a=1,o=0,c=0,u=0,l=""
return n.$$set=n=>{"max"in n&&e(7,s=n.max),"recipeID"in n&&e(8,i=n.recipeID)},[a,o,c,u,l,function(){e(0,a=s),_("inventing","maxInventButton")},async function(){if(_("inventing","quickInvent"),!a)return
e(1,o=0),e(2,c=0),e(3,u=0),e(4,l=""),Array(a).fill(i).reduce((async(n,t)=>{const s=await n
if(!s||!0===s.s){const n=await function(n){return r(Z,H,n)}(t)
return n?.s?n.r.success_count>0?e(1,o+=1):e(2,c+=1):e(4,l=n?.e?.message??"Server Error"),e(3,u=(o+c)/a*100),n}return s}),Promise.resolve())},s,i,function(){a=w(this.value),e(0,a)}]}class tn extends o{constructor(n){super(),c(this,n,nn,Y,u,{max:7,recipeID:8})}}function en(){const n=s('input[name="recipe_id"]')
if(!n)return
const t=X(),e=R().lastElementChild
var i,a
!function(n){const t=n.insertRow(-1).insertCell(-1)
t.className="header",t.setAttribute("height","1")}(e),i={max:t,recipeID:n.value},a=function(n){const t=n.insertRow(-1).insertCell(-1)
return t.className="fshCenter",t}(e),new tn({props:i,target:a})}function sn(n){return`${A}items${L}view&item_id=${n}`}function an(n,t){const e=function(n){if(!n)return
const t=Q(/\/items\/(?<id>\d+)\.gif/,n.src)
return t||void 0}(t)
if(!e)return
const s=function(n){return T({href:sn(n),target:"_blank"})}(e)
O(s,n),P(s,n)}function rn(n){an(n,n)}function on(){!function(){const n=J('.//b[.="Target Invention"]/../../following-sibling::*[1]//img')
an(s("#pCC b"),n)}(),n('#pCC img[src*="/items/"]').forEach(rn)
const t=s('#pCC input[value="Invent"]')?.form
t&&z(t)}function cn(){B()&&(on(),en())}export{cn as default}
//# sourceMappingURL=viewRecipe-DSn_DXda.js.map

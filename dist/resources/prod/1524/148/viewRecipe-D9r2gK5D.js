import{l as t,b8 as n,ad as e,q as s,$ as i,h as a,cg as r,S as o,P as c,Q as u,U as l,bJ as m,V as p,bD as f,bE as d,dv as v,Z as b,bF as g,bG as h,bp as x,a8 as $,_ as w,a0 as C,bK as k,a1 as I,dM as y,a3 as F,a4 as q,bL as D,a9 as E,a5 as _,dN as j,dO as N,a6 as S,s as A,p as M,A as Q,i as R,r as L,t as O,b6 as P,b5 as T,cD as B}from"./calfSystem-BldO1y8X.js"
import{i as G}from"./inventing-CvPC9oLd.js"
import{L as U}from"./LinkButton-uS4wZBSJ.js"
import{i as z}from"./interceptSubmit-DRfjQ-m1.js"
import{x as J}from"./xPath-C_iKPP1F.js"
import"./formToUrl-BEp0G_53.js"
function K(t){const[n,i]=e(s("tr:nth-child(2) td",t)).split("/").map((t=>parseInt(t,10)))
return{have:n,need:i}}function V(){return t(`#pCC td[background^="${n}ui/inventory/"]`).map((t=>t.parentElement.parentElement)).map(K).reduce(((t,n)=>Math.min(t,Math.floor(n.have/n.need))),1/0)}function W(t){return G({subcmd:"doinvent",recipe_id:t})}async function Z(t){const n=await a({cmd:"inventing",subcmd:"doinvent",recipe_id:t})
return n?function(t){const n=r(t)
return n.includes("successfully")?{r:{item:{}},s:!0}:{e:{message:n},s:!1}}(n):{s:!1}}function H(t){let n
return{c(){n=E("(max)")},m(t,e){w(t,n,e)},d(t){t&&l(n)}}}function X(t){let n,e,s,i,a,r,o
return{c(){n=F("div"),e=F("div"),e.textContent="INFORMATION",s=q(),i=F("div"),a=E(t[4]),x(e,"background","#8E8668"),x(e,"color","#FFF"),x(e,"font-size","smaller"),x(n,"border","2px solid #FFF"),x(n,"margin","10px auto"),x(n,"width","80%"),x(n,"background","#D3CFC1")},m(t,r){w(t,n,r),C(n,e),C(n,s),C(n,i),C(i,a),o=!0},p(t,n){(!o||16&n)&&$(a,t[4])},i(t){o||(t&&S((()=>{o&&(r||(r=j(n,N,{},!0)),r.run(1))})),o=!0)},o(t){t&&(r||(r=j(n,N,{},!1)),r.run(0)),o=!1},d(t){t&&l(n),t&&r&&r.end()}}}function Y(t){let n,e,s,i,a,r,o,c,u,j,N,S,A,M,Q,R,L,O,P,T,B,G,z,J,K,V,W,Z,Y,tt,nt=t[1]+t[2]+""
r=new U({props:{$$slots:{default:[H]},$$scope:{ctx:t}}}),r.$on("click",t[5])
let et=t[4]&&X(t)
return{c(){n=F("form"),e=F("label"),e.textContent="Select how many to quick invent",s=q(),i=F("input"),a=q(),D(r.$$.fragment),o=q(),c=F("input"),u=q(),j=F("div"),et&&et.c(),N=q(),S=F("div"),A=F("div"),M=q(),Q=F("p"),R=E(nt),L=E(" / "),O=E(t[0]),P=q(),T=F("div"),B=F("div"),G=E("Successes: "),z=E(t[1]),J=q(),K=F("div"),V=E("Failures: "),W=E(t[2]),_(e,"for","quick-invent-amount"),_(i,"type","number"),_(i,"id","quick-invent-amount"),_(i,"name","quick-invent-amount"),_(i,"min","0"),_(i,"step","1"),_(i,"class","custominput fshNumberInput"),i.required=!0,_(c,"class","custombutton"),_(c,"type","submit"),c.value="Quick Invent",x(c,"margin-left","8px"),_(A,"class","composing-progress-bar"),x(A,"background-position","right top"),x(A,"width",t[3]+"%"),x(A,"transition","width 0.4s ease-out"),x(A,"position","absolute"),x(A,"top","0px"),x(Q,"position","relative"),_(S,"class","composing-progress"),x(S,"margin","0px auto"),x(S,"font-weight","bold"),x(S,"color","#fff"),x(S,"left","0px"),x(B,"display","inline-block"),x(B,"width","250px"),_(B,"class","fshQs fshGreen"),x(K,"display","inline-block"),x(K,"width","250px"),_(K,"class","fshQs fshRed"),x(T,"margin-top","36px"),_(n,"class","fshCenter"),x(n,"margin-top","12px")},m(l,m){w(l,n,m),C(n,e),C(n,s),C(n,i),b(i,t[0]),C(n,a),k(r,n,null),C(n,o),C(n,c),C(n,u),C(n,j),et&&et.m(j,null),C(j,N),C(j,S),C(S,A),C(S,M),C(S,Q),C(Q,R),C(Q,L),C(Q,O),C(j,P),C(j,T),C(T,B),C(B,G),C(B,z),C(T,J),C(T,K),C(K,V),C(K,W),Z=!0,Y||(tt=[I(i,"input",t[9]),I(n,"submit",y(t[6]))],Y=!0)},p(t,[n]){1&n&&v(i.value)!==t[0]&&b(i,t[0])
const e={}
2048&n&&(e.$$scope={dirty:n,ctx:t}),r.$set(e),t[4]?et?(et.p(t,n),16&n&&d(et,1)):(et=X(t),et.c(),d(et,1),et.m(j,N)):et&&(g(),f(et,1,1,(()=>{et=null})),h()),(!Z||8&n)&&x(A,"width",t[3]+"%"),(!Z||6&n)&&nt!==(nt=t[1]+t[2]+"")&&$(R,nt),(!Z||1&n)&&$(O,t[0]),(!Z||2&n)&&$(z,t[1]),(!Z||4&n)&&$(W,t[2])},i(t){Z||(d(r.$$.fragment,t),d(et),Z=!0)},o(t){f(r.$$.fragment,t),f(et),Z=!1},d(t){t&&l(n),m(r),et&&et.d(),Y=!1,p(tt)}}}function tt(t,n,e){let{max:s}=n,{recipeID:a}=n,r=1,o=0,c=0,u=0,l=""
return t.$$set=t=>{"max"in t&&e(7,s=t.max),"recipeID"in t&&e(8,a=t.recipeID)},[r,o,c,u,l,function(){e(0,r=s),A("inventing","maxInventButton")},async function(){if(A("inventing","quickInvent"),!r)return
e(1,o=0),e(2,c=0),e(3,u=0),e(4,l=""),Array(r).fill(a).reduce((async(t,n)=>{const s=await t
if(!s||!0===s.s){const t=await function(t){return i(W,Z,t)}(n)
return t?.s?t.r.success_count>0?e(1,o+=1):e(2,c+=1):e(4,l=t?.e?.message??"Server Error"),e(3,u=(o+c)/r*100),t}return s}),Promise.resolve())},s,a,function(){r=v(this.value),e(0,r)}]}class nt extends o{constructor(t){super(),c(this,t,tt,Y,u,{max:7,recipeID:8})}}function et(){const t=s('input[name="recipe_id"]')
if(!t)return
const n=V(),e=M().lastElementChild
var i,a
!function(t){const n=t.insertRow(-1).insertCell(-1)
n.className="header",n.setAttribute("height","1")}(e),i={max:n,recipeID:t.value},a=function(t){const n=t.insertRow(-1).insertCell(-1)
return n.className="fshCenter",n}(e),new nt({props:i,target:a})}function st(t){return`${P}items${T}view&item_id=${t}`}function it(t,n){const e=function(t){if(!t)return
const n=L(/\/items\/(?<id>\d+)\.gif/,t.src)
return n||void 0}(n)
if(!e)return
const s=function(t){return O({href:st(t),target:"_blank"})}(e)
Q(s,t),R(s,t)}function at(t){it(t,t)}function rt(){!function(){const t=J('.//b[.="Target Invention"]/../../following-sibling::*[1]//img')
it(s("#pCC b"),t)}(),t('#pCC img[src*="/items/"]').forEach(at)
const n=s('#pCC input[value="Invent"]')?.form
n&&z(n)}function ot(){B()&&(rt(),et())}export{ot as default}
//# sourceMappingURL=viewRecipe-D9r2gK5D.js.map

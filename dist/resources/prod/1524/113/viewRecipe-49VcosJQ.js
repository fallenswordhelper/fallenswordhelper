import{k as n,aH as t,a3 as e,q as s,e as i,bz as a,$ as r,S as o,J as c,K as u,L as l,M as m,b9 as p,_ as f,N as d,aX as v,P as b,Q as g,T as h,ba as x,U as $,cW as w,cI as C,b4 as k,b7 as I,b6 as y,a0 as F,X as q,bb as N,Y as _,O as j,cX as D,b5 as E,s as S,cY as M,p as P,y as Q,i as R,r as T,n as A,aG as L,aF as O,bV as X}from"./calfSystem-VUa7wwu1.js"
import{i as z}from"./inventing-Xt3-JO-p.js"
import{L as B}from"./LinkButton-ssp0QiF9.js"
import{i as G}from"./interceptSubmit-fATfmTUY.js"
import{x as K}from"./xPath-1ZUN83Aj.js"
import"./formToUrl-y6DXfC2j.js"
function U(n){const[t,i]=e(s("tr:nth-child(2) td",n)).split("/").map((n=>parseInt(n,10)))
return{have:t,need:i}}function Y(){return n(`#pCC td[background^="${t}ui/inventory/"]`).map((n=>n.parentElement.parentElement)).map(U).reduce(((n,t)=>Math.min(n,Math.floor(t.have/t.need))),1/0)}function H(n){return z({subcmd:"doinvent",recipe_id:n})}async function J(n){const t=await i({cmd:"inventing",subcmd:"doinvent",recipe_id:n})
return t?function(n){const t=a(n)
return t.includes("successfully")?{r:{item:{}},s:!0}:{e:{message:t},s:!1}}(t):{s:!1}}function V(n){let t
return{c(){t=f("(max)")},m(n,e){b(n,t,e)},d(n){n&&q(t)}}}function W(n){let t,e,s,i,a,r,o
return{c(){t=l("div"),e=l("div"),e.textContent="INFORMATION",s=m(),i=l("div"),a=f(n[4]),v(e,"background","#8E8668"),v(e,"color","#FFF"),v(e,"font-size","smaller"),v(t,"border","2px solid #FFF"),v(t,"margin","10px auto"),v(t,"width","80%"),v(t,"background","#D3CFC1")},m(n,r){b(n,t,r),g(t,e),g(t,s),g(t,i),g(i,a),o=!0},p(n,t){(!o||16&t)&&F(a,n[4])},i(n){o||(n&&j((()=>{o&&(r||(r=D(t,M,{},!0)),r.run(1))})),o=!0)},o(n){n&&(r||(r=D(t,M,{},!1)),r.run(0)),o=!1},d(n){n&&q(t),n&&r&&r.end()}}}function Z(n){let t,e,s,i,a,r,o,c,u,j,D,S,M,P,Q,R,T,A,L,O,X,z,G,K,U,Y,H,J,Z,nn,tn=n[1]+n[2]+""
r=new B({props:{$$slots:{default:[V]},$$scope:{ctx:n}}}),r.$on("click",n[5])
let en=n[4]&&W(n)
return{c(){t=l("form"),e=l("label"),e.textContent="Select how many to quick invent",s=m(),i=l("input"),a=m(),p(r.$$.fragment),o=m(),c=l("input"),u=m(),j=l("div"),en&&en.c(),D=m(),S=l("div"),M=l("div"),P=m(),Q=l("p"),R=f(tn),T=f(" / "),A=f(n[0]),L=m(),O=l("div"),X=l("div"),z=f("Successes: "),G=f(n[1]),K=m(),U=l("div"),Y=f("Failures: "),H=f(n[2]),d(e,"for","quick-invent-amount"),d(i,"type","number"),d(i,"id","quick-invent-amount"),d(i,"name","quick-invent-amount"),d(i,"min","0"),d(i,"step","1"),d(i,"class","custominput fshNumberInput"),i.required=!0,d(c,"class","custombutton"),d(c,"type","submit"),c.value="Quick Invent",v(c,"margin-left","8px"),d(M,"class","composing-progress-bar"),v(M,"background-position","right top"),v(M,"width",n[3]+"%"),v(M,"transition","width 0.4s ease-out"),v(M,"position","absolute"),v(M,"top","0px"),v(Q,"position","relative"),d(S,"class","composing-progress"),v(S,"margin","0px auto"),v(S,"font-weight","bold"),v(S,"color","#fff"),v(S,"left","0px"),v(X,"display","inline-block"),v(X,"width","250px"),d(X,"class","fshQs fshGreen"),v(U,"display","inline-block"),v(U,"width","250px"),d(U,"class","fshQs fshRed"),v(O,"margin-top","36px"),d(t,"class","fshCenter"),v(t,"margin-top","12px")},m(l,m){b(l,t,m),g(t,e),g(t,s),g(t,i),h(i,n[0]),g(t,a),x(r,t,null),g(t,o),g(t,c),g(t,u),g(t,j),en&&en.m(j,null),g(j,D),g(j,S),g(S,M),g(S,P),g(S,Q),g(Q,R),g(Q,T),g(Q,A),g(j,L),g(j,O),g(O,X),g(X,z),g(X,G),g(O,K),g(O,U),g(U,Y),g(U,H),J=!0,Z||(nn=[$(i,"input",n[9]),$(t,"submit",w(n[6]))],Z=!0)},p(n,[t]){1&t&&C(i.value)!==n[0]&&h(i,n[0])
const e={}
2048&t&&(e.$$scope={dirty:t,ctx:n}),r.$set(e),n[4]?en?(en.p(n,t),16&t&&k(en,1)):(en=W(n),en.c(),k(en,1),en.m(j,D)):en&&(E(),I(en,1,1,(()=>{en=null})),y()),(!J||8&t)&&v(M,"width",n[3]+"%"),(!J||6&t)&&tn!==(tn=n[1]+n[2]+"")&&F(R,tn),(!J||1&t)&&F(A,n[0]),(!J||2&t)&&F(G,n[1]),(!J||4&t)&&F(H,n[2])},i(n){J||(k(r.$$.fragment,n),k(en),J=!0)},o(n){I(r.$$.fragment,n),I(en),J=!1},d(n){n&&q(t),N(r),en&&en.d(),Z=!1,_(nn)}}}function nn(n,t,e){let{max:s}=t,{recipeID:i}=t,a=1,o=0,c=0,u=0,l=""
return n.$$set=n=>{"max"in n&&e(7,s=n.max),"recipeID"in n&&e(8,i=n.recipeID)},[a,o,c,u,l,function(){e(0,a=s),S("inventing","maxInventButton")},async function(){if(S("inventing","quickInvent"),!a)return
e(1,o=0),e(2,c=0),e(3,u=0),e(4,l=""),Array(a).fill(i).reduce((async(n,t)=>{const s=await n
if(!s||!0===s.s){const n=await function(n){return r(H,J,n)}(t)
return n?.s?n.r.success_count>0?e(1,o+=1):e(2,c+=1):e(4,l=n?.e?.message??"Server Error"),e(3,u=(o+c)/a*100),n}return s}),Promise.resolve())},s,i,function(){a=C(this.value),e(0,a)}]}class tn extends o{constructor(n){super(),c(this,n,nn,Z,u,{max:7,recipeID:8})}}function en(){const n=s('input[name="recipe_id"]')
if(!n)return
const t=Y(),e=P().lastElementChild
var i,a
!function(n){const t=n.insertRow(-1).insertCell(-1)
t.className="header",t.setAttribute("height","1")}(e),i={max:t,recipeID:n.value},a=function(n){const t=n.insertRow(-1).insertCell(-1)
return t.className="fshCenter",t}(e),new tn({props:i,target:a})}function sn(n){return`${L}items${O}view&item_id=${n}`}function an(n,t){const e=function(n){if(!n)return
const t=T(/\/items\/(?<id>\d+)\.gif/,n.src)
return t||void 0}(t)
if(!e)return
const s=function(n){return A({href:sn(n),target:"_blank"})}(e)
Q(s,n),R(s,n)}function rn(n){an(n,n)}function on(){!function(){const n=K('.//b[.="Target Invention"]/../../following-sibling::*[1]//img')
an(s("#pCC b"),n)}(),n('#pCC img[src*="/items/"]').forEach(rn)
const t=s('#pCC input[value="Invent"]')?.form
t&&G(t)}function cn(){X()&&(on(),en())}export{cn as default}
//# sourceMappingURL=viewRecipe-49VcosJQ.js.map

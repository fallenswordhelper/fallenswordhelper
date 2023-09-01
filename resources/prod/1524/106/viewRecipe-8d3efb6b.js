import{j as n,aL as t,a5 as e,q as s,d as i,bD as a,$ as r,S as o,L as c,M as u,N as m,O as l,bf as p,a1 as f,P as d,a$ as v,R as b,T as g,V as h,bg as x,W as $,cY as w,cM as C,ba as k,bd as y,bc as I,a2 as F,Z as q,bh as _,_ as j,Q as D,cZ as E,bb as M,n as N,c_ as S,p as L,y as Q,i as R,r as T,m as A,aK as O,aJ as P,bZ as Z}from"./calfSystem-076d7a01.js"
import{i as B}from"./inventing-37ffd7fc.js"
import{L as z}from"./LinkButton-9974bf66.js"
import{i as G}from"./interceptSubmit-54adf362.js"
import{x as J}from"./xPath-c601fa82.js"
import"./formToUrl-46584106.js"
function K(n){const[t,i]=e(s("tr:nth-child(2) td",n)).split("/").map((n=>parseInt(n,10)))
return{have:t,need:i}}function U(){return n(`#pCC td[background^="${t}ui/inventory/"]`).map((n=>n.parentElement.parentElement)).map(K).reduce(((n,t)=>Math.min(n,Math.floor(t.have/t.need))),1/0)}function V(n){return B({subcmd:"doinvent",recipe_id:n})}async function W(n){return function(n){const t=a(n)
return t.includes("successfully")?{r:{item:{}},s:!0}:{e:{message:t},s:!1}}(await i({cmd:"inventing",subcmd:"doinvent",recipe_id:n}))}function Y(n){let t
return{c(){t=f("(max)")},m(n,e){b(n,t,e)},d(n){n&&q(t)}}}function H(n){let t,e,s,i,a,r,o
return{c(){t=m("div"),e=m("div"),e.textContent="INFORMATION",s=l(),i=m("div"),a=f(n[4]),v(e,"background","#8E8668"),v(e,"color","#FFF"),v(e,"font-size","smaller"),v(t,"border","2px solid #FFF"),v(t,"margin","10px auto"),v(t,"width","80%"),v(t,"background","#D3CFC1")},m(n,r){b(n,t,r),g(t,e),g(t,s),g(t,i),g(i,a),o=!0},p(n,t){(!o||16&t)&&F(a,n[4])},i(n){o||(n&&D((()=>{o&&(r||(r=E(t,S,{},!0)),r.run(1))})),o=!0)},o(n){n&&(r||(r=E(t,S,{},!1)),r.run(0)),o=!1},d(n){n&&q(t),n&&r&&r.end()}}}function X(n){let t,e,s,i,a,r,o,c,u,D,E,N,S,L,Q,R,T,A,O,P,Z,B,G,J,K,U,V,W,X,nn,tn=n[1]+n[2]+""
r=new z({props:{$$slots:{default:[Y]},$$scope:{ctx:n}}}),r.$on("click",n[5])
let en=n[4]&&H(n)
return{c(){t=m("form"),e=m("label"),e.textContent="Select how many to quick invent",s=l(),i=m("input"),a=l(),p(r.$$.fragment),o=l(),c=m("input"),u=l(),D=m("div"),en&&en.c(),E=l(),N=m("div"),S=m("div"),L=l(),Q=m("p"),R=f(tn),T=f(" / "),A=f(n[0]),O=l(),P=m("div"),Z=m("div"),B=f("Successes: "),G=f(n[1]),J=l(),K=m("div"),U=f("Failures: "),V=f(n[2]),d(e,"for","quick-invent-amount"),d(i,"type","number"),d(i,"id","quick-invent-amount"),d(i,"name","quick-invent-amount"),d(i,"min","0"),d(i,"step","1"),d(i,"class","custominput fshNumberInput"),i.required=!0,d(c,"class","custombutton"),d(c,"type","submit"),c.value="Quick Invent",v(c,"margin-left","8px"),d(S,"class","composing-progress-bar"),v(S,"background-position","right top"),v(S,"width",n[3]+"%"),v(S,"transition","width 0.4s ease-out"),v(S,"position","absolute"),v(S,"top","0px"),v(Q,"position","relative"),d(N,"class","composing-progress"),v(N,"margin","0px auto"),v(N,"font-weight","bold"),v(N,"color","#fff"),v(N,"left","0px"),v(Z,"display","inline-block"),v(Z,"width","250px"),d(Z,"class","fshQs fshGreen"),v(K,"display","inline-block"),v(K,"width","250px"),d(K,"class","fshQs fshRed"),v(P,"margin-top","36px"),d(t,"class","fshCenter"),v(t,"margin-top","12px")},m(m,l){b(m,t,l),g(t,e),g(t,s),g(t,i),h(i,n[0]),g(t,a),x(r,t,null),g(t,o),g(t,c),g(t,u),g(t,D),en&&en.m(D,null),g(D,E),g(D,N),g(N,S),g(N,L),g(N,Q),g(Q,R),g(Q,T),g(Q,A),g(D,O),g(D,P),g(P,Z),g(Z,B),g(Z,G),g(P,J),g(P,K),g(K,U),g(K,V),W=!0,X||(nn=[$(i,"input",n[9]),$(t,"submit",w(n[6]))],X=!0)},p(n,[t]){1&t&&C(i.value)!==n[0]&&h(i,n[0])
const e={}
2048&t&&(e.$$scope={dirty:t,ctx:n}),r.$set(e),n[4]?en?(en.p(n,t),16&t&&k(en,1)):(en=H(n),en.c(),k(en,1),en.m(D,E)):en&&(M(),y(en,1,1,(()=>{en=null})),I()),(!W||8&t)&&v(S,"width",n[3]+"%"),(!W||6&t)&&tn!==(tn=n[1]+n[2]+"")&&F(R,tn),(!W||1&t)&&F(A,n[0]),(!W||2&t)&&F(G,n[1]),(!W||4&t)&&F(V,n[2])},i(n){W||(k(r.$$.fragment,n),k(en),W=!0)},o(n){y(r.$$.fragment,n),y(en),W=!1},d(n){n&&q(t),_(r),en&&en.d(),X=!1,j(nn)}}}function nn(n,t,e){let{max:s}=t,{recipeID:i}=t,a=1,o=0,c=0,u=0,m=""
return n.$$set=n=>{"max"in n&&e(7,s=n.max),"recipeID"in n&&e(8,i=n.recipeID)},[a,o,c,u,m,function(){e(0,a=s),N("inventing","maxInventButton")},async function(){if(N("inventing","quickInvent"),!a)return
e(1,o=0),e(2,c=0),e(3,u=0),e(4,m=""),Array(a).fill(i).reduce((async(n,t)=>{const s=await n
if(!s||!0===s.s){const n=await function(n){return r(V,W,n)}(t)
return n?.s?n.r.success_count>0?e(1,o+=1):e(2,c+=1):e(4,m=n?.e?.message??"Server Error"),e(3,u=(o+c)/a*100),n}return s}),Promise.resolve())},s,i,function(){a=C(this.value),e(0,a)}]}class tn extends o{constructor(n){super(),c(this,n,nn,X,u,{max:7,recipeID:8})}}function en(){const n=s('input[name="recipe_id"]')
if(!n)return
const t=U(),e=L().lastElementChild
var i,a
!function(n){const t=n.insertRow(-1).insertCell(-1)
t.className="header",t.setAttribute("height","1")}(e),i={max:t,recipeID:n.value},a=function(n){const t=n.insertRow(-1).insertCell(-1)
return t.className="fshCenter",t}(e),new tn({props:i,target:a})}function sn(n){return`${O}items${P}view&item_id=${n}`}function an(n,t){const e=function(n){if(!n)return
const t=T(/\/items\/(?<id>\d+)\.gif/,n.src)
return t||void 0}(t)
if(!e)return
const s=function(n){return A({href:sn(n),target:"_blank"})}(e)
Q(s,n),R(s,n)}function rn(n){an(n,n)}function on(){!function(){const n=J('.//b[.="Target Invention"]/../../following-sibling::*[1]//img')
an(s("#pCC b"),n)}(),n('#pCC img[src*="/items/"]').forEach(rn)
const t=s('#pCC input[value="Invent"]')?.form
t&&G(t)}function cn(){Z()&&(on(),en())}export{cn as default}
//# sourceMappingURL=viewRecipe-8d3efb6b.js.map

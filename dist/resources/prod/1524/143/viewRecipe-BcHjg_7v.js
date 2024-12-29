import{k as n,b5 as t,ac as e,q as s,e as i,cd as a,$ as r,S as o,O as c,P as u,R as l,T as m,bF as p,a7 as f,U as d,bo as v,W as b,X as g,Z as h,bG as x,_ as $,dF as w,dp as C,bA as k,bB as I,bD as y,bC as F,a8 as q,a4 as D,bH as _,a5 as j,V as E,dG as S,s as A,dH as N,p as R,z as T,i as B,r as G,n as M,b3 as O,b2 as P,cA as Q}from"./calfSystem-ChzN4Q-P.js"
import{i as z}from"./inventing-JzVADKkF.js"
import{L as H}from"./LinkButton-BclPa9W-.js"
import{i as L}from"./interceptSubmit-CmNeM6n-.js"
import{x as U}from"./xPath-CwPxpX3w.js"
import"./formToUrl-DpqdMGU9.js"
function V(n){const[t,i]=e(s("tr:nth-child(2) td",n)).split("/").map((n=>parseInt(n,10)))
return{have:t,need:i}}function W(){return n(`#pCC td[background^="${t}ui/inventory/"]`).map((n=>n.parentElement.parentElement)).map(V).reduce(((n,t)=>Math.min(n,Math.floor(t.have/t.need))),1/0)}function X(n){return z({subcmd:"doinvent",recipe_id:n})}async function Y(n){const t=await i({cmd:"inventing",subcmd:"doinvent",recipe_id:n})
return t?function(n){const t=a(n)
return t.includes("successfully")?{r:{item:{}},s:!0}:{e:{message:t},s:!1}}(t):{s:!1}}function Z(n){let t
return{c(){t=f("(max)")},m(n,e){b(n,t,e)},d(n){n&&D(t)}}}function J(n){let t,e,s,i,a,r,o
return{c(){t=l("div"),e=l("div"),e.textContent="INFORMATION",s=m(),i=l("div"),a=f(n[4]),v(e,"background","#8E8668"),v(e,"color","#FFF"),v(e,"font-size","smaller"),v(t,"border","2px solid #FFF"),v(t,"margin","10px auto"),v(t,"width","80%"),v(t,"background","#D3CFC1")},m(n,r){b(n,t,r),g(t,e),g(t,s),g(t,i),g(i,a),o=!0},p(n,t){(!o||16&t)&&q(a,n[4])},i(n){o||(n&&E((()=>{o&&(r||(r=S(t,N,{},!0)),r.run(1))})),o=!0)},o(n){n&&(r||(r=S(t,N,{},!1)),r.run(0)),o=!1},d(n){n&&D(t),n&&r&&r.end()}}}function K(n){let t,e,s,i,a,r,o,c,u,E,S,A,N,R,T,B,G,M,O,P,Q,z,L,U,V,W,X,Y,K,nn,tn=n[1]+n[2]+""
r=new H({props:{$$slots:{default:[Z]},$$scope:{ctx:n}}}),r.$on("click",n[5])
let en=n[4]&&J(n)
return{c(){t=l("form"),e=l("label"),e.textContent="Select how many to quick invent",s=m(),i=l("input"),a=m(),p(r.$$.fragment),o=m(),c=l("input"),u=m(),E=l("div"),en&&en.c(),S=m(),A=l("div"),N=l("div"),R=m(),T=l("p"),B=f(tn),G=f(" / "),M=f(n[0]),O=m(),P=l("div"),Q=l("div"),z=f("Successes: "),L=f(n[1]),U=m(),V=l("div"),W=f("Failures: "),X=f(n[2]),d(e,"for","quick-invent-amount"),d(i,"type","number"),d(i,"id","quick-invent-amount"),d(i,"name","quick-invent-amount"),d(i,"min","0"),d(i,"step","1"),d(i,"class","custominput fshNumberInput"),i.required=!0,d(c,"class","custombutton"),d(c,"type","submit"),c.value="Quick Invent",v(c,"margin-left","8px"),d(N,"class","composing-progress-bar"),v(N,"background-position","right top"),v(N,"width",n[3]+"%"),v(N,"transition","width 0.4s ease-out"),v(N,"position","absolute"),v(N,"top","0px"),v(T,"position","relative"),d(A,"class","composing-progress"),v(A,"margin","0px auto"),v(A,"font-weight","bold"),v(A,"color","#fff"),v(A,"left","0px"),v(Q,"display","inline-block"),v(Q,"width","250px"),d(Q,"class","fshQs fshGreen"),v(V,"display","inline-block"),v(V,"width","250px"),d(V,"class","fshQs fshRed"),v(P,"margin-top","36px"),d(t,"class","fshCenter"),v(t,"margin-top","12px")},m(l,m){b(l,t,m),g(t,e),g(t,s),g(t,i),h(i,n[0]),g(t,a),x(r,t,null),g(t,o),g(t,c),g(t,u),g(t,E),en&&en.m(E,null),g(E,S),g(E,A),g(A,N),g(A,R),g(A,T),g(T,B),g(T,G),g(T,M),g(E,O),g(E,P),g(P,Q),g(Q,z),g(Q,L),g(P,U),g(P,V),g(V,W),g(V,X),Y=!0,K||(nn=[$(i,"input",n[9]),$(t,"submit",w(n[6]))],K=!0)},p(n,[t]){1&t&&C(i.value)!==n[0]&&h(i,n[0])
const e={}
2048&t&&(e.$$scope={dirty:t,ctx:n}),r.$set(e),n[4]?en?(en.p(n,t),16&t&&k(en,1)):(en=J(n),en.c(),k(en,1),en.m(E,S)):en&&(I(),y(en,1,1,(()=>{en=null})),F()),(!Y||8&t)&&v(N,"width",n[3]+"%"),(!Y||6&t)&&tn!==(tn=n[1]+n[2]+"")&&q(B,tn),(!Y||1&t)&&q(M,n[0]),(!Y||2&t)&&q(L,n[1]),(!Y||4&t)&&q(X,n[2])},i(n){Y||(k(r.$$.fragment,n),k(en),Y=!0)},o(n){y(r.$$.fragment,n),y(en),Y=!1},d(n){n&&D(t),_(r),en&&en.d(),K=!1,j(nn)}}}function nn(n,t,e){let{max:s}=t,{recipeID:i}=t,a=1,o=0,c=0,u=0,l=""
return n.$$set=n=>{"max"in n&&e(7,s=n.max),"recipeID"in n&&e(8,i=n.recipeID)},[a,o,c,u,l,function(){e(0,a=s),A("inventing","maxInventButton")},async function(){if(A("inventing","quickInvent"),!a)return
e(1,o=0),e(2,c=0),e(3,u=0),e(4,l=""),Array(a).fill(i).reduce((async(n,t)=>{const s=await n
if(!s||!0===s.s){const n=await function(n){return r(X,Y,n)}(t)
return n?.s?n.r.success_count>0?e(1,o+=1):e(2,c+=1):e(4,l=n?.e?.message??"Server Error"),e(3,u=(o+c)/a*100),n}return s}),Promise.resolve())},s,i,function(){a=C(this.value),e(0,a)}]}class tn extends o{constructor(n){super(),c(this,n,nn,K,u,{max:7,recipeID:8})}}function en(){const n=s('input[name="recipe_id"]')
if(!n)return
const t=W(),e=R().lastElementChild
var i,a
!function(n){const t=n.insertRow(-1).insertCell(-1)
t.className="header",t.setAttribute("height","1")}(e),i={max:t,recipeID:n.value},a=function(n){const t=n.insertRow(-1).insertCell(-1)
return t.className="fshCenter",t}(e),new tn({props:i,target:a})}function sn(n){return`${O}items${P}view&item_id=${n}`}function an(n,t){const e=function(n){if(!n)return
const t=G(/\/items\/(?<id>\d+)\.gif/,n.src)
return t||void 0}(t)
if(!e)return
const s=function(n){return M({href:sn(n),target:"_blank"})}(e)
T(s,n),B(s,n)}function rn(n){an(n,n)}function on(){!function(){const n=U('.//b[.="Target Invention"]/../../following-sibling::*[1]//img')
an(s("#pCC b"),n)}(),n('#pCC img[src*="/items/"]').forEach(rn)
const t=s('#pCC input[value="Invent"]')?.form
t&&L(t)}function cn(){Q()&&(on(),en())}export{cn as default}
//# sourceMappingURL=viewRecipe-BcHjg_7v.js.map

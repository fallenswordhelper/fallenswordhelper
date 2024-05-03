import{k as n,aN as t,a8 as e,q as s,e as i,bI as a,$ as r,S as o,L as c,M as u,O as m,P as l,bh as p,a3 as f,Q as d,b3 as v,T as b,U as g,W as h,bi as x,X as $,d4 as k,cS as w,bc as C,bf as I,be as y,a4 as F,a0 as j,bj as q,a1 as S,R as D,d5 as E,bd as N,s as _,d6 as L,p as M,y as Q,i as R,r as T,n as A,aM as O,aL as P,c2 as B}from"./calfSystem-BtgQSp8m.js"
import{i as U}from"./inventing-CApjUgE4.js"
import{L as z}from"./LinkButton-CbKrCfyn.js"
import{i as G}from"./interceptSubmit-CjRw20o2.js"
import{x as K}from"./xPath-CjAhJnVN.js"
import"./formToUrl-xm59AL7B.js"
function W(n){const[t,i]=e(s("tr:nth-child(2) td",n)).split("/").map((n=>parseInt(n,10)))
return{have:t,need:i}}function X(){return n(`#pCC td[background^="${t}ui/inventory/"]`).map((n=>n.parentElement.parentElement)).map(W).reduce(((n,t)=>Math.min(n,Math.floor(t.have/t.need))),1/0)}function H(n){return U({subcmd:"doinvent",recipe_id:n})}async function J(n){const t=await i({cmd:"inventing",subcmd:"doinvent",recipe_id:n})
return t?function(n){const t=a(n)
return t.includes("successfully")?{r:{item:{}},s:!0}:{e:{message:t},s:!1}}(t):{s:!1}}function V(n){let t
return{c(){t=f("(max)")},m(n,e){b(n,t,e)},d(n){n&&j(t)}}}function Y(n){let t,e,s,i,a,r,o
return{c(){t=m("div"),e=m("div"),e.textContent="INFORMATION",s=l(),i=m("div"),a=f(n[4]),v(e,"background","#8E8668"),v(e,"color","#FFF"),v(e,"font-size","smaller"),v(t,"border","2px solid #FFF"),v(t,"margin","10px auto"),v(t,"width","80%"),v(t,"background","#D3CFC1")},m(n,r){b(n,t,r),g(t,e),g(t,s),g(t,i),g(i,a),o=!0},p(n,t){(!o||16&t)&&F(a,n[4])},i(n){o||(n&&D((()=>{o&&(r||(r=E(t,L,{},!0)),r.run(1))})),o=!0)},o(n){n&&(r||(r=E(t,L,{},!1)),r.run(0)),o=!1},d(n){n&&j(t),n&&r&&r.end()}}}function Z(n){let t,e,s,i,a,r,o,c,u,D,E,_,L,M,Q,R,T,A,O,P,B,U,G,K,W,X,H,J,Z,nn,tn=n[1]+n[2]+""
r=new z({props:{$$slots:{default:[V]},$$scope:{ctx:n}}}),r.$on("click",n[5])
let en=n[4]&&Y(n)
return{c(){t=m("form"),e=m("label"),e.textContent="Select how many to quick invent",s=l(),i=m("input"),a=l(),p(r.$$.fragment),o=l(),c=m("input"),u=l(),D=m("div"),en&&en.c(),E=l(),_=m("div"),L=m("div"),M=l(),Q=m("p"),R=f(tn),T=f(" / "),A=f(n[0]),O=l(),P=m("div"),B=m("div"),U=f("Successes: "),G=f(n[1]),K=l(),W=m("div"),X=f("Failures: "),H=f(n[2]),d(e,"for","quick-invent-amount"),d(i,"type","number"),d(i,"id","quick-invent-amount"),d(i,"name","quick-invent-amount"),d(i,"min","0"),d(i,"step","1"),d(i,"class","custominput fshNumberInput"),i.required=!0,d(c,"class","custombutton"),d(c,"type","submit"),c.value="Quick Invent",v(c,"margin-left","8px"),d(L,"class","composing-progress-bar"),v(L,"background-position","right top"),v(L,"width",n[3]+"%"),v(L,"transition","width 0.4s ease-out"),v(L,"position","absolute"),v(L,"top","0px"),v(Q,"position","relative"),d(_,"class","composing-progress"),v(_,"margin","0px auto"),v(_,"font-weight","bold"),v(_,"color","#fff"),v(_,"left","0px"),v(B,"display","inline-block"),v(B,"width","250px"),d(B,"class","fshQs fshGreen"),v(W,"display","inline-block"),v(W,"width","250px"),d(W,"class","fshQs fshRed"),v(P,"margin-top","36px"),d(t,"class","fshCenter"),v(t,"margin-top","12px")},m(m,l){b(m,t,l),g(t,e),g(t,s),g(t,i),h(i,n[0]),g(t,a),x(r,t,null),g(t,o),g(t,c),g(t,u),g(t,D),en&&en.m(D,null),g(D,E),g(D,_),g(_,L),g(_,M),g(_,Q),g(Q,R),g(Q,T),g(Q,A),g(D,O),g(D,P),g(P,B),g(B,U),g(B,G),g(P,K),g(P,W),g(W,X),g(W,H),J=!0,Z||(nn=[$(i,"input",n[9]),$(t,"submit",k(n[6]))],Z=!0)},p(n,[t]){1&t&&w(i.value)!==n[0]&&h(i,n[0])
const e={}
2048&t&&(e.$$scope={dirty:t,ctx:n}),r.$set(e),n[4]?en?(en.p(n,t),16&t&&C(en,1)):(en=Y(n),en.c(),C(en,1),en.m(D,E)):en&&(N(),I(en,1,1,(()=>{en=null})),y()),(!J||8&t)&&v(L,"width",n[3]+"%"),(!J||6&t)&&tn!==(tn=n[1]+n[2]+"")&&F(R,tn),(!J||1&t)&&F(A,n[0]),(!J||2&t)&&F(G,n[1]),(!J||4&t)&&F(H,n[2])},i(n){J||(C(r.$$.fragment,n),C(en),J=!0)},o(n){I(r.$$.fragment,n),I(en),J=!1},d(n){n&&j(t),q(r),en&&en.d(),Z=!1,S(nn)}}}function nn(n,t,e){let{max:s}=t,{recipeID:i}=t,a=1,o=0,c=0,u=0,m=""
return n.$$set=n=>{"max"in n&&e(7,s=n.max),"recipeID"in n&&e(8,i=n.recipeID)},[a,o,c,u,m,function(){e(0,a=s),_("inventing","maxInventButton")},async function(){if(_("inventing","quickInvent"),!a)return
e(1,o=0),e(2,c=0),e(3,u=0),e(4,m=""),Array(a).fill(i).reduce((async(n,t)=>{const s=await n
if(!s||!0===s.s){const n=await function(n){return r(H,J,n)}(t)
return n?.s?n.r.success_count>0?e(1,o+=1):e(2,c+=1):e(4,m=n?.e?.message??"Server Error"),e(3,u=(o+c)/a*100),n}return s}),Promise.resolve())},s,i,function(){a=w(this.value),e(0,a)}]}class tn extends o{constructor(n){super(),c(this,n,nn,Z,u,{max:7,recipeID:8})}}function en(){const n=s('input[name="recipe_id"]')
if(!n)return
const t=X(),e=M().lastElementChild
var i,a
!function(n){const t=n.insertRow(-1).insertCell(-1)
t.className="header",t.setAttribute("height","1")}(e),i={max:t,recipeID:n.value},a=function(n){const t=n.insertRow(-1).insertCell(-1)
return t.className="fshCenter",t}(e),new tn({props:i,target:a})}function sn(n){return`${O}items${P}view&item_id=${n}`}function an(n,t){const e=function(n){if(!n)return
const t=T(/\/items\/(?<id>\d+)\.gif/,n.src)
return t||void 0}(t)
if(!e)return
const s=function(n){return A({href:sn(n),target:"_blank"})}(e)
Q(s,n),R(s,n)}function rn(n){an(n,n)}function on(){!function(){const n=K('.//b[.="Target Invention"]/../../following-sibling::*[1]//img')
an(s("#pCC b"),n)}(),n('#pCC img[src*="/items/"]').forEach(rn)
const t=s('#pCC input[value="Invent"]')?.form
t&&G(t)}function cn(){B()&&(on(),en())}export{cn as default}
//# sourceMappingURL=viewRecipe-N5HheJU2.js.map

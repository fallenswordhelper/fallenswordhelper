import{a as Te}from"./chunk-WLWWEENP.js";import{a as je}from"./chunk-BFPI245Y.js";import{c as K}from"./chunk-LPOF4M76.js";import{a as De}from"./chunk-D7C6WKQ4.js";import{a as Fe}from"./chunk-43IIXBTH.js";import"./chunk-XX7WHGVW.js";import{a as Ae}from"./chunk-XTPTGBYD.js";import{a as Se}from"./chunk-5JHOJO45.js";import{a as Ee}from"./chunk-BCQO3MME.js";import{a as de}from"./chunk-QHEBSHZB.js";import"./chunk-Y7G6NTHK.js";import{b as pe}from"./chunk-7IL2NT5X.js";import"./chunk-RUTCT63I.js";import"./chunk-FNQKLA73.js";import{a as S}from"./chunk-2POZNSQU.js";import"./chunk-EFGLR5DP.js";import{a as ve}from"./chunk-NDAPZI4R.js";import"./chunk-72GM4P2D.js";import{a as fe}from"./chunk-N3WGA77M.js";import"./chunk-DU2KGPGN.js";import"./chunk-DOS2ACQD.js";import"./chunk-IJW3CVBP.js";import{a as ge}from"./chunk-WO2SKJGR.js";import"./chunk-CQ6O4A6U.js";import{A as z,B as be,D as a,E as H,F as E,G as U,H as r,S as Ie,U as ke,V as we,W as T,X as G,Z as J,c as he,e as _e,ea as Ce,fa as ye,ga as Re,ha as qe,ia as xe,s as i,t as N,u as B,w as c,x as I,y as k}from"./chunk-LARRTAIA.js";import"./chunk-SAUO3OVM.js";import"./chunk-KZ2YKRLF.js";import{a as V}from"./chunk-2RTEJ4HO.js";import{a as L}from"./chunk-5SMO2RDK.js";import"./chunk-W6BTEAIW.js";import"./chunk-2BLOW4PA.js";import"./chunk-LZ2PTAAG.js";import"./chunk-WHGJMHBD.js";import"./chunk-RQPMUZUE.js";import"./chunk-GOCBTIV4.js";import{a as le}from"./chunk-X5TUSOWA.js";import"./chunk-XS3HTUXF.js";import"./chunk-EUYWEXMV.js";import"./chunk-QZKP2GOA.js";import{Y as ae,b as me,r as ce}from"./chunk-WXWB6HVS.js";import"./chunk-G66VZ6GW.js";import"./chunk-MAXAIYB2.js";function Ge(t){let[e,n]=fe(S("tr:nth-child(2) td",t)).split("/").map(m=>parseInt(m,10));return{have:e,need:n}}function Me(){return L(`#pCC td[background^="${me}ui/inventory/"]`).map(e=>e.parentElement.parentElement).map(Ge)}function W(){return Me().reduce((e,n)=>Math.min(e,Math.floor(n.have/n.need)),1/0)}function X(t){return je({subcmd:"doinvent",recipe_id:t})}function Qe(t){let e=Fe(t);return e.includes("successfully")?{r:{item:{}},s:!0}:{e:{message:e},s:!1}}function Y(t){return ve({cmd:"inventing",subcmd:"doinvent",recipe_id:t}).then(Qe)}function Z(t){return Ae(X,Y,t)}function Pe(t){let e;return{c(){e=I("(max)")},m(n,m){N(n,e,m)},d(n){n&&B(e)}}}function Le(t){let e,n,m,s,p,o,d;return{c(){e=c("div"),n=c("div"),n.textContent="INFORMATION",m=k(),s=c("div"),p=I(t[4]),r(n,"background","#8E8668"),r(n,"color","#FFF"),r(n,"font-size","smaller"),r(e,"border","2px solid #FFF"),r(e,"margin","10px auto"),r(e,"width","80%"),r(e,"background","#D3CFC1")},m(u,_){N(u,e,_),i(e,n),i(e,m),i(e,s),i(s,p),d=!0},p(u,_){(!d||_&16)&&E(p,u[4])},i(u){d||(u&&Ie(()=>{o||(o=J(e,K,{},!0)),o.run(1)}),d=!0)},o(u){u&&(o||(o=J(e,K,{},!1)),o.run(0)),d=!1},d(u){u&&B(e),u&&o&&o.end()}}}function Oe(t){let e,n,m,s,p,o,d,u,_,b,j,g,h,C,y,F=t[1]+t[2]+"",R,q,M,ne,D,x,ie,Q,re,A,oe,P,w,O,se;o=new De({props:{$$slots:{default:[Pe]},$$scope:{ctx:t}}}),o.$on("click",t[5]);let f=t[4]&&Le(t);return{c(){e=c("form"),n=c("label"),n.textContent="Select how many to quick invent",m=k(),s=c("input"),p=k(),Ce(o.$$.fragment),d=k(),u=c("input"),_=k(),b=c("div"),f&&f.c(),j=k(),g=c("div"),h=c("div"),C=k(),y=c("p"),R=I(F),q=I(" / "),M=I(t[0]),ne=k(),D=c("div"),x=c("div"),ie=I("Successes: "),Q=I(t[1]),re=k(),A=c("div"),oe=I("Failures: "),P=I(t[2]),a(n,"for","quick-invent-amount"),a(s,"type","number"),a(s,"id","quick-invent-amount"),a(s,"name","quick-invent-amount"),a(s,"min","0"),a(s,"step","1"),a(s,"class","custominput fshNumberInput"),s.required=!0,a(u,"class","custombutton"),a(u,"type","submit"),u.value="Quick Invent",r(u,"margin-left","8px"),a(h,"class","composing-progress-bar"),r(h,"background-position","right top"),r(h,"width",t[3]+"%"),r(h,"transition","width 0.4s ease-out"),r(h,"position","absolute"),r(h,"top","0px"),r(y,"position","relative"),a(g,"class","composing-progress"),r(g,"margin","0px auto"),r(g,"font-weight","bold"),r(g,"color","#fff"),r(g,"left","0px"),r(x,"display","inline-block"),r(x,"width","250px"),a(x,"class","fshQs fshGreen"),r(A,"display","inline-block"),r(A,"width","250px"),a(A,"class","fshQs fshRed"),r(D,"margin-top","36px"),a(e,"class","fshCenter"),r(e,"margin-top","12px")},m(l,v){N(l,e,v),i(e,n),i(e,m),i(e,s),U(s,t[0]),i(e,p),ye(o,e,null),i(e,d),i(e,u),i(e,_),i(e,b),f&&f.m(b,null),i(b,j),i(b,g),i(g,h),i(g,C),i(g,y),i(y,R),i(y,q),i(y,M),i(b,ne),i(b,D),i(D,x),i(x,ie),i(x,Q),i(D,re),i(D,A),i(A,oe),i(A,P),w=!0,O||(se=[z(s,"input",t[9]),z(e,"submit",be(t[6]))],O=!0)},p(l,[v]){v&1&&H(s.value)!==l[0]&&U(s,l[0]);let ue={};v&2048&&(ue.$$scope={dirty:v,ctx:l}),o.$set(ue),l[4]?f?(f.p(l,v),v&16&&T(f,1)):(f=Le(l),f.c(),T(f,1),f.m(b,j)):f&&(ke(),G(f,1,1,()=>{f=null}),we()),(!w||v&8)&&r(h,"width",l[3]+"%"),(!w||v&6)&&F!==(F=l[1]+l[2]+"")&&E(R,F),(!w||v&1)&&E(M,l[0]),(!w||v&2)&&E(Q,l[1]),(!w||v&4)&&E(P,l[2])},i(l){w||(T(o.$$.fragment,l),T(f),w=!0)},o(l){G(o.$$.fragment,l),G(f),w=!1},d(l){l&&B(e),Re(o),f&&f.d(),O=!1,he(se)}}}function Ve(t,e,n){let{max:m}=e,{recipeID:s}=e,p=1,o=0,d=0,u=0,_="";function b(){n(1,o=0),n(2,d=0),n(3,u=0),n(4,_="")}function j(){n(0,p=m),V("inventing","maxInventButton")}async function g(){if(V("inventing","quickInvent"),!p)return;b(),Array(p).fill(s).reduce(async(y,F)=>{let R=await y;if(!R||R.s===!0){let q=await Z(F);return q.s===!1?n(4,_=q.e.message):q.r.success_count>0?n(1,o+=1):n(2,d+=1),n(3,u=100*((o+d)/p)),q}return R},Promise.resolve())}function h(){p=H(this.value),n(0,p)}return t.$$set=C=>{"max"in C&&n(7,m=C.max),"recipeID"in C&&n(8,s=C.recipeID)},[p,o,d,u,_,j,g,m,s,h]}var $=class extends xe{constructor(e){super(),qe(this,e,Ve,Oe,_e,{max:7,recipeID:8})}},Ne=$;function ze(t,e){return new Ne({props:t,target:e})}function He(t){let n=t.insertRow(-1).insertCell(-1);n.className="header",n.setAttribute("height","1")}function Ue(t){let n=t.insertRow(-1).insertCell(-1);return n.className="fshCenter",n}function ee(){let t=S('input[name="recipe_id"]');if(!t)return;let e=W(),n=pe().lastElementChild;He(n),ze({max:e,recipeID:t.value},Ue(n))}function Je(t){if(!t)return;let e=le(/\/items\/(?<id>\d+)\.gif/,t.src);if(e)return e}function Ke(t){return`${ae}items${ce}view&item_id=${t}`}function We(t){return Se({href:Ke(t),target:"_blank"})}function Be(t,e){let n=Je(e);if(!n)return;let m=We(n);Ee(m,t),de(m,t)}function Xe(t){Be(t,t)}function Ye(){let t=Te('.//b[.="Target Invention"]/../../following-sibling::*[1]//img'),e=S("#pCC b");Be(e,t)}function Ze(){L('#pCC img[src*="/items/"]').forEach(Xe)}function te(){Ye(),Ze()}function $e(){ge()&&(te(),ee())}export{$e as default};
//# sourceMappingURL=viewRecipe-7EUSWD3Z.js.map

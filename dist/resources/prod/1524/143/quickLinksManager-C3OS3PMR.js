import{i as e}from"./Modal-BueFqMNE.js"
import{S as t,O as s,P as i,Q as n,R as l,T as a,a7 as c,U as d,cJ as o,W as r,X as u,_ as v,a3 as k,a4 as h,bp as p,a5 as b,a6 as f,a8 as x,s as m,cO as g,aa as w,Z as L,ao as y,H as M,ba as $,aj as Q,bF as R,bG as q,bA as j,bD as C,bH as S}from"./calfSystem-ChzN4Q-P.js"
import{M as A}from"./ModalTabbed-Ca7ch1GW.js"
import"./ModalTitled-C-7Cgn78.js"
function T(e,t,s){const i=e.slice()
return i[18]=t[s].name,i[19]=t[s].newWindow,i[20]=t[s].url,i[21]=t,i[22]=s,i}function W(e){let t,s,i,n,o,k,p,f,m,g,w,L,y,M,$,Q=e[18]+"",R=e[20]+""
function q(){e[8].call(f,e[21],e[22])}function j(){return e[9](e[22])}return{c(){t=l("div"),s=c(Q),i=a(),n=l("div"),o=c(R),k=a(),p=l("div"),f=l("input"),m=a(),g=l("div"),w=c("[\n        "),L=l("button"),L.textContent="Del",y=c("\n        ]\n      "),d(t,"class","svelte-dkxhir"),d(n,"class","svelte-dkxhir"),f.disabled=!0,d(f,"type","checkbox"),d(p,"class","centered svelte-dkxhir"),d(L,"type","button"),d(L,"class","svelte-dkxhir"),d(g,"class","buttons centered svelte-dkxhir")},m(l,a){r(l,t,a),u(t,s),r(l,i,a),r(l,n,a),u(n,o),r(l,k,a),r(l,p,a),u(p,f),f.checked=e[19],r(l,m,a),r(l,g,a),u(g,w),u(g,L),u(g,y),M||($=[v(f,"change",q),v(L,"click",j)],M=!0)},p(t,i){e=t,32&i&&Q!==(Q=e[18]+"")&&x(s,Q),32&i&&R!==(R=e[20]+"")&&x(o,R),32&i&&(f.checked=e[19])},d(e){e&&(h(t),h(i),h(n),h(k),h(p),h(m),h(g)),M=!1,b($)}}}function D(e){let t,s,i,f,x,m,g,w,L,y,M,$,Q,R,q,j,C,S,A,D,E,H=n(e[5]),O=[]
for(let t=0;t<H.length;t+=1)O[t]=W(T(e,H,t))
return{c(){t=l("div"),s=l("div"),s.innerHTML='<div class="svelte-dkxhir">Name</div> <div class="svelte-dkxhir">URL</div> <div class="centered svelte-dkxhir">New\n      <div class="wrapper svelte-dkxhir">[\n        <div class="tooltip svelte-dkxhir"><span class="tooltip-bottom-right" data-tooltip="Open page in a new window/tab">?</span></div>\n        ]</div></div> <div class="centered svelte-dkxhir">Action</div>',i=a(),f=l("div")
for(let e=0;e<O.length;e+=1)O[e].c()
x=a(),m=l("div"),g=l("div"),w=l("input"),L=a(),y=l("div"),M=l("input"),$=a(),Q=l("div"),R=l("input"),q=a(),j=l("div"),C=c("[\n      "),S=l("button"),S.textContent="Add",A=c("\n      ]"),d(s,"class","grid headings svelte-dkxhir"),d(f,"class","grid items svelte-dkxhir"),d(w,"placeholder","Log"),w.required=!0,d(w,"type","text"),d(w,"class","svelte-dkxhir"),o(w,"invalid",e[1]),d(M,"placeholder","?cmd=log"),M.required=!0,d(M,"type","text"),d(M,"class","svelte-dkxhir"),o(M,"invalid",e[3]),d(R,"type","checkbox"),d(Q,"class","centered svelte-dkxhir"),d(S,"type","button"),d(S,"class","svelte-dkxhir"),d(j,"class","buttons centered svelte-dkxhir"),d(m,"class","grid add svelte-dkxhir"),d(t,"class","container svelte-dkxhir")},m(n,l){r(n,t,l),u(t,s),u(t,i),u(t,f)
for(let e=0;e<O.length;e+=1)O[e]&&O[e].m(f,null)
u(t,x),u(t,m),u(m,g),u(g,w),e[10](w),u(m,L),u(m,y),u(y,M),e[13](M),u(m,$),u(m,Q),u(Q,R),e[16](R),u(m,q),u(m,j),u(j,C),u(j,S),u(j,A),D||(E=[v(w,"blur",e[11]),v(w,"focus",e[12]),v(M,"blur",e[14]),v(M,"focus",e[15]),v(S,"click",e[7])],D=!0)},p(e,[t]){if(96&t){let s
for(H=n(e[5]),s=0;s<H.length;s+=1){const i=T(e,H,s)
O[s]?O[s].p(i,t):(O[s]=W(i),O[s].c(),O[s].m(f,null))}for(;s<O.length;s+=1)O[s].d(1)
O.length=H.length}2&t&&o(w,"invalid",e[1]),8&t&&o(M,"invalid",e[3])},i:k,o:k,d(s){s&&h(t),p(O,s),e[10](null),e[13](null),e[16](null),D=!1,b(E)}}}function E(e,t,s){let i=0,n=0,l=0,a=0,c=0,d=f("quickLinks")||[]
function o(){w("quickLinks",d)}function r(e){m("Quick Links Manager","Delete Item"),s(5,d=d.toSpliced(e,1)),o()}return[i,n,l,a,c,d,r,function(){m("Quick Links Manager","Add Item"),n||a||(s(5,d=[...d,{name:i.value,url:l.value,newWindow:c.checked}]),s(0,i.value="",i),s(2,l.value="",l),s(4,c.checked=0,c),o())},function(e,t){e[t].newWindow=this.checked,s(5,d)},e=>r(e),function(e){g[e?"unshift":"push"]((()=>{i=e,s(0,i)}))},()=>{s(1,n=i.validity.valueMissing)},()=>{s(1,n=0)},function(e){g[e?"unshift":"push"]((()=>{l=e,s(2,l)}))},()=>{s(3,a=l.validity.valueMissing)},()=>{s(3,a=0)},function(e){g[e?"unshift":"push"]((()=>{c=e,s(4,c)}))}]}class H extends t{constructor(e){super(),s(this,e,E,D,i,{})}}function O(e){let t,s,i,n,c,p,f,x,m,g
return{c(){t=l("div"),s=l("div"),i=l("textarea"),n=a(),c=l("div"),p=l("button"),p.textContent="Save",f=a(),x=l("button"),x.textContent="Reset",d(i,"class","svelte-atd1b8"),o(i,"invalid",e[1]),d(s,"class","textContainer svelte-atd1b8"),d(p,"type","button"),d(x,"type","button"),d(c,"class","bottom svelte-atd1b8"),d(t,"class","container svelte-atd1b8")},m(l,a){r(l,t,a),u(t,s),u(s,i),L(i,e[0]),u(t,n),u(t,c),u(c,p),u(c,f),u(c,x),m||(g=[v(i,"input",e[5]),v(i,"blur",e[6]),v(i,"focus",e[7]),v(p,"click",e[3]),v(x,"click",e[4])],m=!0)},p(e,[t]){1&t&&L(i,e[0]),2&t&&o(i,"invalid",e[1])},i:k,o:k,d(e){e&&h(t),m=!1,b(g)}}}function I(e,t,s){let i=y("quickLinks"),n=0
const l=()=>M($(i)),a=()=>!l(),c=()=>Q("quickLinks",i.trim())
return[i,n,a,function(){m("Quick Links Raw Editor","Save"),l()?c():s(1,n=1)},function(){m("Quick Links Raw Editor","Reset"),s(0,i="[]"),s(1,n=0),c()},function(){i=this.value,s(0,i)},()=>{s(1,n=a())},()=>{s(1,n=0)}]}class N extends t{constructor(e){super(),s(this,e,I,O,i,{})}}function U(e){let t,s
return t=new A({props:{tabs:e[2],visible:e[0]}}),t.$on("close",e[1]),{c(){R(t.$$.fragment)},m(e,i){q(t,e,i),s=!0},p(e,[s]){const i={}
1&s&&(i.visible=e[0]),t.$set(i)},i(e){s||(j(t.$$.fragment,e),s=!0)},o(e){C(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function z(e,t,s){let{visible:i=!0}=t
const n=[{component:H,label:"Quick Links"},{component:N,label:"Raw Editor"}]
return e.$$set=e=>{"visible"in e&&s(0,i=e.visible)},[i,function(){m("Quick Links Manager","close"),s(0,i=!1)},n]}class F extends t{constructor(e){super(),s(this,e,z,U,i,{visible:0})}}const G={visible:!0}
let J=0
function P(){J=e(G,J,F)}export{P as default}
//# sourceMappingURL=quickLinksManager-C3OS3PMR.js.map

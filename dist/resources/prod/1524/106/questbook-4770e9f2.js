import{a as e,$ as t,S as l,L as s,M as a,bf as n,bg as r,ba as c,bd as i,bh as o,af as u,N as v,P as d,R as h,Z as p,a1 as m,bq as _,cM as f,ab as g,Y as b,d8 as k,O as z,V as w,c8 as x,b2 as $,aL as y,a$ as S,T as C,W as q,a2 as M,b0 as L,_ as Q,aK as N,cN as P}from"./calfSystem-076d7a01.js"
import{h as j,u as H}from"./await_block-904981a0.js"
import{e as T,u as U,d as A}from"./each-d53d627d.js"
import{M as G}from"./ModalTitled-fcaa63c3.js"
import"./Modal-925b2b72.js"
function W(){return t={subcmd:"view"},e({cmd:"questbook",...t})
var t}function B(e,t,l){const s=e.slice()
return s[35]=t[l],s}function F(e,t,l){const s=e.slice()
return s[38]=t[l],s[40]=l,s}function R(e){return{c:b,m:b,p:b,d:b}}function Z(e){let t,l,s,a,n,r,c,i,o,u,_,g,b,N,P,j,H,U,A,G,W,F,R,Z,K,O,V,D,E,I,J,X,ee,te,le,se,ae,ne,re,ce,ie,oe,ue,ve,de,he,pe,me,_e,fe,ge,be,ke,ze,we,xe,$e,ye,Se,Ce,qe,Me,Le,Qe,Ne,Pe,je,He,Te,Ue,Ae,Ge,We,Be,Fe,Re,Ze,Ke=e[0]?"Seasonal":"Normal",Oe=T(e[8]),Ve=[]
for(let t=0;t<Oe.length;t+=1)Ve[t]=Y(B(e,Oe,t))
return Be=k(e[19][0]),Fe=k(e[19][1]),{c(){t=v("h1"),t.textContent="Quest Book",l=z(),s=v("p"),a=m("[\n        "),n=v("label"),r=v("input"),c=m("\n          Normal"),i=m("\n        |\n        "),o=v("label"),u=v("input"),_=m("\n          Seasonal"),g=m("\n        ]"),b=z(),N=v("p"),P=m("Total "),j=m(Ke),H=m(" Quest Progress:"),U=z(),A=v("div"),G=v("img"),R=z(),Z=v("p"),K=m("[\n        "),O=v("label"),V=v("input"),D=m("\n          Active"),E=m(" |\n        "),I=v("label"),J=v("input"),X=m("\n          Complete"),ee=m(" |\n        "),te=v("label"),le=v("input"),se=m("\n          Not Started"),ae=m(" |\n        "),ne=v("label"),re=v("input"),ce=m("\n          Hidden"),ie=m("\n        ]"),oe=z(),ue=v("table"),ve=v("thead"),de=v("tr"),he=v("td"),pe=v("input"),me=z(),_e=v("td"),fe=m("Min lvl - Max lvl"),ge=v("br"),be=z(),ke=v("input"),ze=m(" -\n              "),we=v("input"),xe=z(),$e=v("td"),ye=v("input"),Se=z(),Ce=v("tr"),qe=v("th"),qe.textContent="Quest Name",Me=z(),Le=v("th"),Le.textContent="Level",Qe=z(),Ne=v("th"),Ne.textContent="Starting Realm",Pe=z(),je=v("th"),je.textContent="Status",He=z(),Te=v("th"),Te.textContent="Guides",Ue=z(),Ae=v("th"),Ae.textContent="Hide",Ge=z(),We=v("tbody")
for(let e=0;e<Ve.length;e+=1)Ve[e].c()
d(t,"class","svelte-1ltzvr"),d(r,"type","radio"),d(r,"name","seasonal"),r.__value=!1,w(r,r.__value),d(r,"class","svelte-1ltzvr"),d(n,"class","asLink svelte-1ltzvr"),x(n,"active",!e[0]),d(u,"type","radio"),d(u,"name","seasonal"),u.__value=!0,w(u,u.__value),d(u,"class","svelte-1ltzvr"),d(o,"class","asLink svelte-1ltzvr"),x(o,"active",e[0]),d(s,"class","svelte-1ltzvr"),d(N,"class","svelte-1ltzvr"),$(G.src,W=y+"ui/misc/progress_purple.png")||d(G,"src",W),S(G,"width",100*e[9]+"%"),d(G,"height","10"),d(G,"class","tip-static"),d(G,"alt","Progress"),d(G,"data-tipped",F="<span class='fshHelpTitle'>Quests Completed</span><br>"+e[7].filter(e[13].completed).length+" / "+e[7].length),d(A,"id","fshQuestProgress"),d(A,"class","svelte-1ltzvr"),d(V,"type","radio"),V.__value="active",w(V,V.__value),d(V,"class","svelte-1ltzvr"),d(O,"class","asLink svelte-1ltzvr"),x(O,"active","active"===e[1]),d(J,"type","radio"),J.__value="completed",w(J,J.__value),d(J,"class","svelte-1ltzvr"),d(I,"class","asLink svelte-1ltzvr"),x(I,"active","completed"===e[1]),d(le,"type","radio"),le.__value="notStarted",w(le,le.__value),d(le,"class","svelte-1ltzvr"),d(te,"class","asLink svelte-1ltzvr"),x(te,"active","notStarted"===e[1]),d(re,"type","radio"),re.__value="hidden",w(re,re.__value),d(re,"class","svelte-1ltzvr"),d(ne,"class","asLink svelte-1ltzvr"),x(ne,"active","hidden"===e[1]),d(Z,"class","svelte-1ltzvr"),d(pe,"type","text"),d(pe,"placeholder","Search quest name"),d(he,"class","svelte-1ltzvr"),d(ke,"type","number"),d(ke,"placeholder","Min lvl"),d(ke,"class","svelte-1ltzvr"),d(we,"type","number"),d(we,"placeholder","Max lvl"),d(we,"class","svelte-1ltzvr"),d(_e,"class","svelte-1ltzvr"),d(ye,"type","text"),d(ye,"placeholder","Search realm name"),d($e,"class","svelte-1ltzvr"),d(de,"class","svelte-1ltzvr"),d(qe,"width","20%"),d(qe,"class","fshPointer svelte-1ltzvr"),d(Le,"width","20%"),d(Le,"class","fshPointer svelte-1ltzvr"),d(Ne,"width","25%"),d(Ne,"class","fshPointer svelte-1ltzvr"),d(je,"width","10%"),d(je,"class","fshPointer svelte-1ltzvr"),d(Te,"width","10%"),d(Te,"class","svelte-1ltzvr"),d(Ae,"width","10%"),d(Ae,"class","svelte-1ltzvr"),d(Ce,"class","svelte-1ltzvr"),d(ue,"class","svelte-1ltzvr"),Be.p(V,J,le,re),Fe.p(r,u)},m(v,d){h(v,t,d),h(v,l,d),h(v,s,d),C(s,a),C(s,n),C(n,r),r.checked=r.__value===e[0],C(n,c),C(s,i),C(s,o),C(o,u),u.checked=u.__value===e[0],C(o,_),C(s,g),h(v,b,d),h(v,N,d),C(N,P),C(N,j),C(N,H),h(v,U,d),h(v,A,d),C(A,G),h(v,R,d),h(v,Z,d),C(Z,K),C(Z,O),C(O,V),V.checked=V.__value===e[1],C(O,D),C(Z,E),C(Z,I),C(I,J),J.checked=J.__value===e[1],C(I,X),C(Z,ee),C(Z,te),C(te,le),le.checked=le.__value===e[1],C(te,se),C(Z,ae),C(Z,ne),C(ne,re),re.checked=re.__value===e[1],C(ne,ce),C(Z,ie),h(v,oe,d),h(v,ue,d),C(ue,ve),C(ve,de),C(de,he),C(he,pe),w(pe,e[3]),C(de,me),C(de,_e),C(_e,fe),C(_e,ge),C(_e,be),C(_e,ke),w(ke,e[5]),C(_e,ze),C(_e,we),w(we,e[6]),C(de,xe),C(de,$e),C($e,ye),w(ye,e[4]),C(ve,Se),C(ve,Ce),C(Ce,qe),C(Ce,Me),C(Ce,Le),C(Ce,Qe),C(Ce,Ne),C(Ce,Pe),C(Ce,je),C(Ce,He),C(Ce,Te),C(Ce,Ue),C(Ce,Ae),C(ue,Ge),C(ue,We)
for(let e=0;e<Ve.length;e+=1)Ve[e]&&Ve[e].m(We,null)
Re||(Ze=[q(r,"change",e[18]),q(u,"change",e[20]),q(V,"change",e[21]),q(J,"change",e[22]),q(le,"change",e[23]),q(re,"change",e[24]),q(pe,"input",e[25]),q(ke,"input",e[26]),q(we,"input",e[27]),q(ye,"input",e[28]),q(qe,"click",e[29]),q(Le,"click",e[30]),q(Ne,"click",e[31]),q(je,"click",e[32])],Re=!0)},p(e,t){if(1&t[0]&&(r.checked=r.__value===e[0]),1&t[0]&&x(n,"active",!e[0]),1&t[0]&&(u.checked=u.__value===e[0]),1&t[0]&&x(o,"active",e[0]),1&t[0]&&Ke!==(Ke=e[0]?"Seasonal":"Normal")&&M(j,Ke),512&t[0]&&S(G,"width",100*e[9]+"%"),128&t[0]&&F!==(F="<span class='fshHelpTitle'>Quests Completed</span><br>"+e[7].filter(e[13].completed).length+" / "+e[7].length)&&d(G,"data-tipped",F),2&t[0]&&(V.checked=V.__value===e[1]),2&t[0]&&x(O,"active","active"===e[1]),2&t[0]&&(J.checked=J.__value===e[1]),2&t[0]&&x(I,"active","completed"===e[1]),2&t[0]&&(le.checked=le.__value===e[1]),2&t[0]&&x(te,"active","notStarted"===e[1]),2&t[0]&&(re.checked=re.__value===e[1]),2&t[0]&&x(ne,"active","hidden"===e[1]),8&t[0]&&pe.value!==e[3]&&w(pe,e[3]),32&t[0]&&f(ke.value)!==e[5]&&w(ke,e[5]),64&t[0]&&f(we.value)!==e[6]&&w(we,e[6]),16&t[0]&&ye.value!==e[4]&&w(ye,e[4]),3330&t[0]){let l
for(Oe=T(e[8]),l=0;l<Oe.length;l+=1){const s=B(e,Oe,l)
Ve[l]?Ve[l].p(s,t):(Ve[l]=Y(s),Ve[l].c(),Ve[l].m(We,null))}for(;l<Ve.length;l+=1)Ve[l].d(1)
Ve.length=Oe.length}},d(e){e&&(p(t),p(l),p(s),p(b),p(N),p(U),p(A),p(R),p(Z),p(oe),p(ue)),L(Ve,e),Be.r(),Fe.r(),Re=!1,Q(Ze)}}}function K(e,t){let l
return{key:e,first:null,c(){l=v("div"),d(l,"class","fshStage svelte-1ltzvr"),x(l,"incomplete",t[40]>=t[35].current_stage),this.first=l},m(e,t){h(e,l,t)},p(e,s){t=e,256&s[0]&&x(l,"incomplete",t[40]>=t[35].current_stage)},d(e){e&&p(l)}}}function O(e){let t,l,s
return{c(){t=v("button"),t.textContent="Hide",d(t,"type","button")},m(a,n){h(a,t,n),l||(s=q(t,"click",(function(){P(e[10](e[35]))&&e[10](e[35]).apply(this,arguments)})),l=!0)},p(t,l){e=t},d(e){e&&p(t),l=!1,s()}}}function V(e){let t,l,s
return{c(){t=v("button"),t.textContent="Unhide",d(t,"type","button")},m(a,n){h(a,t,n),l||(s=q(t,"click",(function(){P(e[11](e[35]))&&e[11](e[35]).apply(this,arguments)})),l=!0)},p(t,l){e=t},d(e){e&&p(t),l=!1,s()}}}function Y(e){let t,l,s,a,n,r,c,i,o,u,_,f,g,b,k,w,S,q,L,Q,P,j,H,G,W,B,R,Z,Y,D,E,I,J,X,ee=e[35].name+"",te=e[35].min_level+"",le=e[35].realm.name+"",se=[],ae=new Map,ne=Math.round(e[35].current_stage/e[35].max_stage*100)+"",re=T(Array(e[35].max_stage))
const ce=e=>e[40]
for(let t=0;t<re.length;t+=1){let l=F(e,re,t),s=ce(l)
ae.set(s,se[t]=K(s,l))}function ie(e,t){return"hidden"===e[1]?V:O}let oe=ie(e),ue=oe(e)
return{c(){t=v("tr"),l=v("td"),s=v("a"),a=m(ee),r=z(),c=v("td"),i=m(te),o=z(),u=v("td"),_=v("a"),f=m(le),b=z(),k=v("td"),w=v("div")
for(let e=0;e<se.length;e+=1)se[e].c()
S=z(),q=v("div"),L=m(ne),Q=m("%"),P=z(),j=v("td"),H=v("a"),G=v("img"),R=z(),Z=v("a"),Y=v("img"),I=z(),J=v("td"),ue.c(),X=z(),d(s,"href",n="https://fallensword.com/index.php?cmd=questbook&subcmd=viewquest&quest_id="+e[35].id),d(l,"class","svelte-1ltzvr"),d(c,"class","svelte-1ltzvr"),d(_,"href",g=N+"realms&subcmd=view&realm_id="+e[35].realm.id),d(_,"target","_blank"),d(_,"rel","noreferrer"),d(u,"class","svelte-1ltzvr"),d(q,"class","percentbar-value"),d(w,"class","fshPercentbar svelte-1ltzvr"),x(w,"complete",e[35].current_stage===e[35].max_stage),d(k,"class","svelte-1ltzvr"),$(G.src,W="https://fallensword.com/favicon.ico")||d(G,"src","https://fallensword.com/favicon.ico"),d(G,"alt","UFSG"),d(G,"width","16"),d(G,"hieght","16"),d(G,"class","tip-static svelte-1ltzvr"),d(G,"data-tipped","Search for this quest on the Ultimate Fallen Sword Guide"),d(H,"href",B=N+"quests&subcmd=view&quest_id="+e[35].id),d(H,"target","_blank"),d(H,"rel","noreferrer"),$(Y.src,D=y+"ui/misc/wiki.png")||d(Y,"src",D),d(Y,"alt","Wiki"),d(Y,"width","16"),d(Y,"height","16"),d(Y,"class","tip-static svelte-1ltzvr"),d(Y,"data-tipped","Search for this quest on the Wiki"),d(Z,"href",E="https://wiki.fallensword.com/index.php?title="+e[35].name.replace(/ /g,"_")),d(Z,"target","_blank"),d(Z,"rel","noreferrer"),d(j,"class","svelte-1ltzvr"),d(J,"class","svelte-1ltzvr"),d(t,"class","svelte-1ltzvr")},m(e,n){h(e,t,n),C(t,l),C(l,s),C(s,a),C(t,r),C(t,c),C(c,i),C(t,o),C(t,u),C(u,_),C(_,f),C(t,b),C(t,k),C(k,w)
for(let e=0;e<se.length;e+=1)se[e]&&se[e].m(w,null)
C(w,S),C(w,q),C(q,L),C(q,Q),C(t,P),C(t,j),C(j,H),C(H,G),C(j,R),C(j,Z),C(Z,Y),C(t,I),C(t,J),ue.m(J,null),C(t,X)},p(e,t){256&t[0]&&ee!==(ee=e[35].name+"")&&M(a,ee),256&t[0]&&n!==(n="https://fallensword.com/index.php?cmd=questbook&subcmd=viewquest&quest_id="+e[35].id)&&d(s,"href",n),256&t[0]&&te!==(te=e[35].min_level+"")&&M(i,te),256&t[0]&&le!==(le=e[35].realm.name+"")&&M(f,le),256&t[0]&&g!==(g=N+"realms&subcmd=view&realm_id="+e[35].realm.id)&&d(_,"href",g),256&t[0]&&(re=T(Array(e[35].max_stage)),se=U(se,t,ce,1,e,re,ae,w,A,K,S,F)),256&t[0]&&ne!==(ne=Math.round(e[35].current_stage/e[35].max_stage*100)+"")&&M(L,ne),256&t[0]&&x(w,"complete",e[35].current_stage===e[35].max_stage),256&t[0]&&B!==(B=N+"quests&subcmd=view&quest_id="+e[35].id)&&d(H,"href",B),256&t[0]&&E!==(E="https://wiki.fallensword.com/index.php?title="+e[35].name.replace(/ /g,"_"))&&d(Z,"href",E),oe===(oe=ie(e))&&ue?ue.p(e,t):(ue.d(1),ue=oe(e),ue&&(ue.c(),ue.m(J,null)))},d(e){e&&p(t)
for(let e=0;e<se.length;e+=1)se[e].d()
ue.d()}}}function D(e){let t
return{c(){t=m("Loading...")},m(e,l){h(e,t,l)},p:b,d(e){e&&p(t)}}}function E(e){let t,l={ctx:e,current:null,token:null,hasCatch:!1,pending:D,then:Z,catch:R}
return j(e[12](),l),{c(){t=v("div"),l.block.c(),d(t,"id","fshQuestContainer"),d(t,"class","svelte-1ltzvr")},m(e,s){h(e,t,s),l.block.m(t,l.anchor=null),l.mount=()=>t,l.anchor=null},p(t,s){H(l,e=t,s)},d(e){e&&p(t),l.block.d(),l.token=null,l=null}}}function I(e){let t
return{c(){t=m("Quest Book")},m(e,l){h(e,t,l)},d(e){e&&p(t)}}}function J(e){let t,l
return t=new G({props:{visible:e[2],$$slots:{title:[I],default:[E]},$$scope:{ctx:e}}}),t.$on("close",e[15]),{c(){n(t.$$.fragment)},m(e,s){r(t,e,s),l=!0},p(e,l){const s={}
4&l[0]&&(s.visible=e[2]),1019&l[0]|1024&l[1]&&(s.$$scope={dirty:l,ctx:e}),t.$set(s)},i(e){l||(c(t.$$.fragment,e),l=!0)},o(e){i(t.$$.fragment,e),l=!1},d(e){o(t,e)}}}function X(e,t){return e.toUpperCase().includes(t.toUpperCase())}function ee(e,l,s){let a,n,r,{seasonal:c=!1}=l,{status:i="active"}=l,{visible:o=!0}=l,v=u("hideQuestNames").split(",")
function d(){g("hideQuestNames",v.join(","))}let h="",p="",m=0,b=6e3,k=[]
const z={active:e=>e.current_stage>0&&e.max_stage>e.current_stage,notStarted:e=>0===e.current_stage,completed:e=>e.current_stage===e.max_stage,hidden:e=>v.includes(e.name)}
let w=""
function x(e){w===e?k.reverse():"string"==typeof k[0][e]?k.sort(((t,l)=>_(t[e],l[e]))):k.sort(((t,l)=>t[e]-l[e])),s(17,k),w=e}return e.$$set=e=>{"seasonal"in e&&s(0,c=e.seasonal),"status"in e&&s(1,i=e.status),"visible"in e&&s(2,o=e.visible)},e.$$.update=()=>{var t,l,o,u
131073&e.$$.dirty[0]&&s(7,a=k.filter((e=>e.seasonal===c))),128&e.$$.dirty[0]&&s(9,n=a.filter(z.completed).length/a.length),65786&e.$$.dirty[0]&&s(8,r=a.filter(z[i]).filter((e=>v.includes(e.name)===("hidden"===i))).filter((t=h,l=p,o=m,u=b,e=>e.min_level>=o&&e.min_level<=u&&X(e.realm_name,l)&&X(e.name,t))))},[c,i,o,h,p,m,b,a,r,n,function(e){s(16,v=[...v,e.name]),d()},function(e){s(16,v=v.filter((t=>t!==e.name))),d()},async function(){const e=await t(W)
s(17,k=e.r.map((e=>({...e,realm_name:e.realm.name}))))},z,x,function(){s(2,o=!1)},v,k,function(){c=this.__value,s(0,c)},[[],[]],function(){c=this.__value,s(0,c)},function(){i=this.__value,s(1,i)},function(){i=this.__value,s(1,i)},function(){i=this.__value,s(1,i)},function(){i=this.__value,s(1,i)},function(){h=this.value,s(3,h)},function(){m=f(this.value),s(5,m)},function(){b=f(this.value),s(6,b)},function(){p=this.value,s(4,p)},()=>x("name"),()=>x("min_level"),()=>x("realm_name"),()=>x("current_stage")]}var te=class extends l{constructor(e){super(),s(this,e,ee,J,a,{seasonal:0,status:1,visible:2},null,[-1,-1])}}
let le
function se(){return le?le.$set({visible:!0}):le=new te({target:document.body}),le}export{se as default}
//# sourceMappingURL=questbook-4770e9f2.js.map

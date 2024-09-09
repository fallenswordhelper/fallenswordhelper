import{a as e,$ as t,S as l,L as s,M as a,bh as n,bi as r,bc as i,bf as c,bj as o,ai as u,O as v,Q as d,T as h,a0 as p,a3 as m,bs as _,cQ as f,ae as g,_ as b,N as k,dI as z,P as w,W as x,ca as y,b6 as $,aN as S,b3 as C,U as q,X as M,a4 as Q,b4 as L,a1 as N,aM as P,Z as j,a5 as U,cR as H}from"./calfSystem-DCvZki7i.js"
import{h as T,u as A}from"./await_block-NiszvzL2.js"
import{M as G}from"./ModalTitled-yH0MF38Q.js"
import"./Modal-8CjozIrn.js"
function W(){return t={subcmd:"view"},e({cmd:"questbook",...t})
var t}function B(e,t,l){const s=e.slice()
return s[35]=t[l],s}function F(e,t,l){const s=e.slice()
return s[38]=t[l],s[40]=l,s}function R(e){return{c:b,m:b,p:b,d:b}}function I(e){let t,l,s,a,n,r,i,c,o,u,_,g,b,P,j,U,H,T,A,G,W,F,R,I,O,X,Z,E,J,K,V,Y,ee,te,le,se,ae,ne,re,ie,ce,oe,ue,ve,de,he,pe,me,_e,fe,ge,be,ke,ze,we,xe,ye,$e,Se,Ce,qe,Me,Qe,Le,Ne,Pe,je,Ue,He,Te,Ae,Ge,We,Be,Fe,Re,Ie,Oe=e[0]?"Seasonal":"Normal",Xe=k(e[8]),Ze=[]
for(let t=0;t<Xe.length;t+=1)Ze[t]=D(B(e,Xe,t))
return Be=z(e[19][0]),Fe=z(e[19][1]),{c(){t=v("h1"),t.textContent="Quest Book",l=w(),s=v("p"),a=m("[\n        "),n=v("label"),r=v("input"),i=m("\n          Normal"),c=m("\n        |\n        "),o=v("label"),u=v("input"),_=m("\n          Seasonal"),g=m("\n        ]"),b=w(),P=v("p"),j=m("Total "),U=m(Oe),H=m(" Quest Progress:"),T=w(),A=v("div"),G=v("img"),R=w(),I=v("p"),O=m("[\n        "),X=v("label"),Z=v("input"),E=m("\n          Active"),J=m(" |\n        "),K=v("label"),V=v("input"),Y=m("\n          Complete"),ee=m(" |\n        "),te=v("label"),le=v("input"),se=m("\n          Not Started"),ae=m(" |\n        "),ne=v("label"),re=v("input"),ie=m("\n          Hidden"),ce=m("\n        ]"),oe=w(),ue=v("table"),ve=v("thead"),de=v("tr"),he=v("td"),pe=v("input"),me=w(),_e=v("td"),fe=m("Min lvl - Max lvl"),ge=v("br"),be=w(),ke=v("input"),ze=m(" -\n              "),we=v("input"),xe=w(),ye=v("td"),$e=v("input"),Se=w(),Ce=v("tr"),qe=v("th"),qe.textContent="Quest Name",Me=w(),Qe=v("th"),Qe.textContent="Level",Le=w(),Ne=v("th"),Ne.textContent="Starting Realm",Pe=w(),je=v("th"),je.textContent="Status",Ue=w(),He=v("th"),He.textContent="Guides",Te=w(),Ae=v("th"),Ae.textContent="Hide",Ge=w(),We=v("tbody")
for(let e=0;e<Ze.length;e+=1)Ze[e].c()
d(t,"class","svelte-1ltzvr"),d(r,"type","radio"),d(r,"name","seasonal"),r.__value=!1,x(r,r.__value),d(r,"class","svelte-1ltzvr"),d(n,"class","asLink svelte-1ltzvr"),y(n,"active",!e[0]),d(u,"type","radio"),d(u,"name","seasonal"),u.__value=!0,x(u,u.__value),d(u,"class","svelte-1ltzvr"),d(o,"class","asLink svelte-1ltzvr"),y(o,"active",e[0]),d(s,"class","svelte-1ltzvr"),d(P,"class","svelte-1ltzvr"),$(G.src,W=S+"ui/misc/progress_purple.png")||d(G,"src",W),C(G,"width",100*e[9]+"%"),d(G,"height","10"),d(G,"class","tip-static"),d(G,"alt","Progress"),d(G,"data-tipped",F="<span class='fshHelpTitle'>Quests Completed</span><br>"+e[7].filter(e[13].completed).length+" / "+e[7].length),d(A,"id","fshQuestProgress"),d(A,"class","svelte-1ltzvr"),d(Z,"type","radio"),Z.__value="active",x(Z,Z.__value),d(Z,"class","svelte-1ltzvr"),d(X,"class","asLink svelte-1ltzvr"),y(X,"active","active"===e[1]),d(V,"type","radio"),V.__value="completed",x(V,V.__value),d(V,"class","svelte-1ltzvr"),d(K,"class","asLink svelte-1ltzvr"),y(K,"active","completed"===e[1]),d(le,"type","radio"),le.__value="notStarted",x(le,le.__value),d(le,"class","svelte-1ltzvr"),d(te,"class","asLink svelte-1ltzvr"),y(te,"active","notStarted"===e[1]),d(re,"type","radio"),re.__value="hidden",x(re,re.__value),d(re,"class","svelte-1ltzvr"),d(ne,"class","asLink svelte-1ltzvr"),y(ne,"active","hidden"===e[1]),d(I,"class","svelte-1ltzvr"),d(pe,"type","text"),d(pe,"placeholder","Search quest name"),d(he,"class","svelte-1ltzvr"),d(ke,"type","number"),d(ke,"placeholder","Min lvl"),d(ke,"class","svelte-1ltzvr"),d(we,"type","number"),d(we,"placeholder","Max lvl"),d(we,"class","svelte-1ltzvr"),d(_e,"class","svelte-1ltzvr"),d($e,"type","text"),d($e,"placeholder","Search realm name"),d(ye,"class","svelte-1ltzvr"),d(de,"class","svelte-1ltzvr"),d(qe,"width","20%"),d(qe,"class","fshPointer svelte-1ltzvr"),d(Qe,"width","20%"),d(Qe,"class","fshPointer svelte-1ltzvr"),d(Ne,"width","25%"),d(Ne,"class","fshPointer svelte-1ltzvr"),d(je,"width","10%"),d(je,"class","fshPointer svelte-1ltzvr"),d(He,"width","10%"),d(He,"class","svelte-1ltzvr"),d(Ae,"width","10%"),d(Ae,"class","svelte-1ltzvr"),d(Ce,"class","svelte-1ltzvr"),d(ue,"class","svelte-1ltzvr"),Be.p(Z,V,le,re),Fe.p(r,u)},m(v,d){h(v,t,d),h(v,l,d),h(v,s,d),q(s,a),q(s,n),q(n,r),r.checked=r.__value===e[0],q(n,i),q(s,c),q(s,o),q(o,u),u.checked=u.__value===e[0],q(o,_),q(s,g),h(v,b,d),h(v,P,d),q(P,j),q(P,U),q(P,H),h(v,T,d),h(v,A,d),q(A,G),h(v,R,d),h(v,I,d),q(I,O),q(I,X),q(X,Z),Z.checked=Z.__value===e[1],q(X,E),q(I,J),q(I,K),q(K,V),V.checked=V.__value===e[1],q(K,Y),q(I,ee),q(I,te),q(te,le),le.checked=le.__value===e[1],q(te,se),q(I,ae),q(I,ne),q(ne,re),re.checked=re.__value===e[1],q(ne,ie),q(I,ce),h(v,oe,d),h(v,ue,d),q(ue,ve),q(ve,de),q(de,he),q(he,pe),x(pe,e[3]),q(de,me),q(de,_e),q(_e,fe),q(_e,ge),q(_e,be),q(_e,ke),x(ke,e[5]),q(_e,ze),q(_e,we),x(we,e[6]),q(de,xe),q(de,ye),q(ye,$e),x($e,e[4]),q(ve,Se),q(ve,Ce),q(Ce,qe),q(Ce,Me),q(Ce,Qe),q(Ce,Le),q(Ce,Ne),q(Ce,Pe),q(Ce,je),q(Ce,Ue),q(Ce,He),q(Ce,Te),q(Ce,Ae),q(ue,Ge),q(ue,We)
for(let e=0;e<Ze.length;e+=1)Ze[e]&&Ze[e].m(We,null)
Re||(Ie=[M(r,"change",e[18]),M(u,"change",e[20]),M(Z,"change",e[21]),M(V,"change",e[22]),M(le,"change",e[23]),M(re,"change",e[24]),M(pe,"input",e[25]),M(ke,"input",e[26]),M(we,"input",e[27]),M($e,"input",e[28]),M(qe,"click",e[29]),M(Qe,"click",e[30]),M(Ne,"click",e[31]),M(je,"click",e[32])],Re=!0)},p(e,t){if(1&t[0]&&(r.checked=r.__value===e[0]),1&t[0]&&y(n,"active",!e[0]),1&t[0]&&(u.checked=u.__value===e[0]),1&t[0]&&y(o,"active",e[0]),1&t[0]&&Oe!==(Oe=e[0]?"Seasonal":"Normal")&&Q(U,Oe),512&t[0]&&C(G,"width",100*e[9]+"%"),128&t[0]&&F!==(F="<span class='fshHelpTitle'>Quests Completed</span><br>"+e[7].filter(e[13].completed).length+" / "+e[7].length)&&d(G,"data-tipped",F),2&t[0]&&(Z.checked=Z.__value===e[1]),2&t[0]&&y(X,"active","active"===e[1]),2&t[0]&&(V.checked=V.__value===e[1]),2&t[0]&&y(K,"active","completed"===e[1]),2&t[0]&&(le.checked=le.__value===e[1]),2&t[0]&&y(te,"active","notStarted"===e[1]),2&t[0]&&(re.checked=re.__value===e[1]),2&t[0]&&y(ne,"active","hidden"===e[1]),8&t[0]&&pe.value!==e[3]&&x(pe,e[3]),32&t[0]&&f(ke.value)!==e[5]&&x(ke,e[5]),64&t[0]&&f(we.value)!==e[6]&&x(we,e[6]),16&t[0]&&$e.value!==e[4]&&x($e,e[4]),3330&t[0]){let l
for(Xe=k(e[8]),l=0;l<Xe.length;l+=1){const s=B(e,Xe,l)
Ze[l]?Ze[l].p(s,t):(Ze[l]=D(s),Ze[l].c(),Ze[l].m(We,null))}for(;l<Ze.length;l+=1)Ze[l].d(1)
Ze.length=Xe.length}},d(e){e&&(p(t),p(l),p(s),p(b),p(P),p(T),p(A),p(R),p(I),p(oe),p(ue)),L(Ze,e),Be.r(),Fe.r(),Re=!1,N(Ie)}}}function O(e,t){let l
return{key:e,first:null,c(){l=v("div"),d(l,"class","fshStage svelte-1ltzvr"),y(l,"incomplete",t[40]>=t[35].current_stage),this.first=l},m(e,t){h(e,l,t)},p(e,s){t=e,256&s[0]&&y(l,"incomplete",t[40]>=t[35].current_stage)},d(e){e&&p(l)}}}function X(e){let t,l,s
return{c(){t=v("button"),t.textContent="Hide",d(t,"type","button")},m(a,n){h(a,t,n),l||(s=M(t,"click",(function(){H(e[10](e[35]))&&e[10](e[35]).apply(this,arguments)})),l=!0)},p(t,l){e=t},d(e){e&&p(t),l=!1,s()}}}function Z(e){let t,l,s
return{c(){t=v("button"),t.textContent="Unhide",d(t,"type","button")},m(a,n){h(a,t,n),l||(s=M(t,"click",(function(){H(e[11](e[35]))&&e[11](e[35]).apply(this,arguments)})),l=!0)},p(t,l){e=t},d(e){e&&p(t),l=!1,s()}}}function D(e){let t,l,s,a,n,r,i,c,o,u,_,f,g,b,z,x,C,M,L,N,H,T,A,G,W,B,R,I,D,E,J,K,V,Y,ee=e[35].name+"",te=e[35].min_level+"",le=e[35].realm.name+"",se=[],ae=new Map,ne=Math.round(e[35].current_stage/e[35].max_stage*100)+"",re=k(Array(e[35].max_stage))
const ie=e=>e[40]
for(let t=0;t<re.length;t+=1){let l=F(e,re,t),s=ie(l)
ae.set(s,se[t]=O(s,l))}function ce(e,t){return"hidden"===e[1]?Z:X}let oe=ce(e),ue=oe(e)
return{c(){t=v("tr"),l=v("td"),s=v("a"),a=m(ee),r=w(),i=v("td"),c=m(te),o=w(),u=v("td"),_=v("a"),f=m(le),b=w(),z=v("td"),x=v("div")
for(let e=0;e<se.length;e+=1)se[e].c()
C=w(),M=v("div"),L=m(ne),N=m("%"),H=w(),T=v("td"),A=v("a"),G=v("img"),R=w(),I=v("a"),D=v("img"),K=w(),V=v("td"),ue.c(),Y=w(),d(s,"href",n="https://fallensword.com/index.php?cmd=questbook&subcmd=viewquest&quest_id="+e[35].id),d(l,"class","svelte-1ltzvr"),d(i,"class","svelte-1ltzvr"),d(_,"href",g=P+"realms&subcmd=view&realm_id="+e[35].realm.id),d(_,"target","_blank"),d(_,"rel","noreferrer"),d(u,"class","svelte-1ltzvr"),d(M,"class","percentbar-value"),d(x,"class","fshPercentbar svelte-1ltzvr"),y(x,"complete",e[35].current_stage===e[35].max_stage),d(z,"class","svelte-1ltzvr"),$(G.src,W="https://fallensword.com/favicon.ico")||d(G,"src","https://fallensword.com/favicon.ico"),d(G,"alt","UFSG"),d(G,"width","16"),d(G,"hieght","16"),d(G,"class","tip-static svelte-1ltzvr"),d(G,"data-tipped","Search for this quest on the Ultimate Fallen Sword Guide"),d(A,"href",B=P+"quests&subcmd=view&quest_id="+e[35].id),d(A,"target","_blank"),d(A,"rel","noreferrer"),$(D.src,E=S+"ui/misc/wiki.png")||d(D,"src",E),d(D,"alt","Wiki"),d(D,"width","16"),d(D,"height","16"),d(D,"class","tip-static svelte-1ltzvr"),d(D,"data-tipped","Search for this quest on the Wiki"),d(I,"href",J="https://wiki.fallensword.com/index.php?title="+e[35].name.replace(/ /g,"_")),d(I,"target","_blank"),d(I,"rel","noreferrer"),d(T,"class","svelte-1ltzvr"),d(V,"class","svelte-1ltzvr"),d(t,"class","svelte-1ltzvr")},m(e,n){h(e,t,n),q(t,l),q(l,s),q(s,a),q(t,r),q(t,i),q(i,c),q(t,o),q(t,u),q(u,_),q(_,f),q(t,b),q(t,z),q(z,x)
for(let e=0;e<se.length;e+=1)se[e]&&se[e].m(x,null)
q(x,C),q(x,M),q(M,L),q(M,N),q(t,H),q(t,T),q(T,A),q(A,G),q(T,R),q(T,I),q(I,D),q(t,K),q(t,V),ue.m(V,null),q(t,Y)},p(e,t){256&t[0]&&ee!==(ee=e[35].name+"")&&Q(a,ee),256&t[0]&&n!==(n="https://fallensword.com/index.php?cmd=questbook&subcmd=viewquest&quest_id="+e[35].id)&&d(s,"href",n),256&t[0]&&te!==(te=e[35].min_level+"")&&Q(c,te),256&t[0]&&le!==(le=e[35].realm.name+"")&&Q(f,le),256&t[0]&&g!==(g=P+"realms&subcmd=view&realm_id="+e[35].realm.id)&&d(_,"href",g),256&t[0]&&(re=k(Array(e[35].max_stage)),se=j(se,t,ie,1,e,re,ae,x,U,O,C,F)),256&t[0]&&ne!==(ne=Math.round(e[35].current_stage/e[35].max_stage*100)+"")&&Q(L,ne),256&t[0]&&y(x,"complete",e[35].current_stage===e[35].max_stage),256&t[0]&&B!==(B=P+"quests&subcmd=view&quest_id="+e[35].id)&&d(A,"href",B),256&t[0]&&J!==(J="https://wiki.fallensword.com/index.php?title="+e[35].name.replace(/ /g,"_"))&&d(I,"href",J),oe===(oe=ce(e))&&ue?ue.p(e,t):(ue.d(1),ue=oe(e),ue&&(ue.c(),ue.m(V,null)))},d(e){e&&p(t)
for(let e=0;e<se.length;e+=1)se[e].d()
ue.d()}}}function E(e){let t
return{c(){t=m("Loading...")},m(e,l){h(e,t,l)},p:b,d(e){e&&p(t)}}}function J(e){let t,l={ctx:e,current:null,token:null,hasCatch:!1,pending:E,then:I,catch:R}
return T(e[12](),l),{c(){t=v("div"),l.block.c(),d(t,"id","fshQuestContainer"),d(t,"class","svelte-1ltzvr")},m(e,s){h(e,t,s),l.block.m(t,l.anchor=null),l.mount=()=>t,l.anchor=null},p(t,s){A(l,e=t,s)},d(e){e&&p(t),l.block.d(),l.token=null,l=null}}}function K(e){let t
return{c(){t=m("Quest Book")},m(e,l){h(e,t,l)},d(e){e&&p(t)}}}function V(e){let t,l
return t=new G({props:{visible:e[2],$$slots:{title:[K],default:[J]},$$scope:{ctx:e}}}),t.$on("close",e[15]),{c(){n(t.$$.fragment)},m(e,s){r(t,e,s),l=!0},p(e,l){const s={}
4&l[0]&&(s.visible=e[2]),1019&l[0]|1024&l[1]&&(s.$$scope={dirty:l,ctx:e}),t.$set(s)},i(e){l||(i(t.$$.fragment,e),l=!0)},o(e){c(t.$$.fragment,e),l=!1},d(e){o(t,e)}}}function Y(e,t){return e.toUpperCase().includes(t.toUpperCase())}function ee(e,l,s){let a,n,r,{seasonal:i=!1}=l,{status:c="active"}=l,{visible:o=!0}=l,v=u("hideQuestNames").split(",")
function d(){g("hideQuestNames",v.join(","))}let h="",p="",m=0,b=6e3,k=[]
const z={active:e=>e.current_stage>0&&e.max_stage>e.current_stage,notStarted:e=>0===e.current_stage,completed:e=>e.current_stage===e.max_stage,hidden:e=>v.includes(e.name)}
let w=""
function x(e){w===e?k.reverse():"string"==typeof k[0][e]?k.sort(((t,l)=>_(t[e],l[e]))):k.sort(((t,l)=>t[e]-l[e])),s(17,k),w=e}return e.$$set=e=>{"seasonal"in e&&s(0,i=e.seasonal),"status"in e&&s(1,c=e.status),"visible"in e&&s(2,o=e.visible)},e.$$.update=()=>{var t,l,o,u
131073&e.$$.dirty[0]&&s(7,a=k.filter((e=>e.seasonal===i))),128&e.$$.dirty[0]&&s(9,n=a.filter(z.completed).length/a.length),65786&e.$$.dirty[0]&&s(8,r=a.filter(z[c]).filter((e=>v.includes(e.name)===("hidden"===c))).filter((t=h,l=p,o=m,u=b,e=>e.min_level>=o&&e.min_level<=u&&Y(e.realm_name,l)&&Y(e.name,t))))},[i,c,o,h,p,m,b,a,r,n,function(e){s(16,v=[...v,e.name]),d()},function(e){s(16,v=v.filter((t=>t!==e.name))),d()},async function(){const e=await t(W)
s(17,k=e.r.map((e=>({...e,realm_name:e.realm.name}))))},z,x,function(){s(2,o=!1)},v,k,function(){i=this.__value,s(0,i)},[[],[]],function(){i=this.__value,s(0,i)},function(){c=this.__value,s(1,c)},function(){c=this.__value,s(1,c)},function(){c=this.__value,s(1,c)},function(){c=this.__value,s(1,c)},function(){h=this.value,s(3,h)},function(){m=f(this.value),s(5,m)},function(){b=f(this.value),s(6,b)},function(){p=this.value,s(4,p)},()=>x("name"),()=>x("min_level"),()=>x("realm_name"),()=>x("current_stage")]}var te=class extends l{constructor(e){super(),s(this,e,ee,V,a,{seasonal:0,status:1,visible:2},null,[-1,-1])}}
let le
function se(){return le?le.$set({visible:!0}):le=new te({target:document.body}),le}export{se as default}
//# sourceMappingURL=questbook-DvFqMiOJ.js.map

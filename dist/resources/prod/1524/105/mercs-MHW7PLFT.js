import{a as H,b as sg}from"./chunk-O727LCIL.js";import"./chunk-TQNMSSUA.js";import"./chunk-VMCLSOZO.js";import"./chunk-PBUQY6G2.js";import{a as he}from"./chunk-Z4JN5BHS.js";import{a as dg}from"./chunk-AAM2VJHB.js";import{a as Ag}from"./chunk-NP3VZEO6.js";import"./chunk-KJ2LBMNX.js";import"./chunk-E62N6RI5.js";import"./chunk-7VIXIIBV.js";import"./chunk-E2MFTVAH.js";import{a as _}from"./chunk-Y5EGDMIB.js";import{A as E,D as d,F as r,X as eg,Y as gg,a as Te,aa as Le,b as Oe,d as Ke,e as z,fa as Ig,ga as lg,ha as ig,ia as tg,ja as Cg,s as e,t as L,u as h,v as qe,w as t,x as m,y as a,z as $e}from"./chunk-TVNPLL64.js";import"./chunk-Z5JYB3FL.js";import"./chunk-MHWHHESW.js";import{f as cg}from"./chunk-FR27OJE5.js";import"./chunk-DPECAWNM.js";import"./chunk-V45UJIF2.js";import"./chunk-64PLTPQD.js";import"./chunk-OHAOQZFW.js";import"./chunk-PJWDCLVE.js";import"./chunk-ZFTJPJLX.js";import"./chunk-5ORZS6IQ.js";import"./chunk-BRQN5OZB.js";import"./chunk-BZJZQFW2.js";import"./chunk-QCTVAEOV.js";import"./chunk-VQDTHLUC.js";function Re(){return H({subcmd2:"acceptoffer"})}function Ue(){return H({subcmd2:"declineoffer"})}function De(I){return H({subcmd2:"disband",merc_id:I})}function ke(){return H({subcmd2:"search"})}function bg(I,g,l){let i=I.slice();return i[20]=g[l].attributes,i[21]=g[l].class,i[22]=g[l].id,i[23]=g[l].level,i[24]=g[l].name,i[25]=g[l].type,i[26]=g[l].hours,i[27]=g[l].mins,i}function ug(I){let g,l,i,C,n,s,G;return{c(){g=t("button"),l=m("Accept Offer"),i=m(`
        \xA0
        `),C=t("button"),n=m("Decline Offer"),d(g,"class","custombutton svelte-1yei4bm"),g.disabled=I[1],d(g,"type","button"),d(C,"class","custombutton svelte-1yei4bm"),C.disabled=I[1],d(C,"type","button")},m(c,Z){L(c,g,Z),e(g,l),L(c,i,Z),L(c,C,Z),e(C,n),s||(G=[E(g,"click",I[11]),E(C,"click",I[10])],s=!0)},p(c,Z){Z&2&&(g.disabled=c[1]),Z&2&&(C.disabled=c[1])},d(c){c&&(h(g),h(i),h(C)),s=!1,Oe(G)}}}function Xg(I){let g,l,i,C,n,s;return{c(){g=t("button"),l=m("Send Expedition ("),i=m(I[5]),C=m("g)"),d(g,"class","custombutton svelte-1yei4bm"),g.disabled=I[1],d(g,"type","button")},m(G,c){L(G,g,c),e(g,l),e(g,i),e(g,C),n||(s=E(g,"click",I[12]),n=!0)},p(G,c){c&32&&r(i,G[5]),c&2&&(g.disabled=G[1])},d(G){G&&h(g),n=!1,s()}}}function mg(I){let g,l,i,C=I[2].name+"",n,s,G,c,Z,V,b,x,w,B,k,y=he(I[2].gold)+"",P,R,Y,U,D,p,A,v,f,j=I[2].hire_time/3600+"",F,u,W,S,J,N,ie,M=I[2].hours+"",te,je,Ce,T=I[2].mins+"",Ae,we,de,X,ce,se,O=I[2].level+"",be,Je,me,ne,K=I[8][I[2].class]+"",Ge,He,ve,ae,q=I[7][I[2].type]+"",ue,Se,Xe,Ze,$=I[2].attributes[0].value+"",oe,ze,pe,Be,ee=I[2].attributes[1].value+"",re,_e,ye,Ye,ge=I[2].attributes[2].value+"",Qe,Ee,fe,Fe,Ie=I[2].attributes[3].value+"",We,Me,Ne,Ve,le=I[2].attributes[4].value+"",xe;return{c(){g=t("div"),l=t("div"),i=t("b"),n=m(C),s=a(),G=t("div"),c=t("img"),V=a(),b=t("div"),x=t("div"),x.textContent="Hire Price:",w=a(),B=t("div"),k=t("b"),P=m(y),R=a(),Y=t("img"),D=a(),p=t("div"),p.textContent="Hire Time:",A=a(),v=t("div"),f=t("b"),F=m(j),u=m(" hour(s)"),W=a(),S=t("div"),S.textContent="Offer Time Left:",J=a(),N=t("div"),ie=t("b"),te=m(M),je=m(" hour(s) "),Ce=t("b"),Ae=m(T),we=m(" min(s)"),de=a(),X=t("div"),ce=t("div"),ce.textContent="Level:",se=t("div"),be=m(O),Je=a(),me=t("div"),me.textContent="Classification:",ne=t("div"),Ge=m(K),He=a(),ve=t("div"),ve.textContent="Type:",ae=t("div"),ue=m(q),Se=a(),Xe=t("div"),Xe.textContent="Attack:",Ze=t("div"),oe=m($),ze=a(),pe=t("div"),pe.textContent="Defense:",Be=t("div"),re=m(ee),_e=a(),ye=t("div"),ye.textContent="Armor:",Ye=t("div"),Qe=m(ge),Ee=a(),fe=t("div"),fe.textContent="HP:",Fe=t("div"),We=m(Ie),Me=a(),Ne=t("div"),Ne.textContent="Damage:",Ve=t("div"),xe=m(le),d(c,"alt","alt"),d(c,"height","125"),z(c.src,Z="https://cdn2.fallensword.com/mercs/"+I[2].id+".png")||d(c,"src",Z),d(c,"width","125"),d(x,"class","svelte-1yei4bm"),d(Y,"alt","Gold"),d(Y,"class","gold svelte-1yei4bm"),z(Y.src,U="https://cdn2.fallensword.com/currency/0.png")||d(Y,"src",U),d(B,"class","svelte-1yei4bm"),d(p,"class","svelte-1yei4bm"),d(v,"class","svelte-1yei4bm"),d(S,"class","svelte-1yei4bm"),d(N,"class","svelte-1yei4bm"),d(b,"class","offer svelte-1yei4bm"),d(g,"class","merc svelte-1yei4bm"),d(X,"class","attribs svelte-1yei4bm")},m(o,Q){L(o,g,Q),e(g,l),e(l,i),e(i,n),e(g,s),e(g,G),e(G,c),e(g,V),e(g,b),e(b,x),e(b,w),e(b,B),e(B,k),e(k,P),e(B,R),e(B,Y),e(b,D),e(b,p),e(b,A),e(b,v),e(v,f),e(f,F),e(v,u),e(b,W),e(b,S),e(b,J),e(b,N),e(N,ie),e(ie,te),e(N,je),e(N,Ce),e(Ce,Ae),e(N,we),L(o,de,Q),L(o,X,Q),e(X,ce),e(X,se),e(se,be),e(X,Je),e(X,me),e(X,ne),e(ne,Ge),e(X,He),e(X,ve),e(X,ae),e(ae,ue),e(X,Se),e(X,Xe),e(X,Ze),e(Ze,oe),e(X,ze),e(X,pe),e(X,Be),e(Be,re),e(X,_e),e(X,ye),e(X,Ye),e(Ye,Qe),e(X,Ee),e(X,fe),e(X,Fe),e(Fe,We),e(X,Me),e(X,Ne),e(X,Ve),e(Ve,xe)},p(o,Q){Q&4&&C!==(C=o[2].name+"")&&r(n,C),Q&4&&!z(c.src,Z="https://cdn2.fallensword.com/mercs/"+o[2].id+".png")&&d(c,"src",Z),Q&4&&y!==(y=he(o[2].gold)+"")&&r(P,y),Q&4&&j!==(j=o[2].hire_time/3600+"")&&r(F,j),Q&4&&M!==(M=o[2].hours+"")&&r(te,M),Q&4&&T!==(T=o[2].mins+"")&&r(Ae,T),Q&4&&O!==(O=o[2].level+"")&&r(be,O),Q&4&&K!==(K=o[8][o[2].class]+"")&&r(Ge,K),Q&4&&q!==(q=o[7][o[2].type]+"")&&r(ue,q),Q&4&&$!==($=o[2].attributes[0].value+"")&&r(oe,$),Q&4&&ee!==(ee=o[2].attributes[1].value+"")&&r(re,ee),Q&4&&ge!==(ge=o[2].attributes[2].value+"")&&r(Qe,ge),Q&4&&Ie!==(Ie=o[2].attributes[3].value+"")&&r(We,Ie),Q&4&&le!==(le=o[2].attributes[4].value+"")&&r(xe,le)},d(o){o&&(h(g),h(de),h(X))}}}function ng(I){let g;return{c(){g=t("div"),g.textContent="Your expedition returned without finding any mercenaries.",d(g,"class","no-offer svelte-1yei4bm")},m(l,i){L(l,g,i)},d(l){l&&h(g)}}}function Zg(I){let g;return{c(){g=t("div"),g.textContent="[ no active mercenaries ]",d(g,"class","no-active svelte-1yei4bm")},m(l,i){L(l,g,i)},p:Te,d(l){l&&h(g)}}}function og(I){let g,l=Le(I[6]),i=[];for(let C=0;C<l.length;C+=1)i[C]=Gg(bg(I,l,C));return{c(){for(let C=0;C<i.length;C+=1)i[C].c();g=$e()},m(C,n){for(let s=0;s<i.length;s+=1)i[s]&&i[s].m(C,n);L(C,g,n)},p(C,n){if(n&8642){l=Le(C[6]);let s;for(s=0;s<l.length;s+=1){let G=bg(C,l,s);i[s]?i[s].p(G,n):(i[s]=Gg(G),i[s].c(),i[s].m(g.parentNode,g))}for(;s<i.length;s+=1)i[s].d(1);i.length=l.length}},d(C){C&&h(g),qe(i,C)}}}function Gg(I){let g,l,i,C=I[24]+"",n,s,G,c,Z,V,b,x,w,B,k,y=I[26]+"",P,R,Y,U=I[27]+"",D,p,A,v,f,j,F,u,W;function S(){return I[14](I[22])}return{c(){g=t("div"),l=t("div"),i=t("b"),n=m(C),s=a(),G=t("div"),c=t("img"),b=a(),x=t("div"),x.textContent="Time Remaining",w=a(),B=t("div"),k=t("b"),P=m(y),R=m(" hour(s) "),Y=t("b"),D=m(U),p=m(" min(s)"),A=a(),v=t("div"),f=t("button"),j=m("Disband"),F=a(),d(c,"alt","alt"),d(c,"class","tip-static"),d(c,"data-tipped",Z=`<div style="column-gap: 2px; display: grid;
                    grid-template-columns: repeat(2, 1fr);">
                    <div>Name:</div><div>`+I[24]+`</div>
                      <div>Level:</div><div>`+I[23]+`</div>
                      <div>Classification:</div><div>`+I[8][I[21]]+`</div>
                      <div>Type:</div><div>`+I[7][I[25]]+`</div>
                      <div>Attack:</div><div>`+I[20][0].value+`</div>
                      <div>Defense:</div><div>`+I[20][1].value+`</div>
                      <div>Armor:</div><div>`+I[20][2].value+`</div>
                      <div>HP:</div><div>`+I[20][3].value+`</div>
                      <div>Damage:</div><div>`+I[20][4].value+`</div>
                      </div>`),d(c,"height","125"),z(c.src,V="https://cdn2.fallensword.com/mercs/"+I[22]+".png")||d(c,"src",V),d(c,"width","125"),d(f,"class","custombutton svelte-1yei4bm"),f.disabled=I[1],d(f,"type","button"),d(v,"class","disband svelte-1yei4bm"),d(g,"class","active-merc svelte-1yei4bm")},m(J,N){L(J,g,N),e(g,l),e(l,i),e(i,n),e(g,s),e(g,G),e(G,c),e(g,b),e(g,x),e(g,w),e(g,B),e(B,k),e(k,P),e(B,R),e(B,Y),e(Y,D),e(B,p),e(g,A),e(g,v),e(v,f),e(f,j),e(g,F),u||(W=E(f,"click",S),u=!0)},p(J,N){I=J,N&64&&C!==(C=I[24]+"")&&r(n,C),N&64&&Z!==(Z=`<div style="column-gap: 2px; display: grid;
                    grid-template-columns: repeat(2, 1fr);">
                    <div>Name:</div><div>`+I[24]+`</div>
                      <div>Level:</div><div>`+I[23]+`</div>
                      <div>Classification:</div><div>`+I[8][I[21]]+`</div>
                      <div>Type:</div><div>`+I[7][I[25]]+`</div>
                      <div>Attack:</div><div>`+I[20][0].value+`</div>
                      <div>Defense:</div><div>`+I[20][1].value+`</div>
                      <div>Armor:</div><div>`+I[20][2].value+`</div>
                      <div>HP:</div><div>`+I[20][3].value+`</div>
                      <div>Damage:</div><div>`+I[20][4].value+`</div>
                      </div>`)&&d(c,"data-tipped",Z),N&64&&!z(c.src,V="https://cdn2.fallensword.com/mercs/"+I[22]+".png")&&d(c,"src",V),N&64&&y!==(y=I[26]+"")&&r(P,y),N&64&&U!==(U=I[27]+"")&&r(D,U),N&2&&(f.disabled=I[1])},d(J){J&&h(g),u=!1,W()}}}function pg(I){let g,l,i,C,n,s,G,c,Z,V,b,x,w,B,k,y,P,R,Y;function U(u,W){return u[2]?ug:Xg}let D=U(I,-1),p=D(I),A=I[2]&&mg(I),v=I[3]&&ng(I);function f(u,W){return u[6].length?og:Zg}let j=f(I,-1),F=j(I);return{c(){g=t("div"),l=t("div"),i=m("("),C=t("b"),n=m(I[4]),s=m(" available for hire)"),G=a(),c=t("div"),p.c(),Z=a(),V=t("div"),b=t("div"),A&&A.c(),x=a(),v&&v.c(),w=a(),B=t("div"),k=a(),y=t("div"),y.innerHTML="<b>Active Mercenaries</b>",P=a(),R=t("div"),Y=t("div"),F.c(),d(l,"class","top-div svelte-1yei4bm"),d(c,"class","button-div svelte-1yei4bm"),d(B,"class","auto-decline svelte-1yei4bm"),d(b,"class","cols svelte-1yei4bm"),d(V,"class","result-div svelte-1yei4bm"),d(y,"class","active-title svelte-1yei4bm"),d(Y,"class","active svelte-1yei4bm"),d(R,"class","lower-div svelte-1yei4bm"),d(g,"class","merc-hunter svelte-1yei4bm")},m(u,W){L(u,g,W),e(g,l),e(l,i),e(l,C),e(C,n),e(l,s),e(g,G),e(g,c),p.m(c,null),e(g,Z),e(g,V),e(V,b),A&&A.m(b,null),e(b,x),v&&v.m(b,null),e(b,w),e(b,B),e(g,k),e(g,y),e(g,P),e(g,R),e(R,Y),F.m(Y,null)},p(u,W){W&16&&r(n,u[4]),D===(D=U(u,W))&&p?p.p(u,W):(p.d(1),p=D(u),p&&(p.c(),p.m(c,null))),u[2]?A?A.p(u,W):(A=mg(u),A.c(),A.m(b,x)):A&&(A.d(1),A=null),u[3]?v||(v=ng(u),v.c(),v.m(b,w)):v&&(v.d(1),v=null),j===(j=f(u,W))&&F?F.p(u,W):(F.d(1),F=j(u),F&&(F.c(),F.m(Y,null)))},d(u){u&&h(g),p.d(),A&&A.d(),v&&v.d(),F.d()}}}function Bg(I){let g;return{c(){g=m("Merc Hunter")},m(l,i){L(l,g,i)},d(l){l&&h(g)}}}function rg(I){let g,l;return g=new dg({props:{visible:I[0],$$slots:{title:[Bg],default:[pg]},$$scope:{ctx:I}}}),g.$on("close",I[9]),{c(){Ig(g.$$.fragment)},m(i,C){lg(g,i,C),l=!0},p(i,[C]){let n={};C&1&&(n.visible=i[0]),C&1073741950&&(n.$$scope={dirty:C,ctx:i}),g.$set(n)},i(i){l||(eg(g.$$.fragment,i),l=!0)},o(i){gg(g.$$.fragment,i),l=!1},d(i){ig(g,i)}}}function yg(I,g,l){let i=["Normal","Champion","Elite","Super Elite","Titan","Legendary"],C=["Human","Vermin","Undead","Dragon","Greenskin","Demon","Golem","Dwarf","Feline","Elf","Avian","Aquatic","Plant","Canine","Reptile","Beast","Mechanical","Mounted","Magical"],{visible:n=!0}=g,s=1,G=0,c=0,Z="?",V="?",b=[];function x(){_("mercs","close"),l(0,n=!1)}function w(){l(2,G=0),l(3,c=1),l(1,s=0)}async function B(){_("mercs","doDecline"),l(1,s=1),await Ue(),l(2,G=0),l(1,s=0)}function k(A){let v=Math.floor((A-cg())/60),f=Math.floor(v/60);return v%=60,{hours:f,mins:v}}let y=A=>({...A,...k(A.expires)});async function P(){_("mercs","doAccept"),l(1,s=1);let A=await Re();l(6,b=[...b,y({...G,expires:A.r.expires})]),l(4,Z=A.r.mercs_available.toString()),l(2,G=0),l(1,s=0)}function R(A){l(2,G=y(A.r)),l(1,s=0)}async function Y(){_("mercs","getOffer"),l(1,s=1),l(3,c=0);let A=await ke();A.r?R(A):w()}async function U(A){_("mercs","doDisband"),l(1,s=1),await De(A),l(6,b=b.filter(({id:v})=>v!==A)),l(1,s=0)}async function D(){let A=await sg();l(6,b=A.r.mercs?.map(y)||[]),l(4,Z=A.r.mercs_available.toString()),l(5,V=A.r.gold.toString()),A.r.offer?R({r:A.r.offer}):l(1,s=0)}D();let p=A=>U(A);return I.$$set=A=>{"visible"in A&&l(0,n=A.visible)},[n,s,G,c,Z,V,b,i,C,x,B,P,Y,U,p]}var Pe=class extends Cg{constructor(g){super(),tg(this,g,yg,rg,Ke,{visible:0})}},vg=Pe;var Yg={visible:!0},ag=0;function Qg(){ag=Ag(Yg,ag,vg)}export{Qg as default};
//# sourceMappingURL=mercs-MHW7PLFT.js.map

import{a as Y,b as ot}from"./chunk-NJWM3UIJ.js";import"./chunk-WFCAIBUQ.js";import{a as Oe}from"./chunk-C7QSIXL6.js";import{a as dt}from"./chunk-6MXUAXDT.js";import{a as Qe}from"./chunk-I2TWIWJL.js";import"./chunk-S46POC2Y.js";import{C as r,E as w,U as xe,V as et,a as We,b as Xe,ba as tt,ca as lt,d as Ze,da as it,e as K,ea as nt,fa as st,r as e,s as q,t as G,u as Ie,v as n,w as m,x as g,y as $e,z as Q}from"./chunk-N4CD3AMK.js";import"./chunk-G57OFGVI.js";import"./chunk-R46NFNRI.js";import"./chunk-5IIEF6F7.js";import"./chunk-7FHM4XAZ.js";import{a as z}from"./chunk-IBDVBQUM.js";import"./chunk-V4PGHHTG.js";import"./chunk-BG6TMPV6.js";import{d as Ke}from"./chunk-IRWIJXBN.js";import"./chunk-KA75H6XT.js";import"./chunk-2H46HLMH.js";import"./chunk-4V4QHDJN.js";import"./chunk-E2T4BRJB.js";import"./chunk-42ECWD5I.js";import"./chunk-I3GZAXF5.js";import"./chunk-6IDEFJE7.js";import"./chunk-HBYLRJZK.js";import"./chunk-HVA3CNPK.js";import"./chunk-NIRCQTAI.js";import"./chunk-XMFVZQFS.js";import"./chunk-7R4PXCUB.js";import"./chunk-63CI2ODV.js";function Le(){return Y({subcmd2:"acceptoffer"})}function Pe(){return Y({subcmd2:"declineoffer"})}function Ne(l){return Y({subcmd2:"disband",merc_id:l})}function je(){return Y({subcmd2:"search"})}function vt(l,t,i){let s=l.slice();return s[20]=t[i].attributes,s[21]=t[i].class,s[22]=t[i].id,s[23]=t[i].level,s[24]=t[i].name,s[25]=t[i].type,s[26]=t[i].hours,s[27]=t[i].mins,s}function ct(l){let t,i,s,o,u,a,c;return{c(){t=n("button"),i=m("Accept Offer"),s=m(`
        \xA0
        `),o=n("button"),u=m("Decline Offer"),r(t,"class","custombutton svelte-1yei4bm"),t.disabled=l[1],r(t,"type","button"),r(o,"class","custombutton svelte-1yei4bm"),o.disabled=l[1],r(o,"type","button")},m(v,y){q(v,t,y),e(t,i),q(v,s,y),q(v,o,y),e(o,u),a||(c=[Q(t,"click",l[11]),Q(o,"click",l[10])],a=!0)},p(v,y){y&2&&(t.disabled=v[1]),y&2&&(o.disabled=v[1])},d(v){v&&G(t),v&&G(s),v&&G(o),a=!1,Xe(c)}}}function bt(l){let t,i,s,o,u,a;return{c(){t=n("button"),i=m("Send Expedition ("),s=m(l[5]),o=m("g)"),r(t,"class","custombutton svelte-1yei4bm"),t.disabled=l[1],r(t,"type","button")},m(c,v){q(c,t,v),e(t,i),e(t,s),e(t,o),u||(a=Q(t,"click",l[12]),u=!0)},p(c,v){v&32&&w(s,c[5]),v&2&&(t.disabled=c[1])},d(c){c&&G(t),u=!1,a()}}}function rt(l){let t,i,s,o=l[2].name+"",u,a,c,v,y,E,f,O,F,C,R,D=Oe(l[2].gold)+"",B,L,A,P,N,k,d,b,M=l[2].hire_time/3600+"",J,S,p,T,U,V,j=l[2].hours+"",ie,Ge,ne,W=l[2].mins+"",se,Re,oe,_,de,ve,X=l[2].level+"",re,Be,ae,fe,Z=l[8][l[2].class]+"",ue,Fe,me,ce,I=l[7][l[2].type]+"",be,Je,pe,_e,$=l[2].attributes[0].value+"",ge,Ue,he,ye,x=l[2].attributes[1].value+"",ke,Ve,Ce,we,ee=l[2].attributes[2].value+"",De,Ye,Ae,Me,te=l[2].attributes[3].value+"",Te,ze,He,Se,le=l[2].attributes[4].value+"",Ee;return{c(){t=n("div"),i=n("div"),s=n("b"),u=m(o),a=g(),c=n("div"),v=n("img"),E=g(),f=n("div"),O=n("div"),O.textContent="Hire Price:",F=g(),C=n("div"),R=n("b"),B=m(D),L=g(),A=n("img"),N=g(),k=n("div"),k.textContent="Hire Time:",d=n("div"),b=n("b"),J=m(M),S=m(" hour(s)"),p=g(),T=n("div"),T.textContent="Offer Time Left:",U=n("div"),V=n("b"),ie=m(j),Ge=m(" hour(s) "),ne=n("b"),se=m(W),Re=m(" min(s)"),oe=g(),_=n("div"),de=n("div"),de.textContent="Level:",ve=n("div"),re=m(X),Be=g(),ae=n("div"),ae.textContent="Classification:",fe=n("div"),ue=m(Z),Fe=g(),me=n("div"),me.textContent="Type:",ce=n("div"),be=m(I),Je=g(),pe=n("div"),pe.textContent="Attack:",_e=n("div"),ge=m($),Ue=g(),he=n("div"),he.textContent="Defense:",ye=n("div"),ke=m(x),Ve=g(),Ce=n("div"),Ce.textContent="Armor:",we=n("div"),De=m(ee),Ye=g(),Ae=n("div"),Ae.textContent="HP:",Me=n("div"),Te=m(te),ze=g(),He=n("div"),He.textContent="Damage:",Se=n("div"),Ee=m(le),r(v,"alt","alt"),r(v,"height","125"),K(v.src,y="https://cdn2.fallensword.com/mercs/"+l[2].id+".png")||r(v,"src",y),r(v,"width","125"),r(O,"class","svelte-1yei4bm"),r(A,"alt","Gold"),r(A,"class","gold svelte-1yei4bm"),K(A.src,P="https://cdn2.fallensword.com/currency/0.png")||r(A,"src",P),r(C,"class","svelte-1yei4bm"),r(k,"class","svelte-1yei4bm"),r(d,"class","svelte-1yei4bm"),r(T,"class","svelte-1yei4bm"),r(U,"class","svelte-1yei4bm"),r(f,"class","offer svelte-1yei4bm"),r(t,"class","merc svelte-1yei4bm"),r(_,"class","attribs svelte-1yei4bm")},m(h,H){q(h,t,H),e(t,i),e(i,s),e(s,u),e(t,a),e(t,c),e(c,v),e(t,E),e(t,f),e(f,O),e(f,F),e(f,C),e(C,R),e(R,B),e(C,L),e(C,A),e(f,N),e(f,k),e(f,d),e(d,b),e(b,J),e(d,S),e(f,p),e(f,T),e(f,U),e(U,V),e(V,ie),e(U,Ge),e(U,ne),e(ne,se),e(U,Re),q(h,oe,H),q(h,_,H),e(_,de),e(_,ve),e(ve,re),e(_,Be),e(_,ae),e(_,fe),e(fe,ue),e(_,Fe),e(_,me),e(_,ce),e(ce,be),e(_,Je),e(_,pe),e(_,_e),e(_e,ge),e(_,Ue),e(_,he),e(_,ye),e(ye,ke),e(_,Ve),e(_,Ce),e(_,we),e(we,De),e(_,Ye),e(_,Ae),e(_,Me),e(Me,Te),e(_,ze),e(_,He),e(_,Se),e(Se,Ee)},p(h,H){H&4&&o!==(o=h[2].name+"")&&w(u,o),H&4&&!K(v.src,y="https://cdn2.fallensword.com/mercs/"+h[2].id+".png")&&r(v,"src",y),H&4&&D!==(D=Oe(h[2].gold)+"")&&w(B,D),H&4&&M!==(M=h[2].hire_time/3600+"")&&w(J,M),H&4&&j!==(j=h[2].hours+"")&&w(ie,j),H&4&&W!==(W=h[2].mins+"")&&w(se,W),H&4&&X!==(X=h[2].level+"")&&w(re,X),H&4&&Z!==(Z=h[8][h[2].class]+"")&&w(ue,Z),H&4&&I!==(I=h[7][h[2].type]+"")&&w(be,I),H&4&&$!==($=h[2].attributes[0].value+"")&&w(ge,$),H&4&&x!==(x=h[2].attributes[1].value+"")&&w(ke,x),H&4&&ee!==(ee=h[2].attributes[2].value+"")&&w(De,ee),H&4&&te!==(te=h[2].attributes[3].value+"")&&w(Te,te),H&4&&le!==(le=h[2].attributes[4].value+"")&&w(Ee,le)},d(h){h&&G(t),h&&G(oe),h&&G(_)}}}function at(l){let t;return{c(){t=n("div"),t.textContent="Your expedition returned without finding any mercenaries.",r(t,"class","no-offer svelte-1yei4bm")},m(i,s){q(i,t,s)},d(i){i&&G(t)}}}function pt(l){let t;return{c(){t=n("div"),t.textContent="[ no active mercenaries ]",r(t,"class","no-active svelte-1yei4bm")},m(i,s){q(i,t,s)},p:We,d(i){i&&G(t)}}}function _t(l){let t,i=l[6],s=[];for(let o=0;o<i.length;o+=1)s[o]=ft(vt(l,i,o));return{c(){for(let o=0;o<s.length;o+=1)s[o].c();t=$e()},m(o,u){for(let a=0;a<s.length;a+=1)s[a].m(o,u);q(o,t,u)},p(o,u){if(u&8642){i=o[6];let a;for(a=0;a<i.length;a+=1){let c=vt(o,i,a);s[a]?s[a].p(c,u):(s[a]=ft(c),s[a].c(),s[a].m(t.parentNode,t))}for(;a<s.length;a+=1)s[a].d(1);s.length=i.length}},d(o){Ie(s,o),o&&G(t)}}}function ft(l){let t,i,s,o=l[24]+"",u,a,c,v,y,E,f,O,F,C,R,D=l[26]+"",B,L,A,P=l[27]+"",N,k,d,b,M,J,S,p,T;function U(){return l[14](l[22])}return{c(){t=n("div"),i=n("div"),s=n("b"),u=m(o),a=g(),c=n("div"),v=n("img"),f=g(),O=n("div"),O.textContent="Time Remaining",F=g(),C=n("div"),R=n("b"),B=m(D),L=m(" hour(s) "),A=n("b"),N=m(P),k=m(" min(s)"),d=g(),b=n("div"),M=n("button"),J=m("Disband"),S=g(),r(v,"alt","alt"),r(v,"class","tip-static"),r(v,"data-tipped",y=`<div style="column-gap: 2px; display: grid; grid-template-columns: repeat(2, 1fr);">
                      <div>Name:</div><div>`+l[24]+`</div>
                      <div>Level:</div><div>`+l[23]+`</div>
                      <div>Classification:</div><div>`+l[8][l[21]]+`</div>
                      <div>Type:</div><div>`+l[7][l[25]]+`</div>
                      <div>Attack:</div><div>`+l[20][0].value+`</div>
                      <div>Defense:</div><div>`+l[20][1].value+`</div>
                      <div>Armor:</div><div>`+l[20][2].value+`</div>
                      <div>HP:</div><div>`+l[20][3].value+`</div>
                      <div>Damage:</div><div>`+l[20][4].value+`</div>
                    </div>`),r(v,"height","125"),K(v.src,E="https://cdn2.fallensword.com/mercs/"+l[22]+".png")||r(v,"src",E),r(v,"width","125"),r(M,"class","custombutton svelte-1yei4bm"),M.disabled=l[1],r(M,"type","button"),r(b,"class","disband svelte-1yei4bm"),r(t,"class","active-merc svelte-1yei4bm")},m(V,j){q(V,t,j),e(t,i),e(i,s),e(s,u),e(t,a),e(t,c),e(c,v),e(t,f),e(t,O),e(t,F),e(t,C),e(C,R),e(R,B),e(C,L),e(C,A),e(A,N),e(C,k),e(t,d),e(t,b),e(b,M),e(M,J),e(t,S),p||(T=Q(M,"click",U),p=!0)},p(V,j){l=V,j&64&&o!==(o=l[24]+"")&&w(u,o),j&64&&y!==(y=`<div style="column-gap: 2px; display: grid; grid-template-columns: repeat(2, 1fr);">
                      <div>Name:</div><div>`+l[24]+`</div>
                      <div>Level:</div><div>`+l[23]+`</div>
                      <div>Classification:</div><div>`+l[8][l[21]]+`</div>
                      <div>Type:</div><div>`+l[7][l[25]]+`</div>
                      <div>Attack:</div><div>`+l[20][0].value+`</div>
                      <div>Defense:</div><div>`+l[20][1].value+`</div>
                      <div>Armor:</div><div>`+l[20][2].value+`</div>
                      <div>HP:</div><div>`+l[20][3].value+`</div>
                      <div>Damage:</div><div>`+l[20][4].value+`</div>
                    </div>`)&&r(v,"data-tipped",y),j&64&&!K(v.src,E="https://cdn2.fallensword.com/mercs/"+l[22]+".png")&&r(v,"src",E),j&64&&D!==(D=l[26]+"")&&w(B,D),j&64&&P!==(P=l[27]+"")&&w(N,P),j&2&&(M.disabled=l[1])},d(V){V&&G(t),p=!1,T()}}}function gt(l){let t,i,s,o,u,a,c,v,y,E,f,O,F,C,R,D,B,L,A;function P(p,T){return p[2]?ct:bt}let N=P(l,-1),k=N(l),d=l[2]&&rt(l),b=l[3]&&at(l);function M(p,T){return p[6].length?_t:pt}let J=M(l,-1),S=J(l);return{c(){t=n("div"),i=n("div"),s=m("("),o=n("b"),u=m(l[4]),a=m(" available for hire)"),c=g(),v=n("div"),k.c(),y=g(),E=n("div"),f=n("div"),d&&d.c(),O=g(),b&&b.c(),F=g(),C=n("div"),R=g(),D=n("div"),D.innerHTML="<b>Active Mercenaries</b>",B=g(),L=n("div"),A=n("div"),S.c(),r(i,"class","top-div svelte-1yei4bm"),r(v,"class","button-div svelte-1yei4bm"),r(C,"class","auto-decline svelte-1yei4bm"),r(f,"class","cols svelte-1yei4bm"),r(E,"class","result-div svelte-1yei4bm"),r(D,"class","active-title svelte-1yei4bm"),r(A,"class","active svelte-1yei4bm"),r(L,"class","lower-div svelte-1yei4bm"),r(t,"class","merc-hunter svelte-1yei4bm")},m(p,T){q(p,t,T),e(t,i),e(i,s),e(i,o),e(o,u),e(i,a),e(t,c),e(t,v),k.m(v,null),e(t,y),e(t,E),e(E,f),d&&d.m(f,null),e(f,O),b&&b.m(f,null),e(f,F),e(f,C),e(t,R),e(t,D),e(t,B),e(t,L),e(L,A),S.m(A,null)},p(p,T){T&16&&w(u,p[4]),N===(N=P(p,T))&&k?k.p(p,T):(k.d(1),k=N(p),k&&(k.c(),k.m(v,null))),p[2]?d?d.p(p,T):(d=rt(p),d.c(),d.m(f,O)):d&&(d.d(1),d=null),p[3]?b||(b=at(p),b.c(),b.m(f,F)):b&&(b.d(1),b=null),J===(J=M(p,T))&&S?S.p(p,T):(S.d(1),S=J(p),S&&(S.c(),S.m(A,null)))},d(p){p&&G(t),k.d(),d&&d.d(),b&&b.d(),S.d()}}}function ht(l){let t,i;return t=new dt({props:{visible:l[0],title:"Merc Hunter",$$slots:{default:[gt]},$$scope:{ctx:l}}}),t.$on("close",l[9]),{c(){tt(t.$$.fragment)},m(s,o){lt(t,s,o),i=!0},p(s,[o]){let u={};o&1&&(u.visible=s[0]),o&1073741950&&(u.$$scope={dirty:o,ctx:s}),t.$set(u)},i(s){i||(xe(t.$$.fragment,s),i=!0)},o(s){et(t.$$.fragment,s),i=!1},d(s){it(t,s)}}}function yt(l,t,i){let s=["Normal","Champion","Elite","Super Elite","Titan","Legendary"],o=["Human","Vermin","Undead","Dragon","Greenskin","Demon","Golem","Dwarf","Feline","Elf","Avian","Aquatic","Plant","Canine","Reptile","Beast","Mechanical","Mounted","Magical"],{visible:u=!0}=t,a=1,c=0,v=0,y="?",E="?",f=[];function O(){z("mercs","close"),i(0,u=!1)}function F(){i(2,c=0),i(3,v=1),i(1,a=0)}async function C(){z("mercs","doDecline"),i(1,a=1),await Pe(),i(2,c=0),i(1,a=0)}function R(d){let b=Math.floor((d-Ke())/60),M=Math.floor(b/60);return b%=60,{hours:M,mins:b}}let D=d=>({...d,...R(d.expires)});async function B(){z("mercs","doAccept"),i(1,a=1);let d=await Le();i(6,f=[...f,D({...c,expires:d.r.expires})]),i(4,y=d.r.mercs_available.toString()),i(2,c=0),i(1,a=0)}function L(d){i(2,c=D(d.r)),i(1,a=0)}async function A(){z("mercs","getOffer"),i(1,a=1),i(3,v=0);let d=await je();d.r?L(d):F()}async function P(d){z("mercs","doDisband"),i(1,a=1),await Ne(d),i(6,f=f.filter(({id:b})=>b!==d)),i(1,a=0)}async function N(){let d=await ot();i(6,f=d.r.mercs?.map(D)||[]),i(4,y=d.r.mercs_available.toString()),i(5,E=d.r.gold.toString()),d.r.offer?L({r:d.r.offer}):i(1,a=0)}N();let k=d=>P(d);return l.$$set=d=>{"visible"in d&&i(0,u=d.visible)},[u,a,c,v,y,E,f,s,o,O,C,B,A,P,k]}var qe=class extends st{constructor(t){super(),nt(this,t,yt,ht,Ze,{visible:0})}},ut=qe;var kt={visible:!0},mt=0;function Ct(){mt=Qe(kt,mt,ut)}export{Ct as default};
//# sourceMappingURL=mercs-IT47GGPL.js.map

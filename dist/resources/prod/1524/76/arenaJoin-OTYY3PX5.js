import{a as Ve}from"./chunk-27ZP7CMD.js";import{a as Ge,b as Le,c as Me}from"./chunk-QAQTCVL6.js";import"./chunk-ZXBQSQ5M.js";import"./chunk-AH5OTA4B.js";import{a as Fe}from"./chunk-HOROHEM2.js";import"./chunk-DVGG2RI4.js";import"./chunk-FR7UJGGE.js";import"./chunk-QJC3JYYM.js";import"./chunk-HGUNGKV5.js";import"./chunk-BRZIL47S.js";import{a as Ue}from"./chunk-W6W565NB.js";import"./chunk-5CKITJKK.js";import{$ as N,A as v,C as L,F as V,G as K,N as Q,P as Be,Q as Pe,R as q,S as C,U as X,V as Y,Z as A,_ as j,a as $,aa as T,b as O,ba as R,d as I,e as P,n as x,p as b,q as k,r as w,s as z,t as S,u as U,v as y,w as J,x as M}from"./chunk-BNPFZHGS.js";import{a as De}from"./chunk-VHUMRRNV.js";import{a as we}from"./chunk-WZUZRWOR.js";import"./chunk-F2SBKV72.js";import"./chunk-XZG5FTF5.js";import{a as Te}from"./chunk-UIY6M7RL.js";import{a as He}from"./chunk-3HJBZEQM.js";import"./chunk-IBHWHJYD.js";import"./chunk-BKBSOXPZ.js";import"./chunk-DRXOYIKT.js";import"./chunk-I5C5UCLL.js";import"./chunk-RPABO2SK.js";import"./chunk-S4R6HMLT.js";import{a as Re}from"./chunk-OU75PILE.js";import"./chunk-63VD2FSJ.js";import"./chunk-W4Y6JSA7.js";import"./chunk-YVHPAUAO.js";import{a as ye}from"./chunk-LEMC2L2I.js";import"./chunk-77NM5GYL.js";import{a as Ee}from"./chunk-2L67EAH3.js";import{a as Ce}from"./chunk-3FI2HRMQ.js";import"./chunk-TTKNE24C.js";import"./chunk-YDAPLMMW.js";import"./chunk-ZGFXIZMH.js";import"./chunk-HX4UZBSJ.js";import"./chunk-UZKJ5KCL.js";import{a as Ie}from"./chunk-FFD2X52P.js";import"./chunk-ICGQP5MP.js";import"./chunk-QNKEYSUJ.js";import"./chunk-GXWQG5R4.js";import"./chunk-SPS3DBMB.js";import{a as Ae}from"./chunk-UC3GAOGO.js";import{a as Ne}from"./chunk-6FENTVGJ.js";import"./chunk-DPMIXN5L.js";import{a as je}from"./chunk-BH2HHYW5.js";import{a as qe}from"./chunk-N4QHNM2E.js";import"./chunk-RNWAALFB.js";import"./chunk-WOUGPMQ4.js";import{a as Z}from"./chunk-UYR6FV7Z.js";import"./chunk-MIKOJUIF.js";import"./chunk-23EARN6R.js";import{b as Se}from"./chunk-5YL45SUV.js";import{a as be}from"./chunk-T5HQ7FPX.js";import"./chunk-SON5T5EI.js";import"./chunk-CQJA6XZZ.js";import"./chunk-J55DBM2B.js";import"./chunk-5KIRUYW3.js";import"./chunk-QGP7DAK6.js";import"./chunk-VQ4XLJED.js";import"./chunk-LTD25OUX.js";import"./chunk-YXCGOJCF.js";import"./chunk-GQZRPO65.js";import"./chunk-IRX7VNA6.js";import"./chunk-ZOSLBUG4.js";import"./chunk-INHQR3KU.js";import"./chunk-O5WVQXEQ.js";import{Ia as ke,b as F}from"./chunk-KIM4IHFF.js";import"./chunk-AQ577ZPT.js";function lt(t){let e;return{c(){e=U(t[1])},m(n,l){k(n,e,l)},p(n,l){l&2&&L(e,n[1])},d(n){n&&w(e)}}}function rt(t){let e,n;return{c(){e=S("img"),v(e,"alt","Flag"),P(e.src,n=F+"ui/arena/specials_"+t[2](t[1])+".png")||v(e,"src",n)},m(l,r){k(l,e,r)},p(l,r){r&2&&!P(e.src,n=F+"ui/arena/specials_"+l[2](l[1])+".png")&&v(e,"src",n)},d(l){l&&w(e)}}}function it(t){let e,n,l,r,i;function o(h,f){return typeof h[1]=="boolean"?rt:lt}let m=o(t,-1),s=m(t);return{c(){e=S("div"),n=S("div"),l=U(t[0]),r=y(),i=S("div"),s.c(),v(n,"class","top svelte-yr50ap"),v(i,"class","bottom svelte-yr50ap")},m(h,f){k(h,e,f),b(e,n),b(n,l),b(e,r),b(e,i),s.m(i,null)},p(h,[f]){f&1&&L(l,h[0]),m===(m=o(h,f))&&s?s.p(h,f):(s.d(1),s=m(h),s&&(s.c(),s.m(i,null)))},i:$,o:$,d(h){h&&w(e),s.d()}}}function ot(t,e,n){let{title:l=""}=e,{flag:r=0}=e,i=o=>String(Number(o));return t.$$set=o=>{"title"in o&&n(0,l=o.title),"flag"in o&&n(1,r=o.flag)},[l,r,i]}var ee=class extends R{constructor(e){super(),T(this,e,ot,it,I,{title:0,flag:1})}},W=ee;function te(t){return Ge({subcmd:"usesetup",set_id:t})}function We(t,e,n){let l=t.slice();return l[7]=e[n],l}function ze(t,e,n){let l=t.slice();return l[10]=e[n].id,l[11]=e[n].name,l}function Je(t){let e,n=t[11]+"",l,r;return{c(){e=S("option"),l=U(n),e.__value=r=t[10],e.value=e.__value},m(i,o){k(i,e,o),b(e,l)},p(i,o){o&4&&n!==(n=i[11]+"")&&L(l,n),o&4&&r!==(r=i[10])&&(e.__value=r,e.value=e.__value)},d(i){i&&w(e)}}}function Oe(t){let e,n;return{c(){e=S("img"),v(e,"alt","Move"),P(e.src,n=F+"arena/"+(t[7]?t[7]-1:"x")+".png")||v(e,"src",n)},m(l,r){k(l,e,r)},p(l,r){r&1&&!P(e.src,n=F+"arena/"+(l[7]?l[7]-1:"x")+".png")&&v(e,"src",n)},d(l){l&&w(e)}}}function at(t){let e,n,l,r,i,o,m=t[2],s=[];for(let c=0;c<m.length;c+=1)s[c]=Je(ze(t,m,c));let h=t[0].slots,f=[];for(let c=0;c<h.length;c+=1)f[c]=Oe(We(t,h,c));return{c(){e=S("div"),n=S("select");for(let c=0;c<s.length;c+=1)s[c].c();l=y(),r=S("div");for(let c=0;c<f.length;c+=1)f[c].c();v(n,"class","svelte-l2bu6v"),t[1]===void 0&&Q(()=>t[5].call(n)),v(e,"class","ams svelte-l2bu6v"),v(r,"class","amf svelte-l2bu6v")},m(c,u){k(c,e,u),b(e,n);for(let a=0;a<s.length;a+=1)s[a].m(n,null);V(n,t[1]),k(c,l,u),k(c,r,u);for(let a=0;a<f.length;a+=1)f[a].m(r,null);i||(o=[M(n,"change",t[5]),M(n,"change",t[3])],i=!0)},p(c,[u]){if(u&4){m=c[2];let a;for(a=0;a<m.length;a+=1){let g=ze(c,m,a);s[a]?s[a].p(g,u):(s[a]=Je(g),s[a].c(),s[a].m(n,null))}for(;a<s.length;a+=1)s[a].d(1);s.length=m.length}if(u&6&&V(n,c[1]),u&1){h=c[0].slots;let a;for(a=0;a<h.length;a+=1){let g=We(c,h,a);f[a]?f[a].p(g,u):(f[a]=Oe(g),f[a].c(),f[a].m(r,null))}for(;a<f.length;a+=1)f[a].d(1);f.length=h.length}},i:$,o:$,d(c){c&&w(e),z(s,c),c&&w(l),c&&w(r),z(f,c),i=!1,O(o)}}}function st(t,e,n){let{res:l=0}=e,r=0,i=0,o=0,m=({slots:f})=>f.join()===r.slots.join();(function(){n(0,r=l.current_set),n(2,o=[...l.sets.some(m)?[]:[r],...l.sets]),n(1,i=o.find(m).id)})();async function s(){await te(i),n(0,r=o.find(({id:f})=>f===i))}function h(){i=K(this),n(1,i),n(2,o)}return t.$$set=f=>{"res"in f&&n(4,l=f.res)},[r,i,o,s,l,h]}var ne=class extends R{constructor(e){super(),T(this,e,st,at,I,{res:4})}},Ke=ne;function mt(t){let e,n,l,r=t[5].message+"",i;return{c(){e=S("div"),n=S("div"),l=S("p"),i=U(r),v(l,"class","svelte-15i8mhg"),v(e,"class","ajf svelte-15i8mhg")},m(o,m){k(o,e,m),b(e,n),b(n,l),b(l,i)},p:$,i:$,o:$,d(o){o&&w(e)}}}function ft(t){let e,n,l,r,i,o,m,s,h,f,c,u,a;n=new W({props:{title:"Players",flag:t[1].players.length+" / "+t[1].max_players}}),r=new W({props:{title:"Specials",flag:t[1].specials}}),o=new W({props:{title:"Hell Forge",flag:t[1].hellforge}}),s=new W({props:{title:"Epic",flag:t[1].epic}}),f=new W({props:{title:"Max Equip Level",flag:Z(t[1].equip_level)}});let g=t[1].specials&&Qe(t);return{c(){e=S("div"),A(n.$$.fragment),l=y(),A(r.$$.fragment),i=y(),A(o.$$.fragment),m=y(),A(s.$$.fragment),h=y(),A(f.$$.fragment),c=y(),g&&g.c(),u=J(),v(e,"class","ajf svelte-15i8mhg")},m(p,d){k(p,e,d),j(n,e,null),b(e,l),j(r,e,null),b(e,i),j(o,e,null),b(e,m),j(s,e,null),b(e,h),j(f,e,null),k(p,c,d),g&&g.m(p,d),k(p,u,d),a=!0},p(p,d){let D={};d&2&&(D.flag=p[1].players.length+" / "+p[1].max_players),n.$set(D);let H={};d&2&&(H.flag=p[1].specials),r.$set(H);let G={};d&2&&(G.flag=p[1].hellforge),o.$set(G);let _={};d&2&&(_.flag=p[1].epic),s.$set(_);let E={};d&2&&(E.flag=Z(p[1].equip_level)),f.$set(E),p[1].specials?g?(g.p(p,d),d&2&&q(g,1)):(g=Qe(p),g.c(),q(g,1),g.m(u.parentNode,u)):g&&(Be(),C(g,1,1,()=>{g=null}),Pe())},i(p){a||(q(n.$$.fragment,p),q(r.$$.fragment,p),q(o.$$.fragment,p),q(s.$$.fragment,p),q(f.$$.fragment,p),q(g),a=!0)},o(p){C(n.$$.fragment,p),C(r.$$.fragment,p),C(o.$$.fragment,p),C(s.$$.fragment,p),C(f.$$.fragment,p),C(g),a=!1},d(p){p&&w(e),N(n),N(r),N(o),N(s),N(f),p&&w(c),g&&g.d(p),p&&w(u)}}}function Qe(t){let e,n,l;return n=new Ke({props:{res:t[0]}}),{c(){e=S("div"),A(n.$$.fragment),v(e,"class","ajf svelte-15i8mhg")},m(r,i){k(r,e,i),j(n,e,null),l=!0},p(r,i){let o={};i&1&&(o.res=r[0]),n.$set(o)},i(r){l||(q(n.$$.fragment,r),l=!0)},o(r){C(n.$$.fragment,r),l=!1},d(r){r&&w(e),N(n)}}}function ct(t){return{c:$,m:$,p:$,i:$,o:$,d:$}}function ut(t){let e,n,l,r={ctx:t,current:null,token:null,hasCatch:!0,pending:ct,then:ft,catch:mt,error:5,blocks:[,,,]};return X(n=t[2](),r),{c(){e=J(),r.block.c()},m(i,o){k(i,e,o),r.block.m(i,r.anchor=o),r.mount=()=>e.parentNode,r.anchor=e,l=!0},p(i,[o]){t=i,Y(r,t,o)},i(i){l||(q(r.block),l=!0)},o(i){for(let o=0;o<3;o+=1){let m=r.blocks[o];C(m)}l=!1},d(i){i&&w(e),r.block.d(i),r.token=null,r=null}}}function pt(t,e,n){let l=Number(we("pvp_id")),r=0,i=0,o=s=>s.arenas.find(h=>h.id===l);async function m(){let s=await Le();if(s.s)n(0,r=s.r),n(1,i=o(s.r));else throw new Error(s.e.message)}return[r,i,m]}var le=class extends R{constructor(e){super(),T(this,e,pt,ut,I,{})}},Xe=le;function Ye(t){let e,n,l,r;return{c(){e=S("img"),v(e,"alt",n=t[1].name),P(e.src,l=t[2](t[1]))||v(e,"src",l),v(e,"class","tip-dynamic"),v(e,"data-tipped",r=t[3](t[1]))},m(i,o){k(i,e,o)},p(i,o){o&2&&n!==(n=i[1].name)&&v(e,"alt",n),o&2&&!P(e.src,l=i[2](i[1]))&&v(e,"src",l),o&2&&r!==(r=i[3](i[1]))&&v(e,"data-tipped",r)},d(i){i&&w(e)}}}function _t(t){let e,n,l=t[1]&&Ye(t);return{c(){e=S("div"),l&&l.c(),v(e,"class",n=x(t[0])+" svelte-dyrqj")},m(r,i){k(r,e,i),l&&l.m(e,null)},p(r,[i]){r[1]?l?l.p(r,i):(l=Ye(r),l.c(),l.m(e,null)):l&&(l.d(1),l=null),i&1&&n!==(n=x(r[0])+" svelte-dyrqj")&&v(e,"class",n)},i:$,o:$,d(r){r&&w(e),l&&l.d()}}}function gt(t,e,n){let{class:l=""}=e,{item:r=0}=e,i=m=>`${F}items/${m.b}.gif`,o=m=>`fetchitem.php?item_id=${m.b}&inv_id=${m.a}&t=1&p=${Te()}`;return t.$$set=m=>{"class"in m&&n(0,l=m.class),"item"in m&&n(1,r=m.item)},[l,r,i,o]}var re=class extends R{constructor(e){super(),T(this,e,gt,_t,I,{class:0,item:1})}},B=re;function dt(t){let e,n,l,r,i,o,m,s,h,f,c,u,a,g,p,d,D,H,G;return n=new B({props:{class:"med",item:t[1](t[0],"Gloves")}}),r=new B({props:{class:"med",item:t[1](t[0],"Helmet")}}),o=new B({props:{class:"sml",item:t[1](t[0],"Amulet")}}),s=new B({props:{class:"lrg",item:t[1](t[0],"Weapon")}}),f=new B({props:{class:"lrg",item:t[1](t[0],"Armor")}}),u=new B({props:{class:"lrg",item:t[1](t[0],"Shield")}}),g=new B({props:{class:"sml",item:t[1](t[0],"Ring")}}),d=new B({props:{class:"med",item:t[1](t[0],"Boots")}}),H=new B({props:{class:"sml",item:t[1](t[0],"Rune")}}),{c(){e=S("div"),A(n.$$.fragment),l=y(),A(r.$$.fragment),i=y(),A(o.$$.fragment),m=y(),A(s.$$.fragment),h=y(),A(f.$$.fragment),c=y(),A(u.$$.fragment),a=y(),A(g.$$.fragment),p=y(),A(d.$$.fragment),D=y(),A(H.$$.fragment),v(e,"class","grid svelte-630zmj")},m(_,E){k(_,e,E),j(n,e,null),b(e,l),j(r,e,null),b(e,i),j(o,e,null),b(e,m),j(s,e,null),b(e,h),j(f,e,null),b(e,c),j(u,e,null),b(e,a),j(g,e,null),b(e,p),j(d,e,null),b(e,D),j(H,e,null),G=!0},p(_,[E]){let ce={};E&1&&(ce.item=_[1](_[0],"Gloves")),n.$set(ce);let ue={};E&1&&(ue.item=_[1](_[0],"Helmet")),r.$set(ue);let pe={};E&1&&(pe.item=_[1](_[0],"Amulet")),o.$set(pe);let _e={};E&1&&(_e.item=_[1](_[0],"Weapon")),s.$set(_e);let ge={};E&1&&(ge.item=_[1](_[0],"Armor")),f.$set(ge);let de={};E&1&&(de.item=_[1](_[0],"Shield")),u.$set(de);let he={};E&1&&(he.item=_[1](_[0],"Ring")),g.$set(he);let $e={};E&1&&($e.item=_[1](_[0],"Boots")),d.$set($e);let ve={};E&1&&(ve.item=_[1](_[0],"Rune")),H.$set(ve)},i(_){G||(q(n.$$.fragment,_),q(r.$$.fragment,_),q(o.$$.fragment,_),q(s.$$.fragment,_),q(f.$$.fragment,_),q(u.$$.fragment,_),q(g.$$.fragment,_),q(d.$$.fragment,_),q(H.$$.fragment,_),G=!0)},o(_){C(n.$$.fragment,_),C(r.$$.fragment,_),C(o.$$.fragment,_),C(s.$$.fragment,_),C(f.$$.fragment,_),C(u.$$.fragment,_),C(g.$$.fragment,_),C(d.$$.fragment,_),C(H.$$.fragment,_),G=!1},d(_){_&&w(e),N(n),N(r),N(o),N(s),N(f),N(u),N(g),N(d),N(H)}}}function ht(t,e,n){let{equipment:l=0}=e,r=(i,o)=>i&&i.find(m=>m.t===ke.indexOf(o));return t.$$set=i=>{"equipment"in i&&n(0,l=i.equipment)},[l,r]}var ie=class extends R{constructor(e){super(),T(this,e,ht,dt,I,{equipment:0})}},Ze=ie;async function oe(t){let e=await Ne({cmd:"profile",subcmd:"managecombatset",submit:"Use",combatSetId:t});return Ve(e)}function ae(t){return He({subcmd:"usecombatset",combatSetId:t})}function se(t){return Re(ae,oe,t)}function xe(t,e,n){let l=t.slice();return l[9]=e[n].id,l[10]=e[n].name,l}function $t(t){return{c:$,m:$,p:$,i:$,o:$,d:$}}function vt(t){let e,n,l,r,i,o,m,s,h,f,c=t[1],u=[];for(let a=0;a<c.length;a+=1)u[a]=et(xe(t,c,a));return m=new Ze({props:{equipment:t[0]}}),{c(){e=S("div"),n=S("div"),l=S("div"),r=U(`Inventory
        `),i=S("select");for(let a=0;a<u.length;a+=1)u[a].c();o=y(),A(m.$$.fragment),v(i,"class","svelte-wrxyiv"),t[2]===void 0&&Q(()=>t[5].call(i)),v(l,"class","flex svelte-wrxyiv"),v(n,"class","innerColumnHeader svelte-wrxyiv")},m(a,g){k(a,e,g),b(e,n),b(n,l),b(l,r),b(l,i);for(let p=0;p<u.length;p+=1)u[p].m(i,null);V(i,t[2]),b(e,o),j(m,e,null),s=!0,h||(f=[M(i,"change",t[5]),M(i,"change",t[4])],h=!0)},p(a,g){if(g&2){c=a[1];let d;for(d=0;d<c.length;d+=1){let D=xe(a,c,d);u[d]?u[d].p(D,g):(u[d]=et(D),u[d].c(),u[d].m(i,null))}for(;d<u.length;d+=1)u[d].d(1);u.length=c.length}g&6&&V(i,a[2]);let p={};g&1&&(p.equipment=a[0]),m.$set(p)},i(a){s||(q(m.$$.fragment,a),s=!0)},o(a){C(m.$$.fragment,a),s=!1},d(a){a&&w(e),z(u,a),N(m),h=!1,O(f)}}}function et(t){let e,n=t[10]+"",l,r;return{c(){e=S("option"),l=U(n),e.__value=r=t[9],e.value=e.__value},m(i,o){k(i,e,o),b(e,l)},p(i,o){o&2&&n!==(n=i[10]+"")&&L(l,n),o&2&&r!==(r=i[9])&&(e.__value=r,e.value=e.__value)},d(i){i&&w(e)}}}function bt(t){return{c:$,m:$,p:$,i:$,o:$,d:$}}function kt(t){let e,n,l,r={ctx:t,current:null,token:null,hasCatch:!1,pending:bt,then:vt,catch:$t,blocks:[,,,]};return X(n=t[3](),r),{c(){e=J(),r.block.c()},m(i,o){k(i,e,o),r.block.m(i,r.anchor=o),r.mount=()=>e.parentNode,r.anchor=e,l=!0},p(i,[o]){t=i,Y(r,t,o)},i(i){l||(q(r.block),l=!0)},o(i){for(let o=0;o<3;o+=1){let m=r.blocks[o];C(m)}l=!1},d(i){i&&w(e),r.block.d(i),r.token=null,r=null}}}function wt(t,e,n){let l=0,r=0,i=0,o=({a:u})=>l.some(({a})=>a===u),m=({items:u})=>u.every(o);async function s(){let[u,a]=await Ie([Ue(),De()]);n(0,l=u.r.equipment);let g=a.r.find(m);n(2,i=g?.id??-1),n(1,r=[...g?[]:[{id:-1,name:"Primary",items:l}],...a.r])}let h=u=>Ce('table[width="300"] b',u).slice(1).map(a=>Ee("td",a.parentNode.nextElementSibling.children[0]));async function f(){await se(i);let u=await je(window.location.href);n(0,l=r.find(({id:p})=>p===i).items);let a=Ae(u),g=h(a).map(p=>qe(p));h().forEach((p,d)=>ye(g[d],p))}function c(){i=K(this),n(2,i),n(1,r)}return[l,r,i,s,f,c]}var me=class extends R{constructor(e){super(),T(this,e,wt,kt,I,{})}},tt=me;function St(t){let e,n,l,r;return e=new Xe({}),l=new tt({}),{c(){A(e.$$.fragment),n=y(),A(l.$$.fragment)},m(i,o){j(e,i,o),k(i,n,o),j(l,i,o),r=!0},p:$,i(i){r||(q(e.$$.fragment,i),q(l.$$.fragment,i),r=!0)},o(i){C(e.$$.fragment,i),C(l.$$.fragment,i),r=!1},d(i){N(e,i),i&&w(n),N(l,i)}}}var fe=class extends R{constructor(e){super(),T(this,e,null,St,I,{})}},nt=fe;function qt(t){return new t({target:Se})}function Ct(){be("arenaTypeTabs")?Me():(Fe(),qt(nt))}export{Ct as default};
//# sourceMappingURL=arenaJoin-OTYY3PX5.js.map
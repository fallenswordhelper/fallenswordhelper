import{b as ot}from"./chunk-4JJUQHKK.js";import{a as et}from"./chunk-5UICUPRD.js";import{a as tt}from"./chunk-4P26A7FY.js";import"./chunk-K6EFG3N7.js";import{a as x}from"./chunk-XZ5BPCJV.js";import{a as D}from"./chunk-UXIFFV52.js";import{a as y}from"./chunk-YZESGF6J.js";import"./chunk-QEARPC7F.js";import{a as z}from"./chunk-BJXJNY6G.js";import{A as g,D as o,H as K,a as h,b as F,d as H,ha as W,ia as X,s as i,t as G,u as w,w as p,x as _,y as k}from"./chunk-HPOEZKZ4.js";import{a as Y}from"./chunk-6QEKDVOV.js";import"./chunk-JMO45TBP.js";import"./chunk-JEN6RTKA.js";import{a as Z}from"./chunk-7TJHGKXN.js";import{a as V}from"./chunk-F3LQDOUE.js";import"./chunk-UERPKMG4.js";import"./chunk-FUB7QZZI.js";import"./chunk-F6AV4QWO.js";import"./chunk-C54IMWL7.js";import"./chunk-NR3OO2TM.js";import"./chunk-CPJOSTWF.js";import{c as O}from"./chunk-O3NTOCCL.js";import{B as P,G as R,K as L,b as M,t as N}from"./chunk-RBVLOJQS.js";import"./chunk-G4AQ6G7L.js";import{a as U}from"./chunk-B2AFMQVU.js";import"./chunk-7D7WYX4S.js";function nt(e){let t,n,a,u,r;return{c(){t=p("button"),n=_("\xA0"),o(t,"class","fshTempleThree svelte-1xo8gqh"),o(t,"type","button"),o(t,"data-tooltip",a="Recall items from "+e[2])},m(l,s){G(l,t,s),i(t,n),u||(r=g(t,"click",e[7]),u=!0)},p:h,d(l){l&&w(t),u=!1,r()}}}function rt(e){let t,n,a,u,r;return{c(){t=p("button"),n=_("\xA0"),K(t,"background-image","url('"+M+"guilds/"+Z()+"_mini.png')"),o(t,"type","button"),o(t,"data-tooltip",a="Rank "+e[2]),o(t,"class","svelte-1xo8gqh")},m(l,s){G(l,t,s),i(t,n),u||(r=g(t,"click",e[8]),u=!0)},p:h,d(l){l&&w(t),u=!1,r()}}}function ut(e){let t,n,a,u,r,l,s,S,q,f,$,v,B,m,J,it,A,C,E=e[1]&&O("showAdmin"),I,Q,c=e[1]&&nt(e),d=E&&rt(e);return{c(){t=p("div"),n=p("button"),a=_("\xA0"),r=k(),l=p("button"),s=_("\xA0"),q=k(),f=p("button"),$=_("\xA0"),B=k(),m=p("button"),J=_("\xA0"),A=k(),c&&c.c(),C=k(),d&&d.c(),o(n,"class","fshQuickBuff svelte-1xo8gqh"),o(n,"type","button"),o(n,"data-tooltip",u="Buff "+e[2]),o(l,"class","fshJoin svelte-1xo8gqh"),o(l,"type","button"),o(l,"data-tooltip",S="Join All Groups"+e[0]),o(f,"class","fshGold svelte-1xo8gqh"),o(f,"type","button"),o(f,"data-tooltip",v="Go to "+e[2]+"'s auctions"),o(m,"class","fshTempleTwo svelte-1xo8gqh"),o(m,"type","button"),o(m,"data-tooltip",it="Create Secure Trade to "+e[2])},m(b,T){G(b,t,T),i(t,n),i(n,a),i(t,r),i(t,l),i(l,s),i(t,q),i(t,f),i(f,$),i(t,B),i(t,m),i(m,J),i(t,A),c&&c.m(t,null),i(t,C),d&&d.m(t,null),I||(Q=[g(n,"click",e[3]),g(l,"click",e[4]),g(f,"click",e[5]),g(m,"click",e[6])],I=!0)},p(b,[T]){b[1]&&c.p(b,T),E&&d.p(b,T)},i:h,o:h,d(b){b&&w(t),c&&c.d(),d&&d.d(),I=!1,F(Q)}}}function at(e){let t=U.enableMaxGroupSizeToJoin?` < ${U.maxGroupSizeToJoin} Members`:"",n=ot(),a=D("player_id")||z(),u=et();function r(v){Y("profile","quick button",v)}function l(v){v.target.blur(),r("quickbuff"),tt(a)}function s(){r("join groups"),x()}function S(){r("auctions"),y(`${N}&type=-3&tid=${a}`)}function q(){r("secure trade"),y(`${P}${u}`)}function f(){r("recall items"),y(`${L}${u}`)}function $(){r("rank"),y(`${R}members&subcmd2=changerank&member_id=${a}`)}return[t,n,u,l,s,S,q,f,$]}var j=class extends X{constructor(t){super(),W(this,t,at,ut,H,{})}},lt=j;function ft(e,t){return new lt({anchor:e,target:t})}function st(){let e=V('#profileLeftColumn img[src*="/avatars/"][width="200"]');e&&ft(e.nextElementSibling,e.parentNode)}export{st as default};
//# sourceMappingURL=profileInjectQuickButton-3YLZ5L5Y.js.map

import{a as de}from"./chunk-VH4MQ6UG.js";import{a as w}from"./chunk-TLJ2WSV3.js";import{a as M}from"./chunk-IFTBDNSS.js";import"./chunk-TVGUT3OG.js";import"./chunk-C7MTA3UG.js";import"./chunk-RQFQSBXN.js";import{a as fe}from"./chunk-2PJZ6D5W.js";import"./chunk-P5TR4C7O.js";import{a as pe}from"./chunk-ENJPFQDL.js";import{a as ae}from"./chunk-OZO3C2DW.js";import"./chunk-GMLTBP5U.js";import"./chunk-RLMEWYFJ.js";import{a as ue}from"./chunk-SGW65DVU.js";import{a as Z}from"./chunk-X6HXFDDM.js";import"./chunk-Q4ISSEWQ.js";import{a as se}from"./chunk-N3BAHO2U.js";import"./chunk-MCKCLPTM.js";import"./chunk-HDDSTVDW.js";import"./chunk-3M4JV256.js";import"./chunk-3VGCM7V6.js";import"./chunk-5AMVPEUS.js";import"./chunk-E5RHLETX.js";import{b as S}from"./chunk-LGYGKPKS.js";import{a as z}from"./chunk-GMFQVZBG.js";import"./chunk-5P222UOI.js";import{A as g,C as T,F as n,H as Y,I as D,J as F,K as te,a as b,d as x,da as I,e as ee,ea as re,f as v,fa as ne,ha as ie,na as oe,oa as le,u as s,v as k,w as B,y as f,z as j}from"./chunk-FYI3FYOY.js";import{a as me}from"./chunk-XJTFL7TK.js";import"./chunk-SAUPNLY3.js";import{a as ce}from"./chunk-A4HY7BPZ.js";import"./chunk-XR4XHCV2.js";import"./chunk-VX5V3MQE.js";import"./chunk-U5QRCCLA.js";import"./chunk-DG6P646J.js";import"./chunk-HN4Q5DUC.js";function N(r,e){return me({cmd:"potionbazaar",subcmd:"buyitem",item_id:r,quantity:e})}async function V(r,e){let t=await se({cmd:"potionbazaar",subcmd:"buyitem",item_id:r,quantity:e}),i=fe(t);return i==="You purchased the item!"?{r:Array(e),s:!0}:{e:{message:i},s:!1}}function $(r,e){return pe(N,V,r,e)}function _e(r,e,t){let i=r.slice();return i[3]=e[t],i[4]=e,i[5]=t,i}function ye(r){return{c:b,m:b,p:b,d:b}}function ve(r){let e,t,i;return{c(){e=f("button"),e.textContent="Buy",n(e,"type","button"),n(e,"class","custombutton")},m(a,c){k(a,e,c),t||(i=T(e,"click",function(){x(r[1](r[3]))&&r[1](r[3]).apply(this,arguments)}),t=!0)},p(a,c){r=a},d(a){a&&B(e),t=!1,i()}}}function ke(r){let e;return{c(){e=f("span"),n(e,"class","fshSpinner fshSpinner12")},m(t,i){k(t,e,i)},p:b,d(t){t&&B(e)}}}function he(r,e){let t,i,a,c,o,l,m=z(e[3].price)+"",C,J,d,K,L,p,O,Q,q=z(e[3].price*e[3].count)+"",E,R,_,U,W,A,G,P,X;function ge(){e[2].call(p,e[4],e[5])}let u={ctx:e,current:null,token:null,hasCatch:!1,pending:ke,then:ve,catch:ye};return I(A=e[3].promise,u),{key:r,first:null,c(){t=f("div"),i=f("img"),o=g(),l=f("div"),C=j(m),J=g(),d=f("img"),L=j(`
        x
        `),p=f("input"),O=f("br"),Q=j(`
        = `),E=j(q),R=g(),_=f("img"),W=g(),u.block.c(),G=g(),n(i,"class","potion-img tip-dynamic svelte-12re2j5"),te(i,"background","url('"+S+"ui/inventory/2x3.png')"),v(i.src,a=e[3].img)||n(i,"src",a),n(i,"alt","Potion"),n(i,"data-tipped",c=e[3].fetch),v(d.src,K=S+"currency/0.png")||n(d,"src",K),n(d,"data-hasqtip","1"),n(d,"oldtitle","Gold"),n(d,"alt","Gold"),n(d,"title",""),n(d,"aria-describedby","qtip-1"),n(d,"class","svelte-12re2j5"),n(p,"type","number"),n(p,"min","1"),n(p,"max","100"),n(p,"class","svelte-12re2j5"),v(_.src,U=S+"currency/0.png")||n(_,"src",U),n(_,"alt","Gold"),n(_,"data-hasqtip","1"),n(_,"oldtitle","Gold"),n(_,"title",""),n(_,"aria-describedby","qtip-1"),n(_,"class","svelte-12re2j5"),n(l,"class","prices svelte-12re2j5"),n(t,"class","potion svelte-12re2j5"),this.first=t},m(y,h){k(y,t,h),s(t,i),s(t,o),s(t,l),s(l,C),s(l,J),s(l,d),s(l,L),s(l,p),F(p,e[3].count),s(l,O),s(l,Q),s(l,E),s(l,R),s(l,_),s(t,W),u.block.m(t,u.anchor=null),u.mount=()=>t,u.anchor=G,s(t,G),P||(X=T(p,"input",ge),P=!0)},p(y,h){e=y,h&1&&!v(i.src,a=e[3].img)&&n(i,"src",a),h&1&&c!==(c=e[3].fetch)&&n(i,"data-tipped",c),h&1&&m!==(m=z(e[3].price)+"")&&D(C,m),h&1&&Y(p.value)!==e[3].count&&F(p,e[3].count),h&1&&q!==(q=z(e[3].price*e[3].count)+"")&&D(E,q),u.ctx=e,h&1&&A!==(A=e[3].promise)&&I(A,u)||re(u,e,h)},d(y){y&&B(t),u.block.d(),u.token=null,u=null,P=!1,X()}}}function Be(r){let e,t=[],i=new Map,a=r[0],c=o=>o[3].id;for(let o=0;o<a.length;o+=1){let l=_e(r,a,o),m=c(l);i.set(m,t[o]=he(m,l))}return{c(){e=f("div");for(let o=0;o<t.length;o+=1)t[o].c();n(e,"id","bazaar"),n(e,"class","svelte-12re2j5")},m(o,l){k(o,e,l);for(let m=0;m<t.length;m+=1)t[m].m(e,null)},p(o,[l]){l&3&&(a=o[0],t=ie(t,l,c,1,o,a,i,e,ne,he,null,_e))},i:b,o:b,d(o){o&&B(e);for(let l=0;l<t.length;l+=1)t[l].d()}}}function je(r,e,t){let{potions:i=[]}=e;async function a(o){o.promise=$(o.id,o.count);let l=await o.promise;l.s?M(`You successfully purchased ${o.count} "${l.r[0].n}"`):M(l.e.message)}function c(o,l){o[l].count=Y(this.value),t(0,i)}return r.$$set=o=>{"potions"in o&&t(0,i=o.potions)},[i,a,c]}var H=class extends le{constructor(e){super(),oe(this,e,je,Be,ee,{potions:0})}},be=H;function ze(r,e){return new be({target:e.parentElement,props:{potions:r}})}var qe=r=>({id:Number(de(r)),img:r.children[0].src,fetch:r.firstChild.dataset.tipped,price:ue(ae(Z('img[src*="/currency/"]',w(r).parentElement).parentElement.previousElementSibling)),count:1,promise:Promise.resolve()});function Ae(){let r=ce('a[href*="cmd=buyitem"]');if(!r.length)return;let e=w(w(r[0]).parentElement);ze(r.map(qe),e),e.remove()}export{Ae as default};
//# sourceMappingURL=bazaar-75O2P736.js.map

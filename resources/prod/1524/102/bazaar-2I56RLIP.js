import{a as de}from"./chunk-3F6OWOLX.js";import{a as w}from"./chunk-QLI3YQXX.js";import{a as z}from"./chunk-ZVXMCR44.js";import{a as N}from"./chunk-MHT7HD4B.js";import"./chunk-R4CGZJCB.js";import{a as fe}from"./chunk-DGBEEUA5.js";import"./chunk-BQXMFU6E.js";import"./chunk-LERCGRM4.js";import{a as pe}from"./chunk-6PQFRUHW.js";import{a as me}from"./chunk-Q5PEDYJB.js";import{a as ue}from"./chunk-VJNUTBRD.js";import"./chunk-BDSEVGHU.js";import"./chunk-SOHEEUVK.js";import{$ as re,A as T,D as n,E as Y,F as D,G as I,H as te,_ as M,a as b,aa as ne,c as x,ca as ie,d as ee,e as v,ha as oe,ia as le,s,t as k,u as B,w as f,x as j,y as g}from"./chunk-HPOEZKZ4.js";import{a as ae}from"./chunk-6MJKEXGN.js";import"./chunk-YQXIMIAT.js";import{a as se}from"./chunk-4X57LHCN.js";import"./chunk-6QG6UGYA.js";import"./chunk-JEN6RTKA.js";import{a as ce}from"./chunk-HEAZTX7Q.js";import{a as Z}from"./chunk-F3LQDOUE.js";import"./chunk-ZRLD7TYA.js";import"./chunk-WJQ3A2NI.js";import"./chunk-EAEJ7O2I.js";import"./chunk-UPYTFADC.js";import"./chunk-F6AV4QWO.js";import"./chunk-C54IMWL7.js";import"./chunk-7XNCVM7C.js";import"./chunk-S5YTVKJ4.js";import"./chunk-7PPLM4HV.js";import"./chunk-QLD5CDI7.js";import"./chunk-ZKTRQIGV.js";import{b as S}from"./chunk-RBVLOJQS.js";import"./chunk-IYSXGPFG.js";function V(r,e){return ue({cmd:"potionbazaar",subcmd:"buyitem",item_id:r,quantity:e})}async function $(r,e){let t=await pe({cmd:"potionbazaar",subcmd:"buyitem",item_id:r,quantity:e}),i=fe(t);return i==="You purchased the item!"?{r:Array(e),s:!0}:{e:{message:i},s:!1}}function F(r,e){return me(V,$,r,e)}function _e(r,e,t){let i=r.slice();return i[3]=e[t],i[4]=e,i[5]=t,i}function ye(r){return{c:b,m:b,p:b,d:b}}function ve(r){let e,t,i;return{c(){e=f("button"),e.textContent="Buy",n(e,"type","button"),n(e,"class","custombutton")},m(a,c){k(a,e,c),t||(i=T(e,"click",function(){x(r[1](r[3]))&&r[1](r[3]).apply(this,arguments)}),t=!0)},p(a,c){r=a},d(a){a&&B(e),t=!1,i()}}}function ke(r){let e;return{c(){e=f("span"),n(e,"class","fshSpinner fshSpinner12")},m(t,i){k(t,e,i)},p:b,d(t){t&&B(e)}}}function he(r,e){let t,i,a,c,o,l,u=z(e[3].price)+"",C,J,d,K,L,p,O,Q,q=z(e[3].price*e[3].count)+"",E,R,_,U,W,A,G,P,X;function ge(){e[2].call(p,e[4],e[5])}let m={ctx:e,current:null,token:null,hasCatch:!1,pending:ke,then:ve,catch:ye};return M(A=e[3].promise,m),{key:r,first:null,c(){t=f("div"),i=f("img"),o=g(),l=f("div"),C=j(u),J=g(),d=f("img"),L=j(`
        x
        `),p=f("input"),O=f("br"),Q=j(`
        = `),E=j(q),R=g(),_=f("img"),W=g(),m.block.c(),G=g(),n(i,"class","potion-img tip-dynamic svelte-12re2j5"),te(i,"background","url('"+S+"ui/inventory/2x3.png')"),v(i.src,a=e[3].img)||n(i,"src",a),n(i,"alt","Potion"),n(i,"data-tipped",c=e[3].fetch),v(d.src,K=S+"currency/0.png")||n(d,"src",K),n(d,"data-hasqtip","1"),n(d,"oldtitle","Gold"),n(d,"alt","Gold"),n(d,"title",""),n(d,"aria-describedby","qtip-1"),n(d,"class","svelte-12re2j5"),n(p,"type","number"),n(p,"min","1"),n(p,"max","100"),n(p,"class","svelte-12re2j5"),v(_.src,U=S+"currency/0.png")||n(_,"src",U),n(_,"alt","Gold"),n(_,"data-hasqtip","1"),n(_,"oldtitle","Gold"),n(_,"title",""),n(_,"aria-describedby","qtip-1"),n(_,"class","svelte-12re2j5"),n(l,"class","prices svelte-12re2j5"),n(t,"class","potion svelte-12re2j5"),this.first=t},m(y,h){k(y,t,h),s(t,i),s(t,o),s(t,l),s(l,C),s(l,J),s(l,d),s(l,L),s(l,p),I(p,e[3].count),s(l,O),s(l,Q),s(l,E),s(l,R),s(l,_),s(t,W),m.block.m(t,m.anchor=null),m.mount=()=>t,m.anchor=G,s(t,G),P||(X=T(p,"input",ge),P=!0)},p(y,h){e=y,h&1&&!v(i.src,a=e[3].img)&&n(i,"src",a),h&1&&c!==(c=e[3].fetch)&&n(i,"data-tipped",c),h&1&&u!==(u=z(e[3].price)+"")&&D(C,u),h&1&&Y(p.value)!==e[3].count&&I(p,e[3].count),h&1&&q!==(q=z(e[3].price*e[3].count)+"")&&D(E,q),m.ctx=e,h&1&&A!==(A=e[3].promise)&&M(A,m)||re(m,e,h)},d(y){y&&B(t),m.block.d(),m.token=null,m=null,P=!1,X()}}}function Be(r){let e,t=[],i=new Map,a=r[0],c=o=>o[3].id;for(let o=0;o<a.length;o+=1){let l=_e(r,a,o),u=c(l);i.set(u,t[o]=he(u,l))}return{c(){e=f("div");for(let o=0;o<t.length;o+=1)t[o].c();n(e,"id","bazaar"),n(e,"class","svelte-12re2j5")},m(o,l){k(o,e,l);for(let u=0;u<t.length;u+=1)t[u]&&t[u].m(e,null)},p(o,[l]){l&3&&(a=o[0],t=ie(t,l,c,1,o,a,i,e,ne,he,null,_e))},i:b,o:b,d(o){o&&B(e);for(let l=0;l<t.length;l+=1)t[l].d()}}}function je(r,e,t){let{potions:i=[]}=e;async function a(o){o.promise=F(o.id,o.count);let l=await o.promise;l.s?N(`You successfully purchased ${o.count} "${l.r[0].n}"`):N(l.e.message)}function c(o,l){o[l].count=Y(this.value),t(0,i)}return r.$$set=o=>{"potions"in o&&t(0,i=o.potions)},[i,a,c]}var H=class extends le{constructor(e){super(),oe(this,e,je,Be,ee,{potions:0})}},be=H;function ze(r,e){return new be({target:e.parentElement,props:{potions:r}})}var qe=r=>({id:Number(de(r)),img:r.children[0].src,fetch:r.firstChild.dataset.tipped,price:ce(ae(Z('img[src*="/currency/"]',w(r).parentElement).parentElement.previousElementSibling)),count:1,promise:Promise.resolve()});function Ae(){let r=se('a[href*="cmd=buyitem"]');if(!r.length)return;let e=w(w(r[0]).parentElement);ze(r.map(qe),e),e.remove()}export{Ae as default};
//# sourceMappingURL=bazaar-2I56RLIP.js.map

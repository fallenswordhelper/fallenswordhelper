import{a as Je}from"./chunk-5TCTCJEI.js";import{a as Fe}from"./chunk-ALCFMB42.js";import{a as J}from"./chunk-WR2QSNNT.js";import{a as H}from"./chunk-HE632HJ5.js";import"./chunk-LG6BDR3I.js";import{a as We}from"./chunk-4Q5EZZXM.js";import{a as Qe}from"./chunk-MHT7HD4B.js";import"./chunk-F4CYJEVV.js";import"./chunk-R4CGZJCB.js";import{a as ze}from"./chunk-ILKDG53B.js";import{a as ie}from"./chunk-EVJH72OA.js";import{a as Ue}from"./chunk-DGBEEUA5.js";import{a as De}from"./chunk-BJXJNY6G.js";import"./chunk-BQXMFU6E.js";import{a as Be,b as Me}from"./chunk-LERCGRM4.js";import{a as Ge}from"./chunk-6PQFRUHW.js";import{a as ce}from"./chunk-Q5PEDYJB.js";import"./chunk-VJNUTBRD.js";import"./chunk-BDSEVGHU.js";import{a as je}from"./chunk-XFPCR5GW.js";import{a as re}from"./chunk-LFI4OITJ.js";import"./chunk-SOHEEUVK.js";import{$ as xe,D as E,F as te,H as K,P as oe,Q as ne,V as j,W as L,X as k,Y as v,_ as qe,a as D,d as G,e as se,ea as B,fa as M,g as Ie,ga as Q,h as Z,ha as W,ia as z,n as U,s as u,t as y,u as C,v as Ae,w as g,x as A,y as x,z as ee}from"./chunk-HPOEZKZ4.js";import{a as P}from"./chunk-6QEKDVOV.js";import"./chunk-UHGSE7LB.js";import{a as O}from"./chunk-4X57LHCN.js";import{a as Ve}from"./chunk-6QG6UGYA.js";import{a as we}from"./chunk-JEN6RTKA.js";import{a as F}from"./chunk-SQCHG7QA.js";import{a as Pe}from"./chunk-3LGJ7KIX.js";import{a as le}from"./chunk-OJG7MNTB.js";import{a as Ee}from"./chunk-F3LQDOUE.js";import{a as ae}from"./chunk-ZRLD7TYA.js";import{a as Re}from"./chunk-WJQ3A2NI.js";import"./chunk-EAEJ7O2I.js";import{c as He}from"./chunk-UPYTFADC.js";import"./chunk-F6AV4QWO.js";import"./chunk-C54IMWL7.js";import"./chunk-7XNCVM7C.js";import"./chunk-S5YTVKJ4.js";import{a as Ne}from"./chunk-7PPLM4HV.js";import{a as V}from"./chunk-ZKTRQIGV.js";import"./chunk-NR3OO2TM.js";import"./chunk-CPJOSTWF.js";import{a as Le}from"./chunk-A3WPUSVT.js";import{b as Te,g as Y}from"./chunk-RBVLOJQS.js";import"./chunk-G4AQ6G7L.js";import"./chunk-IYSXGPFG.js";import"./chunk-B2AFMQVU.js";import"./chunk-7D7WYX4S.js";function pe(){return ie({subcmd:"loadcomponents"})}function ct(t){let{itemId:e,invId:o,vcode:n}=le(Y,t.children[0].dataset.tipped);return{a:Number(o),b:Number(e),v:n}}var st=t=>He(t.href),at=t=>O('a[href*="=destroycomponent&"]',t).map(ct),pt=t=>Ve('td[background*="/1x1mini."]',t).length;function ft(t){let e=ae(t);return O('a[href*="profile&component_page="]',e).slice(1).map(st)}function mt(t){let e=Array(57);return e[56]={k:56,v:t.map(pt).reduce(Je,0)},{p:e}}var ut=t=>({h:mt(t),r:t.flatMap(at),s:!0});async function fe(){let t=await Re({cmd:"profile"}),e=await F([t,...ft(t)]);return ut(e.map(ae))}function me(){return ce(pe,fe)}function ue(t){return new Map(Ne(t))}var N=Be(new Map),Ke=Me(N,t=>[...t].reduce((e,[,o])=>e+(o.get("del")?.length??0),0));function dt(t){let e;return{c(){e=g("tr"),e.innerHTML='<td class="compDel svelte-1qoer4b" colspan="3">Deleted</td>'},m(o,n){y(o,e,n)},p:D,i:D,o:D,d(o){o&&C(e)}}}function _t(t){let e,o,n,r,l,s,i,$=t[0].get("del").length+"",p,a,f,h,w,m,d=[gt,bt],_=[];function T(c,q){return q&1&&(f=null),f==null&&(f=!!c[0].get("delPending")),f?0:1}return h=T(t,-1),w=_[h]=d[h](t),{c(){e=g("tr"),o=g("td"),n=g("img"),s=x(),i=g("td"),p=A($),a=x(),w.c(),se(n.src,r=t[1](t[0]))||E(n,"src",r),E(n,"class","tip-dynamic"),E(n,"data-tipped",l=t[2](t[0])),E(n,"alt","component")},m(c,q){y(c,e,q),u(e,o),u(o,n),u(e,s),u(e,i),u(i,p),u(e,a),_[h].m(e,null),m=!0},p(c,q){(!m||q&1&&!se(n.src,r=c[1](c[0])))&&E(n,"src",r),(!m||q&1&&l!==(l=c[2](c[0])))&&E(n,"data-tipped",l),(!m||q&1)&&$!==($=c[0].get("del").length+"")&&te(p,$);let b=h;h=T(c,q),h===b?_[h].p(c,q):(j(),v(_[b],1,1,()=>{_[b]=null}),L(),w=_[h],w?w.p(c,q):(w=_[h]=d[h](c),w.c()),k(w,1),w.m(e,null))},i(c){m||(k(w),m=!0)},o(c){v(w),m=!1},d(c){c&&C(e),_[h].d()}}}function bt(t){let e,o,n;return o=new H({props:{$$slots:{default:[kt]},$$scope:{ctx:t}}}),o.$on("click",U(t[3])),{c(){e=g("td"),B(o.$$.fragment)},m(r,l){y(r,e,l),M(o,e,null),n=!0},p(r,l){let s={};l&256&&(s.$$scope={dirty:l,ctx:r}),o.$set(s)},i(r){n||(k(o.$$.fragment,r),n=!0)},o(r){v(o.$$.fragment,r),n=!1},d(r){r&&C(e),Q(o)}}}function gt(t){let e;return{c(){e=g("td"),e.innerHTML='<span class="fshSpinner fshSpinner12"></span>',E(e,"class","compSumSpin")},m(o,n){y(o,e,n)},p:D,i:D,o:D,d(o){o&&C(e)}}}function kt(t){let e;return{c(){e=A("Del")},m(o,n){y(o,e,n)},d(o){o&&C(e)}}}function ht(t){let e,o,n,r,l,s=[_t,dt],i=[];function $(p,a){return a&1&&(e=null),e==null&&(e=!!p[0].get("del").length),e?0:1}return o=$(t,-1),n=i[o]=s[o](t),{c(){n.c(),r=ee()},m(p,a){i[o].m(p,a),y(p,r,a),l=!0},p(p,[a]){let f=o;o=$(p,a),o===f?i[o].p(p,a):(j(),v(i[f],1,1,()=>{i[f]=null}),L(),n=i[o],n?n.p(p,a):(n=i[o]=s[o](p),n.c()),k(n,1),n.m(r.parentNode,r))},i(p){l||(k(n),l=!0)},o(p){v(n),l=!1},d(p){i[o].d(p),p&&C(r)}}}function $t(t,e,o){let n;Z(t,N,f=>o(5,n=f));let{itemId:r}=e,l=oe(),s=De(),i=f=>`${Te}items/${f.get("b")}.gif`,$=f=>`fetchitem.php?item_id=${f.get("b")}&inv_id=${f.get("a")}&t=2&p=${s}&vcode=${f.get("v")}`,p;function a(){P("components","delType"),l("delType",r)}return t.$$set=f=>{"itemId"in f&&o(4,r=f.itemId)},t.$$.update=()=>{if(t.$$.dirty&48)e:o(0,p=n.get(r))},[p,i,$,a,r,n]}var de=class extends z{constructor(e){super(),W(this,e,$t,ht,G,{itemId:4})}},Oe=de;async function _e(t){let e=await t();if(!e?.s)throw new Error(e?.e?.message??"Unknown Error");return e}function Xe(t){t[4]=t[6].rollup,t[5]=t[6].maxComp}function Ye(t,e,o){let n=t.slice();return n[7]=e[o],n}function vt(t){let e,o=t[10].message+"",n;return{c(){e=g("p"),n=A(o),K(e,"color","red")},m(r,l){y(r,e,l),u(e,n)},p:D,i:D,o:D,d(r){r&&C(e)}}}function yt(t){Xe(t);let e,o,n,r,l,s,i,$,p,a,f,h,w,m=t[5]+"",d,_,T=t[4],c=[];for(let b=0;b<T.length;b+=1)c[b]=Ze(Ye(t,T,b));let q=b=>v(c[b],1,1,()=>{c[b]=null});return{c(){e=g("div"),o=g("table"),n=g("thead"),n.innerHTML='<tr><th colspan="3">Component Summary</th></tr>',r=x(),l=g("tbody");for(let b=0;b<c.length;b+=1)c[b].c();s=x(),i=g("tfoot"),$=g("tr"),p=g("td"),p.textContent="Total:",a=x(),f=g("td"),h=A(t[0]),w=A(" / "),d=A(m),E(f,"colspan","2"),E(o,"class","fshTblCenter")},m(b,I){y(b,e,I),u(e,o),u(o,n),u(o,r),u(o,l);for(let S=0;S<c.length;S+=1)c[S]&&c[S].m(l,null);u(o,s),u(o,i),u(i,$),u($,p),u($,a),u($,f),u(f,h),u(f,w),u(f,d),_=!0},p(b,I){if(Xe(b),I&2){T=b[4];let S;for(S=0;S<T.length;S+=1){let Se=Ye(b,T,S);c[S]?(c[S].p(Se,I),k(c[S],1)):(c[S]=Ze(Se),c[S].c(),k(c[S],1),c[S].m(l,null))}for(j(),S=T.length;S<c.length;S+=1)q(S);L()}(!_||I&1)&&te(h,b[0])},i(b){if(!_){for(let I=0;I<T.length;I+=1)k(c[I]);_=!0}},o(b){c=c.filter(Boolean);for(let I=0;I<c.length;I+=1)v(c[I]);_=!1},d(b){b&&C(e),Ae(c,b)}}}function Ze(t){let e,o;return e=new Oe({props:{itemId:t[7]}}),e.$on("delType",t[2]),{c(){B(e.$$.fragment)},m(n,r){M(e,n,r),o=!0},p:D,i(n){o||(k(e.$$.fragment,n),o=!0)},o(n){v(e.$$.fragment,n),o=!1},d(n){Q(e,n)}}}function Ct(t){let e;return{c(){e=g("div"),e.innerHTML='<span class="fshSpinner fshSpinner12"></span>',E(e,"class","compSumSpin")},m(o,n){y(o,e,n)},p:D,i:D,o:D,d(o){o&&C(e)}}}function St(t){let e,o,n,r={ctx:t,current:null,token:null,hasCatch:!0,pending:Ct,then:yt,catch:vt,value:6,error:10,blocks:[,,,]};return qe(o=t[1](),r),{c(){e=ee(),r.block.c()},m(l,s){y(l,e,s),r.block.m(l,r.anchor=s),r.mount=()=>e.parentNode,r.anchor=e,n=!0},p(l,[s]){t=l,xe(r,t,s)},i(l){n||(k(r.block),n=!0)},o(l){for(let s=0;s<3;s+=1){let i=r.blocks[s];v(i)}n=!1},d(l){l&&C(e),r.block.d(l),r.token=null,r=null}}}function wt(t,e,o){let n;Z(t,Ke,i=>o(0,n=i));function r(i){let $=new Map(re(i,"b").map(p=>[p.b,ue({...p,del:i.filter(({b:a})=>a===p.b).map(({a})=>a),delPending:!1})]));return N.set($),[...$.keys()]}async function l(){let i=await _e(me);return{rollup:r(i.r),maxComp:i.h?.p[56]?.v}}function s(i){ne.call(this,t,i)}return[n,l,s]}var be=class extends z{constructor(e){super(),W(this,e,wt,St,G,{})}},et=be;function tt(t){let e,o,n;return o=new H({props:{$$slots:{default:[Dt]},$$scope:{ctx:t}}}),o.$on("click",U(t[2])),{c(){e=g("div"),B(o.$$.fragment)},m(r,l){y(r,e,l),M(o,e,null),n=!0},p(r,l){let s={};l&256&&(s.$$scope={dirty:l,ctx:r}),o.$set(s)},i(r){n||(k(o.$$.fragment,r),n=!0)},o(r){v(o.$$.fragment,r),n=!1},d(r){r&&C(e),Q(o)}}}function Dt(t){let e;return{c(){e=A("Enable Quick Del")},m(o,n){y(o,e,n)},d(o){o&&C(e)}}}function Tt(t){let e,o;return e=new et({}),e.$on("delType",t[6]),{c(){B(e.$$.fragment)},m(n,r){M(e,n,r),o=!0},p:D,i(n){o||(k(e.$$.fragment,n),o=!0)},o(n){v(e.$$.fragment,n),o=!1},d(n){Q(e,n)}}}function Et(t){let e,o,n;return o=new H({props:{$$slots:{default:[It]},$$scope:{ctx:t}}}),o.$on("click",U(t[3])),{c(){e=g("div"),B(o.$$.fragment)},m(r,l){y(r,e,l),M(o,e,null),n=!0},p(r,l){let s={};l&256&&(s.$$scope={dirty:l,ctx:r}),o.$set(s)},i(r){n||(k(o.$$.fragment,r),n=!0)},o(r){v(o.$$.fragment,r),n=!1},d(r){r&&C(e),Q(o)}}}function It(t){let e;return{c(){e=A("Count Components")},m(o,n){y(o,e,n)},d(o){o&&C(e)}}}function At(t){let e;return{c(){e=A("Quick Extract")},m(o,n){y(o,e,n)},d(o){o&&C(e)}}}function ot(t){let e,o,n,r;return o=new H({props:{$$slots:{default:[qt]},$$scope:{ctx:t}}}),o.$on("click",U(t[5])),{c(){e=g("div"),n=g("div"),B(o.$$.fragment),K(n,"display","contents"),K(n,"--button-color","red")},m(l,s){y(l,e,s),u(e,n),M(o,n,null),r=!0},p(l,s){let i={};s&256&&(i.$$scope={dirty:s,ctx:l}),o.$set(i)},i(l){r||(k(o.$$.fragment,l),r=!0)},o(l){v(o.$$.fragment,l),r=!1},d(l){l&&C(e),Q(o)}}}function qt(t){let e;return{c(){e=A("Delete All Visible")},m(o,n){y(o,e,n)},d(o){o&&C(e)}}}function xt(t){let e,o,n,r,l,s,i,$,p,a=!t[0]&&tt(t),f=[Et,Tt],h=[];function w(d,_){return d[1]?1:0}n=w(t,-1),r=h[n]=f[n](t),i=new H({props:{$$slots:{default:[At]},$$scope:{ctx:t}}}),i.$on("click",t[4]);let m=t[0]&&ot(t);return{c(){e=g("div"),a&&a.c(),o=x(),r.c(),l=x(),s=g("div"),B(i.$$.fragment),$=x(),m&&m.c(),E(e,"class","fshCenter")},m(d,_){y(d,e,_),a&&a.m(e,null),u(e,o),h[n].m(e,null),u(e,l),u(e,s),M(i,s,null),u(e,$),m&&m.m(e,null),p=!0},p(d,[_]){d[0]?a&&(j(),v(a,1,1,()=>{a=null}),L()):a?(a.p(d,_),_&1&&k(a,1)):(a=tt(d),a.c(),k(a,1),a.m(e,o));let T=n;n=w(d,_),n===T?h[n].p(d,_):(j(),v(h[T],1,1,()=>{h[T]=null}),L(),r=h[n],r?r.p(d,_):(r=h[n]=f[n](d),r.c()),k(r,1),r.m(e,l));let c={};_&256&&(c.$$scope={dirty:_,ctx:d}),i.$set(c),d[0]?m?(m.p(d,_),_&1&&k(m,1)):(m=ot(d),m.c(),k(m,1),m.m(e,null)):m&&(j(),v(m,1,1,()=>{m=null}),L())},i(d){p||(k(a),k(r),k(i.$$.fragment,d),k(m),p=!0)},o(d){v(a),v(r),v(i.$$.fragment,d),v(m),p=!1},d(d){d&&C(e),a&&a.d(),h[n].d(),Q(i),m&&m.d()}}}function Bt(t,e,o){let n,r,l=oe();function s(){P("components","enableQuickDel"),o(0,n=!0),l("enableQuickDel")}function i(){P("components","countComponents"),o(1,r=!0)}function $(){P("components","insertQuickExtract"),We()}function p(){P("components","deleteAllVisible"),l("deleteAllVisible")}function a(f){ne.call(this,t,f)}return[n,r,s,i,$,p,a]}var ge=class extends z{constructor(e){super(),W(this,e,Bt,xt,G,{})}},nt=ge;function ke(t){return ie({subcmd:"destroycomponent",removeIndex:t})}function Mt(t,e){let o=Ue(e);return{r:o==="Component destroyed."?0:1,m:o,c:t}}async function Qt(t){let e=await Ge({cmd:"profile",subcmd:"destroycomponent",component_id:t});return Mt(t,e)}function Nt(t){let e=t.filter(n=>n.r===0),o=t.filter(n=>n.r===1);return e.length>0?{r:e.map(n=>n.c),s:!0}:o.length>0?{e:{message:o[0].m},s:!1}:{e:{message:t[0].m},s:!1}}async function he(t){let e=await F(t.map(Qt));return Nt(e)}function $e(t){return ce(ke,he,t)}function jt(t,e){if(!e)return;let o=e.get("del").filter(n=>!t.includes(n));e.set("del",o)}function Lt(t,e){N.update(o=>(jt(e,o.get(t)),o))}function Pt(t,e,o){N.update(n=>(n.get(t)?.set(e,o),n))}function Vt(t){if(!t)return;let e=t.children[0];return e.replaceWith(je({className:"compSumSpin",innerHTML:'<span class="fshSpinner fshSpinner12"></span>'})),e}function rt(t,e){Pt(e,"delPending",t)}function Ht(t){t.forEach(([e,o])=>{o&&e.children[0].replaceWith(o)})}var Rt=t=>t.forEach(([e])=>e?.children[0]?.remove()),Gt=t=>t.map(([e])=>[e,Vt(e)]),Ut=([,t])=>t,lt=t=>re(t.map(Ut)),it=([,,t])=>t,Wt=t=>lt(t).map(e=>[e,t.filter(([,o])=>o===e).map(it)]),zt=t=>Lt(...t);async function Ft(t){let e=Gt(t),o=await $e(t.map(it));o?.s?(Wt(t).forEach(zt),Rt(e)):(Qe(o?.e?.message??"Unknown Error"),Ht(e))}async function R(t){let e=lt(t);e.forEach(V(rt,!0)),await F(Fe(30,t).map(Ft)),e.forEach(V(rt,!1))}function X(t){let{itemId:e,invId:o}=le(Y,t.dataset.tipped);return[Number(e),Number(o)]}var Jt=t=>[J(t),...X(t)];function ve(t){R(O("img",t).map(Jt))}var Kt=t=>Ie(N).get(t.detail).get("del"),Ot=(t,e)=>J(Ee(`img[data-tipped*="&inv_id=${e}&"]`,t));function ye(t,e){R(Kt(e).map(o=>[Ot(t,o),e.detail,o]))}function Xt(t){t.target.tagName==="IMG"&&(t.preventDefault(),P("components","quickDel"),ze(t.target),R([[J(t.target),...X(t.target)]]))}function Ce(t){t.classList.add("fshQuickDel"),Le(t,Xt)}function Yt(){let t=we("profileRightColumn"),e=Pe("inventory-table",t);if(e.length===2)return e[1]}function Zt(){let t=Yt();if(!t)return;let e=new nt({target:t.parentNode});e.$on("enableQuickDel",V(Ce,t)),e.$on("delType",V(ye,t)),e.$on("deleteAllVisible",V(ve,t))}export{Zt as default};
//# sourceMappingURL=components-GJAA6TLR.js.map

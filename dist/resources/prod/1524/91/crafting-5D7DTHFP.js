import{a as J}from"./chunk-EAADH4KW.js";import{a as z}from"./chunk-4NLEH7YA.js";import{a as H}from"./chunk-UH2OYRUK.js";import"./chunk-F7NRMTDD.js";import{a as x}from"./chunk-BZVD6YUU.js";import"./chunk-KQYOMPW6.js";import{a as R}from"./chunk-EBPUUYF6.js";import"./chunk-2PJJIGCS.js";import{a as V}from"./chunk-TEDWC375.js";import"./chunk-I22EDT74.js";import{a as E}from"./chunk-ZLWLAAQU.js";import"./chunk-4ITDFNUS.js";import"./chunk-Q3GHEBJN.js";import"./chunk-USOKRUYT.js";import"./chunk-JD2UY4F4.js";import{a as C}from"./chunk-A7L7OPQH.js";import"./chunk-XMXBPRPQ.js";import{a as p}from"./chunk-GM6FB5OC.js";import{a as u}from"./chunk-DCYW4AFF.js";import"./chunk-J5PO4CUK.js";import"./chunk-RUMS66DZ.js";import{b as a}from"./chunk-2K77RJ6H.js";import"./chunk-TA6AFEKU.js";import"./chunk-QKZE4S7D.js";import{a as $}from"./chunk-MW5GUP64.js";import"./chunk-SNUUUJ2J.js";import"./chunk-3OWYIURB.js";import"./chunk-JRO7QTDC.js";import"./chunk-L2YJ66JH.js";import"./chunk-YV475WB4.js";import"./chunk-3A3FUFV2.js";import{a as S}from"./chunk-6YDFSD45.js";import"./chunk-VBLJ4QNC.js";import"./chunk-COADUIVU.js";import{$ as _,D as A,P as B,X as g,Y as b,a as s,aa as G,e as D,fa as L,ga as W,ha as j,ia as P,ja as Q,t as d,u as h,w as N,z as T}from"./chunk-BGHXTXB3.js";import{a as I}from"./chunk-SLXSHGYV.js";import{a as q}from"./chunk-IS4DNI73.js";import"./chunk-QTCHKF65.js";import"./chunk-B5FNPBUP.js";import"./chunk-VWHQXFZ5.js";import{a as F}from"./chunk-FNUCRPZA.js";import"./chunk-WFGYEXIY.js";import"./chunk-Y4WR2IKW.js";import"./chunk-MS5TR5HI.js";import"./chunk-WULU2HSE.js";import"./chunk-GCBAZDNZ.js";import"./chunk-UVAAI4KD.js";import"./chunk-KOVMYOV5.js";import"./chunk-SC26BEBT.js";import{a as w}from"./chunk-AXUZC3IG.js";function U(t){return{c:s,m:s,p:s,i:s,o:s,d:s}}function X(t){let r,o,n;return o=new R({props:{folders:t[4].folders,needsWorn:"1"}}),o.$on("filter",t[1]),{c(){r=N("div"),L(o.$$.fragment),A(r,"class","buttonContainer svelte-p5m35g")},m(e,i){d(e,r,i),W(o,r,null),n=!0},p(e,i){let l={};i&1&&(l.folders=e[4].folders),o.$set(l)},i(e){n||(g(o.$$.fragment,e),n=!0)},o(e){b(o.$$.fragment,e),n=!1},d(e){e&&h(r),j(o)}}}function Y(t){return{c:s,m:s,p:s,i:s,o:s,d:s}}function Z(t){let r,o,n,e={ctx:t,current:null,token:null,hasCatch:!1,pending:Y,then:X,catch:U,value:4,blocks:[,,,]};return _(o=t[0],e),{c(){r=T(),e.block.c()},m(i,l){d(i,r,l),e.block.m(i,e.anchor=l),e.mount=()=>r.parentNode,e.anchor=r,n=!0},p(i,[l]){t=i,e.ctx=t,l&1&&o!==(o=t[0])&&_(o,e)||G(e,t,l)},i(i){n||(g(e.block),n=!0)},o(i){for(let l=0;l<3;l+=1){let c=e.blocks[l];b(c)}n=!1},d(i){i&&h(r),e.block.d(i),e.token=null,e=null}}}function tt(t,r,o){let n=-2,e=B(),{prm:i=0}=r;function l(c){I("crafting","doFilter"),n=Number(c.detail),e("doFilter",n)}return t.$$set=c=>{"prm"in c&&o(0,i=c.prm)},[i,l]}var v=class extends Q{constructor(r){super(),P(this,r,tt,Z,D,{prm:0})}},K=v;var M=0,f=0,y=null,m=0,k=0,et=()=>q(`a[href*="=${w.cmd}&"]`,a()),rt=t=>t.href.split("=")[2],ot=t=>[t,M.items[rt(t)]],nt=()=>z($('img[src*="/items/"]',a())),it=()=>x(m).previousElementSibling.children[0],O=(t,r)=>r===-2||r===-3&&t.equipped||t.folder_id===r&&!t.equipped;function lt(){return k||(k=et().map(ot)),k}function st(){return new K({props:{prm:y},target:it()})}function ct(t,[r,o]){let n=p();O(o,t)&&n.classList.add("fshCraftForgeShow"),u(n,r),u(f,n)}function mt(t,r){t.forEach(([o,n])=>{o.parentNode.classList.toggle("fshCraftForgeShow",O(n,r))})}function at({detail:t}){let r=lt();f?mt(r,t):(f=p({className:"fshCraftForgeGrid"}),E(m.parentNode,f),V(m),C(3,J,[[3,r,0,F(ct,t)]]))}async function ft(){if(S()&&a()){if(m=nt(),!m)return;y=H(),st().$on("doFilter",at),M=await y}}export{ft as default};
//# sourceMappingURL=crafting-5D7DTHFP.js.map
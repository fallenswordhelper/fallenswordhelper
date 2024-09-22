import{S as e,L as t,M as s,cf as i,O as n,Q as a,T as r,ch as o,ci as l,cj as h,be as d,bh as c,a0 as u,bi as f,dg as p,dr as g,by as m,cl as $,N as z,P as x,b5 as S,U as y,X as T,bf as I,bg as b,Z as v,dl as M,ds as R,bj as F,bk as O,bl as k,am as B,bP as E,u as q,$ as w}from"./calfSystem-B-q5dZfX.js"
const H="FRONT",C="BEHIND",P="INIT",V="FIXED",L="DYNAMIC"
class K{param
callUpdate
firstRangeTotalSize=0
firstRangeAverageSize=0
lastCalcIndex=0
fixedSizeValue=0
calcType=P
offset=0
direction=""
range
constructor(e,t){this.init(e,t)}init(e,t){this.param=e,this.callUpdate=t,this.sizes=new Map,this.firstRangeTotalSize=0,this.firstRangeAverageSize=0,this.fixedSizeValue=0,this.calcType=P,this.offset=0,this.direction="",this.range=Object.create(null),e&&this.checkRange(0,e.keeps-1)}destroy(){this.init(null,null)}getRange(){const e=Object.create(null)
return e.start=this.range.start,e.end=this.range.end,e.padFront=this.range.padFront,e.padBehind=this.range.padBehind,e}isBehind(){return this.direction===C}isFront(){return this.direction===H}getOffset(e){return(e<1?0:this.getIndexOffset(e))+this.param.slotHeaderSize}updateParam(e,t){this.param&&e in this.param&&("uniqueIds"===e&&this.sizes.forEach(((e,s)=>{t.includes(s)||this.sizes.delete(s)})),this.param[e]=t)}saveSize(e,t){this.sizes.set(e,t),this.calcType===P?(this.fixedSizeValue=t,this.calcType=V):this.calcType===V&&this.fixedSizeValue!==t&&(this.calcType=L,delete this.fixedSizeValue),this.calcType!==V&&void 0!==this.firstRangeTotalSize&&(this.sizes.size<Math.min(this.param.keeps,this.param.uniqueIds.length)?(this.firstRangeTotalSize=[...this.sizes.values()].reduce(((e,t)=>e+t),0),this.firstRangeAverageSize=Math.round(this.firstRangeTotalSize/this.sizes.size)):delete this.firstRangeTotalSize)}handleDataSourcesChange(){let e=this.range.start
this.isFront()?e-=2:this.isBehind()&&(e+=2),e=Math.max(e,0),this.updateRange(this.range.start,this.getEndByStart(e))}handleSlotSizeChange(){this.handleDataSourcesChange()}handleScroll(e){this.direction=e<this.offset?H:C,this.offset=e,this.param&&(this.direction===H?this.handleFront():this.direction===C&&this.handleBehind())}handleFront(){const e=this.getScrollOvers()
if(e>this.range.start)return
const t=Math.max(e-this.param.buffer,0)
this.checkRange(t,this.getEndByStart(t))}handleBehind(){const e=this.getScrollOvers()
e<this.range.start+this.param.buffer||this.checkRange(e,this.getEndByStart(e))}getScrollOvers(){const e=this.offset-this.param.slotHeaderSize
if(e<=0)return 0
if(this.isFixedType())return Math.floor(e/this.fixedSizeValue)
let t=0,s=0,i=0,n=this.param.uniqueIds.length
for(;t<=n;){if(s=t+Math.floor((n-t)/2),i=this.getIndexOffset(s),i===e)return s
i<e?t=s+1:i>e&&(n=s-1)}return t>0?--t:0}getIndexOffset(e){if(!e)return 0
let t=0,s=0
for(let i=0;i<e;i++)s=this.sizes.get(this.param.uniqueIds[i]),t+="number"==typeof s?s:this.getEstimateSize()
return this.lastCalcIndex=Math.max(this.lastCalcIndex,e-1),this.lastCalcIndex=Math.min(this.lastCalcIndex,this.getLastIndex()),t}isFixedType(){return this.calcType===V}getLastIndex(){return this.param.uniqueIds.length-1}checkRange(e,t){const s=this.param.keeps
this.param.uniqueIds.length<=s?(e=0,t=this.getLastIndex()):t-e<s-1&&(e=t-s+1),this.range.start!==e&&this.updateRange(e,t)}updateRange(e,t){this.range.start=e,this.range.end=t,this.range.padFront=this.getPadFront(),this.range.padBehind=this.getPadBehind(),this.callUpdate(this.getRange())}getEndByStart(e){const t=e+this.param.keeps-1
return Math.min(t,this.getLastIndex())}getPadFront(){return this.isFixedType()?this.fixedSizeValue*this.range.start:this.getIndexOffset(this.range.start)}getPadBehind(){const e=this.range.end,t=this.getLastIndex()
return this.isFixedType()?(t-e)*this.fixedSizeValue:this.lastCalcIndex===t?this.getIndexOffset(t)-this.getIndexOffset(e):(t-e)*this.getEstimateSize()}getEstimateSize(){return this.isFixedType()?this.fixedSizeValue:this.firstRangeAverageSize||this.param.estimateSize}}function D(){return"undefined"!=typeof document}function j(e){let t,s
const f=e[5].default,p=i(f,e,e[4],null)
return{c(){t=n("div"),p&&p.c(),a(t,"class","virtual-scroll-item")},m(i,n){r(i,t,n),p&&p.m(t,null),e[6](t),s=!0},p(e,[t]){p&&p.p&&(!s||16&t)&&o(p,f,e,e[4],s?h(f,e[4],t,null):l(e[4]),null)},i(e){s||(d(p,e),s=!0)},o(e){c(p,e),s=!1},d(s){s&&u(t),p&&p.d(s),e[6](null)}}}function A(e,t,s){let i,n,a,{$$slots:r={},$$scope:o}=t,{horizontal:l=!1}=t,{uniqueKey:h}=t,{type:d="item"}=t
const c=f(),u=l?"offsetWidth":"offsetHeight"
function z(){const e=n?n[u]:0
e!==a&&(a=e,c("resize",{id:h,size:e,type:d}))}return p((()=>{"undefined"!=typeof ResizeObserver&&(i=new ResizeObserver(z),i.observe(n))})),g(z),m((()=>{i&&(i.disconnect(),i=null)})),e.$$set=e=>{"horizontal"in e&&s(1,l=e.horizontal),"uniqueKey"in e&&s(2,h=e.uniqueKey),"type"in e&&s(3,d=e.type),"$$scope"in e&&s(4,o=e.$$scope)},[n,l,h,d,o,r,function(e){$[e?"unshift":"push"]((()=>{n=e,s(0,n)}))}]}class N extends e{constructor(e){super(),t(this,e,A,j,s,{horizontal:1,uniqueKey:2,type:3})}}const U=e=>({}),W=e=>({})
function X(e,t,s){const i=e.slice()
return i[39]=t[s],i[41]=s,i}const Y=e=>({data:4&e[0],index:4&e[0]}),_=e=>({data:e[39],index:e[41]}),Q=e=>({}),Z=e=>({})
function G(e){let t,s
return t=new N({props:{type:"slot",uniqueKey:"header",$$slots:{default:[J]},$$scope:{ctx:e}}}),t.$on("resize",e[6]),{c(){F(t.$$.fragment)},m(e,i){O(t,e,i),s=!0},p(e,s){const i={}
536870912&s[0]&&(i.$$scope={dirty:s,ctx:e}),t.$set(i)},i(e){s||(d(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){k(t,e)}}}function J(e){let t
const s=e[26].header,n=i(s,e,e[29],Z)
return{c(){n&&n.c()},m(e,s){n&&n.m(e,s),t=!0},p(e,i){n&&n.p&&(!t||536870912&i[0])&&o(n,s,e,e[29],t?h(s,e[29],i,Q):l(e[29]),Z)},i(e){t||(d(n,e),t=!0)},o(e){c(n,e),t=!1},d(e){n&&n.d(e)}}}function ee(e){let t,s
const n=e[26].default,a=i(n,e,e[29],_)
return{c(){a&&a.c(),t=x()},m(e,i){a&&a.m(e,i),r(e,t,i),s=!0},p(e,t){a&&a.p&&(!s||536870916&t[0])&&o(a,n,e,e[29],s?h(n,e[29],t,Y):l(e[29]),_)},i(e){s||(d(a,e),s=!0)},o(e){c(a,e),s=!1},d(e){e&&u(t),a&&a.d(e)}}}function te(e,t){let s,i,n
return i=new N({props:{uniqueKey:t[39][t[0]],horizontal:t[1],type:"item",$$slots:{default:[ee]},$$scope:{ctx:t}}}),i.$on("resize",t[6]),{key:e,first:null,c(){s=B(),F(i.$$.fragment),this.first=s},m(e,t){r(e,s,t),O(i,e,t),n=!0},p(e,s){t=e
const n={}
5&s[0]&&(n.uniqueKey=t[39][t[0]]),2&s[0]&&(n.horizontal=t[1]),536870916&s[0]&&(n.$$scope={dirty:s,ctx:t}),i.$set(n)},i(e){n||(d(i.$$.fragment,e),n=!0)},o(e){c(i.$$.fragment,e),n=!1},d(e){e&&u(s),k(i,e)}}}function se(e){let t,s
return t=new N({props:{type:"slot",uniqueKey:"footer",$$slots:{default:[ie]},$$scope:{ctx:e}}}),t.$on("resize",e[6]),{c(){F(t.$$.fragment)},m(e,i){O(t,e,i),s=!0},p(e,s){const i={}
536870912&s[0]&&(i.$$scope={dirty:s,ctx:e}),t.$set(i)},i(e){s||(d(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){k(t,e)}}}function ie(e){let t
const s=e[26].footer,n=i(s,e,e[29],W)
return{c(){n&&n.c()},m(e,s){n&&n.m(e,s),t=!0},p(e,i){n&&n.p&&(!t||536870912&i[0])&&o(n,s,e,e[29],t?h(s,e[29],i,U):l(e[29]),W)},i(e){t||(d(n,e),t=!0)},o(e){c(n,e),t=!1},d(e){n&&n.d(e)}}}function ne(e){let t,s,i,o,l,h,f,p,g,m=[],$=new Map,R=e[8].header&&G(e),F=z(e[2])
const O=e=>e[39][e[0]]
for(let t=0;t<F.length;t+=1){let s=X(e,F,t),i=O(s)
$.set(i,m[t]=te(i,s))}let k=e[8].footer&&se(e)
return{c(){t=n("div"),R&&R.c(),s=x(),i=n("div")
for(let e=0;e<m.length;e+=1)m[e].c()
o=x(),k&&k.c(),l=x(),h=n("div"),S(i,"padding",e[3]),a(i,"class","virtual-scroll-wrapper"),a(h,"class","shepherd"),S(h,"width",e[1]?"0px":"100%"),S(h,"height",e[1]?"100%":"0px"),S(t,"overflow-y","auto"),S(t,"height","inherit"),a(t,"class","virtual-scroll-root")},m(n,a){r(n,t,a),R&&R.m(t,null),y(t,s),y(t,i)
for(let e=0;e<m.length;e+=1)m[e]&&m[e].m(i,null)
y(t,o),k&&k.m(t,null),y(t,l),y(t,h),e[27](h),e[28](t),f=!0,p||(g=T(t,"scroll",e[7]),p=!0)},p(e,n){e[8].header?R?(R.p(e,n),256&n[0]&&d(R,1)):(R=G(e),R.c(),d(R,1),R.m(t,s)):R&&(I(),c(R,1,1,(()=>{R=null})),b()),536870983&n[0]&&(F=z(e[2]),I(),m=v(m,n,O,1,e,F,$,i,M,te,null,X),b()),(!f||8&n[0])&&S(i,"padding",e[3]),e[8].footer?k?(k.p(e,n),256&n[0]&&d(k,1)):(k=se(e),k.c(),d(k,1),k.m(t,l)):k&&(I(),c(k,1,1,(()=>{k=null})),b()),(!f||2&n[0])&&S(h,"width",e[1]?"0px":"100%"),(!f||2&n[0])&&S(h,"height",e[1]?"100%":"0px")},i(e){if(!f){d(R)
for(let e=0;e<F.length;e+=1)d(m[e])
d(k),f=!0}},o(e){c(R)
for(let e=0;e<m.length;e+=1)c(m[e])
c(k),f=!1},d(s){s&&u(t),R&&R.d()
for(let e=0;e<m.length;e+=1)m[e].d()
k&&k.d(),e[27](null),e[28](null),p=!1,g()}}}function ae(e,t,s){let{$$slots:i={},$$scope:n}=t
const a=R(i)
let r,o,l,{key:h="id"}=t,{data:d}=t,{keeps:c=30}=t,{estimateSize:u=50}=t,{isHorizontal:g=!1}=t,{start:z=0}=t,{offset:x=0}=t,{pageMode:S=!1}=t,{topThreshold:y=0}=t,{bottomThreshold:T=0}=t,I=[],b=g?"scrollLeft":"scrollTop",v=null,M=new K({slotHeaderSize:0,slotFooterSize:0,keeps:c,estimateSize:u,buffer:Math.round(c/3),uniqueIds:C()},(function(e){v=e,s(3,r=s(3,r=g?`0px ${v.padBehind}px 0px ${v.padFront}px`:`${v.padFront}px 0px ${v.padBehind}px`)),s(2,I=d.slice(v.start,v.end+1))}))
const F=f()
function O(){return S&&D()?document.documentElement[b]||document.body[b]:o?Math.ceil(o[b]):0}function k(){const e=g?"clientWidth":"clientHeight"
return S&&D()?document.documentElement[e]||document.body[e]:o?Math.ceil(o[e]):0}function B(){const e=g?"scrollWidth":"scrollHeight"
return S&&D()?document.documentElement[e]||document.body[e]:o?Math.ceil(o[e]):0}function E(){if(o&&D()){const e=o.getBoundingClientRect(),{defaultView:t}=o.ownerDocument,s=g?e.left+t.pageXOffset:e.top+t.pageYOffset
M.updateParam("slotHeaderSize",s)}}function q(e){D()&&(S?(document.body[b]=e,document.documentElement[b]=e):o&&s(4,o[b]=e,o))}function w(e){if(e>=d.length-1)H()
else{q(M.getOffset(e))}}function H(){if(l){q(l[g?"offsetLeft":"offsetTop"]),setTimeout((()=>{O()+k()+1<B()&&H()}),3)}}function C(){return d.map((e=>e[h]))}function P(e){const t=O(),s=k(),i=B()
t<0||t+s>i||!i||(M.handleScroll(t),function(e,t,s,i){F("scroll",{event:i,range:M.getRange()}),M.isFront()&&!!d.length&&e-y<=0?F("top"):M.isBehind()&&e+t+T>=s&&F("bottom")}(t,s,i,e))}return p((()=>{z?w(z):x&&q(x),S&&(E(),document.addEventListener("scroll",P,{passive:!1}))})),m((()=>{M.destroy(),S&&D()&&document.removeEventListener("scroll",P)})),e.$$set=e=>{"key"in e&&s(0,h=e.key),"data"in e&&s(9,d=e.data),"keeps"in e&&s(10,c=e.keeps),"estimateSize"in e&&s(11,u=e.estimateSize),"isHorizontal"in e&&s(1,g=e.isHorizontal),"start"in e&&s(12,z=e.start),"offset"in e&&s(13,x=e.offset),"pageMode"in e&&s(14,S=e.pageMode),"topThreshold"in e&&s(15,y=e.topThreshold),"bottomThreshold"in e&&s(16,T=e.bottomThreshold),"$$scope"in e&&s(29,n=e.$$scope)},e.$$.update=()=>{8192&e.$$.dirty[0]&&q(x),4096&e.$$.dirty[0]&&w(z),1024&e.$$.dirty[0]&&function(e){M.updateParam("keeps",e),M.handleSlotSizeChange()}(c),512&e.$$.dirty[0]&&async function(e){M.updateParam("uniqueIds",C()),M.handleDataSourcesChange()}()},[h,g,I,r,o,l,function(e){const{id:t,size:s,type:i}=e.detail
"item"===i?M.saveSize(t,s):"slot"===i&&("header"===t?M.updateParam("slotHeaderSize",s):"footer"===t&&M.updateParam("slotFooterSize",s))},P,a,d,c,u,z,x,S,y,T,function(e){return M.sizes.get(e)},function(){return M.sizes.size},O,k,B,E,q,w,H,i,function(e){$[e?"unshift":"push"]((()=>{l=e,s(5,l)}))},function(e){$[e?"unshift":"push"]((()=>{o=e,s(4,o)}))},n]}class re extends e{constructor(e){super(),t(this,e,ae,ne,s,{key:0,data:9,keeps:10,estimateSize:11,isHorizontal:1,start:12,offset:13,pageMode:14,topThreshold:15,bottomThreshold:16,getSize:17,getSizes:18,getOffset:19,getClientSize:20,getScrollSize:21,updatePageModeFront:22,scrollToOffset:23,scrollToIndex:24,scrollToBottom:25},null,[-1,-1])}get getSize(){return this.$$.ctx[17]}get getSizes(){return this.$$.ctx[18]}get getOffset(){return this.$$.ctx[19]}get getClientSize(){return this.$$.ctx[20]}get getScrollSize(){return this.$$.ctx[21]}get updatePageModeFront(){return this.$$.ctx[22]}get scrollToOffset(){return this.$$.ctx[23]}get scrollToIndex(){return this.$$.ctx[24]}get scrollToBottom(){return this.$$.ctx[25]}}let oe=0
function le(){return oe||(oe=Math.max(window.screen.height,window.innerHeight,document.documentElement.clientHeight,document.documentElement.offsetHeight,document.documentElement.scrollHeight)),oe}function he(e){return E({subcmd:"equipitem",inventory_id:e})}async function de(e){return{s:0===(await q({cmd:"profile",subcmd:"equipitem",inventory_id:e,ajax:1})).r}}function ce(e){return w(he,de,e)}export{re as V,ce as d,le as g}
//# sourceMappingURL=daEquipItem-BXm5f9Hf.js.map

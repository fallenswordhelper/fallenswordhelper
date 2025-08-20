import{a9 as e,ac as a,bT as s,ao as t,x as i,A as l,C as r,F as v,D as n,B as d,I as c,aj as o,O as A,er as p,P as b,K as u,L as f,R as x,E as m,bz as k,bN as g,dY as E,dZ as h,s as q,H as w,db as y,bA as S,dI as C,aG as T,es as H,et as U,c4 as B,c3 as I,au as Y,bS as Q,bD as R,y as G,e0 as L,ak as j,n as F}from"./calfSystem-KFszEm2S.js"
import"./legacy-DCwSAgeG.js"
import{i as J}from"./lifecycle-TNO4elpY.js"
const O=s(),N=(e,a)=>{q("SE Tracker","Expand Row"),w(a,!c(a))}
var P=l('<button type="button" class="svelte-1rxsxdp"><!></button>'),V=l('<div></div> <div></div> <div class="last-kill svelte-1rxsxdp"> </div> <div> </div>',1),W=l('<div class="wide svelte-1rxsxdp"></div>'),_=l('<div class="expando svelte-1rxsxdp"><!></div> <div> </div> <div class="last-kill svelte-1rxsxdp"> </div> <div> </div> <!>',1)
function D(e,a){i(a,!0)
let s=o(!1)
var t=_(),l=r(t),q=n(l),w=e=>{var a=P()
a.__click=[N,s]
var t=n(a),i=e=>{var a=S("∨")
u(e,a)},l=e=>{var a=S(">")
u(e,a)}
v(t,e=>{c(s)?e(i):e(l,!1)}),A(()=>x(a,"aria-expanded",c(s))),u(e,a)}
v(q,e=>{a.entry[3].length&&e(w)})
var C=d(l,2),T=n(C),H=d(C,2),U=n(H),B=d(H,2),I=n(B),Y=d(B,2),Q=e=>{var s=W()
m(s,21,()=>a.entry[3],g,(e,a)=>{var s=k(()=>y(c(a),2))
var t=V(),i=d(r(t),4),l=n(i),v=d(i,2),o=n(v)
A(e=>{b(l,e),b(o,c(s)[1])},[()=>p(c(s)[0])]),u(e,t)}),E(3,s,()=>h,()=>({duration:300})),u(e,s)}
v(Y,e=>{c(s)&&e(Q)}),A((e,s)=>{b(T,e),b(U,s),b(I,a.entry[2])},[()=>a.entry[0].replaceAll("_"," "),()=>p(a.entry[1])]),u(e,t),f()}function K(e){q("SE Tracker","Toggle Pref"),Y("enableSeTracker",e.target.checked)}t(["click"])
var M=l('<span class="network svelte-1hf4bli"></span> <label>Enable SE Tracker [&thinsp; <div class="tooltip svelte-1hf4bli">? <div class="tooltiptext svelte-1hf4bli"><span class="tooltiptitle svelte-1hf4bli">Enable SE Tracker</span><br/><br/> <div>If enabled, will track the last time each SE was killed.<br/> This is DIFFERENT from the usual FSH network activity.<br/> When this is enabled, if you have ANY game page open in a browser tab it\n        will scan the SE Log every 10 minutes.<br/> You do not need auto-refresh for this to work.</div></div></div> &thinsp;]: <input type="checkbox" class="svelte-1hf4bli"/></label>',1)
function Z(s,t){const i=(l=s,e(l?.se??{}).flatMap(([e,s])=>a(s)?s.map(([a,s])=>[a,e,s,l?.loc[s]]):[[s,e.replaceAll(" ","_"),0,""]]))
var l
t(R(i.map(([,e])=>e)).map(e=>[e,i.filter(([,a])=>a===e).map(([e,,,a])=>[e,a])]).map(([e,a])=>[e,a[0][0],a[0][1],a.slice(1)]))}t(["click"])
const $=Q([U,O],([e,a],s)=>{a&&e?Z(a,s):s()})
var X=l('<div><div class="innerColumnHeader svelte-1dqxqm9">&nbsp;</div></div> <div><div class="innerColumnHeader svelte-1dqxqm9">Creature</div></div> <div><div class="innerColumnHeader svelte-1dqxqm9">Last Kill</div></div> <div><div class="innerColumnHeader svelte-1dqxqm9">Location</div></div> <!>',1),z=l('<div class="container svelte-1dqxqm9"><div class="top svelte-1dqxqm9"><!></div> <div class="tracker-table svelte-1dqxqm9"><!></div></div>')
function ee(e){const[a,s]=I(),t=()=>B($,"$trackerTableStore",a)
var l=z(),o=n(l)
!function(e,a){i(a,!1)
const[s,t]=I()
J()
var l=M(),v=r(l)
C(v,"",{},{"background-image":'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAB3RJTUUH1QgGDTMWk1twEwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAARnQU1BAACxjwv8YQUAAAC8SURBVHjahVPBEcQgCEQnHdmTqUlr0qe16I8cufOiCGZnGCcIy4LEICJwmGgWJ3o0IOCQEqVg9Y4U3CoCHQhvxuPUZEiA3XYkxyI1/6S6R6rke8AlJbkV7u95lleXq3yrdyUjLGxwnifmnHEXY3fJIQSIMcKOZCLgMltrr+1ZWgxp8wi1VrEqxfeFWloYq4wKtOHeBNqeawqmeOnNvfdYSvkbfaeUxP0w/G+k6WsT/xCBc25SuxDsnownEy4u5BHudpMFegAAAABJRU5ErkJggg==")'})
var c=d(v,2),o=d(n(c),3)
o.__click=[K],T(o,()=>B(U,"$trackerPrefStore",s),e=>H(U,e)),u(e,l),f(),t()}(n(o),{})
var A=d(o,2),p=n(A),b=e=>{var a=X(),s=d(r(a),8)
m(s,1,t,e=>e[0],(e,a)=>{D(e,{get entry(){return c(a)}})}),u(e,a)}
v(p,e=>{t()&&e(b)}),u(e,l),s()}function ae(e,a){i(a,!0)
let s=G(a,"visible",15,!0)
{const a=e=>{var a=S("Super Elite Tracker")
u(e,a)}
L(e,{close:function(){q("SE Tracker","close"),s(!1)},get visible(){return s()},title:a,children:(e,a)=>{ee(e)},$$slots:{title:!0,default:!0}})}f()}const se=j({visible:!0})
let te=0
function ie(){te?se.visible=!0:te=F(ae,{props:se,target:document.body})}export{ie as default}
//# sourceMappingURL=mountSuperElite.svelte-C4qUzv2w.js.map

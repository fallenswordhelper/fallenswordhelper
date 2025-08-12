import{ab as e,ae as a,aq as s,z as t,C as i,E as l,H as r,F as v,D as n,K as d,al as c,Q as o,ev as A,R as p,N as b,O as u,T as f,G as m,by as x,bM as k,e0 as g,e1 as E,s as h,J as q,dd as w,bz as y,dL as C,aI as S,ew as T,ex as H,c3 as U,c2 as B,aw as I,bR as Q,ey as R,bC as Y,A as G,e4 as J,am as L,u as F}from"./calfSystem-BlPuMQGT.js"
import"./legacy-6E4ldJQ5.js"
import{i as O}from"./lifecycle-DK9Oix-H.js"
const j=(e,a)=>{h("SE Tracker","Expand Row"),q(a,!d(a))}
var M=i('<button type="button" class="svelte-1rxsxdp"><!></button>'),N=i('<div></div> <div></div> <div class="last-kill svelte-1rxsxdp"> </div> <div> </div>',1),V=i('<div class="wide svelte-1rxsxdp"></div>'),W=i('<div class="expando svelte-1rxsxdp"><!></div> <div> </div> <div class="last-kill svelte-1rxsxdp"> </div> <div> </div> <!>',1)
function _(e,a){t(a,!0)
let s=c(!1)
var i=W(),h=l(i),q=v(h),C=e=>{var a=M()
a.__click=[j,s]
var t=v(a),i=e=>{var a=y("∨")
b(e,a)},l=e=>{var a=y(">")
b(e,a)}
r(t,(e=>{d(s)?e(i):e(l,!1)})),o((()=>f(a,"aria-expanded",d(s)))),b(e,a)}
r(q,(e=>{a.entry[3].length&&e(C)}))
var S=n(h,2),T=v(S),H=n(S,2),U=v(H),B=n(H,2),I=v(B),Q=n(B,2),R=e=>{var s=V()
m(s,21,(()=>a.entry[3]),k,((e,a)=>{var s=x((()=>w(d(a),2)))
var t=N(),i=n(l(t),4),r=v(i),c=n(i,2),u=v(c)
o((e=>{p(r,e),p(u,d(s)[1])}),[()=>A(d(s)[0])]),b(e,t)})),g(3,s,(()=>E),(()=>({duration:300}))),b(e,s)}
r(Q,(e=>{d(s)&&e(R)})),o(((e,s)=>{p(T,e),p(U,s),p(I,a.entry[2])}),[()=>a.entry[0].replaceAll("_"," "),()=>A(a.entry[1])]),b(e,i),u()}function K(e){h("SE Tracker","Toggle Pref"),I("enableSeTracker",e.target.checked)}s(["click"])
var P=i('<span class="network svelte-1hf4bli"></span> <label>Enable SE Tracker [&thinsp; <div class="tooltip svelte-1hf4bli">? <div class="tooltiptext svelte-1hf4bli"><span class="tooltiptitle svelte-1hf4bli">Enable SE Tracker</span><br/><br/> <div>If enabled, will track the last time each SE was killed.<br/> This is DIFFERENT from the usual FSH network activity.<br/> When this is enabled, if you have ANY game page open in a browser tab it\n        will scan the SE Log every 10 minutes.<br/> You do not need auto-refresh for this to work.</div></div></div> &thinsp;]: <input type="checkbox" class="svelte-1hf4bli"/></label>',1)
function D(s,t){const i=(l=s,e(l?.se??{}).flatMap((([e,s])=>a(s)?s.map((([a,s])=>[a,e,s,l?.loc[s]])):[[s,e.replaceAll(" ","_"),0,""]])))
var l
t(Y(i.map((([,e])=>e))).map((e=>[e,i.filter((([,a])=>a===e)).map((([e,,,a])=>[e,a]))])).map((([e,a])=>[e,a[0][0],a[0][1],a.slice(1)])))}s(["click"])
const Z=Q([H,R],(([e,a],s)=>{a&&e?D(a,s):s()}))
var $=i('<div><div class="innerColumnHeader svelte-1dqxqm9">&nbsp;</div></div> <div><div class="innerColumnHeader svelte-1dqxqm9">Creature</div></div> <div><div class="innerColumnHeader svelte-1dqxqm9">Last Kill</div></div> <div><div class="innerColumnHeader svelte-1dqxqm9">Location</div></div> <!>',1),z=i('<div class="container svelte-1dqxqm9"><div class="top svelte-1dqxqm9"><!></div> <div class="tracker-table svelte-1dqxqm9"><!></div></div>')
function X(e){const[a,s]=B(),i=()=>U(Z,"$trackerTableStore",a)
var c=z(),o=v(c)
!function(e,a){t(a,!1)
const[s,i]=B()
O()
var r=P(),d=l(r)
C(d,"",{},{"background-image":'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAB3RJTUUH1QgGDTMWk1twEwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAARnQU1BAACxjwv8YQUAAAC8SURBVHjahVPBEcQgCEQnHdmTqUlr0qe16I8cufOiCGZnGCcIy4LEICJwmGgWJ3o0IOCQEqVg9Y4U3CoCHQhvxuPUZEiA3XYkxyI1/6S6R6rke8AlJbkV7u95lleXq3yrdyUjLGxwnifmnHEXY3fJIQSIMcKOZCLgMltrr+1ZWgxp8wi1VrEqxfeFWloYq4wKtOHeBNqeawqmeOnNvfdYSvkbfaeUxP0w/G+k6WsT/xCBc25SuxDsnownEy4u5BHudpMFegAAAABJRU5ErkJggg==")'})
var c=n(d,2),o=n(v(c),3)
o.__click=[K],S(o,(()=>U(H,"$trackerPrefStore",s)),(e=>T(H,e))),b(e,r),u(),i()}(v(o),{})
var A=n(o,2),p=v(A),f=e=>{var a=$(),s=n(l(a),8)
m(s,1,i,(e=>e[0]),((e,a)=>{_(e,{get entry(){return d(a)}})})),b(e,a)}
r(p,(e=>{i()&&e(f)})),b(e,c),s()}function ee(e,a){t(a,!0)
let s=G(a,"visible",15,!0)
{const a=e=>{var a=y("Super Elite Tracker")
b(e,a)}
J(e,{close:function(){h("SE Tracker","close"),s(!1)},get visible(){return s()},title:a,children:(e,a)=>{X(e)},$$slots:{title:!0,default:!0}})}u()}const ae=L({visible:!0})
let se=0
function te(){se?ae.visible=!0:se=F(ee,{props:ae,target:document.body})}export{te as default}
//# sourceMappingURL=mountSuperElite.svelte-BKUfmRux.js.map

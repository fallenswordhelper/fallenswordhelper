import{aq as e,z as a,C as s,E as i,H as t,F as l,D as r,K as v,al as n,Q as d,ew as c,R as o,N as A,O as b,T as p,G as u,bB as f,bP as x,e1 as m,e2 as k,s as g,J as E,df as h,bC as q,dN as w,aI as y,ex as C,ey as S,c6 as T,c5 as U,aw as H,bU as B,ez as I,eA as Q,bF as R,A as Y,e5 as F,am as G,u as J}from"./calfSystem-C1X5YxJZ.js"
import"./legacy-CERE4DQ7.js"
import{i as L}from"./lifecycle-U3zIf5cY.js"
const N=(e,a)=>{g("SE Tracker","Expand Row"),E(a,!v(a))}
var O=s('<button type="button" class="svelte-1rxsxdp"><!></button>'),j=s('<div></div> <div></div> <div class="last-kill svelte-1rxsxdp"> </div> <div> </div>',1),P=s('<div class="wide svelte-1rxsxdp"></div>'),V=s('<div class="expando svelte-1rxsxdp"><!></div> <div> </div> <div class="last-kill svelte-1rxsxdp"> </div> <div> </div> <!>',1)
function W(e,s){a(s,!0)
let g=n(!1)
var E=V(),w=i(E),y=l(w),C=e=>{var a=O()
a.__click=[N,g]
var s=l(a),i=e=>{var a=q("∨")
A(e,a)},r=e=>{var a=q(">")
A(e,a)}
t(s,(e=>{v(g)?e(i):e(r,!1)})),d((()=>p(a,"aria-expanded",v(g)))),A(e,a)}
t(y,(e=>{s.entry[3].length&&e(C)}))
var S=r(w,2),T=l(S),U=r(S,2),H=l(U),B=r(U,2),I=l(B),Q=r(B,2),R=e=>{var a=P()
u(a,21,(()=>s.entry[3]),x,((e,a)=>{var s=f((()=>h(v(a),2)))
var t=j(),n=r(i(t),4),b=l(n),p=r(n,2),u=l(p)
d((e=>{o(b,e),o(u,v(s)[1])}),[()=>c(v(s)[0])]),A(e,t)})),m(3,a,(()=>k),(()=>({duration:300}))),A(e,a)}
t(Q,(e=>{v(g)&&e(R)})),d(((e,a)=>{o(T,e),o(H,a),o(I,s.entry[2])}),[()=>s.entry[0].replaceAll("_"," "),()=>c(s.entry[1])]),A(e,E),b()}function K(e){g("SE Tracker","Toggle Pref"),H("enableSeTracker",e.target.checked)}e(["click"])
var _=s('<span class="network svelte-1hf4bli"></span> <label>Enable SE Tracker [&thinsp; <div class="tooltip svelte-1hf4bli">? <div class="tooltiptext svelte-1hf4bli"><span class="tooltiptitle svelte-1hf4bli">Enable SE Tracker</span><br/><br/> <div>If enabled, will track the last time each SE was killed.<br/> This is DIFFERENT from the usual FSH network activity.<br/> When this is enabled, if you have ANY game page open in a browser tab it\n        will scan the SE Log every 10 minutes.<br/> You do not need auto-refresh for this to work.</div></div></div> &thinsp;]: <input type="checkbox" class="svelte-1hf4bli"/></label>',1)
e(["click"])
const D=B([S,I],(([e,a],s)=>{a&&e?function(e,a){const s=Q(e)
a(R(s.map((([,e])=>e))).map((e=>[e,s.filter((([,a])=>a===e)).map((([e,,,a])=>[e,a]))])).map((([e,a])=>[e,a[0][0],a[0][1],a.slice(1)])))}(a,s):s()}))
var M=s('<div><div class="innerColumnHeader svelte-1dqxqm9">&nbsp;</div></div> <div><div class="innerColumnHeader svelte-1dqxqm9">Creature</div></div> <div><div class="innerColumnHeader svelte-1dqxqm9">Last Kill</div></div> <div><div class="innerColumnHeader svelte-1dqxqm9">Location</div></div> <!>',1),Z=s('<div class="container svelte-1dqxqm9"><div class="top svelte-1dqxqm9"><!></div> <div class="tracker-table svelte-1dqxqm9"><!></div></div>')
function $(e){const[s,n]=U(),d=()=>T(D,"$trackerTableStore",s)
var c=Z(),o=l(c)
!function(e,s){a(s,!1)
const[t,v]=U()
L()
var n=_(),d=i(n)
w(d,"",{},{"background-image":'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAB3RJTUUH1QgGDTMWk1twEwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAARnQU1BAACxjwv8YQUAAAC8SURBVHjahVPBEcQgCEQnHdmTqUlr0qe16I8cufOiCGZnGCcIy4LEICJwmGgWJ3o0IOCQEqVg9Y4U3CoCHQhvxuPUZEiA3XYkxyI1/6S6R6rke8AlJbkV7u95lleXq3yrdyUjLGxwnifmnHEXY3fJIQSIMcKOZCLgMltrr+1ZWgxp8wi1VrEqxfeFWloYq4wKtOHeBNqeawqmeOnNvfdYSvkbfaeUxP0w/G+k6WsT/xCBc25SuxDsnownEy4u5BHudpMFegAAAABJRU5ErkJggg==")'})
var c=r(d,2),o=r(l(c),3)
o.__click=[K],y(o,(()=>T(S,"$trackerPrefStore",t)),(e=>C(S,e))),A(e,n),b(),v()}(l(o),{})
var p=r(o,2),f=l(p),x=e=>{var a=M(),s=r(i(a),8)
u(s,1,d,(e=>e[0]),((e,a)=>{W(e,{get entry(){return v(a)}})})),A(e,a)}
t(f,(e=>{d()&&e(x)})),A(e,c),n()}function z(e,s){a(s,!0)
let i=Y(s,"visible",15,!0)
{const a=e=>{var a=q("Super Elite Tracker")
A(e,a)}
F(e,{close:function(){g("SE Tracker","close"),i(!1)},get visible(){return i()},title:a,children:(e,a)=>{$(e)},$$slots:{title:!0,default:!0}})}b()}const X=G({visible:!0})
let ee=0
function ae(){ee?X.visible=!0:ee=J(z,{props:X,target:document.body})}export{ae as default}
//# sourceMappingURL=mountSuperElite.svelte-D7zZnktW.js.map

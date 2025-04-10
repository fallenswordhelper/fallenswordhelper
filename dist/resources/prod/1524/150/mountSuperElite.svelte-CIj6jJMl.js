import{a6 as e,R as a,X as s,au as t,a0 as i,Z as l,Y as r,V as v,S as d,a7 as n,ep as c,a8 as o,a3 as A,a4 as b,br as p,_ as u,bH as f,dV as x,dW as m,s as k,W as g,bq as E,dF as h,aw as q,eq as w,er as S,bY as y,bX as C,aj as T,bK as H,es as U,et as B,bu as Y,bE as I,dZ as Q,T as R,ad as V}from"./calfSystem-BGOTz8de.js"
import"./legacy-CVKI84SU.js"
import{i as W}from"./lifecycle-CJ3D6gkY.js"
const j=(e,a)=>{k("SE Tracker","Expand Row"),g(a,!v(a))}
var F=s('<button type="button" class="svelte-1rxsxdp"><!></button>'),G=s('<div></div> <div></div> <div class="last-kill svelte-1rxsxdp"> </div> <div> </div>',1),J=s('<div class="wide svelte-1rxsxdp"></div>'),L=s('<div class="expando svelte-1rxsxdp"><!></div> <div> </div> <div class="last-kill svelte-1rxsxdp"> </div> <div> </div> <!>',1)
function O(e,s){a(s,!0)
let k=d(!1)
var g=L(),h=t(g),q=l(h),w=e=>{var a=F()
a.__click=[j,k]
var s=l(a),t=e=>{var a=E("∨")
A(e,a)},r=e=>{var a=E(">")
A(e,a)}
i(s,(e=>{v(k)?e(t):e(r,!1)})),n((()=>p(a,"aria-expanded",v(k)))),A(e,a)}
i(q,(e=>{s.entry[3].length&&e(w)}))
var S=r(h,2),y=l(S),C=r(S,2),T=l(C),H=r(C,2),U=l(H),B=r(H,2),Y=e=>{var a=J()
u(a,21,(()=>s.entry[3]),f,((e,a)=>{var s=G(),i=r(t(s),4),d=l(i),b=r(i,2),p=l(b)
n((e=>{o(d,e),o(p,v(a)[1])}),[()=>c(v(a)[0])]),A(e,s)})),x(3,a,(()=>m),(()=>({duration:300}))),A(e,a)}
i(B,(e=>{v(k)&&e(Y)})),n(((e,a)=>{o(y,e),o(T,a),o(U,s.entry[2])}),[()=>s.entry[0].replaceAll("_"," "),()=>c(s.entry[1])]),A(e,g),b()}function Z(e){k("SE Tracker","Toggle Pref"),T("enableSeTracker",e.target.checked)}e(["click"])
var _=s('<span class="network svelte-1hf4bli"></span> <label>Enable SE Tracker [&thinsp; <div class="tooltip svelte-1hf4bli">? <div class="tooltiptext svelte-1hf4bli"><span class="tooltiptitle svelte-1hf4bli">Enable SE Tracker</span><br><br> <div>If enabled, will track the last time each SE was killed.<br> This is DIFFERENT from the usual FSH network activity.<br> When this is enabled, if you have ANY game page open in a browser tab it\n        will scan the SE Log every 10 minutes.<br> You do not need auto-refresh for this to work.</div></div></div> &thinsp;]: <input type="checkbox" class="svelte-1hf4bli"></label>',1)
e(["click"])
const K=H([S,U],(([e,a],s)=>{a&&e?function(e,a){const s=B(e)
a(Y(s.map((([,e])=>e))).map((e=>[e,s.filter((([,a])=>a===e)).map((([e,,,a])=>[e,a]))])).map((([e,a])=>[e,a[0][0],a[0][1],a.slice(1)])))}(a,s):s()}))
var N=s('<div><div class="innerColumnHeader svelte-1dqxqm9">&nbsp;</div></div> <div><div class="innerColumnHeader svelte-1dqxqm9">Creature</div></div> <div><div class="innerColumnHeader svelte-1dqxqm9">Last Kill</div></div> <div><div class="innerColumnHeader svelte-1dqxqm9">Location</div></div> <!>',1),P=s('<div class="container svelte-1dqxqm9"><div class="top svelte-1dqxqm9"><!></div> <div class="tracker-table svelte-1dqxqm9"><!></div></div>')
function X(e){const[s,d]=C(),n=()=>y(K,"$trackerTableStore",s)
var c=P(),o=l(c)
!function(e,s){a(s,!1)
const[i,v]=C()
W()
var d=_(),n=t(d)
h(n,"",{},{"background-image":'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAB3RJTUUH1QgGDTMWk1twEwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAARnQU1BAACxjwv8YQUAAAC8SURBVHjahVPBEcQgCEQnHdmTqUlr0qe16I8cufOiCGZnGCcIy4LEICJwmGgWJ3o0IOCQEqVg9Y4U3CoCHQhvxuPUZEiA3XYkxyI1/6S6R6rke8AlJbkV7u95lleXq3yrdyUjLGxwnifmnHEXY3fJIQSIMcKOZCLgMltrr+1ZWgxp8wi1VrEqxfeFWloYq4wKtOHeBNqeawqmeOnNvfdYSvkbfaeUxP0w/G+k6WsT/xCBc25SuxDsnownEy4u5BHudpMFegAAAABJRU5ErkJggg==")'})
var c=r(n,2),o=r(l(c),3)
o.__click=[Z],q(o,(()=>y(S,"$trackerPrefStore",i)),(e=>w(S,e))),A(e,d),b(),v()}(l(o),{})
var p=r(o,2),f=l(p),x=e=>{var a=N(),s=r(t(a),8)
u(s,1,n,(e=>e[0]),((e,a)=>{O(e,{get entry(){return v(a)}})})),A(e,a)}
i(f,(e=>{n()&&e(x)})),A(e,c),d()}function M(e,s){a(s,!0)
let t=I(s,"visible",15,!0)
{const a=e=>{var a=E("Super Elite Tracker")
A(e,a)}
Q(e,{close:function(){k("SE Tracker","close"),t(!1)},get visible(){return t()},title:a,children:(e,a)=>{X(e)},$$slots:{title:!0,default:!0}})}b()}const $=R({visible:!0})
let D=0
function z(){D?$.visible=!0:D=V(M,{props:$,target:document.body})}export{z as default}
//# sourceMappingURL=mountSuperElite.svelte-CIj6jJMl.js.map

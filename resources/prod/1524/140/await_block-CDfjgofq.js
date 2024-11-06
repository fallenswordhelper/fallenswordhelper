import{co as c,cp as e,cq as n,bf as o,bh as t,bg as r,be as s,cr as l}from"./calfSystem-BhNMi9iJ.js"
function a(a,u){const b=u.token={}
function h(c,e,n,a){if(u.token!==b)return
u.resolved=a
let h=u.ctx
void 0!==n&&(h=h.slice(),h[n]=a)
const i=c&&(u.current=c)(h)
let f=!1
u.block&&(u.blocks?u.blocks.forEach(((c,n)=>{n!==e&&c&&(o(),t(c,1,1,(()=>{u.blocks[n]===c&&(u.blocks[n]=null)})),r())})):u.block.d(1),i.c(),s(i,1),i.m(u.mount(),u.anchor),f=!0),u.block=i,u.blocks&&(u.blocks[e]=i),f&&l()}if(c(a)){const c=e()
if(a.then((e=>{n(c),h(u.then,1,u.value,e),n(null)}),(e=>{if(n(c),h(u.catch,2,u.error,e),n(null),!u.hasCatch)throw e})),u.current!==u.pending)return h(u.pending,0),!0}else{if(u.current!==u.then)return h(u.then,1,u.value,a),!0
u.resolved=a}}function u(c,e,n){const o=e.slice(),{resolved:t}=c
c.current===c.then&&(o[c.value]=t),c.current===c.catch&&(o[c.error]=t),c.block.p(o,n)}export{a as h,u}
//# sourceMappingURL=await_block-CDfjgofq.js.map

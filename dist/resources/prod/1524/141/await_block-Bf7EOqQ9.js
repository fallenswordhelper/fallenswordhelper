import{co as c,cp as e,cq as n,bj as o,bf as t,bk as r,bg as s,cr as l}from"./calfSystem-Blt4DbaE.js"
function a(a,u){const b=u.token={}
function i(c,e,n,a){if(u.token!==b)return
u.resolved=a
let i=u.ctx
void 0!==n&&(i=i.slice(),i[n]=a)
const h=c&&(u.current=c)(i)
let k=!1
u.block&&(u.blocks?u.blocks.forEach(((c,n)=>{n!==e&&c&&(o(),t(c,1,1,(()=>{u.blocks[n]===c&&(u.blocks[n]=null)})),r())})):u.block.d(1),h.c(),s(h,1),h.m(u.mount(),u.anchor),k=!0),u.block=h,u.blocks&&(u.blocks[e]=h),k&&l()}if(c(a)){const c=e()
if(a.then((e=>{n(c),i(u.then,1,u.value,e),n(null)}),(e=>{if(n(c),i(u.catch,2,u.error,e),n(null),!u.hasCatch)throw e})),u.current!==u.pending)return i(u.pending,0),!0}else{if(u.current!==u.then)return i(u.then,1,u.value,a),!0
u.resolved=a}}function u(c,e,n){const o=e.slice(),{resolved:t}=c
c.current===c.then&&(o[c.value]=t),c.current===c.catch&&(o[c.error]=t),c.block.p(o,n)}export{a as h,u}
//# sourceMappingURL=await_block-Bf7EOqQ9.js.map

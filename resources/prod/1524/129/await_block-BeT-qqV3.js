import{ci as c,cj as e,ck as n,bd as t,bf as o,be as r,bc as l,cl as s}from"./calfSystem-B3Rc3sVt.js"
function a(a,u){const i=u.token={}
function b(c,e,n,a){if(u.token!==i)return
u.resolved=a
let b=u.ctx
void 0!==n&&(b=b.slice(),b[n]=a)
const h=c&&(u.current=c)(b)
let k=!1
u.block&&(u.blocks?u.blocks.forEach(((c,n)=>{n!==e&&c&&(t(),o(c,1,1,(()=>{u.blocks[n]===c&&(u.blocks[n]=null)})),r())})):u.block.d(1),h.c(),l(h,1),h.m(u.mount(),u.anchor),k=!0),u.block=h,u.blocks&&(u.blocks[e]=h),k&&s()}if(c(a)){const c=e()
if(a.then((e=>{n(c),b(u.then,1,u.value,e),n(null)}),(e=>{if(n(c),b(u.catch,2,u.error,e),n(null),!u.hasCatch)throw e})),u.current!==u.pending)return b(u.pending,0),!0}else{if(u.current!==u.then)return b(u.then,1,u.value,a),!0
u.resolved=a}}function u(c,e,n){const t=e.slice(),{resolved:o}=c
c.current===c.then&&(t[c.value]=o),c.current===c.catch&&(t[c.error]=o),c.block.p(t,n)}export{a as h,u}
//# sourceMappingURL=await_block-BeT-qqV3.js.map

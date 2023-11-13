import{S as s,J as t,K as a,L as i,N as e,a_ as m,c3 as l,P as c,W as n,X as p,aH as r}from"./calfSystem-rn9Rc_nF.js"
import{p as o}from"./playerId-b1mgATJE.js"
function d(s){let t,a,r,o
return{c(){t=i("img"),e(t,"alt",a=s[0].n),e(t,"class","tip-dynamic svelte-1oqzgf0"),e(t,"data-tipped",r=s[3](s[0])),m(t.src,o=s[2](s[0]))||e(t,"src",o),l(t,"small",s[1])},m(s,a){c(s,t,a)},p(s,[i]){1&i&&a!==(a=s[0].n)&&e(t,"alt",a),1&i&&r!==(r=s[3](s[0]))&&e(t,"data-tipped",r),1&i&&!m(t.src,o=s[2](s[0]))&&e(t,"src",o),2&i&&l(t,"small",s[1])},i:n,o:n,d(s){s&&p(t)}}}function $(s,t,a){let{item:i=0}=t,{small:e=0}=t,{t:m=0}=t
return s.$$set=s=>{"item"in s&&a(0,i=s.item),"small"in s&&a(1,e=s.small),"t"in s&&a(4,m=s.t)},[i,e,s=>13699===s.b?(s=>`${r}composing/${s.x.d}_${s.x.c}.png`)(s):(s=>`${r}items/${s.b}.gif`)(s),s=>`fetchitem.php?item_id=${s.b}&inv_id=${s.a}&t=${m}&p=${o()}`,m]}class f extends s{constructor(s){super(),t(this,s,$,d,a,{item:0,small:1,t:4})}}export{f as I}
//# sourceMappingURL=ItemImg-VjSvoNsX.js.map

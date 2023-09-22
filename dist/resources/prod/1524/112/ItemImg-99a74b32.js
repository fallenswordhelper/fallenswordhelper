import{S as s,J as t,K as a,L as i,N as e,a$ as l,c4 as m,P as c,W as n,X as p,aE as r,aI as $}from"./calfSystem-4830a18d.js"
function o(s){let t,a,r,$
return{c(){t=i("img"),e(t,"alt",a=s[0].n),e(t,"class","tip-dynamic svelte-1oqzgf0"),e(t,"data-tipped",r=s[3](s[0])),l(t.src,$=s[2](s[0]))||e(t,"src",$),m(t,"small",s[1])},m(s,a){c(s,t,a)},p(s,[i]){1&i&&a!==(a=s[0].n)&&e(t,"alt",a),1&i&&r!==(r=s[3](s[0]))&&e(t,"data-tipped",r),1&i&&!l(t.src,$=s[2](s[0]))&&e(t,"src",$),2&i&&m(t,"small",s[1])},i:n,o:n,d(s){s&&p(t)}}}function d(s,t,a){let{item:i=0}=t,{small:e=0}=t,{t:l=0}=t
return s.$$set=s=>{"item"in s&&a(0,i=s.item),"small"in s&&a(1,e=s.small),"t"in s&&a(4,l=s.t)},[i,e,s=>13699===s.b?(s=>`${$}composing/${s.x.d}_${s.x.c}.png`)(s):(s=>`${$}items/${s.b}.gif`)(s),s=>`fetchitem.php?item_id=${s.b}&inv_id=${s.a}&t=${l}&p=${r()}`,l]}class f extends s{constructor(s){super(),t(this,s,d,o,a,{item:0,small:1,t:4})}}export{f as I}
//# sourceMappingURL=ItemImg-99a74b32.js.map

import{S as s,L as t,M as a,N as i,P as e,b2 as l,c8 as m,R as c,Y as n,Z as p,aH as r,aL as o}from"./calfSystem-076d7a01.js"
function $(s){let t,a,r,o
return{c(){t=i("img"),e(t,"alt",a=s[0].n),e(t,"class","tip-dynamic svelte-1oqzgf0"),e(t,"data-tipped",r=s[3](s[0])),l(t.src,o=s[2](s[0]))||e(t,"src",o),m(t,"small",s[1])},m(s,a){c(s,t,a)},p(s,[i]){1&i&&a!==(a=s[0].n)&&e(t,"alt",a),1&i&&r!==(r=s[3](s[0]))&&e(t,"data-tipped",r),1&i&&!l(t.src,o=s[2](s[0]))&&e(t,"src",o),2&i&&m(t,"small",s[1])},i:n,o:n,d(s){s&&p(t)}}}function d(s,t,a){let{item:i=0}=t,{small:e=0}=t,{t:l=0}=t
return s.$$set=s=>{"item"in s&&a(0,i=s.item),"small"in s&&a(1,e=s.small),"t"in s&&a(4,l=s.t)},[i,e,s=>13699===s.b?(s=>`${o}composing/${s.x.d}_${s.x.c}.png`)(s):(s=>`${o}items/${s.b}.gif`)(s),s=>`fetchitem.php?item_id=${s.b}&inv_id=${s.a}&t=${l}&p=${r()}`,l]}class f extends s{constructor(s){super(),t(this,s,d,$,a,{item:0,small:1,t:4})}}export{f as I}
//# sourceMappingURL=ItemImg-e1e78fe0.js.map

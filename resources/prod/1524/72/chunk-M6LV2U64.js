import{b as o}from"./chunk-JPF23T2W.js";import{a as i}from"./chunk-6OIRWEPN.js";var u=[(t,n)=>t.day?n+parseInt(t.day,10)*1440:n,(t,n)=>t.hour?n+parseInt(t.hour,10)*60:n,(t,n)=>t.min?n+parseInt(t.min,10):n,(t,n)=>t.last_login?Math.floor((o-t.last_login)/60):n,(t,n)=>"last_login"in t&&!t.last_login?99999:n];function f(t,n,r){return r(t,n)}function e(t){return u.reduce(i(f,t),0)}var l=[[2,"greenDiamond"],[5,"yellowDiamond"],[30,"orangeDiamond"],[10080,"offlineDot"],[44640,"sevenDayDot"]];function s(t,n){return t<n[0]}function a(t){let n="Offline";return t==="greenDiamond"&&(n="Online"),`<span class="fshDot ${t}" data-tooltip="${n}"></span>`}function c(t){let n=e(t),r=l.find(i(s,n));return a(r?r[1]:"redDot")}export{e as a,c as b};
//# sourceMappingURL=chunk-M6LV2U64.js.map

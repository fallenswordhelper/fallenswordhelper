import{r as M}from"./chunk-ZYUPJWLY.js";function b(s){let r=s-1;return r*r*r+1}function k(s,{delay:r=0,duration:f=400,easing:p=b,x:a=0,y:n=0,opacity:l=0}={}){let c=getComputedStyle(s),i=+c.opacity,o=c.transform==="none"?"":c.transform,e=i*(1-l),[d,h]=M(a),[y,$]=M(n);return{delay:r,duration:f,easing:p,css:(u,g)=>`
			transform: ${o} translate(${(1-u)*d}${h}, ${(1-u)*y}${$});
			opacity: ${i-e*g}`}}function C(s,{delay:r=0,duration:f=400,easing:p=b,axis:a="y"}={}){let n=getComputedStyle(s),l=+n.opacity,c=a==="y"?"height":"width",i=parseFloat(n[c]),o=a==="y"?["top","bottom"]:["left","right"],e=o.map(t=>`${t[0].toUpperCase()}${t.slice(1)}`),d=parseFloat(n[`padding${e[0]}`]),h=parseFloat(n[`padding${e[1]}`]),y=parseFloat(n[`margin${e[0]}`]),$=parseFloat(n[`margin${e[1]}`]),u=parseFloat(n[`border${e[0]}Width`]),g=parseFloat(n[`border${e[1]}Width`]);return{delay:r,duration:f,easing:p,css:t=>`overflow: hidden;opacity: ${Math.min(t*20,1)*l};${c}: ${t*i}px;padding-${o[0]}: ${t*d}px;padding-${o[1]}: ${t*h}px;margin-${o[0]}: ${t*y}px;margin-${o[1]}: ${t*$}px;border-${o[0]}-width: ${t*u}px;border-${o[1]}-width: ${t*g}px;`}}export{k as a,C as b};
//# sourceMappingURL=chunk-INXAI5WY.js.map

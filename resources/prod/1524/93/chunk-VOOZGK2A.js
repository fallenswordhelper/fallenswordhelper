function d(e){let o=e-1;return o*o*o+1}function $(e,{delay:o=0,duration:u=400,easing:s=d,x:t=0,y:a=0,opacity:f=0}={}){let r=getComputedStyle(e),c=+r.opacity,p=r.transform==="none"?"":r.transform,l=c*(1-f);return{delay:o,duration:u,easing:s,css:(i,h)=>`
			transform: ${p} translate(${(1-i)*t}px, ${(1-i)*a}px);
			opacity: ${c-l*h}`}}function x(e,{delay:o=0,duration:u=400,easing:s=d}={}){let t=getComputedStyle(e),a=+t.opacity,f=parseFloat(t.height),r=parseFloat(t.paddingTop),c=parseFloat(t.paddingBottom),p=parseFloat(t.marginTop),l=parseFloat(t.marginBottom),i=parseFloat(t.borderTopWidth),h=parseFloat(t.borderBottomWidth);return{delay:o,duration:u,easing:s,css:n=>`overflow: hidden;opacity: ${Math.min(n*20,1)*a};height: ${n*f}px;padding-top: ${n*r}px;padding-bottom: ${n*c}px;margin-top: ${n*p}px;margin-bottom: ${n*l}px;border-top-width: ${n*i}px;border-bottom-width: ${n*h}px;`}}export{$ as a,x as b};
//# sourceMappingURL=chunk-VOOZGK2A.js.map

import{a as n}from"./chunk-SJXIBZCO.js";import{a as o}from"./chunk-3F6JEXZ5.js";import{a as r}from"./chunk-AX2MQ55Q.js";var t,i=["Skill ([\\w ]*) level (\\d*) was activated on '(\\w*)'","The skill ([\\w ]*) of (current or higher level is currently active) on '(\\w*)'","Player '(\\w*)' (has set their preferences to block the skill) '([\\w ]*)' from being cast on them."];function u(){t||(t=new RegExp(i.join("|")))}function l(e){return t.exec(e)}function a(e){return u(),o("#quickbuff-report font:not(font *)",e).map(r).map(l)}function c(e){return n.find(f=>f.name===e)}export{a,c as b};
//# sourceMappingURL=chunk-UMRVFFNH.js.map

import{bO as t,c2 as a}from"./calfSystem-2f15e074.js"
function e(e){const r=new FormData(e.target)
e.submitter?.name&&r.append(e.submitter.name,e.submitter.value),t(`${a}?${new URLSearchParams(r).toString()}`)}export{e as f}
//# sourceMappingURL=formToUrl-c2b3e14d.js.map

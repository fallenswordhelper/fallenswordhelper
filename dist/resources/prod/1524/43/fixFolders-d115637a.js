import{E as o,t as a,au as t}from"./calfSystem-9942149b.js"
import{g as n,m as r}from"./monkeyBp-7ba1191e.js"
function s(o,a){const n=`${t}ui/misc/${a}.png`
o.src!==n&&(o.src=n)}function c(o,a){a.dataset.folder===o?s(a,"folder_on"):s(a,"folder")}function f(t){o(".backpackFolderImage").forEach(a(c,String(t.folderId)))}function e(){const o=n()
o&&r(o,f)}export default e
//# sourceMappingURL=fixFolders-d115637a.js.map

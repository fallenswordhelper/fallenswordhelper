import{E as o,t as a,an as n}from"./calfSystem-eeb1d862.js"
import{g as t,m as c}from"./monkeyBp-a5f3c262.js"
function f(o,a){const t=`${n}ui/misc/${a}.png`
o.src!==t&&(o.src=t)}function r(o,a){a.dataset.folder===o?f(a,"folder_on"):f(a,"folder")}function s(n){o(".backpackFolderImage").forEach(a(r,String(n.folderId)))}function e(){const o=t()
o&&c(o,s)}export default e
//# sourceMappingURL=fixFolders-c7dd9454.js.map

import{E as o,t as a,aw as t}from"./calfSystem-b31aba65.js"
import{g as c,m as n}from"./monkeyBp-c7b29711.js"
function r(o,a){const c=`${t}ui/misc/${a}.png`
o.src!==c&&(o.src=c)}function s(o,a){a.dataset.folder===o?r(a,"folder_on"):r(a,"folder")}function f(t){o(".backpackFolderImage").forEach(a(s,String(t.folderId)))}function e(){const o=c()
o&&n(o,f)}export default e
//# sourceMappingURL=fixFolders-c1a53a90.js.map

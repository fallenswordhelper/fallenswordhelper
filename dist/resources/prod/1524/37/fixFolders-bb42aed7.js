import{E as o,t as a,ak as t}from"./calfSystem-60c20ae9.js"
import{g as c,m as n}from"./monkeyBp-8318372a.js"
function r(o,a){const c=`${t}ui/misc/${a}.png`
o.src!==c&&(o.src=c)}function s(o,a){a.dataset.folder===o?r(a,"folder_on"):r(a,"folder")}function f(t){o(".backpackFolderImage").forEach(a(s,String(t.folderId)))}function e(){const o=c()
o&&n(o,f)}export default e
//# sourceMappingURL=fixFolders-bb42aed7.js.map

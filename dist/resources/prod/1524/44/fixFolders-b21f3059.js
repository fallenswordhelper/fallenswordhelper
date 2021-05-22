import{E as o,t as a,av as t}from"./calfSystem-6ad077b7.js"
import{g as f,m as n}from"./monkeyBp-9f301a7e.js"
function r(o,a){const f=`${t}ui/misc/${a}.png`
o.src!==f&&(o.src=f)}function s(o,a){a.dataset.folder===o?r(a,"folder_on"):r(a,"folder")}function c(t){o(".backpackFolderImage").forEach(a(s,String(t.folderId)))}function e(){const o=f()
o&&n(o,c)}export default e
//# sourceMappingURL=fixFolders-b21f3059.js.map

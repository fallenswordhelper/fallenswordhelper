import{c as e}from"./calfSystem-3cb2f93e.js"
import{h as n}from"./simpleCheckbox-11592a14.js"
import{i as t}from"./isChecked-987a8a1c.js"
import{i as o}from"./isSelected-7dbc97c6.js"
function s(){return`Hunting Buffs${n("Hunting Buffs","Customize which buffs are designated as hunting buffs. You must type the full name of each buff, separated by commas. Use the checkbox to enable/disable them.")}:`}function i(){return`<input name="showHuntingBuffs" class="fshVMid" type="checkbox" value="on"${t(e.showBuffs)}>`}function u(){return`Enabled Hunting Mode${n("Enabled Hunting Mode","This will determine which list of buffs gets checked on the world screen.")}:<select name="enabledHuntingMode"><option value="1"${o(e.enabledHuntingMode,"1")}>${e.buffsName}</option><option value="2"${o(e.enabledHuntingMode,"2")}>${e.buffs2Name}</option><option value="3"${o(e.enabledHuntingMode,"3")}>${e.buffs3Name}</option></select>`}function a(){return`${s()+i()} ${u()}`}function f(){return`<tr><td class="fshRight">${s()}</td><td colspan="3">${i()} ${u()}</td></tr>`}export{a,f as h}
//# sourceMappingURL=huntingBuffs-a4855067.js.map

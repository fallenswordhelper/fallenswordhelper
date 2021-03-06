import getValue from '../../system/getValue';
import { newGuildLogUrl, notepadBlankUrl, playerIdUrl } from '../../support/constants';

const topSection = '<div class="helperMenuColumn"><div class="helperMenuSectionHeader">Character</div><ul>'
  + '<li><span class="fshLink">Buff Log</span></li>'
  + '<li><span class="fshLink">Combat Log</span></li>'
  + '<li><span class="fshLink">Creature Log</span></li>'
  + '<li><span class="fshLink">Recipe Manager</span></li>'
  + '<li><span class="fshLink">Quick Links</span></li>'
  + `<li><a href="${notepadBlankUrl}invmanagernew">Inventory Manager</a></li>`
  + '</ul><div class="helperMenuSectionHeader">Actions</div><ul>'
  + '<li><span class="fshLink">Find Buffs</span></li>'
  + '<li><span class="fshLink">Find Other</span></li>'
  + '<li><span class="fshLink">Online Players</span></li>'
  + '<li><span class="fshLink">AH Quick Search</span></li>'
  + '</ul><div class="helperMenuSectionHeader">Guild</div><ul>'
  + `<li><a href="${notepadBlankUrl}guildinvmgr">Guild Inventory</a></li>`
  + `<li><a href="${newGuildLogUrl}">New Guild Log</a></li>`
  + '</ul><div class="helperMenuSectionHeader">Extra</div><ul>'
  + '<li><span class="fshLink">Quick Extract</span></li>'
  + '<li><span class="fshLink">Quick Wear</span></li>'
  + '<li><span class="fshLink">FS Box Log</span></li></ul>';

const betaSection = '<div class="helperMenuSectionHeader">Beta Features</div><ul>'
  + `<li><a href="${notepadBlankUrl}reliclist">Relic List</a><sup class="fshRed">beta</sup></li>`
  + '</ul>';

const bottomSection = '<div class="helperMenuSectionHeader">FSH developer quick links</div><ul>'
  + '<li><span class="helperMenuReply" target_player="PointyHair">PM</span> '
  + `<a href="${playerIdUrl}1963510">PointyHair</a></li>`
  + '</ul></div>';

export default function getHelperMenuBlob() {
  return `${topSection}`
    + `${getValue('betaOptIn') ? betaSection : ''}`
    + `${bottomSection}`;
}

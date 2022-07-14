import calf from '../../support/calf';
import { newGuildLogUrl, notepadBlankUrl, playerIdUrl } from '../../support/constants';
import getValue from '../../system/getValue';

const leadIn = '<div class="helperMenuColumn">';

const topSection = '<div class="helperMenuSectionHeader">Character</div><ul>'
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
  + '<li><button class="helperDevBtn helperQuickExtract" type="button">Quick Extract</button></li>'
  + '<li><span class="fshLink">Quick Wear</span></li>'
  + '<li><span class="fshLink">FS Box Log</span></li></ul>';

const betaSection = '<div class="helperMenuSectionHeader">Beta Features</div><ul>'
  + `<li><a href="${notepadBlankUrl}reliclist">Relic List</a><sup class="fshRed">beta</sup></li>`
  + '<li><button class="helperDevBtn helperGsDl" type="button">GS Export</button><sup class="fshRed">beta</sup></li>'
  + '</ul>';

const bottomSection = '<div class="helperMenuSectionHeader">FSH developer quick links</div><ul>'
  + '<li><span class="helperMenuReply" target_player="PointyHair">PM</span> '
  + `<a href="${playerIdUrl}1963510">PointyHair</a></li>`
  + '</ul>';

const devSection = '<div class="helperMenuSectionHeader">Dev links</div>';

const leadOut = '</div>';

export default function getHelperMenuBlob() {
  return `${leadIn}${topSection}`
    + `${getValue('betaOptIn') ? betaSection : ''}`
    + `${bottomSection}`
    + `${calf.userIsDev ? devSection : ''}`
    + `${leadOut}`;
}

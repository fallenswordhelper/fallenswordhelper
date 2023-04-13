import './settings.css';
import getElementById from '../../common/getElementById';
import insertHtmlBeforeEnd from '../../common/insertHtmlBeforeEnd';
import bounty from './bounty.html';
import equipment from './equipment.html';
import footer from './footer.html';
import general from './general.html';
import guild from './guild.html';
import header from './header.html';
import links from './links.html';
import log from './log.html';
import other from './other.html';
import profile from './profile.html';
import quest from './quest.html';
import world from './world.html';

export default function injectHtml() {
  insertHtmlBeforeEnd(getElementById('fshSettings'), `<div class="fsh-settings">${
    header}${
    general}${
    links}${
    guild}${
    world}${
    log}${
    equipment}${
    quest}${
    profile}${
    bounty}${
    other}${
    footer}</div>`);
}

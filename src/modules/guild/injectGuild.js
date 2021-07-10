import activeMembers from './activeMembers';
import calf from '../support/calf';
import colouredDots from '../common/colouredDots';
import guildXPLock from './guildXPLock';
import injectViewGuild from './injectViewGuild';
import manage from './manage';
import removeGuildAvyImgBorder from './removeGuildAvyImgBorder';
import task from '../support/task';

export default function injectGuild() {
  task(3, colouredDots);
  task(3, removeGuildAvyImgBorder);
  task(3, guildXPLock);
  task(3, activeMembers);

  if (calf.subcmd === 'manage') { manage(); }
  if (calf.subcmd === 'view') { injectViewGuild(); }
}

import './injectGuild.css';
import colouredDots from '../common/colouredDots';
import calf from '../support/calf';
import task from '../support/task';
import activeMembers from './activeMembers';
import guildXPLock from './guildXPLock';
import injectViewGuild from './injectViewGuild';
import manage from './manage';

export default function injectGuild() {
  task(3, colouredDots);
  task(3, guildXPLock);
  task(3, activeMembers);

  if (['-', 'manage'].includes(calf.subcmd)) { manage(); }
  if (calf.subcmd === 'view') { injectViewGuild(); }
}

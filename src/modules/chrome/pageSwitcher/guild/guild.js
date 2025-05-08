import runDefault from '../../../common/runDefault';
import bioWidgets from '../loader/bioWidgets';
import injectGuild from '../loader/injectGuild';
import advisor from './advisor';
import groups from './groups';
import hall from './hall';
import inventory from './inventory';

const guildChat = () => { runDefault(import('../../../logs/guildChat')); };
const guildLog = () => { runDefault(import('../../../logs/guildLog')); };
const guildMailbox = () => {
  runDefault(import('../../../mailbox/guildMailbox'));
};
const injectGuildBank = () => {
  runDefault(import('../../../bank/injectGuildBank'));
};
const rank = () => {
  runDefault(import('../../../guild/ranks/rank'));
};
const injectRPUpgrades = () => {
  runDefault(import('../../../guild/injectRPUpgrades'));
};
const injectScouttower = () => {
  runDefault(import('../../../guild/scoutTower/injectScouttower'));
};

export default {
  inventory,
  chat: { '-': guildChat },
  dochat: { '-': guildChat },
  log: { '-': guildLog },
  groups,
  manage: { '-': injectGuild },
  advisor,
  history: { '-': bioWidgets },
  view: { '-': injectGuild },
  scouttower: { '-': injectScouttower },
  mailbox: { '-': guildMailbox },
  ranks: { '-': rank },
  conflicts: { rpupgrades: injectRPUpgrades },
  bank: { '-': injectGuildBank },
  hall,
  '-': { '-': injectGuild },
};

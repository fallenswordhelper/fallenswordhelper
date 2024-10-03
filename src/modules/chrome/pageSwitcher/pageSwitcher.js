import runDefault from '../../common/runDefault';
import injectWorld from '../../world/injectWorld';
import parseTemplePage from '../notification/parseTemplePage';
import arena from './arena';
import auctionhouse from './auctionhouse';
import composing from './composing';
import guild from './guild/guild';
import inventing from './inventing';
import items from './items';
import injectProfile from './loader/profile';
import ufsgAllowBack from './loader/ufsgAllowBack';
import news from './news';
import noCmd from './noCmd';
import notepad from './notepad';
import potionbazaar from './potionbazaar';
import profile from './profile';
import questbook from './questbook';
import quests from './quests';
import repairall from './repairall';
import scavenging from './scavenging';
import toprated from './toprated';
import trade from './trade';

const hellforge = () => {
  runDefault(import('../../hellforge'));
};
const injectBank = () => {
  runDefault(import('../../bank/injectBank'));
};
const injectBuffmarket = () => {
  runDefault(import('../../buffmarket/injectBuffmarket'));
};
const findplayer = () => {
  runDefault(import('../../findplayer/findplayer'));
};
const injectMailbox = () => {
  runDefault(import('../../mailbox/mailbox'));
};
const injectSettings = () => {
  runDefault(import('../../settings/injectSettings'));
};
const injectTitan = () => {
  runDefault(import('../../injectTitan'));
};
const ladder = () => {
  runDefault(import('../../ladder/ladder'));
};
const marketplace = () => {
  runDefault(import('../../marketplace'));
};
const playerLog = () => {
  runDefault(import('../../logs/playerLog'));
};
const points = () => {
  runDefault(import('./points'));
};
const privateMsg = () => {
  runDefault(import('../../logs/privateMsg/privateMsg'));
};
const quickBuff = () => {
  runDefault(import('../../quickbuff/quickBuff'));
};
const superelite = () => {
  runDefault(import('../../superelite/superelite'));
};

const skills = () => {
  if (!defineUserIsDev) {
    return;
  } // skills
  runDefault(import('../../skills'));
};

export default {
  creatures: { '-': { '-': ufsgAllowBack } }, // UFSG
  items, // UFSG
  masterrealms: { '-': { '-': ufsgAllowBack } }, // UFSG
  quests, // UFSG
  realms: { '-': { '-': ufsgAllowBack } }, // UFSG
  relics: { '-': { '-': ufsgAllowBack } }, // UFSG
  shops: { '-': { '-': ufsgAllowBack } }, // UFSG
  '-': noCmd,
  arena,
  auctionhouse,
  bank: { '-': { '-': injectBank } },
  blacksmith: { repairall: { '-': repairall } },
  buffmarket: { '-': { '-': injectBuffmarket } },
  combat: { attackplayer: { '-': injectProfile } },
  composing,
  findplayer: { '-': { '-': findplayer } },
  guild,
  hellforge: { '-': { '-': hellforge } },
  inventing,
  log: { '-': { '-': playerLog } },
  marketplace: { createreq: { '-': marketplace } },
  news,
  notepad,
  points: { '-': { '-': points } },
  potionbazaar,
  privatemessage: { '-': { '-': privateMsg } },
  profile,
  pvpladder: { '-': { '-': ladder } },
  questbook,
  quickbuff: { '-': { '-': quickBuff } },
  scavenging,
  settings: { '-': { '-': injectSettings } },
  skills: { '-': { '-': skills } },
  superelite: { '-': { '-': superelite } },
  tempinv: { '-': { '-': injectMailbox } },
  temple: { '-': { '-': parseTemplePage } },
  titan: { '-': { '-': injectTitan } },
  toprated,
  trade,
  world: { '-': { '-': injectWorld } },
};

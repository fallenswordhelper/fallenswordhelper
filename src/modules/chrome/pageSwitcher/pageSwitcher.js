import arena from './arena';
import auctionhouse from './auctionhouse';
import composing from './composing';
import guild from './guild/guild';
import injectWorld from '../../world/injectWorld';
import items from './items';
import news from './news';
import noCmd from './noCmd';
import notepad from './notepad';
import parseTemplePage from '../notification/parseTemplePage';
import profile from './profile';
import questbook from './questbook';
import quests from './quests';
import runDefault from '../../common/runDefault';
import scavenging from './scavenging';
import toprated from './toprated';
import trade from './trade';
import { injectProfile, inventing, ufsgAllowBack } from './loader';

const craftForge = () => { runDefault(import('../../craftForge/craftForge')); };
const injectBank = () => { runDefault(import('../../bank/injectBank')); };
const injectBazaar = () => { runDefault(import('../../bazaar')); };
const injectFindPlayer = () => {
  runDefault(import('../../injectFindPlayer'));
};
const injectMailbox = () => { runDefault(import('../../mailbox/mailbox')); };
const injectQuickBuff = () => {
  runDefault(import('../../quickbuff/quickBuff'));
};
const injectTitan = () => { runDefault(import('../../injectTitan')); };
const injectSettings = () => {
  runDefault(import('../../settings/injectSettings'));
};
const ladder = () => { runDefault(import('../../ladder/ladder')); };
const marketplace = () => { runDefault(import('../../marketplace')); };
const points = () => { runDefault(import('./points')); };
const superelite = () => { runDefault(import('../../seLog/superelite')); };
const privateMsg = () => { runDefault(import('../../logs/privateMsg')); };
const playerLog = () => { runDefault(import('../../logs/playerLog')); };

export default {
  settings: { '-': { '-': injectSettings } },
  world: { '-': { '-': injectWorld } },
  news,
  arena,
  questbook,
  profile,
  auctionhouse,
  guild,
  bank: { '-': { '-': injectBank } },
  log: { '-': { '-': playerLog } },
  potionbazaar: { '-': { '-': injectBazaar } },
  marketplace: { createreq: { '-': marketplace } },
  quickbuff: { '-': { '-': injectQuickBuff } }, // No ga
  notepad,
  points: { '-': { '-': points } },
  trade,
  titan: { '-': { '-': injectTitan } },
  toprated,
  inventing: { viewrecipe: { '-': inventing } },
  tempinv: { '-': { '-': injectMailbox } },
  findplayer: { '-': { '-': injectFindPlayer } },
  quests, // UFSG
  items, // UFSG
  creatures: { '-': { '-': ufsgAllowBack } }, // UFSG
  masterrealms: { '-': { '-': ufsgAllowBack } }, // UFSG
  realms: { '-': { '-': ufsgAllowBack } }, // UFSG
  relics: { '-': { '-': ufsgAllowBack } }, // UFSG
  shops: { '-': { '-': ufsgAllowBack } }, // UFSG
  scavenging,
  temple: { '-': { '-': parseTemplePage } },
  composing,
  pvpladder: { '-': { '-': ladder } },
  crafting: { '-': { '-': craftForge } },
  hellforge: { '-': { '-': craftForge } },
  superelite: { '-': { '-': superelite } },
  '-': noCmd,
  combat: { attackplayer: { '-': injectProfile } },
  privatemessage: { '-': { '-': privateMsg } },
};

import arena from './arena';
import auctionhouse from './auctionhouse';
import composing from './composing';
import creatures from './creatures';
import guild from './guild/guild';
import injectProfile from './loader/profile';
import injectWorld from '../../world/injectWorld';
import inventing from './loader/inventing';
import items from './items';
import news from './news';
import noCmd from './noCmd';
import notepad from './notepad';
import parseTemplePage from '../notification/parseTemplePage';
import potionbazaar from './potionbazaar';
import profile from './profile';
import questbook from './questbook';
import quests from './quests';
import runDefault from '../../common/runDefault';
import scavenging from './scavenging';
import toprated from './toprated';
import trade from './trade';
import ufsgAllowBack from './loader/ufsgAllowBack';

const craftForge = () => { runDefault(import('../../craftForge/craftForge')); };
const injectBank = () => { runDefault(import('../../bank/injectBank')); };
const injectFindPlayer = () => { runDefault(import('../../injectFindPlayer')); };
const injectMailbox = () => { runDefault(import('../../mailbox/mailbox')); };
const quickBuff = () => { runDefault(import('../../quickbuff/quickBuff')); };
const injectTitan = () => { runDefault(import('../../injectTitan')); };
const injectSettings = () => { runDefault(import('../../settings/injectSettings')); };
const ladder = () => { runDefault(import('../../ladder/ladder')); };
const marketplace = () => { runDefault(import('../../marketplace')); };
const points = () => { runDefault(import('./points')); };
const superelite = () => { runDefault(import('../../seLog/superelite')); };
const privateMsg = () => { runDefault(import('../../logs/privateMsg/privateMsg')); };
const playerLog = () => { runDefault(import('../../logs/playerLog')); };
const injectBuffmarket = () => { runDefault(import('../../buffmarket/injectBuffmarket')); };

export default {
  creatures, // UFSG
  items, // UFSG
  masterrealms: creatures, // UFSG
  quests, // UFSG
  realms: { '-': { '-': ufsgAllowBack } }, // UFSG
  relics: { '-': { '-': ufsgAllowBack } }, // UFSG
  shops: creatures, // UFSG
  '-': noCmd,
  arena,
  auctionhouse,
  bank: { '-': { '-': injectBank } },
  buffmarket: { '-': { '-': injectBuffmarket } },
  combat: { attackplayer: { '-': injectProfile } },
  composing,
  crafting: { '-': { '-': craftForge } },
  findplayer: { '-': { '-': injectFindPlayer } },
  guild,
  hellforge: { '-': { '-': craftForge } },
  inventing: { viewrecipe: { '-': inventing } },
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
  quickbuff: { '-': { '-': quickBuff } }, // No ga
  scavenging,
  settings: { '-': { '-': injectSettings } },
  superelite: { '-': { '-': superelite } },
  tempinv: { '-': { '-': injectMailbox } },
  temple: { '-': { '-': parseTemplePage } },
  titan: { '-': { '-': injectTitan } },
  toprated,
  trade,
  world: { '-': { '-': injectWorld } },
};

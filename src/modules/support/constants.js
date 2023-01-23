import { cdn } from '../system/system';

export const rarity = [
  { colour: '#ffffff', clas: 'fshCommon' },
  { colour: '#0099ff', clas: 'fshRare' },
  { colour: '#cc00ff', clas: 'fshUnique' },
  { colour: '#ffff33', clas: 'fshLegendary' },
  { colour: '#cc0033', clas: 'fshSuper' },
  { colour: '#6633ff', clas: 'fshCrystal' },
  { colour: '#009900', clas: 'fshEpic' },
];

export const places = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth',
  'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth', 'thirteenth',
  'fourteenth'];

export const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',
  'Sep', 'Oct', 'Nov', 'Dec'];

export const etaRe = /ETA:\s*(?<h>\d+)h\s*(?<m>\d+)m\s*(?<s>\d+)s/;
export const fetchItemRe = /fetchitem.php\?item_id=(?<itemId>\d+)&inv_id=(?<invId>[-\d]+)&t=(?<t>\d+)&p=(?<p>\d+)(?:&vcode=(?<vcode>[a-z0-9]+))?/i;
export const guildRE = /guild_id=(?<guildId>\d+)/;
export const lastActivityRE = /<td>Last Activity:<\/td><td>(?<d>\d+)d (?<h>\d+)h (?<m>\d+)m (?<s>\d+)s<\/td>/;
export const playerIDRE = /player_id=(?<playerId>\d+)/;
export const stamRe = /Stamina:<\/td><td>(?<stam>\d{1,12}) \/ (?<max>\d{1,12})<\/td>/;
export const vlRe = /VL:.+?(?<vl>\d+)/;

export const defenderMultiplier = 0.2;

export const defJoinallgroupsundersize = 'joinallgroupsundersize';

export const indexPhp = 'index.php';
export const defCmd = '?cmd=';
export const cmdUrl = `${indexPhp}${defCmd}`;
export const defSubcmd = '&subcmd=';
const defTargetUsername = '&target_username=';
const notepadBlank = `${defCmd}notepad&blank=1${defSubcmd}`;
export const newGuildLogLoc = `${notepadBlank}newguildlog`;
export const newGuildLogUrl = `${indexPhp}${newGuildLogLoc}`;
export const auctionhouseUrl = `${cmdUrl}auctionhouse`;
export const ahSearchUrl = `${auctionhouseUrl}&search=`;
export const logUrl = `${cmdUrl}log`;
export const doAddIgnore = `${cmdUrl}ignore${defSubcmd}add&ignore_username=`;
export const profileUrl = `${cmdUrl}profile`;
export const playerIdUrl = `${profileUrl}&player_id=`;
export const dropItemsUrl = `${profileUrl}${defSubcmd}dropitems`;
export const tradeUrl = `${cmdUrl}trade&target_player=`;
export const secureUrl = `${cmdUrl}trade${defSubcmd}createsecure${
  defTargetUsername}`;
export const arenaUrl = `${cmdUrl}arena${defSubcmd}`;
export const notepadBlankUrl = `${indexPhp}${notepadBlank}`;
export const auctionSearchUrl = `${notepadBlankUrl}auctionsearch`;
export const pointsUrl = `${cmdUrl}points`;
export const guildSubcmdUrl = `${cmdUrl}guild${defSubcmd}`;
export const guildLogUrl = `${guildSubcmdUrl}log`;
export const scouttowerUrl = `${guildSubcmdUrl}scouttower`;
export const groupsSubcmdUrl = `${guildSubcmdUrl}groups&subcmd2=`;
export const recallUserUrl = `${guildSubcmdUrl}inventory&subcmd2=report&user=`;
export const guildViewUrl = `${guildSubcmdUrl}view&guild_id=`;
export const joinallUrl = `${groupsSubcmdUrl}joinall`;
export const joinUnderUrl = `${groupsSubcmdUrl}${defJoinallgroupsundersize}`;
export const worldUrl = `${cmdUrl}world`;
export const searchPlayerUrl = `${cmdUrl}findplayer`;
export const showPlayerUrl = `${searchPlayerUrl
}&search_show_first=1&search_username=`;
export const blacksmithUrl = `${cmdUrl}blacksmith`;
export const quickbuffUrl = `${cmdUrl}quickbuff`;
export const composingUrl = `${cmdUrl}composing`;
export const attackplayerUrl = `${cmdUrl}attackplayer${defTargetUsername}`;
export const updateArchiveUrl = `${cmdUrl}${defSubcmd}viewupdatearchive`;
export const archiveUrl = `${cmdUrl}${defSubcmd}viewarchive`;
export const bountyUrl = `${cmdUrl}bounty`;

export const guideUrl = `https://guide.fallensword.com/${cmdUrl}`;

export const defAfterUpdateActionlist = 'after-update.actionlist';
export const defPlayerBuffs = 'buffs.player';
export const defPlayerUpdate = 'update.player';
export const defPlayerLevel = 'level.stats-player';
export const defPlayerGold = 'gold.stats-player';
export const defShopPrompt = 'prompt.worldDialogShop';
export const defControlsKeydown = 'keydown.controls';
export const defRealmUpdate = 'update.realm';

export const defSuffixSuccessActionResponse = '-success.action-response';
export const defRefreshActionList = `-1${defSuffixSuccessActionResponse}`;
export const defViewCreature = `1${defSuffixSuccessActionResponse}`;
export const defPvE = `2${defSuffixSuccessActionResponse}`;
export const defRelicView = `9${defSuffixSuccessActionResponse}`;
export const defStairway = `5${defSuffixSuccessActionResponse}`;
export const defTeleport = `25${defSuffixSuccessActionResponse}`;

export const defCreatureCombat = 2;
export const defRepairAll = 15;

export const defFetchPlayerStats = 1;
export const defFetchPlayerBackpackCount = 2;
export const defFetchPlayerBackpackItems = 4;
export const defFetchPlayerPrefs = 8;

export const defFetchPlayerBuffs = 16;
export const defFetchWorldDefines = 32;
export const defFetchWorldRealmStatic = 64;
export const defFetchWorldRealmDynamic = 128;

export const defFetchWorldRealmActions = 256;
export const defFetchPlayerEquipment = 512;
export const defFetchPlayerNotifications = 1024;

export const defNeedToCompose = 'needToCompose';
export const defLastComposeCheck = 'lastComposeCheck';
export const defCharacterVirtualLevel = 'characterVirtualLevel';
export const defEnableGuildActivityTracker = 'enableGuildActivityTracker';
export const defLastLadderReset = 'lastLadderReset';

export const defForm = 'form';
export const defTable = 'table';
export const defTd = 'td';
export const defTr = 'tr';

export const fshBuffLog = 'fsh_buffLog';

export const defStatbarLevel = 'statbar-level-tooltip-general';
export const defStatLevel = 'stat-level';
export const defStatDefense = 'stat-defense';
export const defStatAttack = 'stat-attack';
export const defStatDamage = 'stat-damage';
export const defStatArmor = 'stat-armor';
export const defStatHp = 'stat-hp';
export const defStatVl = 'stat-vl';

export const GMSTORAGE_PATH = 'GM_';

export const composingFragmentType = [
  'Common', 'Rare', 'Unique', 'Legendary', 'Super Elite', 'Crystalline'];

export const attribType = ['Attack', 'Defense', 'Armor', 'HP', 'Damage',
  'Stamina', 'Stamina Gain', 'Gold Gain', 'XP Gain'];

export const enhancementType = ['Piercing Strike', 'Reinforced Armor',
  'Thievery', 'Critical Hit', 'Holy', 'Breaker', 'Nullify', 'Banishment',
  'Protection', 'Oceanic', 'Master Thief', 'Protect Gold', 'Dodge', 'Disarm',
  'Master Blacksmith', 'Elite Hunter', 'Sustain', 'Master Crafter',
  'Fury Caster', 'Greenskin Slayer', 'Beast Slayer', 'Duelist', 'Glory Seeker',
  'First Strike', 'Hypnotize', 'Master Inventor', 'Soulless', 'Temporal Shift',
];

export const itemType = ['Helmet', 'Armor', 'Gloves', 'Boots', 'Weapon',
  'Shield', 'Ring', 'Amulet', 'Rune', 'Quest Item', 'Potion', 'Component',
  'Resource', 'Recipe', 'Container', 'Composed', 'Frag Stash'];

export const oldActionSpinner = `${cdn}ui/world/action_spinner.gif`;

export const noteSelector = '.fa-envelope';
export const playerLinkSelector = 'a[href*="&player_id="]';

export const darkCurseMultiplier = 0.002;

export const levelDefaults = [
  [54, 'ca_default'],
  [101, 'sc_default'],
  [60, 'nv_default'],
  [98, 'barricade_default'],
  [179, 'relentless_default'],
  [181, 'aegis_shield_default'],
];

export const blockedSkillsCheckboxes = 'input[name="blockedSkillList[]"]';

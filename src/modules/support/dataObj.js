/* eslint-disable max-lines */
export var defaults = {
  lastActiveQuestPage: '',
  lastNormalActiveQuestPage: '',
  lastNormalCompletedQuestPage: '',
  lastNormalNotStartedQuestPage: '',
  lastSeasonalActiveQuestPage: '',
  lastSeasonalCompletedQuestPage: '',
  lastSeasonalNotStartedQuestPage: '',

  enableLogColoring: false,
  enableChatParsing: false,
  enableCreatureColoring: false,
  showCombatLog: false,
  showCreatureInfo: false,
  keepLogs: false,

  showExtraLinks: false,
  huntingBuffs: 'Doubler,Librarian,Adept Learner,Merchant,' +
    'Treasure Hunter,Animal Magnetism,Conserve',
  huntingBuffsName: 'default',
  huntingBuffs2: 'Deflect',
  huntingBuffs2Name: 'PvP',
  huntingBuffs3: 'Super Elite Slayer',
  huntingBuffs3Name: 'SE',
  showHuntingBuffs: false,
  moveFSBox: false,

  guildSelf: '',
  guildSelfMessage: 'Member of your own guild!',
  guildFrnd: '',
  guildFrndMessage: 'Do not attack - Guild is friendly!',
  guildPast: '',
  guildPastMessage: 'Do not attack - You\'ve been in that guild once!',
  guildEnmy: '',
  guildEnmyMessage: 'Enemy guild. Attack at will!',
  goldRecipient: '',
  goldAmount: '',
  sendGoldonWorld: false,

  hideQuests: false,
  hideQuestNames: '',
  hideRecipes: false,
  hideRecipeNames: '',
  enableGuildInfoWidgets: false,
  enableOnlineAlliesWidgets: false,
  guildOnlineRefreshTime: 300,
  hideGuildInfoSecureTrade: false,
  hideGuildInfoTrade: false,
  hideGuildInfoMessage: false,
  hideGuildInfoBuff: false,

  buyBuffsGreeting: 'Hello {playername}, can I buy {buffs} for {cost} please?',
  renderSelfBio: false,
  bioEditLines: 10,
  renderOtherBios: false,
  playNewMessageSound: false,
  showSpeakerOnWorld: false,
  defaultMessageSound: 'https://fallenswordhelper.github.io/fallenswordhelper/audio/sms-alert-2-daniel_simon.wav',
  highlightPlayersNearMyLvl: false,
  highlightGvGPlayersNearMyLvl: false,
  detailedConflictInfo: false,
  gameHelpLink: true,
  navigateToLogAfterMsg: false,

  enableAllyOnlineList: false,
  enableEnemyOnlineList: false,
  allyEnemyOnlineRefreshTime: 300,
  moveGuildList: false,
  moveOnlineAlliesList: false,

  hideMatchesForCompletedMoves: false,
  doNotKillList: '',
  enableBioCompressor: false,
  maxCompressedCharacters: 250,
  maxCompressedLines: 10,

  currentGoldSentTotal: 0,
  keepBuffLog: false,
  buffLog: '',

  enableActiveBountyList: false,
  bountyListRefreshTime: 300,
  enableWantedList: false,
  wantedNames: '',
  bwNeedsRefresh: true,

  fsboxlog: false,
  fsboxcontent: '',
  itemRecipient: '',
  quickLinks: '[]',
  enableAttackHelper: false,
  minGroupLevel: 1,
  combatEvaluatorBias: 0,
  huntingMode: false,
  enabledHuntingMode: '1',
  hideRelicOffline: false,

  enterForSendMessage: false,
  trackKillStreak: false,
  storeLastQuestPage: false,
  addAttackLinkToLog: false,
  showStatBonusTotal: false,

  newGuildLogHistoryPages: 3,
  useNewGuildLog: false,
  enhanceChatTextEntry: false,

  ajaxifyRankControls: false,

  enableMaxGroupSizeToJoin: false,
  maxGroupSizeToJoin: 11,

  enableTempleAlert: false,
  enableUpgradeAlert: false,
  enableComposingAlert: false,
  autoFillMinBidPrice: false,
  showPvPSummaryInLog: false,
  enableQuickDrink: false,
  enhanceOnlineDots: false,
  hideBuffSelected: false,
  hideHelperMenu: false,
  keepHelperMenuOnScreen: true,
  draggableHelperMenu: false,
  quickLinksTopPx: 22,
  quickLinksLeftPx: 0,
  draggableQuickLinks: false,
  showNextQuestSteps: true,

  showRecallMessages: true,
  showRelicMessages: true,
  showMercenaryMessages: true,
  showGroupCombatMessages: true,
  showDonationMessages: true,
  showRankingMessages: true,
  showGvGMessages: true,
  showTaggingMessages: true,
  showTitanMessages: true,

  showQuickDropLinks: false,

  inventoryMinLvl: 1,
  inventoryMaxLvl: 9999,
  onlinePlayerMinLvl: 1,
  onlinePlayerMaxLvl: 9999,
  arenaMinLvl: 1,
  arenaMaxLvl: 9999,
  showMonsterLog: false,
  lastTempleCheck: 0,
  needToPray: false,
  lastChatCheck: '0',
  lastGuildLogCheck: '0',
  lastOutBoxCheck: '0',
  lastPlayerLogCheck: '0',
  showAdmin: false,
  alliestotal: 0,
  enemiestotal: 0,
  footprints: false,
  hideNonPlayerGuildLogMessages: false,
  listOfAllies: '',
  listOfEnemies: '',
  contactList: '',
  lastUpgradeCheck: 0,
  needToDoUpgrade: false,
  characterVirtualLevel: 0,
  guildLogoControl: false,
  statisticsControl: false,
  guildStructureControl: false,
  lastMembrListCheck: 0,
  disableItemColoring: true,
  showQuickSendLinks: false,
  needToCompose: false,
  lastComposeCheck: 0,
  lastOnlineCheck: 0,
  bountyList: '',
  wantedList: '',
  inventoryCheckedElements: {
    '0': 1,
    '1': 1,
    '2': 1,
    '3': 1,
    '4': 1,
    '5': 1,
    '6': 1,
    '7': 1,
    '8': 1,
    '100': 1,
    '101': 1,
    '102': 1,
    '103': 1,
    '104': 1,
    '105': 1,
    '106': 1
  },
  lowestLevelInTop250: 0,

  quickMsg: '["Thank you very much ^_^","Happy hunting, {playername}"]',

  sendClasses: '["Composed Pots", "13699"], ["Amber", "5611"], ' +
    '["Amethyst Weed", "9145"], ["Blood Bloom", "5563"], ' +
    '["Cerulean Rose", "9156"], ["Coleoptera Body", "9287"], ' +
    '["Dark Shade", "5564"], ["Deathbloom", "9140"], ' +
    '["Deathly Mold", "9153"], ["Greenskin\u00A0Fungus", "9148"], ' +
    '["Heffle", "5565"], ["Jademare", "5566"], ' +
    '["Ruby Thistle", "9143"], ["Toad Corpse","9288"], ' +
    '["Trinettle", "5567"], ["Viridian\u00A0Vine", "9151"], ' +
    '["Mortar & Pestle", "9157"], ["Beetle Juice", "9158"]',

  quickSearchList:
    '[{"category":"Plants","searchname":"Amber","nickname":""},' +
    '{"category":"Plants","searchname":"Blood Bloom","nickname":""},' +
    '{"category":"Plants","searchname":"Jademare","nickname":""},' +
    '{"category":"Plants","searchname":"Dark Shade","nickname":""},' +
    '{"category":"Plants","searchname":"Trinettle","nickname":""},' +
    '{"category":"Plants","searchname":"Heffle Wart","nickname":""},' +
    '{"category":"Potions","searchname":"Sludge Brew",' +
      '"nickname":"DC 200","displayOnAH":true},' +
    '{"category":"Potions","searchname":"Potion of Black Death",' +
      '"nickname":"DC 225","displayOnAH":true},' +
    '{"category":"Potions","searchname":"Potion of Aid",' +
      '"nickname":"Assist","displayOnAH":true},' +
    '{"category":"Potions","searchname":"Potion of Supreme Doubling",' +
      '"nickname":"DB 450","displayOnAH":true},' +
    '{"category":"Potions","searchname":"Potion of Acceleration",' +
      '"nickname":"DB 500","displayOnAH":true},' +
    '{"category":"Potions","searchname":"Potion of Lesser Death Dealer",' +
      '"nickname":"DD","displayOnAH":true},' +
    '{"category":"Potions","searchname":"Runic Potion",' +
      '"nickname":"FI 250","displayOnAH":true},' +
    '{"category":"Potions","searchname":"Potion of the Bookworm",' +
      '"nickname":"Lib 225","displayOnAH":true},' +
    '{"category":"Potions","searchname":"Potion of Truth",' +
      '"nickname":"EW 1k","displayOnAH":true},' +
    '{"category":"Potions","searchname":"Dull Edge",' +
      '"nickname":"DE 25","displayOnAH":true},' +
    '{"category":"Potions","searchname":"Notched Blade",' +
      '"nickname":"DE 80","displayOnAH":true},' +
    '{"category":"Potions","searchname":"Potion of Death",' +
      '"nickname":"DW 125","displayOnAH":true},' +
    '{"category":"Potions","searchname":"Potion of Decay",' +
      '"nickname":"WI 150","displayOnAH":true},' +
    '{"category":"Potions","searchname":"Potion of Fatality",' +
      '"nickname":"WI 350","displayOnAH":true},' +
    '{"category":"Potions","searchname":"Potion of Annihilation",' +
      '"nickname":"DW 150","displayOnAH":true},' +
    '{"category":"Potions","searchname":"Potion of the Wise",' +
      '"nickname":"Lib 200","displayOnAH":true},' +
    '{"category":"Potions","searchname":"Potion of Shattering",' +
      '"nickname":"SA","displayOnAH":true},' +
    '{"category":"Potions","searchname":"Dragons Blood Potion",' +
      '"nickname":"ZK 200","displayOnAH":true},' +
    '{"category":"Potions","searchname":"Berserkers Potion",' +
      '"nickname":"ZK 300","displayOnAH":true},' +
    '{"category":"Potions","searchname":"Potion of Fury",' +
      '"nickname":"ZK 350","displayOnAH":true},' +
    '{"category":"Potions","searchname":"Potion of Supreme Luck",' +
      '"nickname":"FI 1k","displayOnAH":true}]',

  arenaMoves: '[]',
  arenaMatches: '[]',
  CombatLog: '',
  hideChampionsGroup: false,
  hideElitesGroup: false,
  hideSEGroup: false,
  hideTitanGroup: false,
  hideLegendaryGroup: false,
  disableDeactivatePrompts: false,
  moveComposingButtons: false,
  expandMenuOnKeyPress: false,
  disableBreakdownPrompts: false,
  collapseNewsArchive: false,
  lastmyGuildLogCheck: 0,
  hideSubLvlCreature: false,
  hidePlayerActions: false,
  extraProfile: '',
  textToSearchFor: '',
  lastLadderReset: 0,
  disableQuickWearPrompts: false,
  enableGuildActivityTracker: false
};

export var rarity = [
  {colour: '#ffffff', clas: 'fshCommon'},
  {colour: '#0099ff', clas: 'fshRare'},
  {colour: '#cc00ff', clas: 'fshUnique'},
  {colour: '#ffff33', clas: 'fshLegendary'},
  {colour: '#cc0033', clas: 'fshSuper'},
  {colour: '#6633ff', clas: 'fshCrystal'},
  {colour: '#009900', clas: 'fshEpic'}
];

export var places = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth',
  'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth', 'thirteenth',
  'fourteenth'];

export var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',
  'Sep', 'Oct', 'Nov', 'Dec'];

export var mercRE = [
  /<td>Attack:<\/td><td>(\d+)<\/td>/,
  /<td>Defense:<\/td><td>(\d+)<\/td>/,
  /<td>Armor:<\/td><td>(\d+)<\/td>/,
  /<td>Damage:<\/td><td>(\d+)<\/td>/,
  /<td>HP:<\/td><td>(\d+)<\/td>/
];

export var lastActivityRE =
  /<td>Last Activity:<\/td><td>(\d+)d (\d+)h (\d+)m (\d+)s<\/td>/;

export var itemRE = /item_id=(\d+)&inv_id=(\d+)/;
export var defenderMultiplier = 0.2;
export var now = Date.now();
export var nowSecs = Math.floor(now / 1000);
export var newGuildLogLoc = '?cmd=notepad&blank=1&subcmd=newguildlog';
export var newGuildLogUrl = 'index.php' + newGuildLogLoc;

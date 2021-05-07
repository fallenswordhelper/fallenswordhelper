<script>
  import calf from '../../support/calf';
  import { cdn } from '../../system/system';
  import currentGuildId from '../../common/currentGuildId';
  import getIsOwnGuild from '../getIsOwnGuild';
  import getPlayerName from '../getPlayerName';
  import getUrlParameter from '../../system/getUrlParameter';
  import getValue from '../../system/getValue';
  import joinGroups from '../../common/joinGroups';
  import navigateTo from '../../common/navigateTo';
  import openQuickBuffByName from '../../common/openQuickBuffByName';
  import playerId from '../../common/playerId';
  import sendEvent from '../../analytics/sendEvent';
  import {
    auctionhouseUrl,
    guildSubcmdUrl,
    recallUserUrl,
    secureUrl,
  } from '../../support/constants';

  const joinTip = calf.enableMaxGroupSizeToJoin ? ` < ${calf.maxGroupSizeToJoin} Members` : '';
  const ownGuild = getIsOwnGuild();
  const playerid = getUrlParameter('player_id') || playerId();
  const playername = getPlayerName();

  function qbEvent(eventLabel) {
    sendEvent('profile', 'quick button', eventLabel);
  }

  function quickbuff(e) {
    e.target.blur();
    qbEvent('quickbuff');
    openQuickBuffByName(playername);
  }

  function join() {
    qbEvent('join groups');
    joinGroups();
  }

  function auctions() {
    qbEvent('auctions');
    navigateTo(`${auctionhouseUrl}&type=-3&tid=${playerid}`);
  }

  function sTrade() {
    qbEvent('secure trade');
    navigateTo(`${secureUrl}${playername}`);
  }

  function recall() {
    qbEvent('recall items');
    navigateTo(`${recallUserUrl}${playername}`);
  }

  function rank() {
    qbEvent('rank');
    navigateTo(`${guildSubcmdUrl}members&subcmd2=changerank&member_id=${playerid}`);
  }
</script>

<style>
  button {
    background-color: transparent;
    background-position: center;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    height: 17px;
    margin: auto 2px;
    width: 17px;
    user-select: none;
  }
</style>

<div>
  <button class="fshQuickBuff" on:click={quickbuff} type="button" data-tooltip="Buff {
    playername}">&nbsp;</button>
  <button class="fshJoin" on:click={join} type="button" data-tooltip="Join All Groups{
    joinTip}">&nbsp;</button>
  <button class="fshGold" on:click={auctions} type="button" data-tooltip="Go to {
    playername}'s auctions">&nbsp;</button>
  <button class="fshTempleTwo" on:click={
    sTrade} type="button" data-tooltip="Create Secure Trade to {playername}">&nbsp;</button>
  {#if ownGuild}
    <button class="fshTempleThree" on:click={
      recall} type="button" data-tooltip="Recall items from {playername}">&nbsp;</button>
  {/if}
  {#if ownGuild && getValue('showAdmin')}
    <button style="background-image: url('{cdn}guilds/{currentGuildId()}_mini.png');" on:click={
      rank} type="button" data-tooltip="Rank {playername}">&nbsp;</button>
  {/if}
</div>

<script>
  import sendEvent from '../../analytics/sendEvent';
  import currentGuildId from '../../common/currentGuildId';
  import joinGroups from '../../common/joinGroups';
  import navigateTo from '../../common/navigateTo';
  import openQuickBuffById from '../../common/openQuickBuffById';
  import playerId from '../../common/playerId';
  import calf from '../../support/calf';
  import {
    auctionhouseUrl,
    guildSubcmdUrl,
    recallUserUrl,
    secureUrl,
  } from '../../support/constants';
  import getUrlParameter from '../../system/getUrlParameter';
  import getValue from '../../system/getValue';
  import { cdn } from '../../system/system';
  import getIsOwnGuild from '../getIsOwnGuild';
  import getPlayerName from '../getPlayerName';

  const joinTip = calf.enableMaxGroupSizeToJoin
    ? ` < ${calf.maxGroupSizeToJoin} Members`
    : '';
  const ownGuild = getIsOwnGuild();
  const playerid = getUrlParameter('player_id') || playerId();
  const playername = getPlayerName();

  function qbEvent(eventLabel) {
    sendEvent('profile', 'quick button', eventLabel);
  }

  function quickbuff(e) {
    e.target.blur();
    qbEvent('quickbuff');
    openQuickBuffById(playerid);
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
    navigateTo(
      `${guildSubcmdUrl}members&subcmd2=changerank&member_id=${playerid}`,
    );
  }
</script>

<!-- svelte-ignore a11y_consider_explicit_label -->

<div>
  <button
    class="fshQuickBuff"
    onclick={quickbuff}
    type="button"
    data-tooltip="Buff {playername}">&nbsp;</button
  >
  <button
    class="fshJoin"
    onclick={join}
    type="button"
    data-tooltip="Join All Groups{joinTip}">&nbsp;</button
  >
  <button
    class="fshGold"
    onclick={auctions}
    type="button"
    data-tooltip="Go to {playername}'s auctions">&nbsp;</button
  >
  <button
    class="fshTempleTwo"
    onclick={sTrade}
    type="button"
    data-tooltip="Create Secure Trade to {playername}">&nbsp;</button
  >
  {#if ownGuild}
    <button
      class="fshTempleThree"
      onclick={recall}
      type="button"
      data-tooltip="Recall items from {playername}">&nbsp;</button
    >
  {/if}
  {#if ownGuild && getValue('showAdmin')}
    <button
      style="background-image: url('{cdn}guilds/{currentGuildId()}_mini.png');"
      onclick={rank}
      type="button"
      data-tooltip="Rank {playername}">&nbsp;</button
    >
  {/if}
</div>

<style>
  div {
    display: grid;
    grid-template-columns: 1fr;
    position: absolute;
    right: 20px;
    row-gap: 8px;
    top: 36px;
  }
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

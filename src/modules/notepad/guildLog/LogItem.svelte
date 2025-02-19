<script>
  import sendEvent from '../../analytics/sendEvent';
  import formatUtcTimestamp from '../../common/formatUtcTimestamp';
  import LinkButton from '../../common/LinkButton.svelte';
  import navigateTo from '../../common/navigateTo';
  import numberIsNaN from '../../common/numberIsNaN';
  import openQuickBuffById from '../../common/openQuickBuffById';
  import playerId from '../../common/playerId';
  import getCombat from '../../logs/playerLogWidgets/getCombat';
  import {
    cmdUrl,
    guildSubcmdUrl,
    guildViewUrl,
    playerIdUrl,
    secureUrl,
    tradeUrl,
  } from '../../support/constants';
  import { cdn } from '../../system/system';
  import view from '../../app/guild/recruit/view';
  import isArray from '../../common/isArray';

  /**
   * @typedef {Object} Props
   * @property {any} [groupCombatItems]
   * @property {any} [hideNonPlayerGuildLogMessages]
   * @property {any} [logEntry]
   */

  /** @type {Props} */
  let {
    groupCombatItems = null,
    hideNonPlayerGuildLogMessages = null,
    logEntry = null,
  } = $props();

  let recruiting_prm = $state(Promise.resolve());
  let recruiting_result = $state('waiting');

  function logEvent(type) {
    sendEvent('Guild Log', type);
  }

  const empty = (txt) => txt;

  function notSelf(entry) {
    const players = entry.msg.attachments?.filter((obj) => obj.type === 0);
    return (
      players?.length &&
      !players.filter(({ data: { id } }) => id === playerId()).length
    );
  }

  async function recruiting(data, subcmd) {
    // TODO improve feedback
    logEvent(subcmd);
    recruiting_prm = view();
    const json = await recruiting_prm;
    if (json?.s && isArray(json?.r)) {
      const joinReq = json.r.find(({ player: { id } }) => id === data.id);
      if (joinReq?.id) {
        navigateTo(
          `${guildSubcmdUrl}recruit&subcmd2=${subcmd}&id=${joinReq.id}`,
        );
      } else {
        recruiting_result = 'gone';
      }
    } else {
      recruiting_result = 'error';
    }
  }

  function buff(data) {
    logEvent('buff');
    openQuickBuffById(data.id);
  }

  function combat(data) {
    logEvent('combat');
    navigateTo(`${cmdUrl}combat&subcmd=view&combat_id=${data}`);
  }

  function reply(data) {
    logEvent('reply');
    window.openQuickMsgDialog(data.name);
  }

  function send(data) {
    logEvent('send');
    navigateTo(`${tradeUrl}${data.name}`);
  }

  function trade(data) {
    logEvent('trade');
    navigateTo(`${secureUrl}${data.name}`);
  }
</script>

<div
  class="row-container"
  class:not-self={hideNonPlayerGuildLogMessages && notSelf(logEntry)}
  class:separator={logEntry.index}
>
  <div class:old={logEntry.old} class:new={logEntry.new}>
    {#if logEntry.time}
      <i class="fas fa-envelope" aria-hidden="true"></i>
    {/if}
  </div>
  <div class:old={logEntry.old} class:new={logEntry.new}>
    {#if logEntry.time}
      {formatUtcTimestamp(logEntry.time)}
    {/if}
  </div>
  <div class:old={logEntry.old} class:new={logEntry.new}>
    {#each logEntry.msg.text
      .split(/<link=a(\d)><\/link>/)
      .filter(empty) as chunk}
      {#if chunk.length === 1 && !numberIsNaN(Number(chunk))}
        {#if logEntry.msg.attachments[chunk].type === 0}
          <a href="{playerIdUrl}{logEntry.msg.attachments[chunk].data.id}">
            {logEntry.msg.attachments[chunk].data.name}
          </a>
        {/if}
        {#if logEntry.msg.attachments[chunk].type === 1}
          [
          <a href="{guildViewUrl}{logEntry.msg.attachments[chunk].data.id}">
            <img
              src="{cdn}guilds/{logEntry.msg.attachments[chunk].data
                .id}_mini.png"
              alt={logEntry.msg.attachments[chunk].data.name}
            />{logEntry.msg.attachments[chunk].data.name}
          </a>
          ]
        {/if}
      {:else}
        {chunk}
      {/if}
    {/each}
    {#if logEntry.msg?.attachments?.length}
      {#each logEntry.msg.attachments.filter(({ type }) => type === 0) as { data }}
        {#if logEntry.type === 21}
          {#await recruiting_prm}
            <div class="rel">
              <span class="fshSpinner recruit-spinner"></span>
            </div>
          {:then}
            {#if recruiting_result === 'waiting'}
              <span class="action-buttons">
                [
                <LinkButton on:click={() => recruiting(data, 'acceptjoin')}
                  >Accept</LinkButton
                >
                |
                <LinkButton on:click={() => recruiting(data, 'denyjoin')}
                  >Deny</LinkButton
                >
                ]
              </span>
            {:else}
              <div class="rel">
                {recruiting_result}
              </div>
            {/if}
          {/await}
        {/if}
        <span class="action-buttons">
          [
          <LinkButton on:click={() => reply(data)}>Reply</LinkButton>
          |
          <LinkButton on:click={() => buff(data)}>Buff</LinkButton>
          |
          <LinkButton on:click={() => send(data)}>Send</LinkButton>
          |
          <LinkButton on:click={() => trade(data)}>Trade</LinkButton>
          ]
        </span>
      {/each}
      {#each logEntry.msg.attachments.filter(({ type }) => type === 11) as { data }}
        <span class="action-buttons">
          [
          <LinkButton on:click={() => combat(data)}>View Combat</LinkButton>
          ]
        </span>
      {/each}
      {#if logEntry.type === 17 && groupCombatItems && logEntry.msg.text.includes('victorious')}
        {#await getCombat(logEntry.time, logEntry.msg.attachments[0].data) then json}
          {#if json?.r?.combat?.items?.[0]?.n}
            <div>
              <a
                href="{playerIdUrl}{json.r.combat.attacker.group.players[0].id}"
              >
                {json.r.combat.attacker.group.players[0].name}</a
              >'s group looted the item '<span class="fshGreen"
                >{json?.r?.combat?.items?.[0]?.n}</span
              >'
            </div>
          {/if}
        {/await}
      {/if}
    {/if}
  </div>
</div>

<style>
  .row-container {
    display: grid;
    gap: 2px;
    grid-template-columns: 16px 116px 1fr;
  }
  .separator {
    border-top-color: #383838;
    border-top-style: solid;
    border-top-width: 1px;
  }
  .row-container > div {
    padding-bottom: 1px;
    padding-left: 2px;
    padding-top: 1px;
    margin-bottom: 1px;
    margin-top: 1px;
  }
  .not-self {
    --button-size: x-small;
    color: grey;
    font-size: x-small;
  }
  .old {
    background-color: #cd9e4b;
  }
  .new {
    background-color: #f5f298;
  }
  a {
    color: #383838;
  }
  img {
    display: inline-block;
    height: 12px;
    margin-right: 5px;
    vertical-align: middle;
    width: 12px;
  }
  .action-buttons {
    margin-left: 4px;
    white-space: nowrap;
  }
  .rel {
    color: rgb(56, 56, 56);
    display: inline-block;
    position: relative;
    text-align: center;
    width: 77px;
  }
  .recruit-spinner:before {
    height: 8px;
    margin-left: -7px;
    margin-top: -7px;
    width: 8px;
  }
</style>

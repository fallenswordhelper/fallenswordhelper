<script>
  import { run } from 'svelte/legacy';

  import daGuildReport from '../../_dataAccess/daGuildReport';
  import ranksView from '../../_dataAccess/fallbacks/ranksView';
  import sendEvent from '../../analytics/sendEvent';
  import all from '../../common/all';
  import fromEntries from '../../common/fromEntries';
  import lastActivityToDays from '../../common/lastActivityToDays';
  import playerLink from '../../common/playerLink';
  import SvelteTable from '../../common/SvelteTable.svelte';
  import uniq from '../../common/uniq';
  import ModalTitled from '../../modal/ModalTitled.svelte';
  import addCommas from '../../system/addCommas';

  let { visible = $bindable(true) } = $props();

  const columns = [
    { key: 'slot', title: 'Slot', value: (r) => r.slot, sortable: true },
    {
      key: 'name',
      title: 'Name',
      value: (r) => r.name,
      sortable: true,
      renderValue: (r) => playerLink(r.id, r.name),
      parseHTML: true,
    },
    { key: 'level', title: 'Level', value: (r) => r.level, sortable: true },
    {
      key: 'rank',
      title: 'Rank',
      value: (r) => r.rank,
      sortable: true,
    },
    {
      key: 'guild_xp',
      title: 'GXP',
      value: (r) => r.guild_xp,
      sortable: true,
      renderValue: (r) => addCommas(r.guild_xp),
    },
    {
      key: 'activity',
      title: 'Activity',
      value: (r) => r.activity,
      sortable: true,
    },
    { key: 'pack', title: 'Pack', value: (r) => r.pack, sortable: true },
    {
      key: 'max_stamina',
      title: 'Stam',
      value: (r) => r.max_stamina,
      sortable: true,
      renderValue: (r) => addCommas(r.max_stamina),
    },
  ];
  let prm = $state(null);
  let rows = $state([]);

  const notEquipped = ({ equipped }) => !equipped;
  const playerId = ({ player: { id } }) => id;
  const extractMembers = (thisRank) => thisRank.members;
  const processGuild = (guild) => guild.r.flatMap(extractMembers);
  const decorateMembers = (pots) => (member, index) => ({
    ...member,
    slot: index + 1,
    activity: lastActivityToDays(member.last_activity),
    pack: pots[member.id] ?? 0,
  });

  function logEvent(type) {
    sendEvent('Whos Got What', type);
  }

  function close() {
    logEvent('close');
    visible = false;
  }

  function prepareData([json, guild]) {
    const inv = json.r.filter(notEquipped).map(playerId);
    const perPlayer = fromEntries(
      uniq(inv).map((id) => [id, inv.filter((i) => i === id).length]),
    );
    const members = processGuild(guild);
    return members.map(decorateMembers(perPlayer));
  }

  async function init() {
    const [store, ranks] = await all([daGuildReport(), ranksView()]);
    if (store?.s && ranks?.s) {
      const myData = prepareData([store, ranks]);
      rows = myData;
    }
  }

  function refresh() {
    prm = init();
  }

  run(() => {
    if (visible) {
      refresh();
    }
  });
</script>

<ModalTitled {close} {visible}>
  {#snippet title()}
    Who's Got What
  {/snippet}
  <div class="content">
    {#await prm}
      Loading...
    {:then}
      <SvelteTable classNameTable="whos-got-what" {columns} {rows}
      ></SvelteTable>
    {:catch error}
      {error}
    {/await}
  </div>
</ModalTitled>

<style>
  .content {
    font-size: 12px;
    width: 660px;
  }
</style>

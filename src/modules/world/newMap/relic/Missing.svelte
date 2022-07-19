<script>
import guildMembers from '../../../_dataAccess/export/guildMembers';
import alpha from '../../../common/alpha';
import { playerIdUrl } from '../../../support/constants';
import { sevenDaysAgo, twoMinutesAgo } from '../../../support/now';
import { guildId } from './relicStore';

export let members = [];
let missingMembers = [];

const available = [
  ({ username }) => !members.includes(username),
  ({ last_login: lastLogin }) => lastLogin,
  ({ last_login: lastLogin }) => lastLogin < twoMinutesAgo(),
  ({ last_login: lastLogin }) => lastLogin > sevenDaysAgo(),
  ({ level }) => level < 400 || level > 421,
  ({ level }) => level < 441 || level > 450,
];

const notBusy = (member) => available.every((fn) => fn(member));
const byName = ({ username: a }, { username: b }) => alpha(a, b);

async function getMissingMembers(myGuildId) {
  const memberlist = await guildMembers(myGuildId);
  missingMembers = memberlist.filter(notBusy).sort(byName);
}

guildId.subscribe((val) => { getMissingMembers(val); });
</script>
{missingMembers.length || ''} Offline guild members not at relic:
<div class="missing">
  {#each missingMembers as { id, username }}
    <a href="{playerIdUrl}{id}">{username}</a>{' '}
  {/each}
</div>
<style>
  .missing {
    line-height: 1.1;
  }
  .missing a {
    color: red;
    font-size: x-small;
  }
</style>

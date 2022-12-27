<script>
import dynamicAlert from '../alert/dynamicAlert';
import jsonStringify from '../common/jsonStringify';
import playerLink from '../common/playerLink';
import querySelectorArray from '../common/querySelectorArray';
import calf from '../support/calf';
import { notepadBlankUrl } from '../support/constants';
import setValue from '../system/setValue';

import BountyPrefs from './BountyPrefs.svelte';
import EquipmentPrefs from './EquipmentPrefs.svelte';
import GeneralPrefs from './GeneralPrefs.svelte';
import GuildPrefs from './GuildPrefs.svelte';
import LeftHandPrefs from './LeftHandPrefs.svelte';
import LogPrefs from './LogPrefs.svelte';
import OtherPrefs from './OtherPrefs.svelte';
import ProfilePrefs from './ProfilePrefs.svelte';
import QuestPrefs from './QuestPrefs.svelte';
import WorldPrefs from './WorldPrefs.svelte';

const storage = ((jsonStringify(localStorage).length / (5 * 1024 * 1024)) * 100).toFixed(2);
let saving = Promise.resolve();

function coderLink(acc, [id, name], ind, ary) {
  let ret = `${acc}${playerLink(id, name)}`;
  if (ind === ary.length - 2) {
    ret += ' and ';
  } else if (ind !== ary.length - 1) { ret += ', '; }
  return ret;
}

function listOfCoders(ary) {
  return ary.reduce(coderLink, '');
}

async function saveSettings() {
  const fields = querySelectorArray('#fsh-settings tbody input[name], #fsh-settings tbody select[name]');
  fields.forEach((i) => {
    if (i.name === 'combatEvaluatorBias') {
      setValue(i.name, Number(i.value));
    } else {
      setValue(i.name, i.type === 'checkbox' ? i.checked : i.value);
    }
  });
  dynamicAlert('FS Helper Settings Saved');
}
</script>

<table style="width: 100%" id="fsh-settings">
  <thead>
    <tr>
      <td class="header" colspan="2">Fallen Sword Helper configuration Settings</td>
    </tr>
    <tr>
      <td align=center>
        <button
          class="awesome custombutton magenta tip-static"
          data-tipped="<span class='fshHelpTitle'>Clear Storage</span><br><br>This will clear all localStorage related to fallensword.com<br>It will reset all your Helper settings to defaults<br>Use it if your storage has overflowed or become corrupt"
          id="fshClearStorage"
          type="button"
        >
          Clear Storage
        </button>
      </td>
      <td align=center>
        <span style="font-size:x-small">
          (Current version: {calf.fshVer}({calf.calfVer}))
          (Storage Used: {storage}%
          Remaining: {(100 - storage).toFixed(2)}%)
        </span>
      </td>
    </tr>
    <tr>
      <td colspan="2" align=center>
        <span style="font-weight:bold;">
          Visit the
          <a
            href="https://github.com/fallenswordhelper/fallenswordhelper"
            target="_blank" rel="noreferrer"
          >
            Fallen Sword Helper web site
          </a>
          for any suggestions, requests or bug reports.
        </span>
      </td>
    </tr>
  </thead>
  <tbody>
    <GeneralPrefs/>
    <LeftHandPrefs/>
    <GuildPrefs/>
    <WorldPrefs/>
    <LogPrefs/>
    <EquipmentPrefs/>
    <QuestPrefs/>
    <ProfilePrefs/>
    <BountyPrefs/>
    <OtherPrefs/>
  </tbody>
</table>
<div class="fshCenter">
  {#await saving}
    <span class="fshSpinner fshSpinner12"></span>
  {:then}
    <button
      class="custombutton"
      on:click={() => { saving = saveSettings(); }}
      type="button"
    >
      Save
    </button>
  {/await}
</div>
<div class="fshCenter">
  <a href="{notepadBlankUrl}savesettings">
    Export or Load Settings!
  </a>
</div>
<p class="fshCenter">
  <span class="fshXXSmall">
    Fallen Sword Helper was coded by
    {@html
      listOfCoders([
        ['1393340', 'Coccinella'],
        ['1963510', 'PointyHair'],
        ['1674838', 'Lusterless'],
        ['1599987', 'yuuzhan'],
        ['1346893', 'Tangtop'],
        ['2536682', 'dkwizard'],
        ['1570854', 'jesiegel'],
        ['2156859', 'ByteBoy'],
        ['2169401', 'McBush'],
      ])
    }
    , with valuable contributions by
    {@html
      listOfCoders([
        ['524660', 'Nabalac'],
        ['37905', 'Ananasii'],
      ])
    }
  </span>
</p>

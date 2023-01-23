<script>
import SettingRow from './SettingRow.svelte';
</script>

<tr>
  <td class="header" colspan="2">Left Hand Menu Additional Links</td>
</tr>
<tr>
  <td colspan="2">Warning: Changes to the left hand menu have a significant impact on page load performance</td>
</tr>
<SettingRow field="recipeManagerLink" label="Recipe Manager">
  <div slot="tooltip">
    Recipe Manager Link (Helper Menu)
  </div>
</SettingRow>
<SettingRow field="medalGuideLink" label="Medal Guide">
  <div slot="tooltip">
    Medal Guide Link (Profile Page)
  </div>
</SettingRow>
<SettingRow field="inventoryManagerLink" label="Inventory Manager">
  <div slot="tooltip">
    Inventory Manager Link (Helper Menu)
  </div>
</SettingRow>
<SettingRow field="buffLogLink" label="Buff Log">
  <div slot="tooltip">
    Buff Log Link (Helper Menu)
  </div>
</SettingRow>
<SettingRow field="combatLogLink" label="Combat Log">
  <div slot="tooltip">
    Combat Log Link (Helper Menu)
  </div>
</SettingRow>
<SettingRow field="creatureLogLink" label="Creature Log">
  <div slot="tooltip">
    Creature Log Link (Helper Menu)
  </div>
</SettingRow>
<SettingRow field="quickLinksLink" label="Quick Links">
  <div slot="tooltip">
    Quick Links Link (Helper Menu)
  </div>
</SettingRow>
<SettingRow field="auctionSearchLink" label="AH Quick Search">
  <div slot="tooltip">
    AH Quick Search Link (Helper Menu)
  </div>
</SettingRow>
<SettingRow field="onlinePlayersLink" label="Online Players">
  <div slot="tooltip">
    Online Players Link (Helper Menu)
  </div>
</SettingRow>
<SettingRow field="findOtherLink" label="Find Other">
  <div slot="tooltip">
    Find Other Link (Helper Menu)
  </div>
</SettingRow>
<SettingRow field="findBuffsLink" label="Find Buffs">
  <div slot="tooltip">
    Find Buffs Link (Helper Menu)
  </div>
</SettingRow>
<SettingRow field="guildInventoryLink" label="Guild Inventory">
  <div slot="tooltip">
    Guild Inventory Link (Helper Menu)
  </div>
</SettingRow>
<SettingRow field="newGuildLogLink" label="New Guild Log">
  <div slot="tooltip">
    New Guild Log Link (Helper Menu)<br>When you are not using new guild log by default
  </div>
</SettingRow>
<SettingRow field="topRatedLink" label="Top 250 Players">
  <div slot="tooltip">
    Top 250 Players Link (Top 100 Players)
  </div>
</SettingRow>

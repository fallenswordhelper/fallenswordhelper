import{o as e,x as t,f as n,S as i,T as s,U as a,V as o,M as l,W as r,c as u,X as d,D as h,Y as c,Z as p,_ as g,$ as f,w as b}from"./calfSystem-4197cc22.js"
import{n as m}from"./numberIsNaN-1db4e673.js"
import{i as y}from"./isChecked-3260d105.js"
import{s as k,n as v,h as w,i as L,j as S,a as G}from"./simpleCheckbox-8187e065.js"
import{c as B,t as T}from"./toggleVisibilty-15a9f4dd.js"
import{d as M}from"./dialogMsg-bddf61a2.js"
import{c as x}from"./createSpan-537a8929.js"
import{j as C}from"./jConfirm-456f691e.js"
import{f as N}from"./functionPasses-8be4f6e3.js"
import{i as P}from"./isSelected-71dd7c7c.js"
import{h as R}from"./huntingBuffs-3e5b1a52.js"
var H=["gameHelpLink","guildSelf","guildSelfMessage","guildFrnd","guildFrndMessage","guildPast","guildPastMessage","guildEnmy","guildEnmyMessage","showAdmin","ajaxifyRankControls","detailedConflictInfo","disableItemColoring","enableLogColoring","enableChatParsing","enableCreatureColoring","hideNonPlayerGuildLogMessages","buyBuffsGreeting","renderSelfBio","renderOtherBios","defaultMessageSound","showSpeakerOnWorld","playNewMessageSound","highlightPlayersNearMyLvl","highlightGvGPlayersNearMyLvl","showCombatLog","showMonsterLog","showCreatureInfo","keepLogs","enableGuildInfoWidgets","enableOnlineAlliesWidgets","hideGuildInfoMessage","hideGuildInfoBuff","hideGuildInfoSecureTrade","hideGuildInfoTrade","huntingBuffs","huntingBuffsName","huntingBuffs2","huntingBuffs2Name","huntingBuffs3","huntingBuffs3Name","showHuntingBuffs","moveGuildList","moveOnlineAlliesList","moveFSBox","moveDailyQuest","hideQuests","hideQuestNames","hideRecipes","hideRecipeNames","doNotKillList","enableBioCompressor","sendGoldonWorld","goldRecipient","goldAmount","keepBuffLog","showQuickSendLinks","showQuickDropLinks","sendClasses","itemRecipient","currentGoldSentTotal","enableAllyOnlineList","enableEnemyOnlineList","allyEnemyOnlineRefreshTime","quickLinksTopPx","quickLinksLeftPx","draggableQuickLinks","enableActiveBountyList","bountyListRefreshTime","enableWantedList","wantedNames","wantedGuildMembers","fsboxlog","huntingMode","enableAttackHelper","hideRelicOffline","enterForSendMessage","storeLastQuestPage","addAttackLinkToLog","showStatBonusTotal","newGuildLogHistoryPages","useNewGuildLog","enhanceChatTextEntry","enableMaxGroupSizeToJoin","maxGroupSizeToJoin","enableTempleAlert","enableUpgradeAlert","enableComposingAlert","autoFillMinBidPrice","showPvPSummaryInLog","enableQuickDrink","enhanceOnlineDots","hideBuffSelected","hideHelperMenu","keepHelperMenuOnScreen","draggableHelperMenu","showNextQuestSteps","hideChampionsGroup","hideElitesGroup","hideSEGroup","hideTitanGroup","hideLegendaryGroup","disableDeactivatePrompts","moveComposingButtons","showExtraLinks","expandMenuOnKeyPress","highlightPvpProtection","enableHistoryCompressor","statBarLinks","staminaCalculator","levelUpCalculator","resizeQuickBuff","joinAllLink","pageTwoLinks","addUfsgLinks","trackLadderReset","addServerNode","addScoutTowerLink","storeLastScavPage","recipeManagerLink","medalGuideLink","inventoryManagerLink","buffLogLink","combatLogLink","creatureLogLink","quickLinksLink","auctionSearchLink","onlinePlayersLink","findOtherLink","findBuffsLink","guildInventoryLink","newGuildLogLink","topRatedLink","enableMessageTemplates","wrapGuildChat","colorPlayerNames","addIgnoreLink","changeButtonLabels","notificationWidgets"]
function E(e,t){return l(`#fshSettingsTable ${e}[name="${t}"]`)}function A(e){return E("input",e)}function I(e){return E("select",e)}function O(e){const t=$('input[name^="blockedSkillList"]:visible',"#settingsTabs-4"),n=$(e.target)
t.prop("checked","Tick all buffs"===n.text()),"Tick all buffs"===n.text()?n.text("Untick all buffs"):n.text("Tick all buffs")}function z(){C("Clear localStorage","Are you sure you want to clear you localStorage?",()=>{localStorage.clear()})}function Q(e){const t=A(e)
"checkbox"===t.type?r(e,t.checked):r(e,t.value)}function W(e,t,n){const i=A(e),s=Number(i.value);(m(s)||s<=t)&&(i.value=n)}function j(){W("newGuildLogHistoryPages",1,25),W("maxGroupSizeToJoin",1,11),function(e){const t=I(e)
r(e,Number(t.value))}("combatEvaluatorBias"),function(e){const t=I(e)
r(e,t.value)}("enabledHuntingMode"),H.forEach(Q),M("FS Helper Settings Saved")}function F(){i("settingsPage","injectNotepadShowLogs"),s(a)}function q(){i("settingsPage","injectMonsterLog"),s(o)}function D(n){e(t(n[0]),n[1])}function J(n){e(t(n),T)}function U(){!function(){const i=x({id:"fshAllBuffs",className:"fshLink",textContent:"Tick all buffs"})
e(i,O)
const s=t("settingsTabs-4").children[0].rows[0].cells[0]
n(s,B()),n(s,i)}(),[["fshClearStorage",z],["Helper:SaveOptions",j],["Helper:ShowLogs",F],["Helper:ShowMonsterLogs",q]].forEach(D),["toggleShowGuildSelfMessage","toggleShowGuildFrndMessage","toggleShowGuildPastMessage","toggleShowGuildEnmyMessage"].forEach(J)}function K(e){u[e[0]]=h(e[1])}function V(){[["showBuffs","showHuntingBuffs"],["buffs","huntingBuffs"],["buffsName","huntingBuffsName"],["buffs2","huntingBuffs2"],["buffs2Name","huntingBuffs2Name"],["buffs3","huntingBuffs3"],["buffs3Name","huntingBuffs3Name"]].forEach(K),["doNotKillList","bountyListRefreshTime","wantedNames","combatEvaluatorBias","enabledHuntingMode"].forEach(d),u.storage=(JSON.stringify(localStorage).length/5242880*100).toFixed(2)}function Y(e,t){return e+k(t)}function X(e){return e.reduce(Y,"")}function _(){return`<tr><th colspan="2"><b>Bounty hunting preferences</b></th></tr><tr><td align= "right">${v}Show Active Bounties${w("Show Active Bounties","This will show your active bounties on the right hand side")}:</td><td colspan="3"><input name="enableActiveBountyList" type = "checkbox" value = "on"${y(u.enableActiveBountyList)}>&nbsp;<input name="bountyListRefreshTime" size="3" value="${u.bountyListRefreshTime}"> seconds refresh</td></tr><tr><td align= "right">${v}Show Wanted Bounties${w("Show Wanted Bounties","This will show when someone you want is on the bounty board, the list is displayed on the right hand side")}:</td><td colspan="3"><input name="enableWantedList" type="checkbox" value="on"${y(u.enableWantedList)}> Refresh time is same as Active Bounties<tr><td align= "right">Wanted Names${w("Wanted Names","The names of the people you want to see on the bounty board separated by commas (or * for all)")}:</td><td colspan="3"><input name="wantedNames" size="60" value="${u.wantedNames}"></td></tr>${X(["wantedGuildMembers","enableAttackHelper","showPvPSummaryInLog"])}`}function Z(){return`<tr><th colspan="2"><b>Equipment screen preferences</b></th></tr>${X(["showExtraLinks","disableItemColoring"])}<tr><td class="fshRight">Show Quick Send Item${w("Show Quick Send on Manage Backpack","This will show a link beside each item which gives the option to quick send the item to this person")}:</td><td><input name="showQuickSendLinks" type="checkbox" value="on"${L("showQuickSendLinks")}>&nbsp;&nbsp;Send Items To <input name="itemRecipient" size="10" value="${h("itemRecipient")}">${k("showQuickDropLinks")}<tr><td class="fshRight">Quick Select all of type in Send Screen${w("Quick Select all of type in Send Screen","This allows you to customize what quick links you would like displayed in your send item screen.<br>Use the format [&quot;name&quot;,&quot;itemid&quot;],[&quot;othername&quot;,&quot;itemid2&quot;].<br>WARNING: NO REFUNDS ON ERROR")}:</td><td><input name="sendClasses" size="60" value="${c(h("sendClasses"))}">`}const ee=["moveGuildList","moveOnlineAlliesList"],te=["enableOnlineAlliesWidgets","moveFSBox","moveDailyQuest","fsboxlog","gameHelpLink","enableTempleAlert","enableUpgradeAlert","enableComposingAlert","enhanceOnlineDots","hideBuffSelected","hideHelperMenu","keepHelperMenuOnScreen","draggableHelperMenu"],ne=["draggableQuickLinks","expandMenuOnKeyPress","statBarLinks","staminaCalculator","levelUpCalculator","resizeQuickBuff","addServerNode","addScoutTowerLink"]
function ie(){return`<tr><th colspan="2"><b>General preferences (apply to most screens)</b></th></tr><tr><td class="fshRight"><label for="enableGuildInfoWidgets">Enable Guild Info Widgets${w("Enable Guild Info Widgets","Enabling this option will enable the Guild Info Widgets (coloring on the Guild Info panel)")}:</label></td><td><input id="enableGuildInfoWidgets" name="enableGuildInfoWidgets" type="checkbox" value="on"${y(u.enableGuildInfoWidgets)}>&nbsp;<label>Hide Message&gt;<input name="hideGuildInfoMessage" type="checkbox" value="on"${y(u.hideGuildInfoMessage)}></label>&nbsp;<label>Hide Buff&gt;<input name="hideGuildInfoBuff" type="checkbox" value="on"${y(u.hideGuildInfoBuff)}></label>&nbsp;<label>Hide ST&gt;<input name="hideGuildInfoSecureTrade" type="checkbox" value="on"${y(u.hideGuildInfoSecureTrade)}></label>&nbsp;<label>Hide Trade&gt;<input name="hideGuildInfoTrade" type="checkbox" value="on"${y(u.hideGuildInfoTrade)}></label></td></tr>${X(ee)}<tr><td class="fshRight">${v}Show Online Allies/Enemies${w("Show Online Allies/Enemies","This will show the allies/enemies online list on the right.")}:</td><td><label>Allies&nbsp;<input name="enableAllyOnlineList" type="checkbox" value="on"${y(u.enableAllyOnlineList)}></label>&nbsp;&nbsp;<label>Enemies&nbsp;<input name="enableEnemyOnlineList" type="checkbox" value="on"${y(u.enableEnemyOnlineList)}></label>&nbsp;&nbsp;<input name="allyEnemyOnlineRefreshTime" size="3" value="${h("allyEnemyOnlineRefreshTime")}"> seconds refresh</td></tr>${X(te)}<tr><td class="fshRight">Quick Links Screen Location${w("Quick Links Screen Location","Determines where the quick links dialog shows on the screen. Default is top 22, left 0.")}:</td><td>Top: <input name="quickLinksTopPx" size="3" value="${h("quickLinksTopPx")}"> Left: <input name="quickLinksLeftPx" size="3" value="${h("quickLinksLeftPx")}"></td></tr>${X(ne)}`}function se(e){let t="",n=""
return"Self"===e&&(t=' title="This is automatically detected"',n=" disabled"),`<input${t} name="guild${e}" size="60" value="${h("guild"+e)}"${n}><span class="fshPoint" id="toggleShowGuild${e}Message" data-linkto="showGuild${e}Message"> &#x00bb;</span><div id="showGuild${e}Message" class="fshHide"><input name="guild${e}Message" size="60" value="${h(`guild${e}Message`)}"></div>`}function ae(){return`<tr><th colspan="2"><b>Guild>Manage preferences</b></th></tr><tr><td colspan="2">Enter guild names, separated by commas</td></tr><tr><td class="fshRight">Own Guild</td><td>${se("Self")}</td></tr><tr><td class="fshRight">Friendly Guilds</td><td>${se("Frnd")}</td></tr><tr><td class="fshRight">Old Guilds</td><td>${se("Past")}</td></tr><tr><td class="fshRight">Enemy Guilds</td><td>${se("Enmy")}</td></tr><tr><td class="fshRight">Highlight Valid PvP Targets${w("Highlight Valid PvP Targets","Enabling this option will highlight targets in OTHER guilds that are within your level range to attack for PvP or GvG.")}:</td><td>PvP: <input name="highlightPlayersNearMyLvl" type="checkbox" value="on"${L("highlightPlayersNearMyLvl")}> GvG: <input name="highlightGvGPlayersNearMyLvl" type="checkbox" value="on"${L("highlightGvGPlayersNearMyLvl")}></td></tr>${X(["showAdmin","ajaxifyRankControls","detailedConflictInfo","enableHistoryCompressor"])}`}function oe(){return'<tr><th colspan="2"><b>Left Hand Menu Additional Links</b></th></tr><tr><th colspan="2">Warning: Changes to the left hand menu have a significant impact on page load performance</th></tr>'+X(p)}function le(){return`<tr><th colspan="2"><b>Log screen preferences</b></th></tr>${X(["hideNonPlayerGuildLogMessages","useNewGuildLog"])}<tr><td class="fshRight">New Guild Log History${w("New Guild Log History (pages)","This is the number of pages that the new guild log screen will go back in history.")}:</td><td><input name="newGuildLogHistoryPages" size="3" value="${h("newGuildLogHistoryPages")}"></td></td></tr>${k("enableLogColoring")}<tr><td class="fshRight">New Log Message Sound${w("New Log Message Sound","The .wav or .ogg file to play when you have unread log messages. This must be a .wav or .ogg file. This option can be turned on/off on the world page. Only works in Firefox 3.5+")}:</td><td colspan="3"><input name="defaultMessageSound" size="60" value="${h("defaultMessageSound")}"></td></tr><tr><td class="fshRight">Play sound on unread log${w("Play sound on unread log","Should the above sound play when you have unread log messages? (will work on Firefox 3.5+ only)")}:</td><td><input name="playNewMessageSound" type="checkbox" value="on"${L("playNewMessageSound")}> Show speaker on world${w("Show speaker on world","Should the toggle play sound speaker show on the world map? (This icon is next to the Fallensword wiki icon and will only display on Firefox 3.5+)")}:<input name="showSpeakerOnWorld" type="checkbox" value="on"${L("showSpeakerOnWorld")}></tr></td>${X(["enableChatParsing","keepBuffLog","addAttackLinkToLog","colorPlayerNames","addIgnoreLink","changeButtonLabels","notificationWidgets","enhanceChatTextEntry","wrapGuildChat"])}`}function re(){return`<tr><th colspan="2"><b>Other preferences</b></th></tr>${k("autoFillMinBidPrice")}<tr><td class="fshRight">Hide Specific Recipes${w("Hide Specific Recipes","If enabled, this hides recipes whose name matches the list (separated by commas). This works on Recipe Manager")}:</td><td colspan="3"><input name="hideRecipes" type="checkbox" value="on"${L("hideRecipes")}>&nbsp;<input name="hideRecipeNames" size="60" value="${h("hideRecipeNames")}"></td></tr>${X(["hideRelicOffline","enterForSendMessage","enableMessageTemplates","joinAllLink"])}<tr><td align= "right">Max Group Size to Join${w("Max Group Size to Join","This will disable HCSs Join All functionality and will only join groups less than a set size. ")}:</td><td colspan="3"><input name="enableMaxGroupSizeToJoin" type = "checkbox" value = "on"${L("enableMaxGroupSizeToJoin")}>&nbsp;&nbsp;Max Size: <input name="maxGroupSizeToJoin" size="3" value="${h("maxGroupSizeToJoin")}"></td></tr>${X(["moveComposingButtons","pageTwoLinks","addUfsgLinks","trackLadderReset","storeLastScavPage"])}`}function ue(e,t,n,i){return`<tr><td class="fshRight">${e} Hunting Buff List${w(e+" Hunting Buff List",e+" list of hunting buffs.")}:</td><td colspan="3"><input name="${t}" title="Hunting mode name" size="7" value="${e}"><input name="${n}" size="49" value="${i}"></td></tr>`}function de(){return`<tr><th colspan="2"><b>World screen/Hunting preferences</b></th></tr><tr><td class="fshRight">Hide Create Group Button${w("Hide Create Group Button","Enabling this option will hide the Create Group button")}:</td><td><input name="hideChampionsGroup" type="checkbox" value="on"${L("hideChampionsGroup")}>&nbsp;Champions&nbsp;&nbsp;<input name="hideElitesGroup" type="checkbox" value="on"${L("hideElitesGroup")}>&nbsp;Elites&nbsp;&nbsp;<input name="hideSEGroup" type="checkbox" value="on"${L("hideSEGroup")}>&nbsp;Super Elite&nbsp;&nbsp;<input name="hideTitanGroup" type="checkbox" value="on"${L("hideTitanGroup")}>&nbsp;Titan&nbsp;&nbsp;<input name="hideLegendaryGroup" type="checkbox" value="on"${L("hideLegendaryGroup")}>&nbsp;Legendary</td></tr><tr><td class="fshRight">Keep Combat Logs${w("Keep Combat Logs","Save combat logs to a temporary variable. Press <u>Show logs</u> on the right to display and copy them")}:</td><td><input name="keepLogs" type="checkbox" value="on"${L("keepLogs")}>&nbsp;&nbsp;<input type="button" class="custombutton" value="Show Logs" id="Helper:ShowLogs"></td></tr>${X(["showCombatLog","enableCreatureColoring","showCreatureInfo"])}${[`<tr><td class="fshRight">Combat Evaluator Bias${w("Combat Evaluator Bias","This changes the bias of the combat evaluator for the damage and HP evaluation. It will not change the attack bias (1.1053).<br>Conservative = 1.1053 and 1.1 (Safest)<br>Semi-Conservative = 1.1 and 1.053<br>Adventurous = 1.053 and 1 (Bleeding Edge)<br>Conservative+ = 1.1053 and 1 with the attack calculation changed to +-48 per RJEM")}:</td><td><select name="combatEvaluatorBias"><option value="0"${P(u.combatEvaluatorBias,0)}>Conservative</option><option value="1"${P(u.combatEvaluatorBias,1)}>Semi-Conservative</option><option value="2"${P(u.combatEvaluatorBias,2)}>Adventurous</option><option value="3"${P(u.combatEvaluatorBias,3)}>Conservative+</option></select></td></tr>`,`<tr><td class="fshRight">${S("showMonsterLog")}</td><td>${G("showMonsterLog")}&nbsp;&nbsp;<input type="button" class="custombutton" value="Show" id="Helper:ShowMonsterLogs"></td></tr>`,`<tr><td class="fshRight">Show Send Gold${w("Show Gold on World Screen","This will show an icon below the world map to allow you to quickly send gold to a Friend.")}:</td><td><input name="sendGoldonWorld" type="checkbox" value="on"${L("sendGoldonWorld")}>&nbsp;&nbsp;Send <input name="goldAmount" size="5" value="${h("goldAmount")}"> gold to <input name="goldRecipient" size="10" value="${h("goldRecipient")}"> Current total: <input name="currentGoldSentTotal" size="5" value="${h("currentGoldSentTotal")}"></td></tr>`,`<tr><td class="fshRight">Do Not Kill List${w("Do Not Kill List","List of creatures that will not be killed by quick kill. You must type the full name of each creature, separated by commas. Creature name will show up in red color on world screen and will not be killed by keyboard entry (but can still be killed by mouseclick). Quick kill must be enabled for this function to work.")}:</td><td colspan="3"><input name="doNotKillList" size="60" value="${u.doNotKillList}"></td></tr>`,R(),ue(u.buffsName,"huntingBuffsName","huntingBuffs",u.buffs)+ue(u.buffs2Name,"huntingBuffs2Name","huntingBuffs2",u.buffs2)+ue(u.buffs3Name,"huntingBuffs3Name","huntingBuffs3",u.buffs3)].join("")}${k("huntingMode")}`}function he(){return`<tr><th colspan="2"><b>Profile preferences</b></th></tr>${X(["renderSelfBio","renderOtherBios","enableBioCompressor"])}<tr><td class="fshRight">Buy Buffs Greeting${w("Buy Buffs Greeting","This is the default text to open a message with when asking to buy buffs. You can use {playername} to insert the target players name. You can also use {buffs} to insert the list of buffs. You can use {cost} to insert the total cost of the buffs.")}:</td><td colspan="3"><input name="buyBuffsGreeting" size="60" value="${h("buyBuffsGreeting")}"></td></tr>${X(["showStatBonusTotal","enableQuickDrink","disableDeactivatePrompts","highlightPvpProtection"])}`}function ce(){return`<tr><th colspan="2"><b>Quest preferences</b></th></tr><tr><td class="fshRight">Hide Specific Quests${w("Hide Specific Quests","If enabled, this hides quests whose name matches the list (separated by commas).")}:</td><td colspan="3"><input name="hideQuests" type="checkbox" value="on"${L("hideQuests")}>&nbsp;<input name="hideQuestNames" size="60" value="${h("hideQuestNames")}"></td></tr>${X(["storeLastQuestPage","showNextQuestSteps"])}`}function pe(e,t,n,i){let s=`${e}<a href="${f}${t[0]}">${t[1]}</a>`
return n===i.length-2?s+=" and ":n!==i.length-1&&(s+=", "),s}function ge(e){return e.reduce(pe,"")}function fe(){u.configData=`<form><table id="fshSettingsTable"><thead><th colspan="2"><b>Fallen Sword Helper configuration Settings</b></th></thead><tr><td align=center><input id="fshClearStorage" type="button" class="awesome magenta tip-static" value="Clear Storage" data-tipped="<span class='fshHelpTitle'>Clear Storage</span><br><br>This will clear all localStorage related to fallensword.com<br>It will reset all your Helper settings to defaults<br>Use it if your storage has overflowed or become corrupt"></td><td align=center><span style="font-size:x-small">(Current version: ${u.fshVer}(${u.calfVer})) (Storage Used: ${u.storage}% Remaining: ${(100-u.storage).toFixed(2)}%)</span></td></tr><tr><td colspan="2" align=center><span style="font-weight:bold;">Visit the <a href="https://github.com/fallenswordhelper/fallenswordhelper">Fallen Sword Helper web site</a> for any suggestions, requests or bug reports</span></td></tr>${[ie,oe,ae,de,le,Z,ce,he,_,re].map(N).join("")}<tr><td colspan="2" align=center><input type="button" class="custombutton" value="Save" id="Helper:SaveOptions"></td></tr><tr><td colspan="2" align=center><a href="${g}savesettings">Export or Load Settings!</a></td></tr><tr><td colspan="2" align=center><span class="fshXXSmall">Fallen Sword Helper was coded by ${ge([["1393340","Coccinella"],["1599987","yuuzhan"],["1963510","PointyHair"],["1346893","Tangtop"],["2536682","dkwizard"],["1570854","jesiegel"],["2156859","ByteBoy"],["2169401","McBush"]])}, with valuable contributions by ${ge([["524660","Nabalac"],["37905","Ananasii"]])}</span></td></tr></table></form>`}function be(e){var t
V(),fe(),(t=e).find(".ui-tabs-nav").append('<li><a href="#fshSettings">FSH</a></li>'),t.append(`<div id="fshSettings"><p>${u.configData}</p></div>`),t.tabs("refresh"),U(),r("minGroupLevel",l('input[name="min_group_level"]').value)}export default function(){if(b())return
const e=$("#settingsTabs")
e.tabs("instance")&&be(e)}
//# sourceMappingURL=injectSettings-f87f2dac.js.map

import addGuildLogWidgets from './addGuildLogWidgets';
import addLogColoring from './addLogColoring';
import guildGroupCombat from './guildGroupCombat';

export default function guildLog() {
  addLogColoring('GuildLog', 1, 3);
  addGuildLogWidgets();
  guildGroupCombat();
}
